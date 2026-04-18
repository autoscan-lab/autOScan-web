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

        <div className="text-foreground mt-12 space-y-8 text-base leading-relaxed opacity-85">
          <div>
            <h2 className="text-foreground mb-3 text-xl font-medium opacity-100">
              What is autOScan?
            </h2>
            <p>
              autOScan is a private grading tool for university operating systems lab
              assignments. It is used exclusively by teaching staff to compile and
              analyse student code submissions.
            </p>
          </div>

          <div>
            <h2 className="text-foreground mb-3 text-xl font-medium opacity-100">
              Data we process
            </h2>
            <p>
              When you interact with the autOScan WhatsApp agent, we process the
              following data:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Your WhatsApp phone number, to route responses back to you.</li>
              <li>
                Files you send (zip archives containing student code), solely to
                run the grading pipeline.
              </li>
              <li>
                Temporary session state (current assignment, grading results),
                held in memory for up to two hours and then discarded.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-foreground mb-3 text-xl font-medium opacity-100">
              How we use your data
            </h2>
            <p>
              Data is used only to provide the grading service. We do not sell,
              share, or use your data for advertising or any purpose beyond
              processing your grading request.
            </p>
          </div>

          <div>
            <h2 className="text-foreground mb-3 text-xl font-medium opacity-100">
              Data retention
            </h2>
            <p>
              Uploaded files are deleted immediately after grading completes.
              Session data is discarded after two hours of inactivity. Generated
              Excel reports are stored on the server until the next grading session
              replaces them.
            </p>
          </div>

          <div>
            <h2 className="text-foreground mb-3 text-xl font-medium opacity-100">
              Third-party services
            </h2>
            <p>
              We use the following third-party services to operate autOScan:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>
                <span className="font-medium">Meta (WhatsApp Cloud API)</span> — to
                send and receive WhatsApp messages.
              </li>
              <li>
                <span className="font-medium">Groq</span> — to interpret natural
                language commands. Message text is sent to Groq for processing.
              </li>
              <li>
                <span className="font-medium">Fly.io</span> — to host the grading
                service infrastructure.
              </li>
              <li>
                <span className="font-medium">Cloudflare R2</span> — to store
                assignment configuration files.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-foreground mb-3 text-xl font-medium opacity-100">
              Contact
            </h2>
            <p>
              For any questions about this policy, contact us at{" "}
              <a
                href="mailto:felipetrejoslacayo2015@hotmail.com"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                felipetrejoslacayo2015@hotmail.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
