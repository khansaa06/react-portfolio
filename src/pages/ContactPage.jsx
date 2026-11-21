import Contact from '../components/Contact.jsx'
import SectionHeading from '../components/SectionHeading.jsx'

export default function ContactPage() {
  return (
    <section className="section container container--narrow">
      <SectionHeading
        as="h1"
        eyebrow="Contact"
        before="Let’s work"
        accent="together"
        text="Have a project, an internship, or a question? Send a message and I’ll reply within two days."
      />
      <Contact />
    </section>
  )
}
