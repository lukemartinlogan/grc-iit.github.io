# Docker Guide
This is a brief guide on how to use Docker. Docker is a containerization
framework. Containers are used run multiple OSes at once without
having to reboot or log out. There are many uses for containers:
1. Portability: For example, code programmed on for a Linux system
can now execute on a Mac or Windows machine.
2. Testing: You can test your code on multiple OSes just by spawning
different containers for each OS and running your unit tests there.
3. Reliability: Containers can be migrated if a machine is expected
to go down. This is frequently done by cloud providers

## Installation

The official install guide is [here](https://docs.docker.com/engine/install/).
You need root privileges to *install* docker.

### Running Docker without `sudo` (Linux)

By default the Docker daemon socket is owned by `root`, so every docker command
requires `sudo`. On Linux you can grant your user permission to talk to the
daemon directly by adding it to the `docker` group:

```bash
# Create the docker group if it doesn't already exist
sudo groupadd docker
# Add your user to the docker group
sudo usermod -aG docker ${USER}
```

Group membership is only picked up when you start a new login session. Rather than
logging out and back in, you can activate the new group in your **current shell**
with `newgrp`:

```bash
# Re-evaluate group membership in the current shell
newgrp docker
```

After this, you can run docker without `sudo`:

```bash
docker run hello-world
```

:::note
Adding a user to the `docker` group effectively grants them root-equivalent
privileges on the host (they can start containers that mount the whole
filesystem). Only do this on machines where you trust the users. The `newgrp`
trick applies to the current shell; new terminals will already have the group
after your next login.
:::

The commands in the rest of this guide are written with `sudo` so they work even
if you skip this step. If you've added yourself to the `docker` group, you can
drop the `sudo`.

## Docker Basics

In this section, we go through an example of a Dockerfile and how to create a
container.

### Setup

First, cd into the tutorial directory.
```bash
cd ${GRC_TUTORIAL}/docker/01-docker-basics
```

This directory contains a single file: Dockerfile

## Create a Dockerfile
Below is an example [Dockerfile](https://github.com/grc-iit/grc-tutorial/blob/main/docker/01-docker-basics/Dockerfile) which creates a basic Ubuntu container.
```docker
# Install the latest Ubuntu
FROM ubuntu:latest
LABEL maintainer="llogan@hawk.illinoistech.edu"
LABEL version="0.0"
LABEL description="An example docker image"

# Disable prompts during package installation
ARG DEBIAN_FRONTEND=noninteractive

# Update ubuntu and install some basic packages
RUN apt-get update && \
    apt-get install -y \
        openssh-server \
        sudo && \
    rm -rf /var/lib/apt/lists/*

# Set an environment variable
ENV MY_VAR=hi

# Print the environment variable
RUN echo ${MY_VAR}
```

1. FROM ubuntu:latest indicates the OS version that docker should install.
There are other OSes, such as ubuntu:22.04, fedora:latest, rockylinux:9.
Pinning a specific version (e.g. ubuntu:22.04) is useful for reproducibility,
while `latest` always grabs the newest release. This can be useful for testing
portability.
2. LABEL parameters are just metadata
3. RUN executes a command as if in a terminal. We combine the `apt-get update`
and `apt-get install` into a single `RUN` and clean the apt cache afterwards to
keep the image small and avoid stale package lists.
4. ENV sets an environment variable

## Build the container image

First, the container image must be built. This will parse the Dockerfile, install the OS, and run all commands in the Dockerfile.
The syntax is as follows:
```bash
sudo docker build -t [IMAGE_NAME] [DOCKERFILE_DIR, can be a github link] -f [DOCKERFILE_NAME]
```
1. IMAGE_NAME: a semantic name for the image being built. NOTE: the name must be in snake case (i.e., no caps).
2. DOCKERFILE_DIR: the directory containing the Dockerfile.
3. DOCKERFILE_NAME: the name of the dockerfile in that directory. This is optional. Default: Dockerfile.

Let's say that our Dockerfile is located at ``${HOME}/MyDockerfiles/Dockerfile``.
We could build the image two ways:
```
# Option 1: a single command
sudo docker build -t myimage ${HOME}/MyDockerfiles

# Option 2: cd into the directory
cd ${HOME}/MyDockerfiles
sudo docker build -t myimage .
```

## Run the container

Next, we must run the container. This will create a container from the container image. There can be multiple containers made from the same image.
The syntax is as follows:
```bash
sudo docker run [OPTIONS] [IMAGE_NAME] [COMMAND (optional)]
```
1. OPTIONS: There are many settings which docker provides. We'll go over some of them below.
2. IMAGE_NAME: The semantic name of the image to build the container from
3. COMMAND: An optional command to run within the container.

This command will create a container CONTAINER_ID from IMAGE_NAME which uses the host network to connect to the internet and download packages.

In our case, we want to make the container interactive (i.e., have a shell):
```
sudo docker run -it --name mycontainer --network host myimage
```
We use the option "-it" to specify this is an interactive session.

## Interacting with the container

You can reconnect to an interactive container's shell using docker exec. The syntax is as follows:
```bash
sudo docker exec [CONTAINER_ID] /bin/bash
```

You can now run commands within the image. For us, this would be:
```bash
sudo docker exec mycontainer /bin/bash
```

## Useful Commands
```bash
# Run a container with a shared directory between guest and host
sudo docker run -it --name [CONTAINER_ID] --mount src=[HOST_PATH],target=[CONTAINER_PATH],type=bind --network host [IMAGE_NAME]

# List all running containers
sudo docker container ls

# List all container IDs
sudo docker container ls --all

# Get interactive shell for container
sudo docker exec [CONTAINER_ID] /bin/bash

# Execute command in container
docker exec [CONTAINER_ID] [COMMAND]

# Kill a running container
sudo docker stop [CONTAINER_ID]

# Delete a container
sudo docker rm [CONTAINER_ID]

# Commit the state of a container CONTAINER_ID into a new container
# COPY_CONTAINER_ID
sudo docker commit [CONTAINER_ID] [COPY_CONTAINER_ID]
```
