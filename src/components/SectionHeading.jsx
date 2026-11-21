export default function SectionHeading({ eyebrow, before, accent, text, as: Tag = 'h2' }) {
  return (
    <div className="heading">
      <p className="eyebrow eyebrow--orange">{eyebrow}</p>
      <Tag className="heading__title">
        {before} <span className="grad">{accent}</span>
      </Tag>
      {text && <p className="heading__text">{text}</p>}
    </div>
  )
}
