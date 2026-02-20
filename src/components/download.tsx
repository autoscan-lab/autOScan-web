"use client";

import { signIn, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { ArrowRightIcon, DownloadSimpleIcon, WarningCircleIcon } from "@phosphor-icons/react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const PLATFORMS = [
  {
    label: "macOS",
    logoPath: "/logos/apple.svg",
    logoClassName: "h-4 w-4 dark:invert",
    variants: [{ key: "darwin-arm64", label: "Mac ARM64" }],
  },
  {
    label: "Linux",
    logoPath: "/logos/linux.svg",
    logoClassName: "h-4 w-4 dark:invert",
    variants: [{ key: "linux-amd64", label: "Linux x64" }],
  },
];

export function Download() {
  const { data: session, status } = useSession();
  const [allowed, setAllowed] = useState<boolean | null>(null);

  useEffect(() => {
    if (!session?.user?.email) {
      setAllowed(null);
      return;
    }

    fetch("/api/download/check")
      .then((response) => response.json())
      .then((data) => setAllowed(data.allowed))
      .catch(() => setAllowed(false));
  }, [session]);

  const handleDownload = (platform: string) => {
    window.location.href = `/api/download/${platform}`;
  };

  const isReady = status !== "loading";
  const isAuthed = !!session?.user;
  const isAllowed = allowed === true;
  const canDownload = isAuthed && isAllowed;
  const showUnauthorized = isAuthed && allowed === false;
  const showAccessCheck = isAuthed && allowed === null;
  const shouldDimCards = !canDownload;

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
            {isReady && !isAuthed && (
              <Button
                size="lg"
                onClick={() => signIn("google")}
                className="mt-4 gap-2 bg-foreground text-background hover:bg-foreground/85"
              >
                <DownloadSimpleIcon size={18} weight="bold" />
                Sign in to continue
              </Button>
            )}
          </div>
        </div>

        {showUnauthorized && (
          <div className="mb-8 rounded-xl border border-amber-500/40 bg-amber-500/10 p-5">
            <div className="flex items-start gap-3">
              <WarningCircleIcon
                size={20}
                weight="fill"
                className="mt-0.5 shrink-0 text-amber-400"
              />
              <div>
                <p className="font-medium">Signed in but not authorized</p>
                <p className="text-muted-foreground mt-1 text-sm">
                  {session.user?.email} is not in the download access list yet.
                  Please contact{" "}
                  <a
                    href="https://github.com/felitrejos"
                    target="_blank"
                    rel="noreferrer"
                    className="underline underline-offset-2"
                  >
                    the project owner
                  </a>{" "}
                  to request access.
                </p>
              </div>
            </div>
          </div>
        )}

        {showAccessCheck && (
          <div className="mb-8 flex items-center gap-3">
            <div className="border-primary h-5 w-5 animate-spin rounded-full border-2 border-t-transparent" />
            <span className="text-muted-foreground text-sm">
              Checking access...
            </span>
          </div>
        )}

        <DownloadCards
          interactive={canDownload}
          onDownload={handleDownload}
          dimmed={shouldDimCards}
        />
      </div>
    </section>
  );
}

function DownloadCards({
  interactive,
  onDownload,
  dimmed,
}: {
  interactive: boolean;
  onDownload: (key: string) => void;
  dimmed: boolean;
}) {
  return (
    <div>
      <div className={dimmed ? "opacity-55" : ""}>
        <div className="mb-4 flex items-center gap-3">
          <span className="text-2xl font-semibold">3.1.0</span>
          <Badge variant="secondary">Latest</Badge>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:max-w-2xl">
          {PLATFORMS.map((platform) => (
            <div key={platform.label} className="bg-card overflow-hidden rounded-xl border">
              <div className="bg-muted/40 flex items-center gap-2.5 border-b px-5 py-3">
                <img
                  src={platform.logoPath}
                  alt={`${platform.label} logo`}
                  className={platform.logoClassName}
                />
                <span className="font-semibold">{platform.label}</span>
              </div>
              <div className="divide-y">
                {platform.variants.map((variant) =>
                  interactive ? (
                    <button
                      key={variant.key}
                      onClick={() => onDownload(variant.key)}
                      className="hover:bg-muted/50 flex w-full items-center justify-between px-5 py-3.5 text-sm transition-colors"
                    >
                      <span>{variant.label}</span>
                      <DownloadSimpleIcon
                        size={16}
                        weight="bold"
                        className="text-muted-foreground"
                      />
                    </button>
                  ) : (
                    <div
                      key={variant.key}
                      className="flex w-full items-center justify-between px-5 py-3.5 text-sm"
                    >
                      <span>{variant.label}</span>
                      <DownloadSimpleIcon
                        size={16}
                        weight="bold"
                        className="text-muted-foreground"
                      />
                    </div>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <a
        href="/changelog"
        className="text-primary hover:text-primary/80 mt-5 inline-flex items-center gap-1 text-sm font-medium transition-colors"
      >
        View changelog
        <ArrowRightIcon size={14} weight="bold" />
      </a>
    </div>
  );
}
