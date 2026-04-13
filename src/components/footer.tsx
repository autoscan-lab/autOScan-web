const YEAR = new Date().getFullYear();

const LINKS = [
  { title: "Features", href: "#features" },
  { title: "Download", href: "#download" },
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
        <div className="border-surface flex flex-row flex-wrap items-center !justify-center gap-x-10 gap-y-3 border-t pt-8 text-center md:!justify-between">
          <p className="text-foreground">
            Copyright &copy; {YEAR}{" "}
            <span className="font-mono font-semibold">autOScan</span>
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-6">
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
        </div>
      </div>
    </footer>
  );
}
