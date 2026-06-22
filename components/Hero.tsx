"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Container, Reveal, Eyebrow } from "@/components/ui";
import { ImageSlot } from "@/components/ImageSlot";
import { PhoneIcon } from "@/components/icons";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/data";

const HERO_SLOTS = [
  { id: "hero-photo", label: "Hero project photo" },
  { id: "hero-photo-2", label: "Hero project photo (2)" },
  { id: "hero-photo-3", label: "Hero project photo (3)" },
];

export function Hero() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setActive((a) => (a + 1) % HERO_SLOTS.length), 3500);
    return () => clearInterval(t);
  }, [paused]);

  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-ink"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="absolute inset-0 z-0">
        {HERO_SLOTS.map((s, i) => (
          <div
            key={s.id}
            className="absolute inset-0 transition-opacity duration-[1400ms] ease-in-out"
            style={{ opacity: i === active ? 1 : 0, zIndex: i === active ? 1 : 0 }}
          >
            <ImageSlot id={s.id} label={s.label} />
          </div>
        ))}
        <div className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-r from-ink via-ink/85 to-ink/30" />
        <div className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-t from-ink via-transparent to-ink/40" />
      </div>

      <Container className="pointer-events-none relative z-10 flex min-h-[760px] flex-col justify-center pt-36 pb-20 sm:min-h-[820px]">
        <div className="max-w-[820px]">
          <Reveal>
            <Eyebrow>Bishopsteignton · South Devon</Eyebrow>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="display mt-6 text-white">
              A local builder you can <span className="text-brand">actually</span> get hold of
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-[620px] text-[18px] leading-relaxed text-white/75 sm:text-[20px]">
              Skilled carpentry and building across Torquay, Teignmouth, Newton Abbot, Torbay and
              Exeter — done properly, explained plainly, and with{" "}
              <span className="font-semibold text-white">no job too small.</span>
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="pointer-events-auto mt-9 flex flex-wrap items-center gap-3">
              <Link
                href="/contact#form"
                className="inline-flex items-center justify-center gap-2 bg-brand px-7 py-4 text-[16px] font-semibold tracking-wide text-ink transition-[filter] duration-200 hover:brightness-95"
              >
                Get a Quote
              </Link>
              <Link
                href="/gallery"
                className="inline-flex items-center justify-center gap-2 border border-white/25 px-7 py-4 text-[16px] font-semibold tracking-wide text-white transition-colors hover:border-brand hover:text-brand"
              >
                See our work
              </Link>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <a
              href={PHONE_HREF}
              className="pointer-events-auto mt-7 inline-flex items-center gap-3 text-white/70 transition-colors hover:text-brand"
            >
              <span className="grid h-9 w-9 place-items-center rounded-full border border-white/20 text-brand">
                <PhoneIcon size={16} />
              </span>
              <span className="text-[15px]">
                Prefer to talk?{" "}
                <span className="font-semibold text-white">{PHONE_DISPLAY}</span>
              </span>
            </a>
          </Reveal>
        </div>
      </Container>

      <div className="absolute bottom-7 right-6 z-20 flex items-center gap-3 sm:right-10">
        <div className="flex items-center gap-2.5">
          {HERO_SLOTS.map((s, i) => (
            <button
              key={s.id}
              onClick={() => setActive(i)}
              aria-label={`Show hero image ${i + 1}`}
              className={`h-2 transition-all duration-300 ${
                i === active ? "w-7 bg-brand" : "w-2 bg-white/35 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
    </section>
  );
}
