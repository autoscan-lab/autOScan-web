# autOScan Web

Official website for **autOScan**.

This project is a **showcase and controlled-download portal** for the autOScan
CLI. It is **not** a browser-based replacement for the CLI workflow.

## Access Model

- autOScan TUI is closed-source
- this website project is also closed-source
- binaries are distributed only to trusted whitelisted users
- source code is not publicly available
- deployment is public, distribution is private

## Purpose

- Present autOScan and its core grading capabilities
- Act as the only official public-facing entry point for the tool
- Gate binary distribution to approved users

## autOScan CLI Highlights

- Batch compile and grade C submissions
- Detect banned calls (for example `printf`, `fprintf`)
- Run compiled submissions with custom args or test cases
- Compare expected output with highlighted diffs
- Similarity detection with per-file metrics and pair detail view
- AI pattern detection using dictionary fingerprints
- Single-process and multi-process grading policy support
- Export grading results to JSON and CSV

## Distribution

Downloads are not open to the public. Access is granted only to trusted users
that are explicitly whitelisted.

## Website Development

```bash
bun install
bun run dev
```

Open `http://localhost:3000`.

## Website Production Build

```bash
bun run build
bun run start
```

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Bun

## License

Proprietary and closed-source. All rights reserved.
