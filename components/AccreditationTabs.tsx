"use client";

import Image from "next/image";
import { useRef, useState, type KeyboardEvent } from "react";
import { ArrowUpRight } from "@/components/icons";

/* Vertical tabbed accreditations shown in the About page's "Qualified &
   insured" section. Guild of Master Craftsmen is open by default.

   Logos: entries with a `logo` path under public/badges/ render the real
   emblem on a white chip (see CredentialMark). Entries with `logo: null`
   fall back to a placeholder abbreviation badge. TODO: add cskills.png and
   city-and-guilds.png once that artwork is supplied, then set their `logo`. */
type Accreditation = {
  id: string;
  abbr: string;
  title: string;
  tagline: string;
  logo: string | null;
  learnMoreUrl: string | null;
  body: string[];
};

const ACCREDITATIONS: Accreditation[] = [
  {
    id: "guild",
    abbr: "GMC",
    title: "The Guild of Master Craftsmen",
    tagline: "Accredited member",
    logo: "/badges/guild-of-master-craftsmen.png",
    learnMoreUrl: "https://www.guildmc.com/",
    body: [
      "Members are welcomed into the Guild to honour their skill, integrity and expertise in their chosen trade. It's a mark of quality and excellence that homeowners recognise, and a reassuring sign that the person on your job genuinely knows their craft.",
      "The Guild keeps a register of skilled, reputable professionals who are true masters of their trade, so people can always find tradespeople they can trust. For Paul, membership is a lovely testament to more than twenty years of careful, dedicated work, and to being thoroughly assessed and awarded the title of master craftsman.",
    ],
  },
  {
    id: "cskills",
    abbr: "CS",
    title: "CSkills",
    tagline: "Qualified",
    logo: null,
    learnMoreUrl: null,
    body: [
      "CSkills is one of the construction industry's most trusted awarding bodies, setting the standard for practical, on-site competence right across the building trades.",
      "Paul's CSkills qualifications sit behind his hands-on experience with formally assessed, industry-recognised training, so you can be confident the work is carried out to a proper professional standard.",
    ],
  },
  {
    id: "city-and-guilds",
    abbr: "C&G",
    title: "City & Guilds",
    tagline: "Qualified",
    logo: "/badges/city-and-guilds.png",
    learnMoreUrl: "https://www.cityandguilds.com/",
    body: [
      "City & Guilds is one of the most established names in vocational training in the UK, with qualifications recognised and respected across the trades.",
      "Paul's City & Guilds training grounds his craft in properly taught, assessed skills, from the fundamentals of carpentry through to the finer detail work. It's the reassurance of a tradesman who was taught to do things the right way.",
    ],
  },
];

/* Renders a credential's mark: the real logo on a white chip when available,
   otherwise a placeholder abbreviation badge. `variant` sizes it for the tab
   list (sm) or the panel header (lg). */
function CredentialMark({
  item,
  variant,
  selected = false,
}: {
  item: Accreditation;
  variant: "tab" | "panel";
  selected?: boolean;
}) {
  const box = variant === "tab" ? "h-12 w-12" : "h-16 w-16";

  if (item.logo) {
    return (
      <span
        className={`relative ${box} shrink-0 overflow-hidden rounded-full bg-white ${
          variant === "tab" && selected ? "ring-2 ring-brand" : ""
        }`}
      >
        <Image
          src={item.logo}
          alt=""
          fill
          sizes={variant === "tab" ? "48px" : "64px"}
          className="object-contain p-1"
        />
      </span>
    );
  }

  return (
    <span
      className={`grid ${box} shrink-0 place-items-center rounded-full border font-bold tracking-wide ${
        variant === "panel"
          ? "border-brand/30 bg-brand/10 text-[15px] text-brand"
          : selected
            ? "border-brand/40 bg-brand/10 text-[13px] text-brand"
            : "border-white/15 text-[13px] text-white/50"
      }`}
      aria-hidden="true"
    >
      {item.abbr}
    </span>
  );
}

export function AccreditationTabs() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key !== "ArrowDown" && e.key !== "ArrowUp") return;
    e.preventDefault();
    const dir = e.key === "ArrowDown" ? 1 : -1;
    const next = (active + dir + ACCREDITATIONS.length) % ACCREDITATIONS.length;
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  const current = ACCREDITATIONS[active];

  return (
    <div className="mt-12 grid gap-4 md:grid-cols-[minmax(0,300px)_1fr] lg:gap-6">
      {/* Tab list */}
      <div
        role="tablist"
        aria-orientation="vertical"
        aria-label="Paul's accreditations"
        onKeyDown={onKeyDown}
        className="flex flex-col gap-3"
      >
        {ACCREDITATIONS.map((a, i) => {
          const selected = i === active;
          return (
            <button
              key={a.id}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              role="tab"
              id={`acc-tab-${a.id}`}
              aria-selected={selected}
              aria-controls={`acc-panel-${a.id}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(i)}
              className={`flex items-center gap-4 border p-4 text-left transition-colors ${
                selected
                  ? "border-brand bg-ink"
                  : "border-white/10 bg-ink/40 hover:border-brand/40"
              }`}
            >
              <CredentialMark item={a} variant="tab" selected={selected} />
              <span className="min-w-0">
                <span className="block truncate text-[15px] font-semibold text-white">
                  {a.title}
                </span>
                <span className="mt-0.5 block text-[12px] font-medium uppercase tracking-[0.14em] text-white/40">
                  {a.tagline}
                </span>
              </span>
            </button>
          );
        })}
      </div>

      {/* Active panel */}
      <div
        key={current.id}
        role="tabpanel"
        id={`acc-panel-${current.id}`}
        aria-labelledby={`acc-tab-${current.id}`}
        className="border border-white/10 bg-ink p-8 sm:p-10"
        style={{ animation: "lbFade .3s ease both" }}
      >
        <div className="flex items-center gap-5">
          <CredentialMark item={current} variant="panel" />
          <h3 className="display text-[24px] leading-tight text-white sm:text-[28px]">
            {current.title}
          </h3>
        </div>
        <div className="mt-6 space-y-4">
          {current.body.map((p, i) => (
            <p key={i} className="text-[16px] leading-relaxed text-white/70">
              {p}
            </p>
          ))}
        </div>
        {current.learnMoreUrl && (
          <a
            href={current.learnMoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group/more mt-7 inline-flex items-center gap-1.5 text-[14px] font-semibold text-brand underline-offset-4 hover:underline"
          >
            Learn more about {current.title}
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover/more:translate-x-0.5 group-hover/more:-translate-y-0.5" />
          </a>
        )}
      </div>
    </div>
  );
}
