import { ArrowRight, Boxes, Braces, Cable, Layers3, Network, RefreshCw, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import { CommandBox } from '../components/CommandBox'

const atoms = [
  { icon: Network, n: '01', title: 'iPython / RLM sessions', body: 'A persistent Python REPL treats context as variables and subagents as recursive function calls - not disposable one-shot prompts.' },
  { icon: Braces, n: '02', title: 'Cut token spend, raise cache hits', body: 'The Monotonic Prompt Architecture keeps every request append-only within a cache epoch, so prompt caching actually works turn after turn.' },
  { icon: RefreshCw, n: '03', title: 'Daemon-backed continuity', body: 'Sessions, kernel state, schedules, and subagents keep running when the terminal disconnects and reattach later.' },
  { icon: Boxes, n: '04', title: 'Self-extensibility', body: 'Live TypeScript extensions and `/reload` let the agent grow new capabilities without a rebuild.' },
  { icon: Cable, n: '05', title: 'Cordis Metaframework runtime', body: 'Services, injection, effects, fibers, and typed events give capabilities explicit lifecycle and replacement contracts.' },
  { icon: Layers3, n: '06', title: 'Multi-surface, forward', body: 'One driving agent, many presentation surfaces - terminal today, Electron and web surfaces as the architecture matures.' },
]

export function HomePage() {
  return (
    <>
      <section className="home-hero grid-surface">
        <div className="page-width hero-content">
          <p className="eyebrow">Adaptive Machine Intelligence Development Engine</p>
          <h1>The coding agent that<br /><strong>doesn&apos;t burn your tokens.</strong></h1>
          <p className="hero-lede">AMIDE runs on a persistent iPython/RLM session, composed through a Cordis Metaframework runtime, and disciplined by a Monotonic Prompt Architecture that keeps every request append-only. The result: a drastically higher prompt-cache hit rate and a fraction of the token spend of a harness that resends its history every turn.</p>
          <div className="hero-cta">
            <a className="button" href="https://github.com/amidedev/amide#getting-started" target="_blank" rel="noreferrer">Run it from source <ArrowRight aria-hidden="true" /></a>
            <Link className="button secondary" to="/docs">Read the architecture</Link>
            <a className="button secondary" href="https://github.com/amidedev/amide" target="_blank" rel="noreferrer">
              <Star aria-hidden="true" />
              Star AMIDE on GitHub
            </a>
          </div>
          <CommandBox command="git clone git@github.com:amidedev/amide.git && cd amide && npm ci && ./amide.sh" label="AMIDE isn't published yet - run it from source" />
        </div>
      </section>

      <section className="foundation-strip" aria-label="Platform foundations">
        <span>AMIDE IS BUILT ON</span><strong>iPython / RLM</strong><span>·</span><strong>Cordis Metaframework</strong><span>·</span><strong>Monotonic Prompt Architecture</strong><span>·</span><strong>Self-extending TypeScript</strong>
      </section>

      <section className="atoms-section page-width" aria-labelledby="atoms-heading">
        <div className="section-intro">
          <div><p className="eyebrow">The engine</p><h2 id="atoms-heading">Three proven lineages,<br />one runtime.</h2></div>
          <p>AMIDE combines existing lineages instead of inventing a fourth from scratch. Everything below already works in a running session, except where noted as forward direction.</p>
        </div>
        <div className="atoms-grid">
          {atoms.map(({ icon: Icon, n, title, body }) => (
            <article className="atom-card" key={title}>
              <div><span>{n}</span><Icon aria-hidden="true" /></div>
              <h3>{title}</h3><p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="runtime-section">
        <div className="page-width runtime-grid">
          <div>
            <p className="eyebrow">Why token spend stays flat</p>
            <h2>Longer sessions.<br />Not bigger bills.</h2>
            <p>Recursive agent harnesses are often criticized for token bloat as sessions grow. AMIDE&apos;s Monotonic Prompt Architecture keeps every request to the model append-only within a cache epoch - nothing is reordered or rewritten underneath the model. That discipline is what makes prompt caching actually work: a drastically higher cache-hit rate on every follow-up turn, and token spend that stays roughly flat instead of climbing with session length.</p>
            <div className="runtime-links"><Link className="button inverse" to="/docs">Read the MPA overview <ArrowRight aria-hidden="true" /></Link><a className="button inverse secondary" href="https://github.com/amidedev" target="_blank" rel="noreferrer">GitHub</a></div>
          </div>
          <div className="formula-panel" aria-label="AMIDE composition example">
            <div><i /><i /><i /><span>amide.formula.ts</span></div>
            <pre>{`export default Amide.compose({
  execution: "prime-agent-rlm",
  extensibility: "pi",
  composition: "cordis",
  promptArchitecture: "monotonic",
  surfaces: [
    "terminal",
    // "electron",  forward
    // "web",       forward
  ],
})`}</pre>
          </div>
        </div>
      </section>

      <section className="portal-section page-width" aria-labelledby="portal-heading">
        <div className="section-intro">
          <div><p className="eyebrow">Provenance</p><h2 id="portal-heading">Built in the open,<br />attributed honestly.</h2></div>
          <p>AMIDE is an active fork, not a rewrite. Every upstream commit, what was ported, and what stayed untouched is recorded rather than implied.</p>
        </div>
        <div className="portal-lines">
          <a href="https://github.com/amidedev/amide/blob/main/UPSTREAMS.md" target="_blank" rel="noreferrer"><strong>Upstreams</strong><span>Exact commits for every upstream AMIDE builds on.</span><em>View <ArrowRight aria-hidden="true" /></em></a>
          <a href="https://github.com/amidedev/amide/blob/main/docs/AMIDE-ROADMAP.md" target="_blank" rel="noreferrer"><strong>Roadmap</strong><span>What's built today versus what's stated direction.</span><em>View <ArrowRight aria-hidden="true" /></em></a>
          <a href="https://github.com/amidedev/amide/blob/main/README.md#citation" target="_blank" rel="noreferrer"><strong>Citation</strong><span>Prime Agent's RLM harness, the research this builds on.</span><em>View <ArrowRight aria-hidden="true" /></em></a>
        </div>
      </section>

      <section className="final-cta grid-surface">
        <p className="eyebrow">Early and moving fast</p>
        <h2>Not on npm yet.<br />Run it today from source.</h2>
        <p>AMIDE isn&apos;t published to npm yet - rebrand and CI/CD came first, by design. Clone the repo and run it directly against a disposable project while that lands.</p>
        <div><a className="button" href="https://github.com/amidedev/amide#getting-started" target="_blank" rel="noreferrer">Get started <ArrowRight aria-hidden="true" /></a><Link className="button secondary" to="/docs">Read the docs</Link><a className="button secondary" href="https://github.com/amidedev/amide" target="_blank" rel="noreferrer"><Star aria-hidden="true" /> Star on GitHub</a></div>
      </section>
    </>
  )
}
