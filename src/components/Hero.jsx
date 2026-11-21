
import { Link } from 'react-router-dom'
import CodeWindow from './CodeWindow.jsx'
import { profile } from '../data/profile.js'

export default function Hero() {
  return (
    <section className="hero container">
      <span className="status">
        <i className="dot" /> {profile.availability}
      </span>

      <div className="hero__grid">
        <div className="hero__copy">
          <p className="eyebrow eyebrow--muted">Hello, I'm</p>

          <h1 className="hero__name">
            {profile.firstName}
            <br />
            <span className="grad">{profile.lastName}</span>
            <span className="period">.</span>
          </h1>

          <h2 className="hero__headline">{profile.headline}</h2>

          <p className="hero__text">{profile.intro}</p>

          <div className="hero__actions">
            <Link to="/projects" className="btn btn--primary">
              Explore My Work ↗
            </Link>

            <Link to="/contact" className="btn btn--ghost">
              Let's Talk
            </Link>
          </div>
        </div>

        <CodeWindow />
      </div>
    </section>
  )
}
