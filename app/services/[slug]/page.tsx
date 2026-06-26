import Link from "next/link";
import { notFound } from "next/navigation";
import { Container, Reveal, Eyebrow, CornerLines } from "@/components/ui";
import { ImageSlot } from "@/components/ImageSlot";
import { QuoteButton } from "@/components/QuoteButton";
import { CheckIcon, PhoneIcon } from "@/components/icons";
import { ServiceCarousel } from "@/components/ServiceCarousel";
import { ServiceFaq } from "@/components/ServiceFaq";
import { Testimonials, FinalCTA } from "@/components/Sections";
import { SERVICE_PAGES, SERVICE_SLUGS } from "@/lib/services";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/data";

export function generateStaticParams() {
  return SERVICE_SLUGS.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const page = SERVICE_PAGES[params.slug];
  if (!page) return { title: "Service — Vowles Carpentry & Building" };
  return {
    title: `${page.name} — Vowles Carpentry & Building`,
    description: page.heroSubhead,
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const page = SERVICE_PAGES[params.slug];
  if (!page) notFound();

  return (
    <main>
      {/* Hero */}
      <section
        id="top"
        className="relative isolate flex min-h-[560px] items-end overflow-hidden border-b border-white/10"
      >
        <div className="absolute inset-0 z-0">
          <ImageSlot id={page.heroSlot} label={`${page.name} hero photo`} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/30" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/40" />
        </div>

        <Container className="relative z-10 pb-16 pt-44">
          <Reveal className="mb-5 flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-white/45">
            <Link href="/#top" className="transition-colors hover:text-brand">Home</Link>
            <span className="text-white/25">/</span>
            <Link href="/#services" className="transition-colors hover:text-brand">Services</Link>
            <span className="text-white/25">/</span>
            <span className="text-brand">{page.eyebrow}</span>
          </Reveal>

          <Reveal delay={60}>
            <h1 className="display max-w-[18ch] text-white">{page.name}</h1>
          </Reveal>

          <Reveal delay={120}>
            <p className="mt-6 max-w-[680px] text-[18px] leading-relaxed text-white/75 sm:text-[20px]">
              {page.heroSubhead}
            </p>
          </Reveal>

          <Reveal delay={180} className="mt-9 flex flex-wrap gap-3">
            <QuoteButton>Get a free quote</QuoteButton>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-2.5 border border-white/25 px-6 py-3.5 text-[15px] font-semibold text-white transition-colors duration-200 hover:border-brand hover:text-brand"
            >
              <PhoneIcon size={17} />
              {PHONE_DISPLAY}
            </a>
          </Reveal>
        </Container>
      </section>

      {/* Intro + sub-services */}
      <section className="relative overflow-hidden bg-ink py-24 sm:py-28">
        <CornerLines />
        <Container className="relative z-10 grid gap-12 md:grid-cols-2 lg:gap-20">
          <div>
            <Reveal><Eyebrow>What&apos;s involved</Eyebrow></Reveal>
            <Reveal delay={60}>
              <h2 className="display mt-5 text-[34px] text-white sm:text-[44px]">
                {page.introHeading}
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-6 max-w-[460px] text-[17px] leading-relaxed text-white/70">
                {page.introBody}
              </p>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <div className="text-[12px] font-semibold uppercase tracking-[0.18em] text-brand">
              {page.subServicesTitle}
            </div>
            <ul className="mt-6 border-y border-white/10">
              {page.subServices.map((s) => (
                <li
                  key={s.label}
                  className="flex gap-4 border-t border-white/10 py-4 first:border-t-0"
                >
                  <span className="mt-0.5 shrink-0 text-brand">
                    <CheckIcon size={20} />
                  </span>
                  <div>
                    <div className="text-[16px] font-semibold text-white">{s.label}</div>
                    <div className="mt-1 text-[14px] leading-snug text-white/55">{s.text}</div>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      <ServiceCarousel
        eyebrow={page.galleryEyebrow}
        heading={page.galleryHeading}
        slots={page.gallerySlots}
      />

      <ServiceFaq
        eyebrow={page.faqEyebrow}
        heading={page.faqHeading}
        intro={page.faqIntro}
        faqs={page.faqs}
      />

      <Testimonials
        items={page.testimonials}
        eyebrow={page.testimonialsEyebrow}
        heading={page.testimonialsHeading}
        divided
      />

      <FinalCTA />
    </main>
  );
}
