# Next.js Blog Application

A simple blog application built with Next.js 13+ using the App Router, demonstrating server components, static site generation, and responsive design.

## Features

- Server-side rendering with Next.js App Router
- Static site generation for blog posts
- Responsive design using Tailwind CSS
- Dynamic routing for blog posts
- Error handling for non-existent posts
- Clean and modern UI

## Tech Stack

- Next.js 13+
- TypeScript
- Tailwind CSS
- @tailwindcss/typography

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [https://label-lift-assignment-j66g.vercel.app/] in your browser

## Project Structure

- `src/app/page.tsx` - Home page displaying all blog posts
- `src/app/posts/[id]/page.tsx` - Dynamic blog post page
- `src/app/posts/[id]/not-found.tsx` - Custom 404 page for non-existent posts
- `src/lib/blog.ts` - Blog post utility functions
- `src/types/blog.ts` - TypeScript type definitions
- `public/data.json` - Mock blog post data

## Deployment

The application is deployed on Vercel and can be accessed at [your-deployment-url].

## Development Time

This project was completed within the 4-hour time limit specified in the requirements.
