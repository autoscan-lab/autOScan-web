"use client";

import * as React from "react";
import { PlayCircleIcon } from "@phosphor-icons/react";

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
  const videoRef = React.useRef<HTMLVideoElement | null>(null);
  const [videoUnavailable, setVideoUnavailable] = React.useState(false);
  const [autoplayBlocked, setAutoplayBlocked] = React.useState(false);
  const [shouldLoad, setShouldLoad] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement || videoUnavailable) {
      return;
    }

    videoElement.muted = true;
    videoElement.defaultMuted = true;
    videoElement.playsInline = true;
    videoElement.setAttribute("playsinline", "");
    videoElement.setAttribute("webkit-playsinline", "true");
  }, [videoUnavailable]);

  React.useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement || videoUnavailable) {
      return;
    }

    if (typeof IntersectionObserver === "undefined") {
      setShouldLoad(true);
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
        }

        setIsVisible(entry.isIntersecting && entry.intersectionRatio >= 0.35);
      },
      {
        threshold: [0, 0.35, 0.75],
        rootMargin: "120px 0px",
      }
    );

    observer.observe(videoElement);

    return () => observer.disconnect();
  }, [videoUnavailable]);

  React.useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement || !shouldLoad || videoUnavailable) {
      return;
    }

    videoElement.load();
  }, [shouldLoad, videoUnavailable]);

  const ensurePlayback = React.useCallback(() => {
    const videoElement = videoRef.current;
    if (!videoElement || !shouldLoad || videoUnavailable) {
      return;
    }

    if (!isVisible) {
      if (!videoElement.paused) {
        videoElement.pause();
      }
      return;
    }

    const playPromise = videoElement.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => setAutoplayBlocked(false))
        .catch(() => setAutoplayBlocked(true));
    }
  }, [isVisible, shouldLoad, videoUnavailable]);

  React.useEffect(() => {
    ensurePlayback();
  }, [ensurePlayback]);

  if (videoUnavailable) {
    return (
      <div className="bg-muted/45 relative aspect-[16/10] w-full overflow-hidden rounded-2xl">
        <img
          src="/screenshots/autoscan.png"
          alt={`${title} screenshot`}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/15">
          <div className="rounded-full bg-black/45 p-3">
            <PlayCircleIcon size={34} weight="fill" className="text-white" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-muted/45 relative aspect-[16/10] w-full overflow-hidden rounded-2xl">
      <video
        ref={videoRef}
        className="h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload={shouldLoad ? "metadata" : "none"}
        poster="/screenshots/autoscan.png"
        aria-label={`${title} video preview`}
        onCanPlay={ensurePlayback}
        onLoadedData={ensurePlayback}
        onPlay={() => setAutoplayBlocked(false)}
        onError={() => setVideoUnavailable(true)}
        controls={autoplayBlocked}
        disablePictureInPicture
      >
        {shouldLoad ? <source src={videoSrc} type="video/mp4" /> : null}
      </video>
      <span className="absolute top-3 right-3 rounded-full bg-black/70 px-2 py-1 text-xs text-white">
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
