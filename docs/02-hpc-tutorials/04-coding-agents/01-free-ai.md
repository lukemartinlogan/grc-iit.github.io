# Free AI Coding Tools

You do not need a paid subscription to get a capable AI coding assistant. This
page lists options that have a genuinely usable free tier or are fully open
source. Pricing and limits change frequently, so treat specifics as a starting
point and check the vendor's site.

:::note Two things to watch for
1. **Privacy.** Free tiers often train on or retain your code. On research or
   proprietary code, check the data-use policy before enabling a tool. Many
   vendors offer a "privacy mode" that disables training.
2. **Bring-your-own-key.** Several open-source tools are free *software* but call
   a paid model API. They become "free" only if you also use a free model
   endpoint (e.g. a local model) — otherwise you pay per token.
:::

## Cursor (free tier)

[Cursor](https://cursor.com/) is a VS Code fork with AI built in (see the
[IDEs](../03-ide/01-overview.md) page). Its **Hobby/free plan** includes a limited
number of AI completions and agent requests per month — enough to try it out and
handle light use. Heavier use needs the Pro plan.

- Best if you want a polished, GUI-first experience.
- Your existing VS Code extensions carry over.

## Google Antigravity

[Antigravity](https://antigravity.google/) is Google's agentic development
platform, built around agents that can plan and edit across your project (and
drive a browser). It launched with **free access to Gemini models** during its
public preview, subject to rate limits.

- Best if you want an agent-centric IDE and want to use Gemini models at no cost
  while the preview lasts.

## opencode

[opencode](https://opencode.ai/) is a fully **open-source, terminal-based** coding
agent (think "an agent in your shell", similar in spirit to Claude Code). The
software itself is free; you point it at a model provider.

- It is **model-agnostic** — you can connect it to a paid API *or* to free/local
  models (e.g. via [Ollama](https://ollama.com/)) to run at no cost.
- Best if you like working in the terminal, want to avoid vendor lock-in, or want
  everything running locally.

## Other options worth knowing

- **GitHub Copilot Free** — a free tier with a monthly cap on completions and chat
  messages; free for verified students and maintainers of popular open-source
  projects.
- **Codeium / Windsurf** — has offered a free tier for autocomplete and chat.
- **Continue.dev** — open-source VS Code/JetBrains extension; free software,
  bring your own model (including local models via Ollama).
- **Cline / Roo Code** — open-source VS Code agent extensions; bring your own key
  or a local model.
- **Local models** — with [Ollama](https://ollama.com/) or
  [llama.cpp](https://github.com/ggml-org/llama.cpp) you can run open-weight
  models (Llama, Qwen, DeepSeek, etc.) entirely on your own hardware. Free and
  private, but quality and speed depend heavily on your GPU/RAM.

## How to choose

| You want…                              | Try                        |
|----------------------------------------|----------------------------|
| A GUI editor, minimal setup            | Cursor free tier           |
| An agentic IDE with free Gemini access | Google Antigravity         |
| A terminal agent, no lock-in           | opencode                   |
| Autocomplete inside VS Code, free      | Copilot Free / Continue    |
| Fully private / offline                | Local models via Ollama    |
