const YEAR = new Date().getFullYear();

const LINKS = [
  { title: "Privacy Policy", href: "/privacy" },
  {
    title: "Star on GitHub :)",
    href: "https://github.com/autoscan-lab/autOScan",
    external: true,
  },
];

export function Footer() {
  return (
    <footer className="pt-16 pb-8">
      <div className="mx-auto max-w-6xl px-6">
        <div className="border-surface flex flex-row flex-wrap items-center justify-between gap-y-3 border-t pt-8">
          <ul className="flex flex-wrap items-center gap-6">
            {LINKS.map(({ title, href, external }, key) => (
              <li key={key}>
                <a
                  href={href}
                  {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                  className="text-foreground hover:text-primary text-sm transition-colors"
                >
                  {title}
                </a>
              </li>
            ))}
          </ul>
          <p className="text-foreground text-sm opacity-40">&copy; {YEAR} autOScan</p>
        </div>
      </div>
    </footer>
  );
}
