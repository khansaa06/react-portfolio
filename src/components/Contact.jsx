import { useState } from 'react'

const emptyForm = { name: '', email: '', message: '' }

function validate({ name, email, message }) {
  const errors = {}
  if (name.trim().length < 2) errors.name = 'Enter your name (at least 2 characters).'
if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = 'Enter a valid email, like you@example.com.'
  if (message.trim().length < 10) errors.message = 'Write a message of at least 10 characters.'
  return errors
}

export default function Contact() {
  const [form, setForm] = useState(emptyForm)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    const next = { ...form, [name]: value }
    setForm(next)
    setSent(false)
    if (touched[name]) setErrors(validate(next))
  }

  const handleBlur = (e) => {
    setTouched((t) => ({ ...t, [e.target.name]: true }))
    setErrors(validate(form))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const found = validate(form)
    setErrors(found)
    setTouched({ name: true, email: true, message: true })
    if (Object.keys(found).length === 0) {
      // Hook up a backend or a service like Formspree / EmailJS here.
      console.log('Form submitted:', form)
      setSent(true)
      setForm(emptyForm)
      setTouched({})
    }
  }

  const field = (name) => ({
    id: name,
    name,
    value: form[name],
    onChange: handleChange,
    onBlur: handleBlur,
    'aria-invalid': Boolean(touched[name] && errors[name]),
    'aria-describedby': touched[name] && errors[name] ? `${name}-error` : undefined,
    className: `input ${touched[name] && errors[name] ? 'input--error' : ''}`,
  })

  const showError = (name) =>
    touched[name] && errors[name] ? (
      <span id={`${name}-error`} className="error" role="alert">{errors[name]}</span>
    ) : null

  return (
    <form className="form" onSubmit={handleSubmit} noValidate>
      <label htmlFor="name">Name</label>
      <input type="text" autoComplete="name" {...field('name')} />
      {showError('name')}

      <label htmlFor="email">Email</label>
      <input type="email" autoComplete="email" {...field('email')} />
      {showError('email')}

      <label htmlFor="message">Message</label>
      <textarea rows="6" {...field('message')} />
      {showError('message')}

      <button type="submit" className="btn btn--primary">Send message</button>
      {sent && <p className="success" role="status">Message sent. Thanks, I&apos;ll reply soon.</p>}
    </form>
  )
}
