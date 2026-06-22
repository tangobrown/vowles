"use client";

import { useEffect, useRef, useState } from "react";
import { Container, Reveal, Eyebrow } from "@/components/ui";
import { ImageSlot } from "@/components/ImageSlot";
import { ChevronIcon } from "@/components/icons";

type Slot = { id: string; label: string };

export function ServiceCarousel({
  eyebrow,
  heading,
  slots,
}: {
  eyebrow: string;
  heading: string;
  slots: Slot[];
}) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [m, setM] = useState({ w: 0, slideW: 0, gap: 18 });
  const drag = useRef({ x: 0, on: false });

  useEffect(() => {
    function measure() {
      const el = viewportRef.current;
      const w = el ? el.clientWidth : 0;
      if (!w) return;
      const small = w < 720;
      setM((prev) =>
        prev.w === w
          ? prev
          : { w, slideW: Math.round(w * (small ? 0.84 : 0.72)), gap: small ? 12 : 20 }
      );
    }
    measure();
    let ro: ResizeObserver | undefined;
    if (typeof ResizeObserver !== "undefined" && viewportRef.current) {
      ro = new ResizeObserver(measure);
      ro.observe(viewportRef.current);
    }
    window.addEventListener("resize", measure);
    return () => {
      if (ro) ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  const N = slots.length;
  if (N === 0) return null;

  const half = Math.floor(N / 2);
  const step = m.slideW + m.gap;
  const slideH = Math.round((m.slideW * 9) / 16);
  const go = (i: number) => setActive(((i % N) + N) % N);

  const relPos = (i: number) => {
    const raw = (((i - active) % N) + N) % N;
    return raw > N / 2 ? raw - N : raw;
  };

  const onDown = (e: React.PointerEvent) => {
    drag.current = { x: e.clientX, on: true };
  };
  const onUp = (e: React.PointerEvent) => {
    if (!drag.current.on) return;
    const dx = e.clientX - drag.current.x;
    drag.current.on = false;
    if (Math.abs(dx) > 50) go(active + (dx < 0 ? 1 : -1));
  };

  return (
    <section className="overflow-hidden border-t border-white/10 bg-surface py-24 sm:py-28">
      <Container>
        <Reveal><Eyebrow>{eyebrow}</Eyebrow></Reveal>
        <Reveal delay={60}>
          <h2 className="display mt-5 text-[34px] text-white sm:text-[44px]">{heading}</h2>
        </Reveal>
      </Container>

      <Reveal delay={120}>
        <div className="mt-12">
          <Container>
            <div
              ref={viewportRef}
              className="relative cursor-grab select-none overflow-hidden active:cursor-grabbing"
              style={{
                height: slideH || 1,
                WebkitMaskImage:
                  "linear-gradient(to right, transparent 0%, #000 11%, #000 89%, transparent 100%)",
                maskImage:
                  "linear-gradient(to right, transparent 0%, #000 11%, #000 89%, transparent 100%)",
              }}
              onPointerDown={onDown}
              onPointerUp={onUp}
              onPointerLeave={onUp}
            >
              {slots.map((s, i) => {
                const p = relPos(i);
                const isActive = p === 0;
                return (
                  <div
                    key={s.id}
                    className="absolute top-0"
                    style={{
                      left: "50%",
                      width: m.slideW || 1,
                      height: slideH || 1,
                      transform: `translateX(calc(-50% + ${p * step}px))`,
                      transition:
                        Math.abs(p) >= half
                          ? "none"
                          : "transform .6s cubic-bezier(.22,.61,.36,1)",
                      zIndex: isActive ? 2 : 1,
                    }}
                    onClick={() => !isActive && go(i)}
                  >
                    <div className="relative h-full w-full overflow-hidden border border-white/10">
                      <ImageSlot id={s.id} label={s.label} />
                      <div
                        className="pointer-events-none absolute inset-0 bg-ink transition-opacity duration-500"
                        style={{ opacity: isActive ? 0 : 0.5 }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </Container>
        </div>
      </Reveal>

      <Container>
        <div className="mt-8 flex items-center justify-between gap-6">
          <div className="min-h-[20px] text-[14px] text-white/55">
            {slots[active].label}
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => go(active - 1)}
              aria-label="Previous"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/20 text-white transition-colors hover:border-brand hover:text-brand"
            >
              <ChevronIcon dir="left" size={18} />
            </button>
            <div className="flex items-center gap-2">
              {slots.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => go(i)}
                  aria-label={`Go to ${s.label}`}
                  className="h-2 rounded-full transition-all duration-300"
                  style={{
                    width: i === active ? 26 : 8,
                    background: i === active ? "#ffde59" : "rgba(255,255,255,0.28)",
                  }}
                />
              ))}
            </div>
            <button
              onClick={() => go(active + 1)}
              aria-label="Next"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/20 text-white transition-colors hover:border-brand hover:text-brand"
            >
              <ChevronIcon dir="right" size={18} />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
