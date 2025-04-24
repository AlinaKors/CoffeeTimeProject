# Coffee Time — Stylish Café Landing Page

A modern, elegant landing page for a coffee shop or café. Built with Next.js, Tailwind CSS, and sprinkled with modern CSS features for extra flavor. Fully responsive, SEO-optimized, and performance-first.

Live demo 👉 coffee-time-project.vercel.app

## Tech Stack

- React (Hooks), React-router
- TypeScript
- Vercel
- Styled
- Vite
- Ant Design

## Setup

```js
git clone https://github.com/AlinaKors/CoffeeTimeProject.git
cd coffee-time-project
npm install
npm run dev
```

To build for production:

```js
npm run build
npm run preview
```

## Hosting

Hosted on Vercel. Supports static export if needed using next export.
You can deploy by:

1. Forking the repo
2. Connecting it to Vercel
3. Deploying with default settings

## Styling Notes

The design is minimalistic, but fully complies with the template provided in the terms of reference.
It is also adapted for mobile devices and is responsive. Executed in warm colors, which will be pleasing to the eye both in the daytime and at night.
All colors are taken, close to the shade of coffee, which corresponds to the theme of the site itself.

Also made button animations without using JS, for more optimization. (Button animations are made in different variations to demonstrate the work with CSS).

Ant Design was used for the form and custom input customization using CSS.

## SEO & Accessibility

- Meta tags and dynamic <Head> configuration for title, description, OG, TwitterCard, Schema metadata.
- Semantic HTML: Sections, article, landmarks (<main>, <header>, <footer>) for screen readers.
- ALT text for all images.
- use ARIA-attr for custom video player

## Performance

The project is optimized for fast loading, responsiveness and efficient rendering. The following decisions have been made to improve performance:

- By utilizing Vite, development happens with minimal latency.
- This project uses React Player to embed and play video and audio from various sources.
  -- Use light: Allows you to display a preview image instead of a video before playback starts, reducing page load time.
  -- Using the playing attribute: Video or audio does not start playing until the user initiates an action, saving resources.
- The project uses React.memo to improve performance and prevent unnecessary rendering of components.

## Core Web Vitals

- LCP: ~0.92s
- CLS: ~0.02
- LCP: ~40ms
