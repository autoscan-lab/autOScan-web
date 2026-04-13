import { ArrowLeftIcon } from "@phosphor-icons/react/dist/ssr";

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import type { ChangelogRelease } from "@/lib/changelog";

export function ChangelogTimeline({
  releases,
}: {
  releases: ChangelogRelease[];
}) {
  return (
    <main className="min-h-screen bg-background">
      <section className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <header className="max-w-3xl">
          <a
            href="/"
            className="text-primary hover:text-primary/80 inline-flex items-center gap-1 text-sm font-medium transition-colors"
          >
            <ArrowLeftIcon size={14} weight="bold" />
            Go back
          </a>

          <div className="mt-6 flex items-center gap-3">
            <Badge
              variant="secondary"
              className="rounded-full px-3 py-1 font-medium"
            >
              Changelog
            </Badge>
            <span className="text-foreground text-xs tracking-wide opacity-80">
              {releases.length} releases
            </span>
          </div>

          <h1 className="text-foreground mt-4 text-4xl font-medium tracking-tight md:text-5xl">
            Release history
          </h1>
          <p className="text-foreground mt-3 text-base leading-relaxed opacity-85 md:text-lg">
            Every shipped change, newest first.
          </p>
        </header>

        <div className="relative mt-10 md:mt-12">
          <span className="bg-border absolute top-9 bottom-9 left-3 w-px" />
          <div className="space-y-6 md:space-y-7">
            {releases.map((release) => (
              <div key={release.version} className="relative pl-10 md:pl-11">
                <span className="bg-foreground ring-background absolute top-9 left-3 h-2.5 w-2.5 -translate-x-1/2 rounded-full ring-4" />
                <article className="bg-card rounded-2xl border p-6 md:p-8">
                  <div className="flex flex-wrap items-center gap-3">
                    <h2 className="text-foreground text-2xl font-semibold tracking-tight md:text-3xl">
                      {release.version}
                    </h2>
                    {release.latest && (
                      <Badge variant="secondary" className="rounded-full">
                        Latest
                      </Badge>
                    )}
                  </div>

                  <p className="text-foreground mt-4 text-3xl leading-tight font-medium tracking-tight md:text-4xl">
                    {release.headline}
                  </p>

                  {release.summary && release.summary.length > 0 && (
                    <div className="mt-4 space-y-2">
                      {release.summary.map((line) => (
                        <p
                          key={`${release.version}-${line}`}
                          className="text-foreground text-base leading-relaxed opacity-90"
                        >
                          {line}
                        </p>
                      ))}
                    </div>
                  )}

                  <Separator className="my-6 md:my-7" />

                  <div className="space-y-7">
                    {release.sections.map((section) => (
                      <section key={`${release.version}-${section.title}`}>
                        <h3 className="text-foreground text-2xl font-medium tracking-tight md:text-3xl">
                          {section.title}
                        </h3>

                        {section.notes && section.notes.length > 0 && (
                          <div className="mt-3 space-y-2">
                            {section.notes.map((note) => (
                              <p
                                key={`${release.version}-${section.title}-${note}`}
                                className="text-foreground text-base leading-relaxed opacity-90 md:text-lg"
                              >
                                {note}
                              </p>
                            ))}
                          </div>
                        )}

                        {section.bullets && section.bullets.length > 0 && (
                          <ul className="text-foreground marker:text-foreground mt-3 ml-5 list-disc space-y-2 text-base leading-relaxed md:text-lg">
                            {section.bullets.map((bullet) => (
                              <li
                                key={`${release.version}-${section.title}-${bullet}`}
                              >
                                {bullet}
                              </li>
                            ))}
                          </ul>
                        )}
                      </section>
                    ))}
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
