import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { Container, Reveal, CornerLines } from "@/components/ui";
import { JsonLd } from "@/components/JsonLd";
import { EMAIL, PHONE_DISPLAY, PHONE_HREF } from "@/lib/data";
import { SITE_NAME, breadcrumbJsonLd } from "@/lib/seo";

const LAST_UPDATED = "24 July 2026";

export const metadata: Metadata = {
  title: "Privacy Policy | Vowles Carpentry & Building",
  description:
    "How Vowles Carpentry & Building looks after your personal information. What we collect when you get in touch, how we use it, who we share it with, and your rights.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "Privacy Policy | Vowles Carpentry & Building",
    description:
      "How we look after your personal information, and the simple promises we make about your privacy.",
    url: "/privacy",
  },
};

const mailto = `mailto:${EMAIL}`;
const linkCls = "font-semibold text-brand underline-offset-4 hover:text-brandDark hover:underline";

const SECTIONS: { title: string; body: ReactNode }[] = [
  {
    title: "Who we are",
    body: (
      <>
        <p>
          This privacy policy explains how {SITE_NAME} looks after your personal information and
          respects your privacy. We are a carpentry and building business run by Paul Vowles, based
          in Bishopsteignton, Devon.
        </p>
        <p>
          Paul is the person responsible for your information (the data controller). For anything to
          do with your privacy, you can reach us by email at{" "}
          <a href={mailto} className={linkCls}>
            {EMAIL}
          </a>{" "}
          or by phone on{" "}
          <a href={PHONE_HREF} className={linkCls}>
            {PHONE_DISPLAY}
          </a>
          .
        </p>
      </>
    ),
  },
  {
    title: "The information we collect",
    body: (
      <>
        <p>
          We only collect the details you choose to give us. When you fill in our contact form or
          ask for a quote, we ask for:
        </p>
        <ul>
          <li>Your name</li>
          <li>Your email address and/or phone number</li>
          <li>Your postcode, on the quote form</li>
          <li>A few details about the project or enquiry</li>
        </ul>
        <p>
          We never ask for sensitive information, and we would never need your bank or card details
          through this website. When you visit the site, our hosting provider may automatically
          handle basic technical information, such as your device type and IP address, purely so the
          site loads correctly and stays secure.
        </p>
      </>
    ),
  },
  {
    title: "How we use your information",
    body: (
      <p>
        We use the details you send us for one simple reason: to reply to your enquiry, arrange a
        visit where it helps, and put together your quote. We may keep a record of our conversation
        so we can pick up where we left off. We will never sell your information, and we will not
        send you marketing you have not asked for.
      </p>
    ),
  },
  {
    title: "Our legal basis for using it",
    body: (
      <>
        <p>Under UK data protection law, we rely on:</p>
        <ul>
          <li>
            Your consent, given when you choose to send us an enquiry through the website.
          </li>
          <li>
            Our legitimate interest in responding to you and running the business properly.
          </li>
        </ul>
        <p>
          If we go on to carry out work for you, we also use your details to fulfil our agreement
          with you.
        </p>
      </>
    ),
  },
  {
    title: "Who we share it with",
    body: (
      <>
        <p>
          We keep your information to ourselves as much as we possibly can. We only use a couple of
          trusted providers to run the website and receive your messages:
        </p>
        <ul>
          <li>
            <strong className="font-semibold text-white/90">Formspree</strong>, which delivers the
            messages you send through our forms straight to Paul&apos;s inbox.
          </li>
          <li>
            <strong className="font-semibold text-white/90">Vercel</strong>, which hosts the
            website.
          </li>
        </ul>
        <p>
          These providers act on our behalf and are not allowed to use your information for their
          own purposes. We would only ever share your information further if the law required us to.
        </p>
      </>
    ),
  },
  {
    title: "How long we keep it",
    body: (
      <p>
        We keep your enquiry details only for as long as we genuinely need them, to answer your
        question, carry out any work, and meet our legal and tax obligations. Once we no longer need
        your information, we delete it.
      </p>
    ),
  },
  {
    title: "Cookies and tracking",
    body: (
      <p>
        We like to keep things simple. This website does not use advertising or analytics cookies,
        and we do not track you around the web. Your browser may store basic technical data needed
        to display the site properly, but we do not use it to identify you.
      </p>
    ),
  },
  {
    title: "Your rights",
    body: (
      <>
        <p>Under UK GDPR you have the right to:</p>
        <ul>
          <li>Ask for a copy of the information we hold about you</li>
          <li>Ask us to correct anything that is wrong</li>
          <li>Ask us to delete your information</li>
          <li>Object to, or ask us to limit, how we use it</li>
        </ul>
        <p>
          To do any of these, just get in touch by email or phone and we will sort it out. There is
          no charge, and we will always respond as quickly as we can.
        </p>
      </>
    ),
  },
  {
    title: "Keeping your information secure",
    body: (
      <p>
        We take sensible steps to protect the information you share with us, and we only work with
        reputable providers who do the same.
      </p>
    ),
  },
  {
    title: "Changes to this policy",
    body: (
      <p>
        We may update this policy from time to time. When we do, we will change the date shown at
        the top of this page.
      </p>
    ),
  },
  {
    title: "How to contact us or make a complaint",
    body: (
      <>
        <p>
          If you have any questions about your privacy, or you are not happy with how we have
          handled your information, please contact Paul first on{" "}
          <a href={mailto} className={linkCls}>
            {EMAIL}
          </a>{" "}
          or{" "}
          <a href={PHONE_HREF} className={linkCls}>
            {PHONE_DISPLAY}
          </a>
          , and we will do our best to put things right.
        </p>
        <p>
          You also have the right to complain to the Information Commissioner&apos;s Office, the UK
          regulator for data protection, at{" "}
          <a
            href="https://ico.org.uk"
            target="_blank"
            rel="noopener noreferrer"
            className={linkCls}
          >
            ico.org.uk
          </a>
          .
        </p>
      </>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <main>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/privacy" },
        ])}
      />

      {/* Slim hero */}
      <section
        id="top"
        className="relative isolate flex min-h-[340px] items-end overflow-hidden border-b border-white/10 bg-surface"
      >
        <CornerLines />
        <Container className="relative z-10 pb-12 pt-36">
          <Reveal className="mb-4 flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-white/45">
            <Link href="/#top" className="transition-colors hover:text-brand">Home</Link>
            <span className="text-white/25">/</span>
            <span className="text-brand">Privacy</span>
          </Reveal>
          <Reveal delay={60}>
            <h1 className="display text-white" style={{ fontSize: "clamp(36px, 5vw, 60px)" }}>
              Privacy policy
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-4 text-[14px] font-medium uppercase tracking-[0.14em] text-white/45">
              Last updated {LAST_UPDATED}
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Body */}
      <section className="bg-ink py-20 sm:py-24">
        <Container>
          <div className="mx-auto max-w-[760px]">
            <Reveal>
              <p className="text-[17px] leading-relaxed text-white/75">
                Your privacy matters to us. This policy sets out, in plain English, what information
                we collect when you get in touch, how we use it, and the rights you have. If anything
                here is unclear, please just ask.
              </p>
            </Reveal>

            <div className="mt-14 space-y-12">
              {SECTIONS.map((s, i) => (
                <Reveal key={s.title} delay={i < 4 ? i * 50 : 0}>
                  <div className="border-t border-white/10 pt-8">
                    <h2 className="display text-[22px] leading-snug text-white sm:text-[26px]">
                      {s.title}
                    </h2>
                    <div className="mt-4 space-y-4 text-[16px] leading-relaxed text-white/70 [&_a]:break-words [&_li]:pl-1 [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-5 [&_ul]:marker:text-brand">
                      {s.body}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
