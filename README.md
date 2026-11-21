# React Portfolio

A responsive personal portfolio built with **React 18**, **Vite**, and **React Router**.

**Live demo:** _add your Vercel/Netlify URL here_

> Edit `src/data/profile.js` and `src/data/projects.js` to make the site yours.

## Features

- Reusable components: `Header`, `Hero`, `Projects`, `ProjectCard`, `Skills`, `Contact`, `Footer`
- Client-side routing with React Router (`/`, `/projects`, `/about`, `/contact`, 404 page)
- Projects managed with `useState`: category filter, search, and pin-to-top
- Contact form with controlled inputs and validation (name, email format, message length)
- Dark/light mode using Context API, saved to `localStorage`, respects system preference
- Fully responsive layout with a mobile menu
- Accessible: labelled form fields, visible focus states, ARIA attributes, reduced-motion support

## Project structure

```
src/
  components/   Header, Hero, Projects, ProjectCard, Skills, Contact, Footer, ThemeToggle
  context/      ThemeContext (dark/light state)
  data/         projects.js (edit this with your own projects and skills)
  pages/        Home, ProjectsPage, AboutPage, ContactPage, NotFound
  App.jsx       Route definitions
  main.jsx      App entry (Router + ThemeProvider)
  index.css     Design tokens and styles
```

## Getting started

Requires Node.js 18+.

```bash
git clone https://github.com/<your-username>/react-portfolio.git
cd react-portfolio
npm install
npm run dev      # http://localhost:5173
```

Other scripts:

```bash
npm run build    # production build in /dist
npm run preview  # preview the production build
```

## Customise

1. Replace "Your Name" and links in `index.html`, `Header.jsx`, `Hero.jsx`, `Footer.jsx`, and `AboutPage.jsx`.
2. Edit `src/data/projects.js` with your real projects and skills.
3. Colours live in the CSS variables at the top of `src/index.css`.
4. The contact form currently logs to the console. Connect Formspree or EmailJS in `Contact.jsx` to send real email.

## Deployment

**Vercel:** import the GitHub repo at vercel.com/new. The framework preset is Vite (build `npm run build`, output `dist`). `vercel.json` handles route rewrites.

**Netlify:** import the repo at app.netlify.com. Build command `npm run build`, publish directory `dist`. `public/_redirects` handles route rewrites.

## License

MIT
