
import Skills from '../components/Skills.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { profile } from '../data/profile.js'

export default function AboutPage() {
  return (
    <section className="section container">
      <SectionHeading
        as="h1"
        eyebrow="About me"
        before="Get to"
        accent="know me"
      />

      <div className="prose">
        <p>
          I'm {profile.fullName}, a {profile.role.toLowerCase()} based in {profile.location}.
          I am currently pursuing my Bachelor's degree in Computer Science
          at Fazaia College of Education for Women, Lahore.
        </p>

        <p>
          I enjoy creating responsive websites and user-friendly web
          applications. I work with HTML, CSS and JavaScript and am
          developing my skills in React. I also enjoy exploring new
          technologies and improving my problem-solving skills.
        </p>

        <p>
          My goal is to keep learning, gain practical experience and
          build useful projects that help me grow as a developer.
        </p>
      </div>

      <Skills />
    </section>
  )
}
