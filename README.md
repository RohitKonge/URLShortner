# URL Shortener

A simple URL shortening application built with Next.js and Supabase.

## Features

- Shorten long URLs to easy-to-share links
- Copy shortened URLs with a single click
- Automatic redirection to the original URL
- Track click statistics for each shortened URL in real-time
- No registration required

## How It Works

1. **URL Shortening**: Users enter a long URL and receive a shortened version with a unique `short_id`.
2. **Click Tracking**: Every time someone visits a shortened URL:
   - The system fetches the current click count from the database using the `short_id`
   - Increments it by 1
   - Saves the updated count back to the database
   - Redirects the user to the original URL
3. **Statistics**: Users can check how many times their shortened URL has been accessed:
   - Via the URL Click Counter page by entering the shortened URL or `short_id`
   - Through the direct statistics page that auto-refreshes every 5 seconds

## Setup

1. Clone this repository
2. Install dependencies:
   ```
   npm install
   ```
3. Set up your Supabase database:

   - Create a new table called `urls` with the following schema:
     - `id`: uuid (primary key)
     - `original_url`: text (not null)
     - `short_id`: text (not null, unique)
     - `clicks`: integer (default: 0)
     - `created_at`: timestamp with time zone (default: now())

4. Start the development server:

   ```
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Tech Stack

- **Frontend**: Next.js, React, Tailwind CSS
- **Backend**: Supabase (PostgreSQL)
- **Libraries**: nanoid for generating short IDs, clipboard-copy for clipboard functionality

## Environment Variables

The Supabase configuration is included in the codebase for simplicity, but in a production environment, you should use environment variables:

```
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

## Deployment

This application can be easily deployed on Vercel or any other platform that supports Next.js applications.
