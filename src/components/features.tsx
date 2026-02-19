"use client";

import { useState } from "react";
import { PlayCircle } from "@phosphor-icons/react";

const FEATURE_ROWS = [
  {
    title: "Batch grading in minutes",
    details:
      "Run compile and grade jobs across large submission sets with one command. Each run produces consistent output for fast review.",
    image: "/screenshots/autoscan.png",
    imageAlt: "Batch grading view in autOScan",
    videoSrc: "/videos/feature-batch.mp4",
  },
  {
    title: "Policy checks with clear reports",
    details:
      "Define required headers, forbidden functions, and compile flags in YAML. autOScan checks each file and reports every rule result.",
    image: "/screenshots/autoscan.png",
    imageAlt: "Policy report preview in autOScan",
    videoSrc: "/videos/feature-policy.mp4",
  },
  {
    title: "Similarity review for suspicious pairs",
    details:
      "Compare submissions side by side and inspect overlap in one place so you can focus on the highest risk cases first.",
    image: "/screenshots/autoscan.png",
    imageAlt: "Similarity review screen in autOScan",
    videoSrc: "/videos/feature-similarity.mp4",
  },
  {
    title: "AI signal checks you can inspect",
    details:
      "Use entropy and style signals to flag unusual files, then inspect evidence directly in the same workflow.",
    image: "/screenshots/autoscan.png",
    imageAlt: "AI signal analysis view in autOScan",
    videoSrc: "/videos/feature-ai.mp4",
  },
];

function FeatureMedia({
  title,
  image,
  imageAlt,
  videoSrc,
}: {
  title: string;
  image: string;
  imageAlt: string;
  videoSrc: string;
}) {
  const [videoUnavailable, setVideoUnavailable] = useState(false);

  if (videoUnavailable) {
    return (
      <div className="bg-muted/45 relative min-h-[260px] overflow-hidden rounded-2xl md:min-h-[360px]">
        <img src={image} alt={imageAlt} className="h-full w-full object-cover" />
        <div className="absolute inset-0 flex items-center justify-center bg-black/35">
          <div className="rounded-full bg-black/45 p-3">
            <PlayCircle size={34} weight="fill" className="text-white" />
          </div>
        </div>
        <span className="absolute top-3 right-3 rounded-full bg-black/70 px-2 py-1 text-xs text-white">
          Video soon
        </span>
      </div>
    );
  }

  return (
    <div className="bg-muted/45 relative min-h-[260px] overflow-hidden rounded-2xl md:min-h-[360px]">
      <video
        className="h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster={image}
        onError={() => setVideoUnavailable(true)}
        aria-label={`${title} video preview`}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
      <span className="absolute top-3 right-3 rounded-full bg-black/70 px-2 py-1 text-xs text-white">
        Quick peek
      </span>
    </div>
  );
}

export function Features() {
  return (
    <section id="features" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-4xl font-bold tracking-tight md:text-5xl">
          Feature highlights
        </h2>
        <p className="text-muted-foreground mx-auto mt-4 max-w-3xl text-center text-lg leading-relaxed md:text-xl">
          Each feature includes a side preview slot ready for tutorial videos.
        </p>

        <div className="mt-16 space-y-14">
          {FEATURE_ROWS.map((feature, index) => {
            const reverse = index % 2 !== 0;
            return (
              <article
                key={feature.title}
                className="grid items-center gap-8 py-2 md:py-4 lg:grid-cols-2 lg:gap-16"
              >
                <div
                  className={
                    reverse ? "order-2 lg:order-2" : "order-2 lg:order-1"
                  }
                >
                  <h3 className="text-3xl font-semibold tracking-tight md:text-4xl">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground mt-4 text-lg leading-relaxed md:text-xl">
                    {feature.details}
                  </p>
                </div>

                <div
                  className={
                    reverse ? "order-1 lg:order-1" : "order-1 lg:order-2"
                  }
                >
                  <FeatureMedia
                    title={feature.title}
                    image={feature.image}
                    imageAlt={feature.imageAlt}
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
