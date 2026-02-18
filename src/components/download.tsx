"use client";

import { signIn, useSession } from "next-auth/react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const PLATFORMS = [
  {
    key: "darwin-arm64",
    label: "macOS",
    arch: "Apple Silicon (arm64)",
    available: true,
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
      </svg>
    ),
  },
  {
    key: "linux-amd64",
    label: "Linux",
    arch: "x86_64 (amd64)",
    available: true,
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489a.424.424 0 00-.11.135c-.26.268-.45.6-.663.839-.199.199-.485.267-.797.4-.313.136-.658.269-.864.68-.09.189-.136.394-.132.602 0 .199.027.4.055.536.058.399.116.728.04.97-.249.68-.28 1.145-.106 1.484.174.334.535.47.94.601.81.2 1.91.135 2.774.6.926.466 1.866.67 2.616.47.526-.116.97-.464 1.208-.946.587-.003 1.23-.269 2.26-.334.699-.058 1.574.267 2.577.2.025.134.063.198.114.333l.003.003c.391.778 1.113 1.368 1.884 1.43.868.07 1.726-.36 2.467-.77.74-.4 1.5-.867 2.321-.953.416-.044.852.001 1.245.169.39-.04.746-.17 1.03-.398.285-.228.49-.586.6-1.02.105-.42.166-.912.149-1.415-.014-.392-.037-.79-.074-1.193.6-.174 1.1-.498 1.42-.93.3-.4.48-.97.402-1.56-.037-.27-.113-.538-.222-.794l-.007-.014c-.37-.736-.874-1.38-1.432-1.87a.534.534 0 00-.064-.087 8.4 8.4 0 00-1.142-.92c-.535-.345-1.063-.588-1.419-.658-.45-.085-.682-.077-.866.012l-.031.02c-.29-.17-.59-.329-.9-.475l-.002-.001a9.97 9.97 0 00-2.394-.876c-.39-.101-.76-.181-1.11-.244-.69-1.243-1.164-2.62-1.464-3.975l-.018-.084c-.275-1.268-.377-2.515-.24-3.52.105-.758.333-1.25.71-1.53a.5.5 0 00.02-.014c.236-.166.47-.256.732-.291l.002-.001a1.81 1.81 0 01.272-.02c.086 0 .174.005.265.012l.009.001c.09.007.18.021.27.035l.089.014c.073.011.144.025.215.04l.092.02c.059.012.116.026.173.042l.079.02.148.042.068.02.135.047.061.02.12.047.058.025.12.05.048.021c.066.03.133.067.2.1l.046.022c.105.06.21.13.316.2l.035.023c.063.042.128.087.192.137l.03.022c.034.027.067.053.1.08l.015.014c.085.072.17.146.25.222.04.037.08.077.12.117.04.04.072.081.105.122l.04.047c.04.05.075.1.11.15 1.26-1.56.397-5.986-.397-5.986-.402 0-.812.008-1.21.051z" />
      </svg>
    ),
  },
  {
    key: "windows-amd64",
    label: "Windows",
    arch: "x86_64 (amd64)",
    available: false,
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
      </svg>
    ),
  },
] as const;

const ease = [0.22, 1, 0.36, 1] as const;

export function Download() {
  const { data: session, status } = useSession();
  const [allowed, setAllowed] = useState<boolean | null>(null);

  useEffect(() => {
    if (session?.user?.email) {
      fetch("/api/download/check")
        .then((r) => r.json())
        .then((d) => setAllowed(d.allowed))
        .catch(() => setAllowed(false));
    }
  }, [session]);

  const handleDownload = (platform: string) => {
    window.location.href = `/api/download/${platform}`;
  };

  return (
    <section id="download" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute left-[15%] top-1/3 h-[500px] w-[600px] rounded-full bg-cyan-500/[0.05] blur-[140px]" />

      <div className="relative mx-auto max-w-6xl px-6 sm:px-10">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease }}
        >
          <h2 className="text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl">
            Get started
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-slate-400">
            Download the binary for your platform. No dependencies required.
          </p>
          <span className="mt-3 inline-block rounded-full border border-white/[0.06] bg-white/[0.03] px-4 py-1.5 font-mono text-xs text-slate-400">
            v3.1.0
          </span>
        </motion.div>

        {/* Not signed in */}
        {status !== "loading" && !session && (
          <motion.div
            className="mx-auto max-w-md text-center"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease }}
          >
            <div className="rounded-[28px] border border-white/[0.06] bg-white/[0.02] p-10">
              <p className="mb-6 text-slate-400">
                Sign in to access downloads.
              </p>
              <button
                onClick={() => signIn()}
                className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-8 py-3 text-sm font-medium text-black transition-all duration-200 hover:bg-cyan-400"
              >
                Sign in to download
              </button>
            </div>
          </motion.div>
        )}

        {/* Signed in but not allowed */}
        {session && allowed === false && (
          <motion.div
            className="mx-auto max-w-md text-center"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
          >
            <div className="rounded-[28px] border border-white/[0.06] bg-white/[0.02] p-10">
              <p className="text-slate-400">
                Your account doesn&apos;t have download access yet. Please
                contact the administrator to request access.
              </p>
            </div>
          </motion.div>
        )}

        {/* Loading check */}
        {session && allowed === null && (
          <div className="flex justify-center py-12">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-cyan-500 border-t-transparent" />
          </div>
        )}

        {/* Signed in and allowed */}
        {session && allowed === true && (
          <motion.div
            className="grid grid-cols-1 gap-6 sm:grid-cols-3"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          >
            {PLATFORMS.map((platform) => (
              <motion.div
                key={platform.key}
                className={`group relative rounded-[28px] border border-white/[0.06] bg-white/[0.02] p-8 text-center transition-colors duration-300 sm:p-10 ${
                  platform.available
                    ? "hover:border-white/[0.12] hover:bg-white/[0.04]"
                    : "opacity-50"
                }`}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: {
                    opacity: platform.available ? 1 : 0.5,
                    y: 0,
                    transition: { duration: 0.5, ease },
                  },
                }}
              >
                {!platform.available && (
                  <span className="absolute right-4 top-4 rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1 font-mono text-[10px] text-slate-500 uppercase">
                    Coming soon
                  </span>
                )}

                <div className="mb-4 flex justify-center text-slate-300">
                  {platform.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {platform.label}
                </h3>
                <p className="mt-1 font-mono text-xs text-slate-500">
                  {platform.arch}
                </p>

                {platform.available ? (
                  <button
                    onClick={() => handleDownload(platform.key)}
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-cyan-500 px-6 py-2.5 text-sm font-medium text-black transition-all duration-200 hover:bg-cyan-400"
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
                    Download
                  </button>
                ) : (
                  <div className="mt-6 inline-block rounded-full border border-white/[0.06] px-6 py-2.5 text-sm text-slate-600">
                    Unavailable
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
