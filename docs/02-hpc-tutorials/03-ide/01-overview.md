# Choosing an IDE

A good editor makes a huge difference when working on large C++ codebases,
especially over SSH on a remote HPC machine. This page gives a quick overview of
three popular, actively developed editors. All three are free to download, run on
Linux/macOS/Windows, and support remote development.

If you have no strong opinion, **start with VS Code** — it has the largest
extension ecosystem and the best remote-development story, and everything in the
[C++ extensions](./02-cpp-extensions.md) page assumes it (or a fork of it).

## VS Code

[Visual Studio Code](https://code.visualstudio.com/) is the de facto standard
editor for most developers. It is built by Microsoft on the open-source
[Code - OSS](https://github.com/microsoft/vscode) project.

Why it's a good default:

- **Remote development.** The
  [Remote - SSH](https://code.visualstudio.com/docs/remote/ssh) extension lets
  you edit files and run a language server *on the remote machine* while the UI
  runs locally. This is the single most useful feature for HPC work — you get
  full IntelliSense/debugging on the cluster without copying files back and forth.
- **Huge extension marketplace.** Almost every language, linter, and tool has an
  extension.
- **Integrated terminal, git, and debugger.**

Caveat: the official Microsoft builds and the Marketplace are proprietary. If you
want a fully open-source build, use [VSCodium](https://vscodium.com/) (note that
some Microsoft-licensed extensions, such as the C/C++ IntelliSense extension, are
not available there — which is another reason we recommend the open-source
[clangd](./02-cpp-extensions.md) instead).

## Cursor

[Cursor](https://cursor.com/) is a fork of VS Code focused on AI-assisted coding.
Because it is a fork, **your VS Code extensions, keybindings, and settings mostly
carry over**, including Remote - SSH and clangd.

What it adds on top of VS Code:

- Inline AI edits and a chat sidebar that is aware of your codebase.
- "Agent" mode that can make multi-file edits and run commands.
- Tab-completion powered by a code model.

It has a free tier with limited AI usage; heavier use requires a subscription. See
the [coding agents](../04-coding-agents/01-free-ai.md) section for more on
AI-assisted tools.

## Zed

[Zed](https://zed.dev/) is a newer editor written in Rust with a strong focus on
**speed**. It is fully [open source](https://github.com/zed-industries/zed).

Highlights:

- Extremely fast and low-latency, even on large files.
- First-class [clangd](./02-cpp-extensions.md) support built in — C++ language
  support works with little configuration.
- Built-in collaboration (shared editing) and AI assistance.

Trade-offs: the extension ecosystem is much smaller than VS Code's, and native
Windows support and remote-over-SSH development are less mature. It is an
excellent local editor and improving quickly.

## Quick comparison

| Editor  | Base           | Best for                                  | Remote SSH | Extensions |
|---------|----------------|-------------------------------------------|------------|------------|
| VS Code | Code - OSS     | A safe, capable default                   | Excellent  | Largest    |
| Cursor  | VS Code fork   | VS Code + integrated AI                   | Yes (VS Code) | VS Code compatible |
| Zed     | Native (Rust)  | Fast local editing, minimal setup         | Improving  | Smaller    |
