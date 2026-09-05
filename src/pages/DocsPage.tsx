import { Boxes, Cable, GitBranch, Layers3, Network, RefreshCw } from 'lucide-react'
import { CommandBox } from '../components/CommandBox'

const nav = [
  ['Overview', '#overview'],
  ['Getting started', '#getting-started'],
  ['RLM & daemons', '#rlm'],
  ['Cordis composition', '#cordis'],
  ['Monotonic Prompt Architecture', '#mpa'],
  ['Multi-surface direction', '#surfaces'],
  ['Provenance', '#provenance'],
] as const

export function DocsPage() {
  return (
    <div className="page-width docs-page">
      <nav className="docs-nav" aria-label="Docs sections">
        <p>ON THIS PAGE</p>
        {nav.map(([label, href]) => (
          <a key={href} href={href}>{label}</a>
        ))}
      </nav>
      <div className="docs-content">
        <p className="eyebrow" id="overview">Documentation</p>
        <h1>How AMIDE fits together.</h1>
        <p className="docs-lede">AMIDE runs on persistent iPython/RLM sessions, composed through a Cordis Metaframework runtime, and disciplined by a Monotonic Prompt Architecture that keeps token spend flat and prompt-cache hits high as sessions grow.</p>

        <h2 id="getting-started">Getting started</h2>
        <p>Node.js 22.8.0+ is required. Install AMIDE globally with the installer, or via npm directly.</p>
        <CommandBox command="curl -fsSL https://amide.dev/install.sh | sh" label="Install AMIDE" />
        <CommandBox command="npm install -g @webboxes/amide" label="Or install with npm" />
        <p>To run from source instead:</p>
        <CommandBox command="git clone git@github.com:amidedev/amide.git && cd amide && npm ci" label="Clone and install" />
        <CommandBox command="/path/to/amide/amide.sh" label="Run from any directory" />
        <div className="docs-notice">
          <span>NOTE</span>
          <p>AMIDE executes model-generated Python and project commands with your user permissions. It is not a security sandbox - use a disposable clone or restricted environment for untrusted repositories, instructions, skills, and extensions.</p>
        </div>

        <h2 id="rlm">RLM sessions & daemons</h2>
        <p>The Recursive Language Model treats context as variables and subagents as recursive function calls inside a persistent Python REPL, running in a daemon-backed worker that survives terminal detach. Reattach with <code>amide attach &lt;agent&gt;</code>, browse sessions with <code>amide agents</code>.</p>
        <div className="docs-cards">
          <div><Network aria-hidden="true" /><strong>Persistent kernel</strong><p>File operations, shell commands, tool use, and subagents happen through code in one REPL, not one-shot tool calls.</p></div>
          <div><RefreshCw aria-hidden="true" /><strong>Continual Harness</strong><p><code>/refine</code> applies small, evidence-backed updates to supplemental harness state without touching the immutable base prompt.</p></div>
        </div>

        <h2 id="cordis">Cordis Metaframework composition</h2>
        <p>Cordis gives capabilities explicit lifecycle contracts: services, dependency injection via <code>inject</code>, effects for owned resources, fibers for activation state, typed events, and waterfalls for ordered dispatch. This is the mounting substrate AMIDE is building toward for its own runtime host, not a rewrite of Prime Agent&apos;s existing execution model.</p>

        <h2 id="mpa">Monotonic Prompt Architecture</h2>
        <p>The discipline that keeps every request to a model append-only within a cache epoch - nothing upstream of the newest turn is reordered or rewritten. That is exactly what a prompt cache needs to hit: a long-running session keeps a drastically higher cache-hit rate and token spend that stays roughly flat instead of climbing turn after turn. This is a direct answer to the criticism that recursive agent harnesses accumulate token bloat over long sessions.</p>

        <h2 id="surfaces">Multi-surface direction</h2>
        <p>AMIDE is intended to become multi-surface: one central agent that extends itself and can drive multiple presentation surfaces rather than owning a single fixed UI, in the spirit of Cordis&apos;s and Pi&apos;s own extensibility philosophy.</p>
        <div className="docs-stack">
          <div><Boxes aria-hidden="true" /><div><strong>Terminal (built)</strong><span>The TUI is the current, fully working surface.</span></div></div>
          <div><Cable aria-hidden="true" /><div><strong>Electron GUI (planned)</strong><span>A driven surface, not a separate app with its own logic.</span></div></div>
          <div><Layers3 aria-hidden="true" /><div><strong>Web server (planned)</strong><span>Same driving agent, a browser-facing surface.</span></div></div>
        </div>

        <h2 id="provenance">Provenance</h2>
        <p>AMIDE records exactly which upstream commits it draws from and what was ported versus left untouched in <code>UPSTREAMS.md</code>. Vendored packages such as <code>pi-tui</code> and <code>pi-ai</code> keep their own identity rather than being rebranded.</p>
        <div className="docs-cards">
          <div><GitBranch aria-hidden="true" /><strong>Stay compatible with pi.dev</strong><p>AMIDE periodically syncs <code>pi-tui</code>/<code>pi-ai</code>/<code>pi-agent-core</code> from Pi&apos;s own upstream to stay wire-compatible with the pi.dev extension ecosystem.</p></div>
          <div><Network aria-hidden="true" /><strong>Full attribution</strong><p>See <code>UPSTREAMS.md</code> and <code>THIRD_PARTY_NOTICES.md</code> in the repository for exact commits and licenses.</p></div>
        </div>
      </div>
    </div>
  )
}
