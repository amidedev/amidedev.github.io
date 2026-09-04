import { Link } from 'react-router-dom'

export function Brand() {
  return (
    <Link className="brand" to="/">
      <img className="brand-logo" src="./amide-logo-black.png" alt="" />
      <span className="brand-word">AMIDE</span>
    </Link>
  )
}
