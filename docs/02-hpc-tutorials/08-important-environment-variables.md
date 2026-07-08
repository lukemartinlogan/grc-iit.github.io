# Important Environment Variables

Environment variables control how the shell, the compiler, the dynamic linker,
and various language runtimes locate the things they need. On HPC systems you
will run into these constantly — tools like `spack` and `module` work almost
entirely by editing them. This page groups the variables you are most likely to
touch by where they apply.

Almost all of these are **colon-separated lists** of directories, and the search
generally stops at the **first** match. When prepending, keep the previous value
so you don't clobber the system defaults:

```bash
export PATH="/my/new/path:${PATH}"
```

## Program & shared-library resolution

These control how the shell finds executables and how the OS loader finds shared
objects at **runtime**.

### `PATH`

`PATH` is used to locate executable programs. For example:

```bash
touch hi.txt
tar hi.txt
```

How does the shell know where `tar` lives? It searches each directory in `PATH`
and runs the first `tar` it finds.

```bash
export PATH="/path1:/path2:/path3:${PATH}"
```

The example above prepends three directories to `PATH`.

### `LD_LIBRARY_PATH`

`LD_LIBRARY_PATH` is used by Linux to locate shared objects (`.so` files) at
**runtime** (as opposed to compile time). Even if a program linked fine, its
shared libraries have to be found all over again when the program starts.

```bash
export LD_LIBRARY_PATH="/path1:/path2:/path3:${LD_LIBRARY_PATH}"
```

### `LD_PRELOAD`

`LD_PRELOAD` forces the loader to load specific shared objects **before** any
others, letting you intercept functions and replace their implementation with a
custom one. A common HPC use case is intercepting I/O interfaces such as POSIX
and rerouting their calls to a custom filesystem.

```bash
export LD_PRELOAD="/path/to/mylib.so"
```

Unlike the others, `LD_PRELOAD` is usually a list of specific `.so` files
(space- or colon-separated), not a list of directories.

## C / C++ compilation & CMake

These are consulted at **compile and link time** when building C/C++ code.
Notice the split: `CPATH`/`LIBRARY_PATH` are read by the compiler (GCC/Clang)
directly, while the `CMAKE_*` variables are read by CMake.

### `CPATH`

GCC and Clang search each directory in `CPATH` (and sometimes `INCLUDE_PATH`)
for header files. In practice `CPATH` is the more reliable of the two.

```bash
export CPATH="/path1:/path2:/path3"
```

### `LIBRARY_PATH`

GCC and Clang search each directory in `LIBRARY_PATH` for shared objects and
static archives. This is used at **compile time** when linking your program
(contrast with `LD_LIBRARY_PATH`, which is used at runtime).

```bash
export LIBRARY_PATH="/path1:/path2:/path3"
```

### `CMAKE_PREFIX_PATH`

`CMAKE_PREFIX_PATH` tells CMake where to find installed package configuration
(the `*Config.cmake` / `find_package` files) along with their headers and
libraries. Many spack packages set **only** this variable, which is a big reason
you should build C++ projects with CMake when using spack.

```bash
export CMAKE_PREFIX_PATH="/path1:/path2:/path3"
```

### `CMAKE_MODULE_PATH`

`CMAKE_MODULE_PATH` tells CMake where to find CMake modules — the `Find<Pkg>.cmake`
scripts used by `find_package` in module mode.

```bash
export CMAKE_MODULE_PATH="/path1:/path2:/path3"
```

## Python

### `PYTHONPATH`

Python uses `PYTHONPATH` to find importable modules and packages. Spack sets this
variable when you load a spack-installed python package.

```bash
export PYTHONPATH="/path1:/path2:/path3"
```

## Java

### `JAVA_HOME`

`JAVA_HOME` points at the root of the current Java installation. Many
Java-based tools read it to decide which JDK/JRE to use.

```bash
export JAVA_HOME="/usr/lib/jvm/java-17-openjdk"
```
