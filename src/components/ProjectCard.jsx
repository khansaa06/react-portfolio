export default function ProjectCard({ project, number }) {
  const { title, description, category, tech, live, repo } = project
  return (
    <article className="card">
      <div className="card__head">
        <span className="card__cat">{category}</span>
        <span className="card__num">{String(number).padStart(2, '0')}</span>
      </div>
      <div className="card__body">
        <h3 className="card__title">{title}</h3>
        <p className="card__text">{description}</p>
        <ul className="chips" aria-label="Technologies">
          {tech.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      
<div className="card__links">
  {live && (
    <a href={live} target="_blank" rel="noreferrer">
      View Project ↗
    </a>
  )}
  {repo && (
    <a href={repo} target="_blank" rel="noreferrer" className="card__code">
      Code
    </a>
  )}
</div>

      </div>
    </article>
  )
}
