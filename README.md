# Trada Website

The public landing page for Trada, a business management product for Nigerian SMEs. This is a
single-page React application built with Vite, TypeScript, and Tailwind CSS.

## Local development

Use a current Node.js LTS release and npm.

```sh
npm install
npm run dev
```

The development server prints its local URL when it starts.

## Quality checks

```sh
npm run lint
npm run test
npm run build
```

`npm run preview` serves the production build from `dist` for a final local check.

## Deployment

Netlify configuration is included in `netlify.toml`. Netlify runs `npm run build` and publishes
the `dist` directory.

The production hostname is not known yet, so canonical and sitemap URLs are intentionally omitted.
Add them once the final domain has been connected.
