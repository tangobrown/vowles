import type { Metadata } from "next";
import { ReactNode } from "react";
import Link from "next/link";
import { Container, Reveal, Eyebrow, CornerLines } from "@/components/ui";
import {
  PhoneIcon,
  MailIcon,
  PinIcon,
  ClockIcon,
} from "@/components/icons";
import { ContactForm } from "@/components/ContactForm";
import { JsonLd } from "@/components/JsonLd";
import { TOWNS, PHONE_DISPLAY, PHONE_HREF, EMAIL } from "@/lib/data";
import { breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact Paul | Free, No-Obligation Quote in South Devon",
  description:
    "Get in touch with Paul Vowles for a free, no-obligation chat about your carpentry or building project across Torquay, Teignmouth, Newton Abbot, Torbay and Exeter. Call, email or send a message and you'll always get Paul himself.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Paul | Free, No-Obligation Quote in South Devon",
    description:
      "Call or message Paul Vowles for a free, friendly chat about your project. Usually a reply within a day.",
    url: "/contact",
  },
};

function DetailCard({
  icon,
  label,
  value,
  href,
  sub,
}: {
  icon: ReactNode;
  label: string;
  value: string;
  href?: string;
  sub?: string;
}) {
  const inner = (
    <>
      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-white/15 text-brand transition-colors group-hover:border-brand">
        {icon}
      </span>
      <div className="min-w-0">
        <div className="text-[12px] font-semibold uppercase tracking-[0.16em] text-white/45">
          {label}
        </div>
        <div className="mt-1 truncate text-[17px] font-semibold text-white">{value}</div>
        {sub && <div className="mt-0.5 text-[13px] text-white/50">{sub}</div>}
      </div>
    </>
  );
  const cls = "group flex items-center gap-4 border border-white/10 bg-surface p-5 transition-colors";
  return href ? (
    <a href={href} className={`${cls} hover:border-brand/50`}>
      {inner}
    </a>
  ) : (
    <div className={cls}>{inner}</div>
  );
}

export default function ContactPage() {
  return (
    <main>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      {/* Slim hero */}
      <section
        id="top"
        className="relative isolate flex min-h-[380px] items-end overflow-hidden border-b border-white/10 bg-surface"
      >
        <CornerLines />
        <Container className="relative z-10 pb-12 pt-36">
          <Reveal className="mb-4 flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-white/45">
            <Link href="/#top" className="transition-colors hover:text-brand">Home</Link>
            <span className="text-white/25">/</span>
            <span className="text-brand">Contact</span>
          </Reveal>
          <Reveal delay={60}>
            <h1 className="display text-white" style={{ fontSize: "clamp(36px, 5vw, 60px)" }}>
              Let&apos;s talk about your project
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-4 max-w-[620px] text-[17px] leading-relaxed text-white/75 sm:text-[19px]">
              Whether it&apos;s a full extension or a single door that&apos;s been bothering you
              for years, Paul would be really happy to help. Do get in touch for a free,
              no-obligation chat. No job is ever too small.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Body */}
      <section className="bg-ink py-20 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <Reveal><Eyebrow>Get in touch</Eyebrow></Reveal>
            <Reveal delay={60}>
              <h2 className="display mt-5 text-[30px] text-white sm:text-[38px]">
                Reach Paul directly
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-5 max-w-[420px] text-[16px] leading-relaxed text-white/65">
                Prefer to talk it through? Give Paul a call or drop him an email and you&apos;ll
                get the man himself, never a call centre.
              </p>
            </Reveal>

            <div className="mt-8 grid gap-4">
              <Reveal delay={140}>
                <DetailCard
                  icon={<PhoneIcon size={20} />}
                  label="Call or text"
                  value={PHONE_DISPLAY}
                  href={PHONE_HREF}
                  sub="Mon to Sat, 8am to 6pm"
                />
              </Reveal>
              <Reveal delay={200}>
                <DetailCard
                  icon={<MailIcon size={20} />}
                  label="Email"
                  value={EMAIL}
                  href={`mailto:${EMAIL}`}
                />
              </Reveal>
              <Reveal delay={260}>
                <DetailCard
                  icon={<PinIcon size={20} />}
                  label="Based in"
                  value="Bishopsteignton, Devon"
                  sub={`Covering ${TOWNS.join(", ")}`}
                />
              </Reveal>
              <Reveal delay={320}>
                <DetailCard
                  icon={<ClockIcon size={20} />}
                  label="Response time"
                  value="Usually within a day"
                  sub="A real, no-obligation reply"
                />
              </Reveal>
            </div>
          </div>

          <Reveal delay={120}>
            <ContactForm />
          </Reveal>
        </Container>
      </section>
    </main>
  );
}
