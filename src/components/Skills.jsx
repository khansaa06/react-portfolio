import { skills } from '../data/projects.js'

export default function Skills() {
  return (
    <div className="skills">
      {skills.map((s) => (
        <div key={s.group} className="skills__group">
          <h3>{s.group}</h3>
          <ul className="chips">
            {s.items.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
