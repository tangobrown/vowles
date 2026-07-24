import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container, Reveal, Eyebrow, CornerLines } from "@/components/ui";
import { ImageSlot } from "@/components/ImageSlot";
import { QuoteButton } from "@/components/QuoteButton";
import { CheckIcon, PhoneIcon } from "@/components/icons";
import { Testimonials, GalleryPreview, FinalCTA } from "@/components/Sections";
import { AccreditationTabs } from "@/components/AccreditationTabs";
import { JsonLd } from "@/components/JsonLd";
import { PHONE_DISPLAY, PHONE_HREF, CREDENTIAL_BADGES } from "@/lib/data";
import { breadcrumbJsonLd, personJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "About Paul Vowles | South Devon Carpenter & Builder",
  description:
    "Meet Paul Vowles, a friendly Bishopsteignton carpenter and builder with over twenty years on the tools across Torquay, Teignmouth, Newton Abbot, Exeter and Torbay. How we work, what we believe in, and why local homeowners keep coming back.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Paul Vowles | South Devon Carpenter & Builder",
    description:
      "Over twenty years on the tools across South Devon. Honest, careful and firmly on your side, from your first call right through to handover.",
    url: "/about",
  },
};

const PROCESS = [
  {
    n: "01",
    title: "A proper conversation first",
    text:
      "Paul comes round, has a good look at the job and really listens to what you're hoping for. No pressure and no rushed pitch, just a friendly chat about whether and how it can all be done.",
  },
  {
    n: "02",
    title: "A clear, itemised quote",
    text:
      "You'll get a written quote with the work broken down line by line, so you can see exactly where every penny is going. No nasty surprises halfway through, ever.",
  },
  {
    n: "03",
    title: "On site when we say, tidy as we go",
    text:
      "Paul turns up when he's promised, keeps the workspace clean and updates you as the job progresses. If anything changes along the way, you'll always hear it from him first, well before it lands as a bill.",
  },
  {
    n: "04",
    title: "Snagged before we leave",
    text:
      "Every detail is checked and every little snag put right before we hand the room back to you. The mark of a good job is really what you don't notice: the doors that swing sweetly, the joints you simply can't see.",
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
            Vowles Carpentry &amp; Building is Paul Vowles, a South Devon carpenter and builder
            who turns up when he says he will, gives honest advice, and treats a small repair
            with just as much care as a full build.
          </p>
        </Reveal>

        {/* Accreditation seals — bottom-right, aligned with the text, desktop only */}
        <div className="absolute bottom-12 right-0 hidden items-center gap-3 lg:flex">
          {CREDENTIAL_BADGES.map((b) => (
            <span
              key={b.src}
              className="relative h-20 w-20 overflow-hidden rounded-full bg-white shadow-xl ring-1 ring-black/5"
            >
              <Image src={b.src} alt={b.alt} fill sizes="96px" className="object-contain p-2" />
            </span>
          ))}
        </div>
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
            <ImageSlot
              id="about-paul"
              label="Paul Vowles on site in Torbay, spirit level in hand"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
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
              I&apos;m a carpenter and builder, born in Devon and based in Bishopsteignton, where
              I live with my wife and daughter. I&apos;ve spent more than twenty years on the
              tools across South Devon, working on everything from sticking doors and new skirting
              through to loft conversions, extensions and bespoke media walls.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-4 text-[17px] leading-relaxed text-white/70">
              The business has grown almost entirely on word of mouth, and honestly that tells
              you the bit I&apos;m most proud of. People come back, and they send their neighbours.
              Carpentry is my craft, but being reliable is the thing I work hardest at.
            </p>
          </Reveal>
          <Reveal delay={260}>
            <p className="mt-4 text-[17px] leading-relaxed text-white/70">
              My promise to you is a simple one. I turn up when I say I will, I give honest
              advice, and I treat a small repair with just as much care as a full build. No
              pushy sales, no jargon, just lovely work and a friendly face.
            </p>
          </Reveal>
          <Reveal delay={320}>
            <div className="mt-8 flex flex-wrap gap-3">
              <QuoteButton>Start a conversation</QuoteButton>
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
              Paul is fully qualified, insured and a member of the relevant trade bodies, so
              you&apos;re properly covered and the work always meets the standards it should.
            </p>
          </Reveal>
        </div>

        <AccreditationTabs />
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
                The carpentry is honestly the easy part. It&apos;s the way a job is run that
                decides whether you&apos;d happily recommend us afterwards. Here&apos;s what you
                can expect from that first call right through to handover.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <ul className="mt-8 space-y-3.5">
                {[
                  "One trusted point of contact: Paul himself, never a call centre",
                  "A free, no-obligation visit and quote",
                  "Tidy sites, daily updates and sensible working hours",
                  "Every snag fixed properly before we leave",
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
      <JsonLd data={personJsonLd()} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      <AboutHero />
      <PaulSection />
      <Accreditations />
      <HowWeWork />
      <GalleryPreview />
      <Testimonials divided />
      <FinalCTA />
    </main>
  );
}
