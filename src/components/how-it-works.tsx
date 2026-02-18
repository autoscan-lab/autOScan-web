"use client";

import { motion } from "framer-motion";

const STEPS = [
  {
    number: "01",
    title: "Create a policy",
    description:
      "Define your compiler flags, source files, test cases, banned functions, and library files in a YAML policy. Single-process or multi-process — your call.",
  },
  {
    number: "02",
    title: "Select submissions",
    description:
      "Use the interactive folder browser to pick the directory containing student submissions. Each subfolder is treated as one submission.",
  },
  {
    number: "03",
    title: "Review results",
    description:
      "See pass, fail, and banned statuses at a glance. Run individual submissions with custom arguments, compare outputs against expected results with highlighted diffs.",
  },
  {
    number: "04",
    title: "Detect & export",
    description:
      "Check similarity scores across submissions, flag potential AI-generated code, then export everything to JSON or CSV.",
  },
] as const;

const ease = [0.22, 1, 0.36, 1] as const;

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 sm:py-32">
      {/* Subtle glow */}
      <div className="pointer-events-none absolute right-[10%] top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-purple-500/[0.05] blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-6 sm:px-10">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease }}
        >
          <h2 className="text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl">
            From folder to grades in seconds
          </h2>
          <p className="mt-4 max-w-xl text-lg text-slate-400">
            A four-step workflow that handles the heavy lifting so you can focus
            on teaching.
          </p>
        </motion.div>

        <div className="space-y-6">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.number}
              className="group flex gap-6 rounded-[28px] border border-white/[0.06] bg-white/[0.02] p-8 transition-colors duration-300 hover:border-white/[0.12] hover:bg-white/[0.04] sm:gap-10 sm:p-10"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease }}
            >
              <div className="shrink-0">
                <span className="font-mono text-4xl font-bold text-cyan-500/30 sm:text-5xl">
                  {step.number}
                </span>
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-xl font-semibold tracking-[-0.01em] text-white sm:text-2xl">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400 sm:text-base">
                  {step.description}
                </p>
                {/* Media placeholder — swap with screenshot or video */}
                <div className="mt-6 flex h-48 items-center justify-center rounded-2xl border border-dashed border-white/[0.08] bg-white/[0.01] sm:h-56">
                  <span className="font-mono text-xs text-slate-600">
                    screenshot or video placeholder
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
