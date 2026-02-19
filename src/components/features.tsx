"use client";

import { AutoplayVideo } from "@/components/autoplay-video";

const FEATURE_ROWS = [
  {
    title: "Policy configuration built for real courses",
    details:
      "Configure the required file or files to be compiled, compiler flags, linker flags, libraries, and any external files each submission depends on. Define test cases for every assignment so each submission is validated against the exact requirements.",
    videoSrc: "/videos/feature-policy.mp4",
  },
  {
    title: "Mass compilation and grading at scale",
    details:
      "Run mass compile and grade workflows across the full class in one pass. autOScan applies the configured policy to every submission and returns consistent results for fast review.",
    videoSrc: "/videos/feature-batch.mp4",
  },
  {
    title: "Code similarity review with side by side evidence",
    details:
      "Compare suspicious submissions with a focused side by side view that highlights overlap. Prioritize high risk pairs and inspect evidence without switching tools.",
    videoSrc: "/videos/feature-similarity.mp4",
  },
  {
    title: "Multi process execution for concurrent lab workflows",
    details:
      "Run and validate submissions that require multiple processes running at the same time. autOScan supports concurrent lab scenarios such as semaphores, sockets, and message queues so behavior can be checked in realistic execution conditions.",
    videoSrc: "/videos/feature-multiprocess.mp4",
  },
];

function FeatureMedia({
  title,
  videoSrc,
}: {
  title: string;
  videoSrc: string;
}) {
  return (
    <div className="bg-muted/45 relative aspect-[16/10] w-full overflow-hidden rounded-2xl">
      <AutoplayVideo
        src={videoSrc}
        poster="/screenshots/autoscan.png"
        ariaLabel={`${title} video preview`}
        fallbackAlt={`${title} screenshot`}
        className="h-full w-full object-cover"
        fallbackClassName="h-full w-full object-cover"
        preload="metadata"
        loadWhenVisible
      />
      <span className="absolute top-3 right-3 z-30 rounded-full bg-black/70 px-2 py-1 text-xs text-white">
        Quick peek
      </span>
    </div>
  );
}

export function Features() {
  return (
    <section
      id="features"
      className="-mt-16 pt-16 pb-24 md:-mt-24 md:pt-24 md:pb-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-foreground text-center text-4xl font-medium tracking-tight md:text-5xl">
          Core capabilities
        </h2>
        <p className="text-foreground mx-auto mt-4 max-w-3xl text-center text-lg leading-relaxed md:text-xl">
          A focused workflow for policy control, batch grading, similarity review, and multi process execution.
        </p>

        <div className="mt-16 space-y-14">
          {FEATURE_ROWS.map((feature, index) => {
            const reverse = index % 2 !== 0;
            return (
              <article
                key={feature.title}
                className={`grid items-center gap-8 py-2 md:py-4 lg:gap-16 ${
                  reverse
                    ? "lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.95fr)]"
                    : "lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.25fr)]"
                }`}
              >
                <div
                  className={
                    reverse
                      ? "order-2 min-w-0 lg:order-2"
                      : "order-2 min-w-0 lg:order-1"
                  }
                >
                  <h3 className="text-foreground text-3xl font-medium tracking-tight md:text-4xl">
                    {feature.title}
                  </h3>
                  <p className="text-foreground mt-4 text-lg leading-relaxed md:text-xl">
                    {feature.details}
                  </p>
                </div>

                <div
                  className={
                    reverse
                      ? "order-1 min-w-0 lg:order-1"
                      : "order-1 min-w-0 lg:order-2"
                  }
                >
                  <FeatureMedia
                    title={feature.title}
                    videoSrc={feature.videoSrc}
                  />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
