---
name: frontend-design
description: Apple-inspired frontend design system for dark-themed developer tool websites. Use when building UI components, landing pages, or any frontend where the user wants a polished, modern, Apple-style aesthetic with dark backgrounds.
---

# Frontend Design System

## Cards

- Border radius: `rounded-[28px]`
- Border: `border border-white/[0.06]`
- Background: `bg-white/[0.03]` or a solid dark surface like `bg-[#0c0c18]`
- Padding: minimum `px-8 py-10`, prefer `px-10 py-12` on desktop
- Hover: subtle scale `whileHover={{ scale: 1.02 }}` with Framer Motion, plus a glow via `hover:border-white/[0.12]` transition

## Spacing

- Section vertical padding: `py-24 sm:py-32`
- Grid gaps: `gap-6` (24px) minimum, `gap-8` (32px) for feature grids
- Container: `max-w-6xl mx-auto px-6 sm:px-10`

## Typography

- Headings: `font-semibold tracking-[-0.03em]` with large sizes (`text-4xl sm:text-5xl lg:text-6xl`)
- Subheadings: `text-lg sm:text-xl text-slate-400 leading-relaxed`
- Body: `text-base text-slate-300`
- Monospace elements: `font-mono text-sm` for code, commands, version badges

## Color Palette (dark theme)

- Page background: `#050510` to `#0a0a1a`
- Card surfaces: `#0c0c18` with `border-white/[0.06]`
- Primary accent: cyan/teal `#22d3ee` / `#06b6d4`
- Secondary accent: purple `#8b5cf6`
- Text primary: `text-white`
- Text secondary: `text-slate-300`
- Text muted: `text-slate-400` / `text-slate-500`

## Buttons

- Primary: `bg-cyan-500 hover:bg-cyan-400 text-black font-medium rounded-full px-8 py-3`
- Ghost: `border border-white/[0.1] hover:border-white/[0.2] text-white rounded-full px-8 py-3`
- All buttons: `transition-all duration-200`

## Animations (Framer Motion)

Scroll-reveal pattern for sections:

```tsx
<motion.div
  initial={{ opacity: 0, y: 32 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-80px" }}
  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
>
```

Staggered children in grids:

```tsx
// Parent
<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: "-60px" }}
  variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
>
// Each child
<motion.div variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } } }}>
```

Hover glow on cards:

```tsx
<motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
```

## Layout Patterns

- Bento grid: use CSS grid with `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` and let key cards span `md:col-span-2`
- Terminal frame: macOS-style window chrome with three traffic light dots (`#ff5f57`, `#febc2e`, `#28c840`), dark bg `#070708`, `rounded-[20px]` outer frame
- Frosted nav: `backdrop-blur-xl bg-black/60 border-b border-white/[0.06]` with `sticky top-0 z-50`
- Background effects: radial gradient glows (`radial-gradient(600px at 20% 80%, rgba(6,182,212,0.12), transparent)`) layered with subtle dot-noise texture

## Responsive Breakpoints

- Mobile first: single column, tighter padding
- `sm:` (640px): increase font sizes, padding
- `md:` (768px): 2-column grids
- `lg:` (1024px): 3-column grids, full desktop layout
