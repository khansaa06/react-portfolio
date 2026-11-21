
import { profile } from '../data/profile.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>
          &copy; {new Date().getFullYear()} {profile.brand}.
          Built with React and Vite.
        </p>

        <div className="footer__links">
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>

          <a href={`mailto:${profile.email}`}>
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
