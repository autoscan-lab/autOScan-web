<h1 align="center">autOScan Web</h1>

<p align="center">
  <strong>Landing page and download portal for autOScan</strong>
</p>

<p align="center">
  <a href="#"><img src="https://img.shields.io/badge/next.js-16-000000?style=flat&logo=nextdotjs&logoColor=white" /></a>
  <a href="#"><img src="https://img.shields.io/badge/react-19-61DAFB?style=flat&logo=react&logoColor=white" /></a>
  <a href="#"><img src="https://img.shields.io/badge/tailwind-v4-06B6D4?style=flat&logo=tailwindcss&logoColor=white" /></a>
  <a href="#"><img src="https://img.shields.io/badge/license-MIT-24292e?style=flat" /></a>
</p>

<p align="center">
  <a href="https://autoscan-web.vercel.app">autoscan-web.vercel.app</a>
</p>

---

## What It Is

Product website for [autOScan](https://github.com/autoscan-lab/autOScan) — a TUI tool for batch compiling, grading, and analyzing C lab submissions.

- Hero section with animated iridescent background and video preview
- Feature showcase with capability cards
- Direct download links to GitHub Releases (macOS ARM64, Linux x64)
- Changelog page with full release history

---

## Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** for styling
- **Framer Motion** for scroll-triggered animations
- **Bun** as the runtime and package manager

---

## Development

```bash
bun install
bun run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Production Build

```bash
bun run build
bun run start
```

---

## Related

- [autOScan](https://github.com/autoscan-lab/autOScan) — TUI grading tool
- [autOScan Engine](https://github.com/autoscan-lab/autoscan-engine) — shared grading engine

---

## License

MIT
