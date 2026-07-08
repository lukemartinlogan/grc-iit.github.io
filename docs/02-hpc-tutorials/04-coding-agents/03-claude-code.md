# Claude Code

[Claude Code](https://www.claude.com/product/claude-code) is Anthropic's
terminal-based coding agent. You run it in your project directory, describe what
you want in natural language, and it reads files, edits code, runs commands, and
iterates — asking permission before actions that change your system.

```bash
# Install (Node 18+)
npm install -g @anthropic-ai/claude-code

# Run it inside your project
cd my-project
claude
```

It also has VS Code / JetBrains extensions and a web app, but the CLI is the core
experience.

## Using Claude optimally

The difference between a frustrating session and a great one is mostly about
**context and workflow**, not the model.

### Give it a `CLAUDE.md`

Create a `CLAUDE.md` at your repo root (run `/init` to generate one). Claude reads
it automatically at the start of every session. Put in it the things you'd tell a
new teammate:

- How to build, test, and run the project.
- Project conventions (style, directory layout, "always run the linter").
- Gotchas and commands it should prefer.

Keep it concise — it is loaded into context every time. You can also keep a
personal `~/.claude/CLAUDE.md` for preferences that apply across all projects.

### Plan before large changes

For anything non-trivial, ask Claude to **make a plan first** (there is a
plan/read-only mode). Review the plan, correct wrong assumptions, *then* let it
implement. Course-correcting a plan is far cheaper than undoing a bad
implementation.

### Be specific

Vague prompts get vague results. "Fix the bug" is weak; "the `parse()` function
returns `null` for empty input — it should throw `InvalidArgument`; add a unit
test" is strong. Point it at specific files, paste error messages, and describe
the expected behavior.

### Manage context

- Use **`/clear`** between unrelated tasks so old context doesn't pollute the new
  one (and to save tokens).
- For big tasks, have it work in stages and verify each stage.
- Reference files/symbols explicitly so it doesn't have to search blindly.

### Let it verify its own work

Claude is most reliable when it can **check itself**: run the test suite, run the
compiler, run the program. Tell it how to run your tests and ask it to keep going
until they pass. A tight edit → build → test loop catches its own mistakes.

### Use subagents and parallelism

For large or independent chunks of work, Claude can spawn subagents to explore or
work in parallel. This keeps the main conversation focused and covers more ground.

### Connect tools with MCP — carefully

Claude Code is an MCP client. Adding servers (GitHub, a database, a browser) makes
it far more capable, but read the [MCP page](./02-mcps.md) first — connecting
tools has real security implications.

### Version control is your safety net

Commit early and often so you can always `git diff` what Claude changed and roll
back if needed. Consider working on a branch (or a `git worktree`) so experiments
stay isolated.

## `--dangerously-skip-permissions`

By default, Claude Code **asks for approval** before actions that could affect your
system — editing files, running shell commands, deleting things, making network
requests. This human-in-the-loop check is the main guardrail.

The flag `--dangerously-skip-permissions` (informally "YOLO mode") disables those
prompts. Claude will edit files and run commands without stopping to ask.

```bash
claude --dangerously-skip-permissions
```

### Pros

- **No interruptions.** Long, mechanical tasks (large refactors, fixing hundreds
  of lint errors, scaffolding) run start-to-finish without you babysitting each
  step.
- **Good for automation.** Useful in CI or scripted/batch runs where no human is
  present to click "approve".
- **Faster iteration** on throwaway work where the blast radius is contained.

### Cons / risks

- **It can run *anything*.** A wrong turn — a bad `rm -rf`, an overwritten file, a
  force-push, an unwanted `apt install` — happens with no chance for you to
  intervene.
- **Prompt-injection amplifier.** If Claude reads untrusted content (a web page, a
  third-party issue, a malicious dependency) while permissions are off, injected
  instructions can execute unchecked. See the "lethal trifecta" note on the
  [MCP page](./02-mcps.md#-mcp-can-be-dangerous).
- **Harder to review.** You lose the natural checkpoint where you'd notice "wait,
  why is it touching that file?"

### Recommendation

Keep permission prompts **on** for normal work on anything you care about. Only
use `--dangerously-skip-permissions` when the environment is **isolated and
disposable** — a container, a VM, or a throwaway git worktree with no access to
secrets or production systems — and ideally when the task doesn't involve
untrusted external input. If you find the prompts tedious, prefer *narrowing
permissions* (allowlisting specific safe commands) over turning them off
entirely.
