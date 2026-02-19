# autOScan Web

Official product landing page and gated download portal for **autOScan** — a TUI tool for batch compiling, grading, and analyzing C lab submissions.

## Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** for styling
- **Framer Motion** for scroll-triggered entrance animations and hover interactions
- **Auth.js v5** (`next-auth`) with Google OAuth for gated downloads
- **Bun** as the runtime and package manager

## Project Structure

```
src/
  app/
    layout.tsx                    Root layout (Outfit + JetBrains Mono fonts, SessionProvider)
    globals.css                   Tailwind imports, CSS variables, color palette
    page.tsx                      Single page composing all sections
    icon.png                      Favicon (Porygon pixel sprite)
    api/
      auth/[...nextauth]/route.ts Auth.js route handler
      download/[platform]/route.ts Protected binary download endpoint
      download/check/route.ts     Email allowlist check endpoint
  lib/
    auth.ts                       Auth.js config (Google provider, allowlist logic)
  components/
    navbar.tsx                    Sticky nav with frosted-glass backdrop on scroll
    hero.tsx                      Hero section with CTA and terminal-frame screenshot
    features.tsx                  Bento grid of 6 feature cards (28px Apple-style radius)
    how-it-works.tsx              Numbered 4-step workflow walkthrough
    download.tsx                  Auth-gated download section (client component)
    footer.tsx                    Site footer with nav links and attribution
    terminal-frame.tsx            macOS-style window chrome wrapper
    sign-in-button.tsx            Google OAuth sign-in/sign-out toggle
binaries/                         Private directory (gitignored) for release binaries
public/
  screenshots/                    TUI screenshots and videos
.cursor/
  skills/frontend-design/         Project-local Apple-style design system skill
```

## Auth-Gated Downloads

Downloads are restricted to a whitelist of email addresses. The flow:

1. User clicks "Sign in to download" and authenticates via Google OAuth
2. Server checks the user's email against `ALLOWED_EMAILS` in `.env.local`
3. If authorized, download buttons appear for macOS (arm64) and Linux (amd64)
4. Downloads hit `/api/download/[platform]` which re-verifies the session before streaming the binary
5. Unauthorized users see a "request access" message
6. Windows is displayed as "Coming soon"

## Environment Variables

Create a `.env.local` file:

```
AUTH_SECRET=<random-secret>
AUTH_GOOGLE_ID=<google-oauth-client-id>
AUTH_GOOGLE_SECRET=<google-oauth-client-secret>
ALLOWED_EMAILS=user1@gmail.com,user2@gmail.com
```

- `AUTH_SECRET`: run `openssl rand -base64 32` to generate
- `AUTH_GOOGLE_ID` / `AUTH_GOOGLE_SECRET`: create at [console.cloud.google.com](https://console.cloud.google.com) (APIs & Services > Credentials > OAuth 2.0 Client ID)
- `ALLOWED_EMAILS`: comma-separated list of Gmail addresses allowed to download

## Placing Binaries

Copy your release binaries into the `binaries/` directory at the project root:

```
binaries/
  autoscan-darwin-arm64
  autoscan-linux-amd64
```

This directory is gitignored. The API route streams these files to authenticated, authorized users.

## Development

```bash
bun install
bun run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production Build

```bash
bun run build
bun run start
```

## License

Proprietary and closed-source. All rights reserved.
