"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui";
import { PhoneIcon } from "@/components/icons";
import { SERVICES, PHONE_DISPLAY, PHONE_HREF, servicePath } from "@/lib/data";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [svcOpen, setSvcOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nav = [
    { label: "Home", href: "/#top" },
    { label: "About", href: "/about" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-ink/95 backdrop-blur border-b border-white/10 py-2.5"
          : "bg-gradient-to-b from-black/60 to-transparent py-4"
      }`}
    >
      <Container className="flex items-center justify-between gap-4">
        <Link
          href="/#top"
          className="flex shrink-0 items-center"
          aria-label="Vowles Carpentry & Building — home"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/vowles-logo.png"
            alt="Vowles Carpentry & Building"
            className={`w-auto transition-all duration-300 ${scrolled ? "h-14" : "h-[68px]"}`}
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          <Link
            href="/#top"
            className="px-3.5 py-2 text-[15px] font-medium text-white/85 transition-colors hover:text-brand"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="px-3.5 py-2 text-[15px] font-medium text-white/85 transition-colors hover:text-brand"
          >
            About
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setSvcOpen(true)}
            onMouseLeave={() => setSvcOpen(false)}
          >
            <Link
              href="/#services"
              className="flex items-center gap-1.5 px-3.5 py-2 text-[15px] font-medium text-white/85 transition-colors hover:text-brand"
            >
              Services
              <span
                className={`mt-0.5 inline-block transition-transform ${svcOpen ? "rotate-180" : ""}`}
                style={{ fontSize: 10 }}
              >
                ▾
              </span>
            </Link>
            <div
              className={`absolute left-1/2 top-full w-[420px] -translate-x-1/2 pt-3 transition-all duration-200 ${
                svcOpen
                  ? "visible opacity-100 translate-y-0"
                  : "invisible opacity-0 -translate-y-1"
              }`}
            >
              <div className="grid grid-cols-2 gap-1 border border-white/10 bg-surface2 p-2 shadow-2xl">
                {SERVICES.map((s) => (
                  <Link
                    key={s.id}
                    href={servicePath(s.id)}
                    className="group/svc px-3 py-2.5 transition-colors hover:bg-white/5"
                  >
                    <div className="text-[14px] font-semibold text-white group-hover/svc:text-brand">
                      {s.name}
                    </div>
                    <div className="mt-0.5 text-[12px] leading-snug text-white/45">
                      {s.blurb}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link
            href="/gallery"
            className="px-3.5 py-2 text-[15px] font-medium text-white/85 transition-colors hover:text-brand"
          >
            Gallery
          </Link>
          <Link
            href="/contact"
            className="px-3.5 py-2 text-[15px] font-medium text-white/85 transition-colors hover:text-brand"
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={PHONE_HREF}
            className="hidden items-center gap-2 text-[15px] font-semibold text-white transition-colors hover:text-brand sm:flex"
          >
            <span className="grid h-8 w-8 place-items-center rounded-full border border-white/20 text-brand">
              <PhoneIcon size={15} />
            </span>
            <span className="hidden xl:inline">{PHONE_DISPLAY}</span>
          </a>
          <Link
            href="/contact#form"
            className="hidden items-center justify-center gap-2 bg-brand px-6 py-3.5 text-[15px] font-semibold tracking-wide text-ink transition-[filter] duration-200 hover:brightness-95 sm:inline-flex"
          >
            Get a Quote
          </Link>

          <button
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center border border-white/15 text-white lg:hidden"
            aria-label="Menu"
            aria-expanded={open}
          >
            <div className="space-y-[5px]">
              <span
                className={`block h-0.5 w-5 bg-white transition-all ${
                  open ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-white transition-all ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-0.5 w-5 bg-white transition-all ${
                  open ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </Container>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-[640px]" : "max-h-0"
        }`}
      >
        <Container className="py-4">
          <div className="border border-white/10 bg-surface2 p-3">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="block px-3 py-3 text-[16px] font-medium text-white/90 hover:bg-white/5 hover:text-brand"
              >
                {n.label}
              </Link>
            ))}
            <div className="mt-1 border-t border-white/10 pt-2">
              <div className="px-3 pb-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand">
                Services
              </div>
              <div className="grid grid-cols-2 gap-0.5">
                {SERVICES.map((s) => (
                  <Link
                    key={s.id}
                    href={servicePath(s.id)}
                    onClick={() => setOpen(false)}
                    className="px-3 py-2 text-[13px] text-white/75 hover:bg-white/5 hover:text-brand"
                  >
                    {s.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="mt-3 grid grid-cols-2 gap-2">
              <a
                href={PHONE_HREF}
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center gap-2 border border-white/25 px-6 py-3.5 text-[15px] font-semibold text-white hover:border-brand hover:text-brand"
              >
                Call Paul
              </a>
              <Link
                href="/contact#form"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center gap-2 bg-brand px-6 py-3.5 text-[15px] font-semibold text-ink hover:brightness-95"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
}
