# Kings Farm Equestrian — React (Vite)

## Run locally
```bash
npm install
npm run dev
```

## Production build
```bash
npm run build
```
Deploy the generated `dist/` folder to any static host (Netlify, Vercel, cPanel).
For hosts without SPA rewrites, add a rewrite of all paths to /index.html
(Netlify: `/* /index.html 200` in _redirects).

## Structure
- `public/` — css, js, images, favicon (served as-is)
- `src/content/` — page content (one HTML fragment per page)
- `src/Page.jsx` — renders content, routes internal links, re-inits template JS
- `src/App.jsx` — React Router routes for all 24 pages

Site title and favicon (company logo) are set in `index.html`.
