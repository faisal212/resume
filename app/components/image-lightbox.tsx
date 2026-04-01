"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { CloseIcon } from "./icons";

type ImageLightboxProps = {
  images: string[];
  alt: string;
  children: React.ReactNode;
};

export function ImageLightbox({ images, alt, children }: ImageLightboxProps) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const hasMultiple = images.length > 1;

  const close = useCallback(() => {
    setOpen(false);
    setIndex(0);
  }, []);

  const prev = useCallback(
    () => setIndex((i) => (i - 1 + images.length) % images.length),
    [images.length]
  );

  const next = useCallback(
    () => setIndex((i) => (i + 1) % images.length),
    [images.length]
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (hasMultiple && e.key === "ArrowLeft") prev();
      if (hasMultiple && e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, prev, next, hasMultiple]);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="w-full cursor-zoom-in text-left"
        aria-label={`View ${alt} full size`}
      >
        {children}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={`${alt} full view`}
        >
          {/* Close */}
          <button
            onClick={close}
            className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            aria-label="Close"
          >
            <CloseIcon className="h-5 w-5" />
          </button>

          {/* Prev arrow */}
          {hasMultiple && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
              aria-label="Previous image"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
          )}

          {/* Next arrow */}
          {hasMultiple && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
              aria-label="Next image"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          )}

          {/* Image */}
          <div
            className="relative max-h-[90vh] max-w-[90vw] animate-fade-up overflow-hidden rounded-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              key={index}
              src={images[index]}
              alt={`${alt} — ${index + 1} of ${images.length}`}
              width={1200}
              height={800}
              className="h-auto max-h-[85vh] w-auto rounded-xl object-contain"
              priority
            />
          </div>

          {/* Dots */}
          {hasMultiple && (
            <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => {
                    e.stopPropagation();
                    setIndex(i);
                  }}
                  className={`h-2 rounded-full transition-all ${
                    i === index
                      ? "w-6 bg-accent"
                      : "w-2 bg-white/40 hover:bg-white/60"
                  }`}
                  aria-label={`View image ${i + 1}`}
                />
              ))}
            </div>
          )}

          {/* Counter */}
          {hasMultiple && (
            <span className="absolute left-4 top-4 z-10 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white">
              {index + 1} / {images.length}
            </span>
          )}
        </div>
      )}
    </>
  );
}
