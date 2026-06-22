import Link from "next/link";
import { Container } from "@/components/ui";
import { PhoneIcon, MailIcon, PinIcon } from "@/components/icons";
import {
  SERVICES,
  TOWNS,
  PHONE_DISPLAY,
  PHONE_HREF,
  EMAIL,
  servicePath,
} from "@/lib/data";

const SOCIAL = [
  {
    label: "Facebook",
    path: "M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z",
  },
  {
    label: "Instagram",
    path: "M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 0 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z",
  },
];

export function Footer() {
  return (
    <footer
      id="contact"
      className="scroll-mt-24 border-t border-white/10 bg-surface"
    >
      <Container className="grid gap-12 py-16 lg:grid-cols-[1.4fr_1.6fr_1.2fr] lg:gap-10">
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/vowles-logo.png"
            alt="Vowles Carpentry & Building"
            className="h-12 w-auto"
          />
          <p className="mt-5 max-w-[300px] text-[14px] leading-relaxed text-white/55">
            Skilled, local carpentry and building across South Devon. Run by Paul
            Vowles — where no job is too small.
          </p>
          <div className="mt-6 flex gap-2.5">
            {SOCIAL.map((s) => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-brand hover:text-brand"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-[18px] w-[18px]"
                  aria-hidden="true"
                >
                  <path d={s.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-[12px] font-semibold uppercase tracking-[0.18em] text-brand">
            Services
          </h4>
          <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-2.5">
            {SERVICES.map((s) => (
              <li key={s.id}>
                <Link
                  href={servicePath(s.id)}
                  className="text-[14px] text-white/65 transition-colors hover:text-white"
                >
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-[12px] font-semibold uppercase tracking-[0.18em] text-brand">
            Get in touch
          </h4>
          <ul className="mt-5 space-y-3.5">
            <li>
              <a
                href={PHONE_HREF}
                className="flex items-center gap-3 text-white/80 transition-colors hover:text-brand"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/15 text-brand">
                  <PhoneIcon size={16} />
                </span>
                <span className="text-[15px] font-semibold">{PHONE_DISPLAY}</span>
              </a>
            </li>
            <li>
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-3 text-white/80 transition-colors hover:text-brand"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/15 text-brand">
                  <MailIcon size={16} />
                </span>
                <span className="text-[14px]">{EMAIL}</span>
              </a>
            </li>
            <li className="flex items-start gap-3 text-white/60">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/15 text-brand">
                <PinIcon size={16} />
              </span>
              <span className="text-[14px] leading-snug">
                Bishopsteignton, Devon
                <br />
                Covering {TOWNS.join(", ")}
              </span>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-[13px] text-white/40 sm:flex-row">
          <div>© {new Date().getFullYear()} Vowles Carpentry & Building. Fully insured.</div>
          <div className="flex gap-5">
            <a href="#" className="transition-colors hover:text-white/70">Privacy</a>
            <a href="#" className="transition-colors hover:text-white/70">Terms</a>
          </div>
        </Container>
      </div>
    </footer>
  );
}
