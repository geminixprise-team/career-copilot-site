# Career Copilot — Website

Marketing website and blog for [Career Copilot](https://careercopilot.cc) — an AI-powered career coaching platform built with Google Gemini.

Based on [nextjs-netlify-blog-template](https://github.com/wutali/nextjs-netlify-blog-template).

## Features

- **Blog with tags & authors** — Content managed via Netlify CMS (Decap)
- **SEO optimized** — JSON-LD, Open Graph, meta tags
- **CMS** — Edit posts, tags, authors, and site config via `/admin/`
- **Static export** — Deployed as static files via Netlify

## Getting Started

```bash
npm install
npm run dev
# Open http://localhost:3000
```

## Deploy to Netlify

1. Connect this repo to Netlify
2. Build command: `npm run export`
3. Publish directory: `dist`
4. Enable **Netlify Identity** + **Git Gateway** for CMS access at `/admin/`

## Content Management

All content is managed via Netlify CMS at `/admin/`:
- **Posts** — Blog posts in MDX format (`content/posts/`)
- **Tags** — Content categories (`meta/tags.yml`)
- **Authors** — Author profiles (`meta/authors.yml`)
- **Site Config** — Title, description, keywords (`config.json`)

## Social

- Instagram: [@careercopilot_](https://www.instagram.com/careercopilot_/)
