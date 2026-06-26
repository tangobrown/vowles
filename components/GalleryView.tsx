"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { Container, Reveal } from "@/components/ui";
import { ImageSlot } from "@/components/ImageSlot";
import { ExpandIcon, XIcon, ChevronIcon } from "@/components/icons";
import { GALLERY_FULL } from "@/lib/data";

const ASPECTS = ["4 / 3", "1 / 1", "3 / 4", "4 / 5", "5 / 4", "4 / 3"];

const GALLERY_ITEMS = GALLERY_FULL.map((g, i) => ({
  slot: g.slot,
  label: g.label,
  ar: ASPECTS[i % ASPECTS.length],
}));

function Lightbox({
  index,
  onClose,
  onNav,
}: {
  index: number;
  onClose: () => void;
  onNav: (dir: -1 | 1) => void;
}) {
  const item = GALLERY_ITEMS[index];

  const onKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") onNav(-1);
      else if (e.key === "ArrowRight") onNav(1);
    },
    [onClose, onNav]
  );

  useEffect(() => {
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onKey]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink/90 backdrop-blur-md"
      style={{ animation: "lbFade .25s ease both" }}
      onClick={onClose}
    >
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full border border-white/20 text-white transition-colors hover:border-brand hover:text-brand"
      >
        <XIcon size={20} />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onNav(-1);
        }}
        aria-label="Previous"
        className="absolute left-4 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/20 text-white transition-colors hover:border-brand hover:text-brand sm:left-8"
      >
        <ChevronIcon dir="left" size={20} />
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNav(1);
        }}
        aria-label="Next"
        className="absolute right-4 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/20 text-white transition-colors hover:border-brand hover:text-brand sm:right-8"
      >
        <ChevronIcon dir="right" size={20} />
      </button>

      <div
        className="flex max-h-[88vh] w-full max-w-[1100px] flex-col items-center px-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full" style={{ height: "min(74vh, 720px)" }}>
          <ImageSlot id={item.slot} label={item.label} fit="contain" />
        </div>
        <div className="mt-5 text-center">
          <div className="text-[16px] font-semibold text-white sm:text-[18px]">
            {item.label}
          </div>
          <div className="mt-1 text-[12px] font-medium uppercase tracking-[0.18em] text-white/40">
            {index + 1} / {GALLERY_ITEMS.length}
          </div>
        </div>
      </div>
    </div>
  );
}

export function GalleryView() {
  const [open, setOpen] = useState(-1);
  const nav = (d: -1 | 1) =>
    setOpen((i) => (i + d + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);

  return (
    <>
      {/* Slim hero */}
      <section
        id="top"
        className="relative isolate flex min-h-[380px] items-end overflow-hidden border-b border-white/10"
      >
        <div className="absolute inset-0 z-0">
          <ImageSlot id="hero-photo" label="Gallery banner photo" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/40" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/30" />
        </div>

        <Container className="relative z-10 pb-12 pt-36">
          <Reveal className="mb-4 flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-white/45">
            <Link href="/#top" className="transition-colors hover:text-brand">Home</Link>
            <span className="text-white/25">/</span>
            <span className="text-brand">Gallery</span>
          </Reveal>
          <Reveal delay={60}>
            <h1 className="display text-white" style={{ fontSize: "clamp(36px, 5vw, 60px)" }}>
              Recent work
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-4 max-w-[620px] text-[17px] leading-relaxed text-white/75 sm:text-[19px]">
              A look at projects Paul has completed across South Devon — from full builds to the
              smaller jobs done properly. Tap any photo to take a closer look.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Masonry */}
      <section className="bg-ink py-20 sm:py-24">
        <Container>
          <div className="[column-gap:1rem] columns-1 sm:columns-2 lg:columns-3">
            {GALLERY_ITEMS.map((item, i) => (
              <Reveal
                key={item.slot}
                delay={(i % 3) * 70}
                className="mb-4 block"
              >
                <button
                  onClick={() => setOpen(i)}
                  aria-label={`View ${item.label}`}
                  className="group relative block w-full overflow-hidden border border-white/10 transition-colors duration-300 hover:border-brand/60"
                  style={{ aspectRatio: item.ar }}
                >
                  <div className="pointer-events-none absolute inset-0">
                    <ImageSlot id={item.slot} label={item.label} />
                  </div>
                  <div className="pointer-events-none absolute inset-0 bg-ink/0 transition-colors duration-300 group-hover:bg-ink/35" />
                  <span className="pointer-events-none absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-ink/70 text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                    <ExpandIcon size={16} />
                  </span>
                </button>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {open >= 0 && (
        <Lightbox index={open} onClose={() => setOpen(-1)} onNav={nav} />
      )}
    </>
  );
}
