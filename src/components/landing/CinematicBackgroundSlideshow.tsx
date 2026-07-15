"use client";

import React, { useState, useEffect } from "react";

const BACKGROUNDS = [
  { url: "/images/bg_hockey_ai_cinematic_1.png", animation: "gallery-ken-zoom-in" },
  { url: "/images/bg_hockey_ai_cinematic_2.png", animation: "gallery-ken-drift-up" },
];

export function CinematicBackgroundSlideshow() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Avoid synchronous state changes inside the effect body
    const mountTimer = setTimeout(() => setMounted(true), 0);

    const slideDuration = 5500; // Matches --gallery-slide-duration in globals.css
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % BACKGROUNDS.length);
    }, slideDuration);

    return () => {
      clearTimeout(mountTimer);
      clearInterval(interval);
    };
  }, []);

  if (!mounted) {
    return (
      <div className="fixed inset-0 z-0 bg-zinc-950">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: `url(${BACKGROUNDS[0].url})` }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent" />
      </div>
    );
  }

  return (
    <div className="gallery-slideshow fixed inset-0 z-0 overflow-hidden" data-framing="immersive">
      {/* Background Slides */}
      {BACKGROUNDS.map((bg, index) => (
        <div
          key={bg.url}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === activeIndex ? "opacity-40" : "opacity-0"
          }`}
        >
          {index === activeIndex && (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              src={bg.url}
              alt="Cinematic Youth Hockey Tracking"
              className={`h-full w-full object-cover ${bg.animation}`}
            />
          )}
        </div>
      ))}

      {/* Atmospheric Vignette Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_20%,_#09090b_100%)]" />

      {/* Film Grain Effect Overlay */}
      <div className="gallery-slideshow-grain pointer-events-none absolute inset-0 opacity-20" />

      {/* Slideshow Progress Bar */}
      <div className="absolute bottom-0 left-0 z-10 h-[3px] w-full bg-white/10">
        <div key={activeIndex} className="gallery-slideshow-progress-bar h-full bg-cyan-400" />
      </div>
    </div>
  );
}
