
import { profile as p } from '../data/profile.js'

export default function CodeWindow() {
  return (
    <div className="stage" aria-hidden="true">
      <div className="badge badge--top">
        <i className="dot" /> {p.availability}
      </div>

      <div className="badge badge--side">✦ Always Learning</div>

      <div className="editor">
        <div className="editor__bar">
          <span className="light light--r" />
          <span className="light light--y" />
          <span className="light light--g" />
          <span className="editor__file">developer.js</span>
        </div>

        <div className="editor__tabs">
          <span className="tab tab--on"><em>JS</em> developer.js <small>×</small></span>
          <span className="tab">portfolio</span>
        </div>

        <pre className="code">
{`01  `}<span className="c-com">{`// Learning and building for the web.`}</span>{`
02  `}<span className="c-key">const</span>{` `}<span className="c-var">developer</span>{` = {
03    name: `}<span className="c-str">{`'${p.fullName}'`}</span>{`,
04    role: `}<span className="c-str">{`'${p.role}'`}</span>{`,
05    location: `}<span className="c-str">{`'${p.location}'`}</span>{`,
06    specialties: [
07      `}<span className="c-str">{`'${p.specialties[0]}'`}</span>{`,
08      `}<span className="c-str">{`'${p.specialties[1]}'`}</span>{`
09    ],
10    availability: `}<span className="c-str">{`'${p.availability}'`}</span>{`
11  };

12  `}<span className="c-key">export default</span>{` developer;`}
        </pre>

        <div className="editor__foot">
          <span>PORTFOLIO PROFILE</span>
          <span>WEB DEVELOPER</span>
        </div>
      </div>

      <div className="badge badge--bottom">⌘ Building Web Projects</div>
    </div>
  )
}
