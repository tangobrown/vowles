"use client";

import { useState } from "react";
import { Container, Reveal, Eyebrow } from "@/components/ui";
import { PhoneIcon, PlusIcon } from "@/components/icons";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/data";

export function ServiceFaq({
  eyebrow,
  heading,
  intro,
  faqs,
}: {
  eyebrow: string;
  heading: string;
  intro?: string;
  faqs: { q: string; a: string }[];
}) {
  const [openIdx, setOpenIdx] = useState(0);
  if (faqs.length === 0) return null;

  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-ink py-24 sm:py-28">
      <Container className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          <Reveal><Eyebrow>{eyebrow}</Eyebrow></Reveal>
          <Reveal delay={60}>
            <h2 className="display mt-5 text-[34px] text-white sm:text-[44px]">{heading}</h2>
          </Reveal>
          {intro && (
            <Reveal delay={120}>
              <p className="mt-6 max-w-[420px] text-[17px] leading-relaxed text-white/70">
                {intro}
              </p>
            </Reveal>
          )}
          <Reveal delay={180}>
            <a
              href={PHONE_HREF}
              className="mt-7 inline-flex items-center gap-2.5 text-[15px] font-semibold text-brand transition-colors hover:text-brandDark"
            >
              <PhoneIcon size={17} /> {PHONE_DISPLAY}
            </a>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <div className="border-t border-white/10">
            {faqs.map((f, i) => {
              const open = openIdx === i;
              return (
                <div key={f.q} className="border-b border-white/10">
                  <button
                    onClick={() => setOpenIdx(open ? -1 : i)}
                    aria-expanded={open}
                    className="flex w-full items-center justify-between gap-6 py-5 text-left"
                  >
                    <span
                      className={`text-[17px] font-semibold transition-colors ${
                        open ? "text-brand" : "text-white"
                      }`}
                    >
                      {f.q}
                    </span>
                    <span
                      className={`shrink-0 text-white/50 transition-transform duration-300 ${
                        open ? "rotate-45 text-brand" : ""
                      }`}
                    >
                      <PlusIcon size={22} />
                    </span>
                  </button>
                  <div
                    className="grid transition-all duration-300 ease-out"
                    style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-6 pr-10 text-[15px] leading-relaxed text-white/60">
                        {f.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
