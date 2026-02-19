"use client";

import * as React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { Sparkle, DownloadSimple, PlayCircle } from "@phosphor-icons/react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import DecryptedText from "@/components/DecryptedText";

const GLASS_BUTTON_CLASS =
  "rounded-full bg-zinc-100/95 px-4 text-black transition hover:bg-zinc-200/95";

function Nav() {
  const { data: session, status } = useSession();

  return (
    <nav className="fixed top-0 right-0 left-0 z-50">
      <div className="w-full px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="/" className="font-mono text-lg font-bold tracking-tight text-white">
            autOScan
          </a>

          <div className="flex items-center gap-2">
            <div className="rounded-full">
              <ThemeToggle />
            </div>

            {status === "loading" ? (
              <div className="h-8 w-24 animate-pulse rounded-xl bg-white/20" />
            ) : session?.user ? (
              <>
                <img
                  src={session.user.image ?? "/logos/profile.svg"}
                  alt="Profile image"
                  onError={(event) => {
                    event.currentTarget.src = "/logos/profile.svg";
                  }}
                  className="h-8 w-8 rounded-full border border-white/45 object-cover"
                />
                <a href="#download">
                  <Button size="sm" className={GLASS_BUTTON_CLASS}>
                    Download
                  </Button>
                </a>
                <Button
                  size="sm"
                  className={GLASS_BUTTON_CLASS}
                  onClick={() => signOut()}
                >
                  Sign Out
                </Button>
              </>
            ) : (
              <>
                <Button
                  size="sm"
                  className={GLASS_BUTTON_CLASS}
                  onClick={() => signIn("google")}
                >
                  Sign In
                </Button>
                <a href="#download">
                  <Button size="sm" className={GLASS_BUTTON_CLASS}>
                    Download
                  </Button>
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export function Hero() {
  const [heroVideoUnavailable, setHeroVideoUnavailable] = React.useState(false);

  return (
    <header className="relative overflow-hidden text-white">
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 bg-[url('/backgrounds/online-noise-gradient-02.jpg')] bg-cover bg-center opacity-65"
          style={{
            WebkitMaskImage:
              "linear-gradient(to bottom, black 0%, black 72%, transparent 100%)",
            maskImage:
              "linear-gradient(to bottom, black 0%, black 72%, transparent 100%)",
          }}
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/8 via-black/4 to-transparent"
          style={{
            WebkitMaskImage:
              "linear-gradient(to bottom, black 0%, black 78%, transparent 100%)",
            maskImage:
              "linear-gradient(to bottom, black 0%, black 78%, transparent 100%)",
          }}
        />
      </div>

      <Nav />
      <div className="h-16" />
      <div className="relative mx-auto max-w-6xl px-6 py-14 md:py-20 lg:py-28">
        <div className="mb-16 text-center">
          <Badge
            variant="secondary"
            className="mb-6 gap-1.5 bg-white/88 px-3 py-1.5 text-zinc-800"
          >
            <Sparkle size={14} weight="fill" />
            OS Lab Submission Grader
          </Badge>
          <h1 className="mx-auto mb-6 max-w-4xl scroll-m-20 text-center text-4xl !leading-tight font-bold tracking-tight [text-wrap:_balance] md:text-5xl lg:text-6xl">
            Batch compile, grade, and analyze C submissions with{" "}
            <DecryptedText
              text="autOScan"
              animateOn="view"
              sequential
              revealDirection="start"
              speed={90}
              className="text-black drop-shadow-[0_0_12px_rgba(0,0,0,0.22)]"
              encryptedClassName="text-black/45"
              parentClassName="inline-block"
            />
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-center text-base leading-relaxed text-white/90 md:text-lg lg:text-xl">
            Detect banned functions, find similarities, and flag AI patterns. A
            TUI application for grading at scale.
          </p>
          <div className="flex items-center justify-center gap-3">
            <a href="#download">
              <Button size="lg" className="gap-2 bg-black text-white hover:bg-black/85">
                <DownloadSimple size={18} weight="bold" />
                Download v3.1.0
              </Button>
            </a>
          </div>
        </div>

        <div className="bg-white/10 relative w-full overflow-hidden rounded-2xl border border-white/18 backdrop-blur-sm">
          {!heroVideoUnavailable ? (
            <video
              className="h-auto w-full object-contain"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              poster="/screenshots/autoscan.png"
              onError={() => setHeroVideoUnavailable(true)}
              aria-label="autOScan hero preview video"
            >
              <source src="/videos/hero-preview.mp4" type="video/mp4" />
            </video>
          ) : (
            <div className="relative">
              <img
                src="/screenshots/autoscan.png"
                alt="autOScan TUI showing the main menu with batch compilation, policy management, and settings"
                className="h-auto w-full object-contain"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/15">
                <div className="rounded-full bg-black/45 p-3">
                  <PlayCircle size={38} weight="fill" className="text-white" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
