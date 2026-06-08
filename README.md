# Career Copilot — Landing Site

Static marketing website for [Career Copilot](https://careercopilot.cc) — an AI-powered career coaching platform built with Google Gemini.

## What's Included

- **Landing page** — Hero, How It Works (3-step flow), 6 feature cards, 3 audience segments, waitlist sign-up CTA
- **Legal pages** (Paddle compliance) — Terms of Service, Privacy Policy, Refund Policy, Contact Us
- **Netlify CMS** (Decap v3) — Edit legal pages via markdown through `/admin/`
- **Netlify Forms** — Waitlist sign-up and contact form submissions
- **SEO** — Meta tags, Open Graph, Twitter Card, JSON-LD structured data, canonical URLs
- **Responsive design** — Mobile hamburger nav, single-column reflow

## Quick Start

```bash
# Serve locally
cd site && python3 -m http.server 8080
# Open http://localhost:8080
```

## Deploy to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/geminixprise-team/career-copilot-site)

1. Connect this repo to Netlify
2. **Publish directory:** `site`
3. No build command needed (static files)
4. Enable **Netlify Identity** + **Git Gateway** for CMS access at `/admin/`
5. Enable **Netlify Forms** for waitlist and contact submissions

## Project Structure

```
├── netlify.toml          # Netlify config (publish dir, redirects, headers)
└── site/
    ├── index.html        # Landing page
    ├── css/styles.css    # Styles (CSS variables, responsive grid)
    ├── js/main.js        # Interactivity (nav, forms, scroll)
    ├── admin/            # Decap CMS (config.yml, index.html)
    ├── terms/            # Terms of Service
    ├── privacy/          # Privacy Policy
    ├── refund/           # Refund Policy
    └── contact/          # Contact form
```

## Tech Stack

- Pure HTML/CSS/JS (no build step)
- [Netlify](https://netlify.com) for hosting & forms
- [Decap CMS](https://decapcms.org) v3.14.0 (pinned with SRI) for content management
- [Paddle](https://paddle.com) as merchant of record (referenced in legal pages)

## Social

- Instagram: [@careercopilot_](https://www.instagram.com/careercopilot_/)
