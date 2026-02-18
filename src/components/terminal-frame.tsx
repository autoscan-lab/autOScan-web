import { type ReactNode } from "react";

export function TerminalFrame({ children }: { children: ReactNode }) {
  return (
    <div className="overflow-hidden rounded-[20px] border border-white/[0.06] bg-[#070708] shadow-2xl shadow-black/40">
      <div className="flex items-center gap-2 border-b border-white/[0.06] bg-[#0a0a0c] px-5 py-3.5">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 font-mono text-xs text-slate-500">
          autoscan
        </span>
      </div>
      <div className="bg-[#070708]">{children}</div>
    </div>
  );
}
