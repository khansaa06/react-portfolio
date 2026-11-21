import { Link } from 'react-router-dom'
import Hero from '../components/Hero.jsx'
import Projects from '../components/Projects.jsx'
import Skills from '../components/Skills.jsx'
import SectionHeading from '../components/SectionHeading.jsx'

export default function Home() {
  return (
    <>
      <Hero />
      <section className="section container">
        <SectionHeading
          eyebrow="My portfolio"
          before="Projects I’ve"
          accent="Worked On"
          text="A selection of projects showcasing my experience in building websites and digital solutions."
        />
        <Projects limit={3} showFilters={false} />
        <p className="center">
          <Link to="/projects" className="btn btn--ghost">See all projects</Link>
        </p>
      </section>
      <section className="section container">
        <SectionHeading eyebrow="What I use" before="Skills &" accent="Tools" />
        <Skills />
      </section>
    </>
  )
}
