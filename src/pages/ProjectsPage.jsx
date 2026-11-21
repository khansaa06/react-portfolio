import Projects from '../components/Projects.jsx'
import SectionHeading from '../components/SectionHeading.jsx'

export default function ProjectsPage() {
  return (
    <section className="section container">
      <SectionHeading
        as="h1"
        eyebrow="My portfolio"
        before="Projects I’ve"
        accent="Worked On"
        text="A selection of projects showcasing my experience in building websites and digital solutions."
      />
      <Projects />
    </section>
  )
}
