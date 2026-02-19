"use client";

import * as React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { Sparkle, DownloadSimpleIcon } from "@phosphor-icons/react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import DecryptedText from "@/components/DecryptedText";
import Iridescence from "@/components/Iridescence";
import { AutoplayVideo } from "@/components/autoplay-video";

const GLASS_BUTTON_CLASS =
  "rounded-full bg-zinc-100 px-4 text-zinc-900 transition hover:bg-zinc-200";

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
                  onClick={() => signOut({ redirect: false })}
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
  const [iridescenceReady, setIridescenceReady] = React.useState(false);
  const handleIridescenceReady = React.useCallback(
    () => setIridescenceReady(true),
    []
  );

  return (
    <header className="relative overflow-hidden bg-[#0d0f14] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(120%_92%_at_50%_-8%,#76a8ff_0%,#4e79db_42%,#325ecb_78%,#2a55c0_100%)]" />
        <div
          className={`absolute inset-0 h-full w-full transition-opacity duration-500 ${
            iridescenceReady ? "opacity-100" : "opacity-0"
          }`}
        >
          <Iridescence
            color={[0.24, 0.44, 0.9]}
            speed={0.1}
            amplitude={0.08}
            mouseReact={false}
            onReady={handleIridescenceReady}
          />
        </div>
        <div
          className="absolute inset-0 bg-[radial-gradient(110%_80%_at_50%_4%,rgba(120,170,255,0.14),transparent_62%)]"
          style={{
            WebkitMaskImage:
              "linear-gradient(to bottom, black 0%, black 88%, transparent 100%)",
            maskImage:
              "linear-gradient(to bottom, black 0%, black 88%, transparent 100%)",
          }}
        />
        <div className="absolute inset-x-0 bottom-0 h-[38rem] bg-gradient-to-b from-transparent via-transparent to-background md:h-[50rem]" />
      </div>

      <Nav />
      <div className="h-16" />
      <div className="relative mx-auto max-w-6xl px-6 py-14 md:py-20 lg:py-28">
        <div className="mb-16 text-center">
          <Badge
            variant="secondary"
            className="mb-6 gap-1.5 border border-white/20 bg-white/14 px-3 py-1.5 text-white"
          >
            <Sparkle size={14} weight="fill" />
            OS Lab Submission Grader
          </Badge>
          <h1 className="mx-auto mb-6 max-w-4xl scroll-m-20 text-center text-4xl !leading-tight font-medium tracking-tight text-white [text-wrap:_balance] md:text-5xl lg:text-6xl">
            Batch compile, grade, and analyze C submissions with{" "}
            <DecryptedText
              text="autOScan"
              animateOn="view"
              sequential
              revealDirection="start"
              speed={90}
              className="text-white font-medium"
              encryptedClassName="text-white/65"
              parentClassName="inline-block"
            />
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-center text-base leading-relaxed text-white md:text-lg lg:text-xl">
            Detect banned functions, find similarities, and flag AI patterns. A
            TUI application for grading at scale.
          </p>
          <div className="flex items-center justify-center gap-3">
            <a href="#download">
              <Button
                size="lg"
                className="gap-2 bg-black text-white hover:bg-zinc-900"
              >
                <DownloadSimpleIcon size={18} weight="bold" />
                Download v3.1.0
              </Button>
            </a>
          </div>
        </div>

        <div className="bg-white/10 relative w-full overflow-hidden rounded-2xl border border-white/18 backdrop-blur-sm">
          <AutoplayVideo
            src="/videos/hero-preview.mp4"
            poster="/screenshots/autoscan.png"
            ariaLabel="autOScan hero preview video"
            fallbackAlt="autOScan TUI showing the main menu with batch compilation, policy management, and settings"
            className="h-auto w-full object-contain"
            fallbackClassName="h-auto w-full object-contain"
            preload="auto"
          />
        </div>
      </div>
    </header>
  );
}
