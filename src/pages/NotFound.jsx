import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading.jsx'

export default function NotFound() {
  return (
    <section className="section container">
      <SectionHeading as="h1" eyebrow="Error 404" before="Page" accent="not found" text="That address doesn’t exist. Head back home or browse the projects." />
      <p className="center"><Link to="/" className="btn btn--primary">Go home</Link></p>
    </section>
  )
}
