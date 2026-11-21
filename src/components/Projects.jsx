import { useMemo, useState } from 'react'
import { initialProjects } from '../data/projects.js'
import ProjectCard from './ProjectCard.jsx'

// `limit` lets the Home page show a short preview of the same component.
export default function Projects({ limit, showFilters = true }) {
const [projects, setProjects] = useState(initialProjects)
  const [category, setCategory] = useState('All')
  const [query, setQuery] = useState('')

  const categories = useMemo(() => ['All', ...new Set(projects.map((p) => p.category))], [projects])

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase()
    const list = projects
      .filter((p) => category === 'All' || p.category === category)
      .filter((p) => !q || `${p.title} ${p.description} ${p.tech.join(' ')}`.toLowerCase().includes(q))
    return limit ? list.slice(0, limit) : list
  }, [projects, category, query, limit])

  return (
    <div>
      {showFilters && (
        <div className="filters">
          <div className="filters__buttons" role="group" aria-label="Filter by category">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                className={`pill ${category === c ? 'pill--active' : ''}`}
                aria-pressed={category === c}
                onClick={() => setCategory(c)}
              >
                {c}
              </button>
            ))}
          </div>
          <input
            type="search"
            className="input filters__search"
            placeholder="Search projects or tech"
            aria-label="Search projects"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      )}

      {visible.length === 0 ? (
        <p className="empty">No projects match that search. Try another keyword or clear the filter.</p>
      ) : (
        <div className="grid">
          {visible.map((p, i) => (
            <ProjectCard key={p.id} project={p} number={i + 1} />
          ))}
        </div>
      )}
    </div>
  )
}
