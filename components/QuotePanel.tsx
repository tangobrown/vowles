"use client";

import { useEffect, useState } from "react";
import { useQuote } from "@/components/QuoteContext";
import { XIcon, CheckCircleIcon } from "@/components/icons";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/data";

type FormState = {
  name: string;
  email: string;
  phone: string;
  postcode: string;
  description: string;
};

type Errors = Partial<Record<keyof FormState, string>>;

const EMPTY: FormState = {
  name: "",
  email: "",
  phone: "",
  postcode: "",
  description: "",
};

const STEPS = [
  "Tell Paul about your project in the form below.",
  "He'll come back to you personally — usually within a day — to arrange a free site visit.",
  "You'll get a written, itemised quote. No pressure, no surprise extras.",
];

export function QuotePanel() {
  const { isOpen, close } = useQuote();
  const [form, setForm] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  // Lock body scroll + Esc-to-close while open
  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [isOpen, close]);

  // After a successful send, clear the form once the panel has finished sliding
  // out so reopening shows a fresh form rather than the success screen.
  useEffect(() => {
    if (isOpen || !sent) return;
    const t = setTimeout(() => {
      setSent(false);
      setForm(EMPTY);
      setErrors({});
    }, 400);
    return () => clearTimeout(t);
  }, [isOpen, sent]);

  const set =
    (k: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  const validate = (): Errors => {
    const er: Errors = {};
    if (!form.name.trim()) er.name = "Please tell us your name.";
    if (!form.phone.trim() && !form.email.trim()) {
      er.phone = "Add a phone or email so Paul can reply.";
      er.email = "Add a phone or email so Paul can reply.";
    } else if (
      form.email.trim() &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
    ) {
      er.email = "That email doesn't look right.";
    }
    if (!form.description.trim()) {
      er.description = "A few words about the project, please.";
    }
    return er;
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const er = validate();
    setErrors(er);
    if (Object.keys(er).length === 0) setSent(true);
  };

  const field =
    "w-full border bg-ink px-4 py-3 text-[15px] text-white placeholder-white/35 outline-none transition-colors focus:border-brand";

  return (
    <div
      className={`fixed inset-0 z-[120] ${
        isOpen ? "pointer-events-auto" : "pointer-events-none"
      }`}
      aria-hidden={!isOpen}
    >
      {/* Backdrop */}
      <div
        onClick={close}
        className={`absolute inset-0 bg-ink/70 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Panel */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Get a free quote"
        className={`absolute right-0 top-0 flex h-full w-full max-w-[480px] flex-col bg-surface shadow-2xl transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <header className="flex items-start justify-between gap-4 border-b border-white/10 p-6 sm:p-8">
          <div>
            <div className="text-[12px] font-semibold uppercase tracking-[0.18em] text-brand">
              Free, no obligation
            </div>
            <h2 className="display mt-2 text-[26px] leading-tight text-white sm:text-[30px]">
              Get a quote from Paul
            </h2>
          </div>
          <button
            type="button"
            onClick={close}
            aria-label="Close quote panel"
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-brand hover:text-brand"
          >
            <XIcon size={18} />
          </button>
        </header>

        <div className="flex-1 overflow-y-auto p-6 sm:p-8">
          {sent ? (
            <div className="flex flex-col items-start">
              <span className="grid h-14 w-14 place-items-center rounded-full bg-brand text-ink">
                <CheckCircleIcon size={28} />
              </span>
              <h3 className="display mt-6 text-[26px] text-white">
                Thanks, {form.name.split(" ")[0] || "there"}!
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-white/65">
                Your enquiry is on its way. Paul will be in touch personally — usually within a
                day. If it&apos;s urgent, give him a call on{" "}
                <a
                  href={PHONE_HREF}
                  className="font-semibold text-brand hover:text-brandDark"
                >
                  {PHONE_DISPLAY}
                </a>
                .
              </p>
              <button
                onClick={() => {
                  setSent(false);
                  setForm(EMPTY);
                  setErrors({});
                }}
                className="mt-6 text-[14px] font-semibold text-white/60 underline-offset-4 hover:text-brand hover:underline"
              >
                Send another enquiry
              </button>
            </div>
          ) : (
            <>
              <p className="text-[14px] leading-relaxed text-white/55">How it works:</p>
              <ol className="mt-3 space-y-2 text-[14px] leading-relaxed text-white/70">
                {STEPS.map((step, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="shrink-0 font-semibold text-brand">{i + 1}.</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>

              <form onSubmit={submit} noValidate className="mt-7 grid gap-4">
                <div>
                  <label className="mb-1.5 block text-[13px] font-semibold text-white/80">
                    Your name <span className="text-brand">*</span>
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={set("name")}
                    placeholder="e.g. Sarah Mitchell"
                    autoComplete="name"
                    className={`${field} ${
                      errors.name ? "border-red-400/70" : "border-white/15"
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1.5 text-[13px] text-red-400/90">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label className="mb-1.5 block text-[13px] font-semibold text-white/80">
                    Email address
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={set("email")}
                    placeholder="you@example.com"
                    autoComplete="email"
                    className={`${field} ${
                      errors.email ? "border-red-400/70" : "border-white/15"
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-[13px] text-red-400/90">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label className="mb-1.5 block text-[13px] font-semibold text-white/80">
                    Phone number
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={set("phone")}
                    placeholder="07…"
                    autoComplete="tel"
                    className={`${field} ${
                      errors.phone ? "border-red-400/70" : "border-white/15"
                    }`}
                  />
                  {errors.phone && (
                    <p className="mt-1.5 text-[13px] text-red-400/90">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <label className="mb-1.5 block text-[13px] font-semibold text-white/80">
                    Postcode
                  </label>
                  <input
                    type="text"
                    value={form.postcode}
                    onChange={set("postcode")}
                    placeholder="e.g. TQ14 9SF"
                    autoComplete="postal-code"
                    className={`${field} border-white/15`}
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-[13px] font-semibold text-white/80">
                    About the project <span className="text-brand">*</span>
                  </label>
                  <textarea
                    value={form.description}
                    onChange={set("description")}
                    rows={5}
                    placeholder="Tell Paul what you'd like done, the size of the job, and any timescales…"
                    className={`${field} resize-none ${
                      errors.description ? "border-red-400/70" : "border-white/15"
                    }`}
                  />
                  {errors.description && (
                    <p className="mt-1.5 text-[13px] text-red-400/90">{errors.description}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="mt-2 inline-flex items-center justify-center gap-2 bg-brand px-7 py-4 text-[16px] font-semibold text-ink transition-[filter] duration-200 hover:brightness-95"
                >
                  Send my enquiry
                </button>
                <p className="text-center text-[12px] text-white/40">
                  No spam, ever. Your details are only used to reply.
                </p>
              </form>
            </>
          )}
        </div>
      </aside>
    </div>
  );
}
