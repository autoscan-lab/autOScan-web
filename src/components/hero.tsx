"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TerminalFrame } from "./terminal-frame";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-12 sm:pb-32 sm:pt-20">
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[10%] top-[20%] h-[500px] w-[600px] rounded-full bg-cyan-500/[0.07] blur-[120px]" />
        <div className="absolute right-[5%] top-[10%] h-[400px] w-[500px] rounded-full bg-purple-500/[0.05] blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 sm:px-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
        >
          <p className="mb-4 font-mono text-sm tracking-widest text-cyan-400 uppercase">
            OS Lab Submission Grader
          </p>
          <h1 className="text-5xl font-semibold tracking-[-0.03em] text-white sm:text-7xl lg:text-8xl">
            autOScan
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400 sm:text-xl">
            Batch compile, grade, and analyze C lab submissions from the
            terminal. Detect banned functions, find similarities, and flag AI
            patterns — all in one tool.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <a
              href="#download"
              className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-8 py-3 text-sm font-medium text-black transition-all duration-200 hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
              Download v3.1.0
            </a>
          </div>
        </motion.div>

        <motion.div
          className="mx-auto mt-16 max-w-4xl"
          initial={{ opacity: 0, y: 48 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease }}
        >
          <TerminalFrame>
            <Image
              src="/screenshots/autoscan.png"
              alt="autOScan TUI showing the main menu with batch compilation, policy management, and settings"
              width={1024}
              height={640}
              priority
              className="w-full"
            />
          </TerminalFrame>
        </motion.div>
      </div>
    </section>
  );
}
