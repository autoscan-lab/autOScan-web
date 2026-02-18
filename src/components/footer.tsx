const LINKS = [
  { label: "Features", href: "#features" },
  { label: "How it Works", href: "#how-it-works" },
  { label: "Download", href: "#download" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 sm:flex-row sm:justify-between sm:px-10">
        <div className="flex flex-col items-center gap-2 sm:items-start">
          <span className="text-sm font-semibold tracking-[-0.02em] text-white">
            autOScan
          </span>
          <span className="text-xs text-slate-500">MIT License</span>
        </div>

        <nav className="flex items-center gap-6">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-slate-500 transition-colors duration-200 hover:text-slate-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <p className="text-xs text-slate-600">
          Built by Felipe Trejos
        </p>
      </div>
    </footer>
  );
}
