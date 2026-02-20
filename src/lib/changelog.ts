export type ChangelogSection = {
  title: string;
  bullets?: string[];
  notes?: string[];
};

export type ChangelogRelease = {
  version: string;
  headline: string;
  latest?: boolean;
  summary?: string[];
  sections: ChangelogSection[];
};

export const STATIC_CHANGELOG: ChangelogRelease[] = [
  {
    version: "v3.1.0",
    latest: true,
    headline: "autOScan New Feature!",
    sections: [
      {
        title: "AI Detection",
        bullets: [
          "Detects AI usage per submission",
          "Uses same fingerprinting/comparison pipeline as the plagiarism feature",
          "The ai_dictionary.yaml contains the AI patterns",
        ],
      },
      {
        title: "New home page UI",
        bullets: ["Less informative help panel", "New text logo (cooler)"],
      },
    ],
  },
  {
    version: "v3.0.0",
    headline: "autOScan New Release",
    sections: [
      {
        title: "TUI refactor",
        bullets: [
          "Binary size reduced by ~1MB.",
          "Views and handlers are now split into subpackages under views/ for easier scaling/reading.",
          "Subpackages receive only the state they need (and return update results) instead of the full Model.",
        ],
      },
    ],
  },
  {
    version: "v2.4.0",
    headline: "autOScan New Feature",
    sections: [
      {
        title: "Similarity Detection",
        bullets: [
          "Side-by-side file comparison with highlighted matching spans",
          "Per-pair similarity metrics (Jaccard, per-function similarity, match counts)",
        ],
      },
    ],
  },
  {
    version: "v2.3.0",
    headline: "autOScan New Feature",
    sections: [
      {
        title: "Expected/Actual Output Comparison",
        bullets: [
          "git style diff viewer",
          "For single process tests, it automatically shows the diff between expected/actual",
          "For multi process scenarios, after streaming all of the output correctly it then shows the diff between expected/actual",
          "Red is for expected output, green for actual output",
        ],
      },
      {
        title: "Agents.md",
        bullets: [
          "When running 2 agents in parallel, agents.md is to let one agent provide feedback",
        ],
      },
      {
        title: "Policy Editor Refactor",
        bullets: [
          "Longest file in the codebase, there's not really a way to refactor without abstracting a lot/adding a bunch of different files \"per view/section\"",
          "Added helper functions to reduce repeated code chunks",
        ],
      },
    ],
  },
  {
    version: "v2.2.0",
    headline: "autOScan New Release",
    sections: [
      {
        title: "What changed?",
        bullets: ["Code cleanup, internal docs cleanup", "No changes to behavior"],
      },
    ],
  },
  {
    version: "v2.1.0",
    headline: "autOScan New Features!",
    sections: [
      {
        title: "Fix Max Concurrent Processes",
        bullets: [
          "Fixed resource exhaustion when compiling with maximum CPU workers",
          "If you're using a machine with limited resources, you can now not take up all of its resources by accident.",
        ],
      },
      {
        title: "Fix Compilation Order",
        bullets: [
          "When compiling with single/multi process policies and libraries, the order wasn't compatible with Linux.",
        ],
      },
      {
        title: "Major code cleanup",
        bullets: [
          "A lot of dead code from earlier versions still persisted in the codebase",
          "Removed around 850 ish lines of code",
          "Bundle size around 8MB for both MacOS and Linux (Windows still not tested)",
        ],
      },
    ],
  },
  {
    version: "v2.0.0",
    headline: "autOScan New Features!",
    sections: [
      {
        title: "Real-Time Streaming Output (Multi-Process)",
        bullets: [
          "Multi-process execution now streams output in real-time to each process box",
          "No waiting for all processes to finish to see results",
        ],
      },
      {
        title: "Manual Process Termination",
        bullets: [
          "Press Ctrl+K during execution to send SIGKILL to all processes",
          "Useful for deadlocks or long-running processes without timeouts",
        ],
      },
      {
        title: "Mode-Based Policy Editor",
        bullets: [
          "Clear separation between Single-Process and Multi-Process modes",
          "Toggle execution mode with E/Enter in the editor",
          "Each mode shows only relevant configuration options",
        ],
      },
      {
        title: "Scrollable Output Boxes",
        bullets: [
          "Both single-process and multi-process output boxes are now scrollable",
          "Navigate with up/down to select a box, Enter to focus, up/down to scroll, Esc to exit",
          "Consistent box heights prevent layout shifts",
        ],
      },
      {
        title: "Simplified Single-Process Policy",
        bullets: [
          "Removed required_files and compile.output fields",
          "Now uses source_file - binary name is auto-derived (e.g., lab03.c -> lab03)",
          "Cleaner policy configuration",
        ],
      },
    ],
  },
  {
    version: "v1.2.0",
    headline: "Release Notes - autOScan v1.2.0",
    sections: [
      {
        title: "What's New",
      },
      {
        title: "Enhanced Table View",
        bullets: [
          "Colored cursor indicator (cyan) for the selected row",
          "Better visual separation with consistent padding",
        ],
      },
      {
        title: "Improved Banned Functions View",
        bullets: [
          "Fixed shifting issue when expanding/collapsing banned function calls",
          "Gray styling for expanded hit lines",
          "Automatic truncation of long banned call snippets to one line",
        ],
      },
      {
        title: "Export Improvements",
        bullets: [
          "Removed Markdown export option",
          "Export now supports JSON and CSV only",
          "Redesigned export view with separate sections for each format",
          "Fixed alignment issues in export selection",
        ],
      },
      {
        title: "UI/UX Enhancements",
        bullets: [
          "Manage Policies view: separated \"Edit Banned Functions\" and \"Policies\" into distinct sections",
          "Policy Select view: added policy details panel with file, flags, output, and required files",
          "Updated status labels: changed \"PASS\" to \"CHECK\" for submissions requiring further testing",
        ],
      },
    ],
  },
  {
    version: "v1.1.0",
    headline: "autOScan",
    sections: [
      {
        title: "Fixes",
        bullets: [
          "Fixed UI flickering",
          "Shows warning for when a file doesn't match the required file name",
        ],
      },
    ],
  },
  {
    version: "v1.0.1",
    headline: "v1.0.1 - autOScan",
    summary: ["First release of autOScan."],
    sections: [
      {
        title: "Features",
        bullets: [
          "Interactive TUI for grading C lab submissions",
          "GCC compilation with configurable flags and timeout",
          "Banned function detection using tree-sitter",
          "Export reports to Markdown, JSON, or CSV",
          "Policy files for per-lab configuration",
        ],
      },
      {
        title: "Platform",
        notes: ["macOS (Apple Silicon). Linux support untested."],
      },
    ],
  },
];
export async function getChangelogEntries(): Promise<ChangelogRelease[]> {
  return STATIC_CHANGELOG;
}
