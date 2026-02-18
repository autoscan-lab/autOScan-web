"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export function SignInButton() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="h-9 w-24 animate-pulse rounded-full bg-white/[0.06]" />
    );
  }

  if (session?.user) {
    return (
      <button
        onClick={() => signOut()}
        className="flex items-center gap-2 rounded-full border border-white/[0.1] px-4 py-2 text-sm text-slate-300 transition-all duration-200 hover:border-white/[0.2] hover:text-white"
      >
        <span className="max-w-[120px] truncate">{session.user.name ?? session.user.email}</span>
        <svg
          className="h-4 w-4 shrink-0 text-slate-500"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
          />
        </svg>
      </button>
    );
  }

  return (
    <button
      onClick={() => signIn()}
      className="rounded-full border border-white/[0.1] px-5 py-2 text-sm font-medium text-slate-300 transition-all duration-200 hover:border-white/[0.2] hover:text-white"
    >
      Sign in
    </button>
  );
}
