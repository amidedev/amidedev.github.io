import { Check, Copy } from 'lucide-react'
import { useState } from 'react'

const INSTALL_COMMAND = 'curl -fsSL https://amide.dev/install.sh | sh'

export function AnnouncementBar() {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    await navigator.clipboard.writeText(INSTALL_COMMAND)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1600)
  }

  return (
    <div className="announcement-bar">
      <div className="announcement-bar-inner">
        <a className="announcement-message" href="https://github.com/amidedev/amide" target="_blank" rel="noreferrer">
          Introducing AMIDE <span aria-hidden="true">↗</span>
        </a>
        <span className="announcement-divider" aria-hidden="true" />
        <div className="announcement-command">
          <code>{INSTALL_COMMAND}</code>
          <button type="button" onClick={() => void copy()} aria-label="Copy install command">
            {copied ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />}
          </button>
        </div>
      </div>
    </div>
  )
}
