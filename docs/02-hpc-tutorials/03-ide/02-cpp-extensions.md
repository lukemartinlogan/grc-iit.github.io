# Extensions for C++ on Linux

Out of the box, most editors treat C++ as plain text. The extensions below add
code navigation, autocompletion, error checking, formatting, and debugging. The
examples assume VS Code (or a fork such as Cursor), but the underlying tools
(`clangd`, `gdb`, `cmake`) are editor-agnostic.

## clangd (language server) — the important one

[clangd](https://clangd.llvm.org/) is an [LLVM](https://llvm.org/) language
server that provides the features that actually make C++ pleasant:

- Accurate autocompletion and go-to-definition/find-references.
- Real-time diagnostics (errors and warnings as you type).
- Inlay hints, call hierarchy, and rename refactoring.
- Integrated `clang-tidy` and `clang-format`.

VS Code extension:
[**llvm-vs-code-extensions.vscode-clangd**](https://marketplace.visualstudio.com/items?itemName=llvm-vs-code-extensions.vscode-clangd).
Zed has clangd support built in.

:::note
There are two competing C++ setups for VS Code: Microsoft's **C/C++**
(`ms-vscode.cpptools`) extension and **clangd**. We recommend clangd — it is open
source, generally more accurate, and works in open-source builds like VSCodium.
**Do not enable both at once**; their IntelliSense engines conflict. If you use
clangd, disable IntelliSense in the Microsoft extension (or don't install it).
:::

### Install clangd itself

The extension needs the `clangd` binary. On the machine where your code lives
(the remote host, for HPC work):

```bash
# Debian/Ubuntu
sudo apt-get install -y clangd

# or via spack (see the Installing HPC Software section)
spack install llvm
```

### Give clangd a compile database

clangd needs to know how each file is compiled (include paths, defines, standard
version). This is provided by a `compile_commands.json` file. With CMake, generate
it automatically:

```bash
cmake -S . -B build -DCMAKE_EXPORT_COMPILE_COMMANDS=ON
# then point clangd at it, e.g. symlink into the project root:
ln -s build/compile_commands.json .
```

Without this, clangd will guess and you'll see spurious "file not found" errors on
your `#include`s.

## CMake Tools

[**ms-vscode.cmake-tools**](https://marketplace.visualstudio.com/items?itemName=ms-vscode.cmake-tools)
adds a UI for configuring, building, and debugging CMake projects — pick a kit
(compiler), configure, and build from the status bar instead of retyping `cmake`
commands. Pairs well with clangd (let CMake Tools drive the build, let clangd
handle IntelliSense). See the
[Build with CMake](../10-cpp-introduction/03-cpp-build-with-cmake.mdx) tutorial.

## Debugging

For step debugging, install a debugger and a debug-adapter extension:

- Install `gdb` (or `lldb`) on the target machine: `sudo apt-get install -y gdb`.
- VS Code's built-in C++ debugging uses the
  [**ms-vscode.cpptools**](https://marketplace.visualstudio.com/items?itemName=ms-vscode.cpptools)
  extension's debug adapter (you can install it for debugging only and still use
  clangd for IntelliSense), or the
  [CodeLLDB](https://marketplace.visualstudio.com/items?itemName=vadimcn.vscode-lldb)
  extension for an LLDB-based debugger.
- Remember to compile with debug symbols: `-g` (or `-DCMAKE_BUILD_TYPE=Debug`).

## Remote development (HPC)

For working on a cluster, install
[**ms-vscode-remote.remote-ssh**](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-ssh).
It runs clangd and your build on the remote host, so IntelliSense reflects the
cluster's exact headers and compilers. Install clangd/CMake Tools *in the remote
context* once connected.

## Formatting and linting

Both ship with LLVM and are picked up automatically by clangd:

- **clang-format** — enforce a consistent style. Drop a `.clang-format` file in
  your repo (for our code we use the
  [Google C++ style](https://google.github.io/styleguide/cppguide.html):
  `clang-format -style=google -dump-config > .clang-format`).
- **clang-tidy** — static analysis for bug-prone patterns; configure with a
  `.clang-tidy` file.

## Recommended starting set

1. **clangd** — IntelliSense and navigation.
2. **CMake Tools** — configure/build/debug CMake projects.
3. **Remote - SSH** — if you develop on a cluster.
4. A debugger extension (**CodeLLDB** or **cpptools**) + `gdb`/`lldb`.
