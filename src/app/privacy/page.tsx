import { ArrowLeftIcon } from "@phosphor-icons/react/dist/ssr";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "Privacy Policy — autOScan",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="mx-auto max-w-3xl px-6 py-16 md:py-20">
        <a
          href="/"
          className="text-primary hover:text-primary/80 inline-flex items-center gap-1 text-sm font-medium transition-colors"
        >
          <ArrowLeftIcon size={14} weight="bold" />
          Go back
        </a>

        <div className="mt-6 flex items-center gap-3">
          <Badge variant="secondary" className="rounded-full px-3 py-1 font-medium">
            Legal
          </Badge>
        </div>

        <h1 className="text-foreground mt-4 text-4xl font-medium tracking-tight md:text-5xl">
          Privacy Policy
        </h1>
        <p className="text-foreground mt-3 text-base opacity-60">
          Last updated: April 18, 2026
        </p>

        <div className="text-foreground mt-12 space-y-6 text-base leading-relaxed opacity-85">
          <p>
            autOScan is a tool for compiling and analysing C code submissions.
            The autOScan agent lets you send a zip file over WhatsApp, runs the
            code through a grading pipeline, and sends back a report.
          </p>
          <p>
            We do not collect, store, or share personal data. Uploaded files are
            processed to produce the report and deleted immediately after.
            No data is used for any other purpose.
          </p>
          <p>
            Questions? Reach me at{" "}
            <a
              href="mailto:felipetrejoslacayo@gmail.com"
              className="text-primary hover:text-primary/80 transition-colors"
            >
              felipetrejoslacayo@gmail.com
            </a>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
