"use client";

import { ArrowRightIcon, DownloadSimpleIcon } from "@phosphor-icons/react";
import { Badge } from "@/components/ui/badge";

const GITHUB_RELEASE_BASE =
  "https://github.com/autoscan-lab/autOScan/releases/latest/download";

const PLATFORMS = [
  {
    label: "macOS",
    logoPath: "/logos/apple.svg",
    logoClassName: "h-4 w-4 dark:invert",
    variants: [
      {
        key: "darwin-arm64",
        label: "Mac ARM64",
        href: `${GITHUB_RELEASE_BASE}/autoscan-darwin-arm64`,
      },
    ],
  },
  {
    label: "Linux",
    logoPath: "/logos/linux.svg",
    logoClassName: "h-4 w-4 dark:invert",
    variants: [
      {
        key: "linux-amd64",
        label: "Linux x64",
        href: `${GITHUB_RELEASE_BASE}/autoscan-linux-amd64`,
      },
    ],
  },
];

export function Download() {
  return (
    <section id="download" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 flex flex-col items-center gap-4 text-center md:flex-row md:items-start md:text-left">
          <div className="bg-muted flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl border">
            <img
              src="/ditto.png"
              alt="autOScan"
              className="h-14 w-14"
              style={{ imageRendering: "pixelated" }}
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Download autOScan
            </h2>
            <p className="text-muted-foreground mt-1">
              Fast builds for macOS and Linux with direct binary download.
            </p>
          </div>
        </div>

        <div className="mb-4 flex items-center gap-3">
          <span className="text-2xl font-semibold">3.1.0</span>
          <Badge variant="secondary">Latest</Badge>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:max-w-2xl">
          {PLATFORMS.map((platform) => (
            <div
              key={platform.label}
              className="bg-card overflow-hidden rounded-xl border"
            >
              <div className="bg-muted/40 flex items-center gap-2.5 border-b px-5 py-3">
                <img
                  src={platform.logoPath}
                  alt={`${platform.label} logo`}
                  className={platform.logoClassName}
                />
                <span className="font-semibold">{platform.label}</span>
              </div>
              <div className="divide-y">
                {platform.variants.map((variant) => (
                  <a
                    key={variant.key}
                    href={variant.href}
                    className="hover:bg-muted/50 flex w-full items-center justify-between px-5 py-3.5 text-sm transition-colors"
                  >
                    <span>{variant.label}</span>
                    <DownloadSimpleIcon
                      size={16}
                      weight="bold"
                      className="text-muted-foreground"
                    />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <a
          href="/changelog"
          className="text-primary hover:text-primary/80 mt-5 inline-flex items-center gap-1 text-sm font-medium transition-colors"
        >
          View changelog
          <ArrowRightIcon size={14} weight="bold" />
        </a>
      </div>
    </section>
  );
}
