import { Github, Menu, Star, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { Brand } from './Brand'
import { ThemeToggle } from './ThemeToggle'

const nav = [
  ['Product', '/'],
  ['Docs', '/docs'],
] as const

function formatStarCount(stars: number): string {
  return new Intl.NumberFormat('en', { notation: 'compact', maximumFractionDigits: 1 })
    .format(stars)
    .toLowerCase()
}

export function Shell() {
  const [open, setOpen] = useState(false)
  const [starCount, setStarCount] = useState<string>()

  useEffect(() => {
    const controller = new AbortController()
    void fetch('https://api.github.com/repos/amidedev/amide', {
      headers: { Accept: 'application/vnd.github+json' },
      signal: controller.signal,
    })
      .then(async response => {
        if (!response.ok) return undefined
        const payload: unknown = await response.json()
        if (typeof payload !== 'object' || payload === null || !('stargazers_count' in payload)) return undefined
        const stars = payload.stargazers_count
        return typeof stars === 'number' && Number.isFinite(stars) && stars >= 0 ? formatStarCount(stars) : undefined
      })
      .then(count => { if (count !== undefined) setStarCount(count) })
      .catch(() => undefined)
    return () => controller.abort()
  }, [])

  return (
    <div className="site-shell min-h-dvh bg-canvas text-ink">
      <header className="site-header">
        <div className="site-header-inner">
          <Brand />
          <button className="mobile-menu" type="button" aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen(value => !value)}>
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
          <nav className={open ? 'site-nav open' : 'site-nav'} aria-label="Primary navigation">
            {nav.map(([label, href]) => (
              <NavLink key={href} to={href} end={href === '/'} onClick={() => setOpen(false)}>{label}</NavLink>
            ))}
          </nav>
          <div className="header-actions">
            <ThemeToggle />
            <a
              className="icon-button github-stars"
              href="https://github.com/amidedev/amide"
              target="_blank"
              rel="noreferrer"
              aria-label={starCount === undefined ? 'Star AMIDE on GitHub' : `Star AMIDE on GitHub - ${starCount} stars`}
            >
              <Star aria-hidden="true" />
              {starCount === undefined ? null : <span aria-hidden="true">{starCount}</span>}
            </a>
            <a className="icon-button" href="https://github.com/amidedev" target="_blank" rel="noreferrer" aria-label="AMIDE on GitHub">
              <Github aria-hidden="true" />
            </a>
            <a className="button small" href="https://github.com/amidedev/amide#getting-started" target="_blank" rel="noreferrer">Get started</a>
          </div>
        </div>
      </header>
      <main className="min-w-0"><Outlet /></main>
      <footer className="site-footer">
        <div>
          <Brand />
          <p>Adaptive Machine Intelligence Development Engine.</p>
        </div>
        <div className="footer-links">
          <a href="https://github.com/amidedev/amide" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://github.com/amidedev/amide/blob/main/docs/AMIDE-ROADMAP.md" target="_blank" rel="noreferrer">Roadmap</a>
          <a href="/docs">Docs</a>
          <a href="https://github.com/amidedev/amide/blob/main/UPSTREAMS.md" target="_blank" rel="noreferrer">Upstreams</a>
        </div>
        <p className="footer-note">AMIDE runs on iPython/RLM sessions with a Cordis Metaframework runtime and a Monotonic Prompt Architecture. See UPSTREAMS.md in the repository for full upstream attribution.</p>
      </footer>
    </div>
  )
}
