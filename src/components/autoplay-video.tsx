"use client";

import * as React from "react";
import { PlayCircleIcon } from "@phosphor-icons/react";

import { cn } from "@/lib/utils";

type AutoplayVideoProps = {
  src: string;
  poster: string;
  ariaLabel: string;
  fallbackAlt: string;
  className?: string;
  fallbackClassName?: string;
  preload?: "none" | "metadata" | "auto";
  loadWhenVisible?: boolean;
};

export function AutoplayVideo({
  src,
  poster,
  ariaLabel,
  fallbackAlt,
  className,
  fallbackClassName,
  preload = "metadata",
  loadWhenVisible = false,
}: AutoplayVideoProps) {
  const videoRef = React.useRef<HTMLVideoElement | null>(null);
  const [videoUnavailable, setVideoUnavailable] = React.useState(false);
  const [showTapToPlay, setShowTapToPlay] = React.useState(false);
  const [shouldLoad, setShouldLoad] = React.useState(!loadWhenVisible);
  const [isVisible, setIsVisible] = React.useState(!loadWhenVisible);

  const tryPlay = React.useCallback(
    (fromUserGesture = false) => {
      const videoElement = videoRef.current;
      if (!videoElement || videoUnavailable || !shouldLoad) {
        return;
      }

      if (!fromUserGesture && loadWhenVisible && !isVisible) {
        return;
      }

      const playPromise = videoElement.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setShowTapToPlay(false))
          .catch(() => {
            if (!fromUserGesture) {
              setShowTapToPlay(true);
            }
          });
      }
    },
    [isVisible, loadWhenVisible, shouldLoad, videoUnavailable]
  );

  React.useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement || videoUnavailable) {
      return;
    }

    videoElement.muted = true;
    videoElement.defaultMuted = true;
    videoElement.playsInline = true;
    videoElement.setAttribute("playsinline", "");
    videoElement.setAttribute("webkit-playsinline", "");
  }, [videoUnavailable]);

  React.useEffect(() => {
    if (!loadWhenVisible) {
      setShouldLoad(true);
      setIsVisible(true);
      return;
    }

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

        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: [0, 0.01],
        rootMargin: "150px 0px",
      }
    );

    observer.observe(videoElement);

    return () => observer.disconnect();
  }, [loadWhenVisible, videoUnavailable]);

  React.useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement || !shouldLoad || videoUnavailable) {
      return;
    }

    videoElement.load();
  }, [shouldLoad, videoUnavailable]);

  React.useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement || !shouldLoad || videoUnavailable) {
      return;
    }

    if (loadWhenVisible && !isVisible) {
      if (!videoElement.paused) {
        videoElement.pause();
      }
      return;
    }

    tryPlay(false);
  }, [isVisible, loadWhenVisible, shouldLoad, tryPlay, videoUnavailable]);

  const handleManualPlay = React.useCallback(() => {
    const videoElement = videoRef.current;
    if (!videoElement) {
      return;
    }

    videoElement.muted = true;
    videoElement.defaultMuted = true;
    tryPlay(true);
  }, [tryPlay]);

  if (videoUnavailable) {
    return (
      <div className="relative h-full w-full">
        <img
          src={poster}
          alt={fallbackAlt}
          className={cn("h-full w-full object-cover", fallbackClassName)}
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
    <div className="relative h-full w-full">
      <video
        ref={videoRef}
        className={cn("h-full w-full", className)}
        autoPlay
        loop
        muted
        playsInline
        preload={shouldLoad ? preload : "none"}
        poster={poster}
        aria-label={ariaLabel}
        controls={showTapToPlay}
        disablePictureInPicture
        onCanPlay={() => tryPlay(false)}
        onLoadedData={() => tryPlay(false)}
        onPlay={() => setShowTapToPlay(false)}
        onError={() => setVideoUnavailable(true)}
      >
        {shouldLoad ? <source src={src} type="video/mp4" /> : null}
      </video>

      {showTapToPlay ? (
        <button
          type="button"
          onClick={handleManualPlay}
          className="absolute inset-0 z-20 flex items-center justify-center bg-black/10"
          aria-label="Tap to play preview video"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-black/65 px-4 py-2 text-sm font-medium text-white">
            <PlayCircleIcon size={20} weight="fill" />
            Tap to play
          </span>
        </button>
      ) : null}
    </div>
  );
}
