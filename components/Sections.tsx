import Link from "next/link";
import { Container, Reveal, Eyebrow, Button, CornerLines } from "@/components/ui";
import { ImageSlot } from "@/components/ImageSlot";
import { GoogleG, ArrowUpRight, PhoneIcon } from "@/components/icons";
import {
  SERVICES,
  GALLERY,
  TESTIMONIALS,
  PHONE_DISPLAY,
  PHONE_HREF,
  servicePath,
  type Testimonial,
} from "@/lib/data";

/* -------------------------------- Services -------------------------------- */
export function Services() {
  return (
    <section id="services" className="scroll-mt-24 bg-ink py-24 sm:py-28">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-[640px]">
            <Reveal><Eyebrow>What Paul does</Eyebrow></Reveal>
            <Reveal delay={80}>
              <h2 className="display mt-5 text-[40px] leading-[0.98] text-white sm:text-[52px]">
                From a single door to a full extension
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-5 text-[17px] leading-relaxed text-white/60">
                Quality carpentry and joinery at the core, backed by years of hands-on building.
                If what you need isn&apos;t listed here, it&apos;s still worth asking.
              </p>
            </Reveal>
          </div>
          <Reveal delay={160} className="hidden md:block">
            <Button href="/contact#form" variant="ghost">Get a Quote</Button>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <Reveal key={s.id} delay={(i % 4) * 60} className="group block">
              <Link
                href={servicePath(s.id)}
                className="flex h-full flex-col overflow-hidden border border-white/10 bg-surface transition-colors duration-300 hover:border-brand/50"
              >
                <div className="relative aspect-[16/11] overflow-hidden">
                  <ImageSlot id={s.slot} label={s.name} />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-60" />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-[18px] font-bold tracking-tight text-white transition-colors group-hover:text-brand">
                    {s.name}
                  </h3>
                  <p className="mt-2 flex-1 text-[14px] leading-relaxed text-white/55">{s.blurb}</p>
                  <span className="mt-4 flex w-full items-center justify-between text-[13px] font-semibold uppercase tracking-wider text-brand">
                    Learn more
                    <ArrowUpRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------ About teaser ------------------------------ */
export function AboutTeaser() {
  return (
    <section
      id="about"
      className="relative scroll-mt-24 overflow-hidden border-y border-white/10 bg-surface py-24 sm:py-28"
    >
      <CornerLines />
      <Container className="relative z-10 grid items-center gap-12 md:grid-cols-2 lg:gap-16">
        <Reveal className="relative">
          <div className="relative aspect-[4/5] overflow-hidden border border-white/10">
            <ImageSlot id="about-paul" label="A friendly photo of Paul" />
          </div>
          <div className="absolute -bottom-6 -right-4 hidden h-32 w-32 flex-col items-center justify-center rounded-full bg-brand text-center text-ink shadow-xl sm:flex">
            <div className="display text-[34px] leading-none">20+</div>
            <div className="mt-1 text-[11px] font-semibold uppercase leading-tight tracking-wider">
              Years<br />experience
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal><Eyebrow>Meet your builder</Eyebrow></Reveal>
          <Reveal delay={80}>
            <h2 className="display mt-5 text-[38px] leading-[1] text-white sm:text-[48px]">
              Hi, I&apos;m Paul Vowles
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-6 text-[17px] leading-relaxed text-white/70">
              I&apos;m a carpenter and builder born in Devon and based in Bishopsteignton. For over
              twenty years I&apos;ve been helping South Devon homeowners get jobs done, from a
              sticking door or a run of new skirting through to loft conversions, extensions and
              bespoke media walls.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-4 text-[17px] leading-relaxed text-white/70">
              My promise is simple: I turn up when I say I will, I give honest advice, and I treat
              a small repair with the same care as a full build. No pushy sales, no jargon, just
              quality work with a smile.
            </p>
          </Reveal>
          <Reveal delay={260}>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/about" variant="ghost">More about Paul</Button>
              <Button href="/contact#form">Start a conversation</Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

/* ----------------------------- Gallery preview ----------------------------- */
export function GalleryPreview() {
  return (
    <section
      id="gallery"
      className="relative scroll-mt-24 overflow-hidden border-t border-white/10 bg-surface py-24 sm:py-28"
    >
      <CornerLines />
      <Container className="relative z-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-[600px]">
            <Reveal><Eyebrow>Recent work</Eyebrow></Reveal>
            <Reveal delay={80}>
              <h2 className="display mt-5 text-[40px] leading-[0.98] text-white sm:text-[52px]">
                Built to be lived in
              </h2>
            </Reveal>
          </div>
          <Reveal delay={140} className="md:pb-2">
            <Button href="/gallery" variant="ghost">View full gallery</Button>
          </Reveal>
        </div>

        <div className="mt-12 grid auto-rows-[200px] grid-cols-2 gap-4 sm:auto-rows-[260px] lg:grid-cols-4">
          {GALLERY.map((g, i) => {
            const span =
              g.span === "lg"
                ? "col-span-2 row-span-2"
                : g.span === "wide"
                ? "col-span-2"
                : "";
            return (
              <Reveal
                key={g.slot}
                delay={i * 60}
                className={`group relative overflow-hidden border border-white/10 ${span}`}
              >
                <ImageSlot id={g.slot} label={g.label} />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/85 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="pointer-events-none absolute bottom-0 left-0 p-4 opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <span className="text-[14px] font-semibold text-white">{g.label}</span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------ Testimonials ------------------------------ */
export function Testimonials({
  items = TESTIMONIALS,
  eyebrow = "Kind words",
  heading = "Trusted by local homeowners",
  divided = false,
}: {
  items?: Testimonial[];
  eyebrow?: string;
  heading?: string;
  divided?: boolean;
}) {
  return (
    <section
      className={`bg-ink py-24 sm:py-28 ${divided ? "border-t border-white/10" : ""}`}
    >
      <Container>
        <div className="mx-auto max-w-[640px] text-center">
          <Reveal className="flex justify-center"><Eyebrow>{eyebrow}</Eyebrow></Reveal>
          <Reveal delay={80}>
            <h2 className="display mt-5 text-[38px] leading-[1] text-white sm:text-[48px]">
              {heading}
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {items.map((t, i) => (
            <Reveal
              key={t.name}
              delay={i * 80}
              className="flex flex-col border border-white/10 bg-surface p-7"
            >
              <div className="flex items-center justify-between">
                <div className="text-[15px] tracking-[0.25em] text-brand">★★★★★</div>
                <div className="flex items-center gap-1.5">
                  <GoogleG size={16} />
                  <span className="text-[12px] font-medium text-white/45">Review</span>
                </div>
              </div>
              <p className="mt-5 flex-1 text-[16px] leading-relaxed text-white/80">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-brand/15 text-[15px] font-bold text-brand">
                  {t.name[0]}
                </span>
                <div>
                  <div className="text-[14px] font-semibold text-white">{t.name}</div>
                  <div className="text-[13px] text-white/45">{t.town}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------- Final CTA ------------------------------- */
export function FinalCTA() {
  return (
    <section id="quote" className="scroll-mt-24 bg-ink pb-24 sm:pb-28">
      <Container>
        <Reveal className="relative overflow-hidden bg-brand px-7 py-16 sm:px-14 sm:py-20">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, #151617 0 4px, transparent 4px 12px)",
            }}
          />

          <div className="relative max-w-[760px]">
            <h2 className="display text-[40px] leading-[0.98] text-ink sm:text-[60px]">
              Got a project in mind, big or small?
            </h2>
            <p className="mt-5 max-w-[560px] text-[18px] leading-relaxed text-ink/75">
              Tell Paul what you&apos;re thinking and he&apos;ll get back to you personally.
              Free, no-obligation, no pressure — just honest advice from a local builder.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link
                href="/contact#form"
                className="inline-flex items-center justify-center gap-2 bg-ink px-7 py-4 text-[16px] font-semibold text-white transition-colors duration-200 hover:bg-black"
              >
                Get a Quote
              </Link>
              <a
                href={PHONE_HREF}
                className="inline-flex items-center gap-2.5 border border-ink/25 px-6 py-4 text-[16px] font-semibold text-ink transition-colors hover:bg-ink hover:text-white"
              >
                <PhoneIcon size={18} /> Call Paul · {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
