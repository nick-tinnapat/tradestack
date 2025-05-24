# Next.js Markdown Blog

A modern blog application built with Next.js that uses Markdown files for content. This blog features a clean, responsive design inspired by Vercel's blog.

## Features

- Markdown-based content management
- Responsive design optimized for all devices
- Dynamic routing for blog posts
- Date formatting and reading time estimation
- Clean, modern UI with dark theme

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory
2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application

## Project Structure

```
frontend/
├── src/
│   ├── app/                  # Next.js App Router
│   │   ├── blog/             # Blog routes
│   │   │   ├── [id]/         # Dynamic blog post route
│   │   │   └── page.tsx      # Blog list page
│   │   ├── globals.css       # Global styles
│   │   ├── layout.tsx        # Root layout
│   │   └── page.tsx          # Home page
│   ├── components/           # React components
│   │   └── Header.tsx        # Site header
│   ├── content/              # Content directory
│   │   └── posts/            # Markdown blog posts
│   └── lib/                  # Utility functions
│       └── posts.ts          # Markdown processing utilities
├── package.json              # Project dependencies
├── tsconfig.json             # TypeScript configuration
├── next.config.js            # Next.js configuration
└── README.md                 # Project documentation
```

## Creating Blog Posts

To create a new blog post, add a new Markdown file to the `src/content/posts` directory. Each post should include frontmatter with the following fields:

```markdown
---
title: "Your Post Title"
date: "YYYY-MM-DD"
author: "Your Name"
authorRole: "Your Role (optional)"
excerpt: "A brief summary of your post"
readTime: "X min read"
---

Your post content goes here...
```

## Customization

- Modify the styles in `src/app/globals.css` to change the appearance
- Update the header links in `src/components/Header.tsx`
- Adjust the site metadata in `src/app/layout.tsx`

## Deployment

This Next.js application can be deployed to various platforms like Vercel, Netlify, or any other hosting service that supports Node.js applications.
