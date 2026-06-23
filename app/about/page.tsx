import type { Metadata } from "next";
import Link from "next/link";
import { Container, Reveal, Eyebrow, Button, CornerLines } from "@/components/ui";
import { ImageSlot } from "@/components/ImageSlot";
import { CheckIcon, PhoneIcon } from "@/components/icons";
import { Testimonials, GalleryPreview, FinalCTA } from "@/components/Sections";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Paul — Vowles Carpentry & Building",
  description:
    "Meet Paul Vowles — a South Devon carpenter and builder with 20+ years on the tools. How we work, what we believe in, and why local homeowners come back.",
};

/* Placeholder accreditations. Swap each entry below for Paul's actual
   accreditations (logo + name) once confirmed. Drop logo SVGs/PNGs into
   public/badges/<id>.svg and replace the inline placeholder graphic. */
const ACCREDITATIONS = [
  { abbr: "FMB", name: "Federation of Master Builders" },
  { abbr: "TM", name: "TrustMark Approved" },
  { abbr: "CHAS", name: "CHAS Accredited" },
  { abbr: "C&G", name: "City & Guilds Qualified" },
];

const PROCESS = [
  {
    n: "01",
    title: "A proper conversation first",
    text:
      "Paul comes round, has a look at the job and listens to what you're hoping for. No pressure, no rushed pitch — just a friendly chat about whether and how it can be done.",
  },
  {
    n: "02",
    title: "A clear, itemised quote",
    text:
      "You get a written quote with the work broken down line by line, so you can see exactly where the money's going. No surprise extras halfway through.",
  },
  {
    n: "03",
    title: "On site when we say, tidy as we go",
    text:
      "Paul turns up when promised, keeps the workspace clean and updates you as the job progresses. If something changes, you'll hear it from him before it lands as a bill.",
  },
  {
    n: "04",
    title: "Snagged before we leave",
    text:
      "Every detail is checked, every snag put right, before we hand the room back. The mark of a good job is what you don't notice — the doors that swing sweetly, the joints you can't see.",
  },
];

function AboutHero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[380px] items-end overflow-hidden border-b border-white/10 bg-surface"
    >
      <CornerLines />
      <Container className="relative z-10 pb-12 pt-36">
        <Reveal className="mb-4 flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-white/45">
          <Link href="/#top" className="transition-colors hover:text-brand">Home</Link>
          <span className="text-white/25">/</span>
          <span className="text-brand">About</span>
        </Reveal>
        <Reveal delay={60}>
          <h1 className="display text-white" style={{ fontSize: "clamp(36px, 5vw, 60px)" }}>
            20+ years on the tools, built on word of mouth
          </h1>
        </Reveal>
        <Reveal delay={120}>
          <p className="mt-4 max-w-[640px] text-[17px] leading-relaxed text-white/75 sm:text-[19px]">
            Vowles Carpentry &amp; Building is Paul Vowles — a South Devon carpenter and builder
            who turns up when he says he will, gives honest advice, and treats a small repair
            with the same care as a full build.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}

function PaulSection() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 sm:py-28">
      <Container className="grid items-center gap-12 md:grid-cols-2 lg:gap-16">
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
              I&apos;m a carpenter and builder born in Devon and based in Bishopsteignton. I&apos;ve
              spent over twenty years on the tools across South Devon — from sticking doors and
              new skirting through to loft conversions, extensions and bespoke media walls.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-4 text-[17px] leading-relaxed text-white/70">
              The business has grown almost entirely on word of mouth. That tells you the bit
              I&apos;m most proud of: people come back, and they send their neighbours. Carpentry
              is my craft, but reliability is the thing I work hardest at.
            </p>
          </Reveal>
          <Reveal delay={260}>
            <p className="mt-4 text-[17px] leading-relaxed text-white/70">
              My promise is simple: I turn up when I say I will, I give honest advice, and I
              treat a small repair with the same care as a full build. No pushy sales, no jargon,
              just quality work with a smile.
            </p>
          </Reveal>
          <Reveal delay={320}>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/contact#form">Start a conversation</Button>
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center gap-2.5 border border-white/25 px-6 py-3.5 text-[15px] font-semibold text-white transition-colors duration-200 hover:border-brand hover:text-brand"
              >
                <PhoneIcon size={17} />
                {PHONE_DISPLAY}
              </a>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function Accreditations() {
  return (
    <section className="border-y border-white/10 bg-surface py-20 sm:py-24">
      <Container>
        <div className="mx-auto max-w-[640px] text-center">
          <Reveal className="flex justify-center"><Eyebrow>Qualified &amp; insured</Eyebrow></Reveal>
          <Reveal delay={80}>
            <h2 className="display mt-5 text-[32px] leading-[1.05] text-white sm:text-[40px]">
              The credentials behind the craft
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-5 text-[16px] leading-relaxed text-white/60">
              Paul is fully qualified, insured and a member of the relevant trade bodies — so
              you&apos;re covered, and the work meets the standards it should.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
          {ACCREDITATIONS.map((a, i) => (
            <Reveal
              key={a.abbr}
              delay={i * 70}
              className="flex flex-col items-center gap-4 border border-white/10 bg-ink p-6 text-center transition-colors hover:border-brand/40 sm:p-8"
            >
              <span
                className="grid h-20 w-20 place-items-center rounded-full border border-brand/30 bg-brand/10 text-[15px] font-bold tracking-wide text-brand"
                aria-hidden="true"
              >
                {a.abbr}
              </span>
              <div className="text-[14px] font-semibold leading-snug text-white">{a.name}</div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

function HowWeWork() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 sm:py-28">
      <CornerLines />
      <Container className="relative z-10">
        <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <Reveal><Eyebrow>How we work</Eyebrow></Reveal>
            <Reveal delay={80}>
              <h2 className="display mt-5 text-[36px] leading-[1] text-white sm:text-[46px]">
                Honest, careful, and on your side
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-6 max-w-[460px] text-[17px] leading-relaxed text-white/70">
                The carpentry is the easy part — it&apos;s the way the job is run that decides
                whether you&apos;d recommend us afterwards. Here&apos;s what to expect from
                first call to handover.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <ul className="mt-8 space-y-3.5">
                {[
                  "One trusted point of contact — Paul, not a call centre",
                  "Free, no-obligation visit and quote",
                  "Tidy sites, daily updates, sensible hours",
                  "Snags fixed properly before we leave",
                ].map((p) => (
                  <li key={p} className="flex items-start gap-3 text-[15px] text-white/75">
                    <span className="mt-0.5 shrink-0 text-brand">
                      <CheckIcon size={18} />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {PROCESS.map((p, i) => (
              <Reveal
                key={p.n}
                delay={i * 70}
                className="flex flex-col border border-white/10 bg-surface p-6"
              >
                <div className="display text-[28px] leading-none text-brand">{p.n}</div>
                <h3 className="mt-4 text-[17px] font-bold text-white">{p.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-white/60">{p.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <PaulSection />
      <Testimonials divided />
      <Accreditations />
      <HowWeWork />
      <GalleryPreview />
      <FinalCTA />
    </main>
  );
}
