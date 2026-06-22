"use client";

import { useState } from "react";
import { CheckCircleIcon } from "@/components/icons";
import { SERVICES, PHONE_DISPLAY, PHONE_HREF } from "@/lib/data";

type FormState = {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
};

type Errors = Partial<Record<keyof FormState, string>>;

const EMPTY: FormState = {
  name: "",
  phone: "",
  email: "",
  service: "",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const set =
    (k: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
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
    if (!form.message.trim()) er.message = "A few words about the job, please.";
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

  if (sent) {
    return (
      <div className="flex h-full flex-col items-start justify-center border border-brand/30 bg-surface p-8">
        <span className="grid h-14 w-14 place-items-center rounded-full bg-brand text-ink">
          <CheckCircleIcon size={28} />
        </span>
        <h3 className="display mt-6 text-[28px] text-white">
          Thanks, {form.name.split(" ")[0] || "there"}!
        </h3>
        <p className="mt-3 max-w-[420px] text-[15px] leading-relaxed text-white/65">
          Your message is on its way. Paul will get back to you as soon as he can — usually within
          a day. If it&apos;s urgent, give him a call on{" "}
          <a href={PHONE_HREF} className="font-semibold text-brand hover:text-brandDark">
            {PHONE_DISPLAY}
          </a>
          .
        </p>
        <button
          onClick={() => {
            setSent(false);
            setForm(EMPTY);
          }}
          className="mt-7 text-[14px] font-semibold text-white/60 underline-offset-4 hover:text-brand hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      id="form"
      onSubmit={submit}
      noValidate
      className="border border-white/10 bg-surface p-6 sm:p-8"
    >
      <h2 className="display text-[24px] text-white sm:text-[28px]">Send Paul a message</h2>
      <p className="mt-2 text-[14px] text-white/55">
        Fields marked with <span className="text-brand">*</span> are required.
      </p>

      <div className="mt-6 grid gap-5">
        <div>
          <label className="mb-1.5 block text-[13px] font-semibold text-white/80">
            Your name <span className="text-brand">*</span>
          </label>
          <input
            type="text"
            value={form.name}
            onChange={set("name")}
            placeholder="e.g. Sarah Mitchell"
            className={`${field} ${errors.name ? "border-red-400/70" : "border-white/15"}`}
          />
          {errors.name && (
            <p className="mt-1.5 text-[13px] text-red-400/90">{errors.name}</p>
          )}
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-[13px] font-semibold text-white/80">
              Phone
            </label>
            <input
              type="tel"
              value={form.phone}
              onChange={set("phone")}
              placeholder="07…"
              className={`${field} ${errors.phone ? "border-red-400/70" : "border-white/15"}`}
            />
            {errors.phone && (
              <p className="mt-1.5 text-[13px] text-red-400/90">{errors.phone}</p>
            )}
          </div>
          <div>
            <label className="mb-1.5 block text-[13px] font-semibold text-white/80">
              Email
            </label>
            <input
              type="email"
              value={form.email}
              onChange={set("email")}
              placeholder="you@example.com"
              className={`${field} ${errors.email ? "border-red-400/70" : "border-white/15"}`}
            />
            {errors.email && (
              <p className="mt-1.5 text-[13px] text-red-400/90">{errors.email}</p>
            )}
          </div>
        </div>

        <div>
          <label className="mb-1.5 block text-[13px] font-semibold text-white/80">
            What can Paul help with?
          </label>
          <select
            value={form.service}
            onChange={set("service")}
            className={`${field} border-white/15 ${form.service ? "text-white" : "text-white/40"}`}
          >
            <option value="">Select a service (optional)</option>
            {SERVICES.map((s) => (
              <option key={s.id} value={s.name} className="text-ink">
                {s.name}
              </option>
            ))}
            <option value="Something else" className="text-ink">
              Something else
            </option>
          </select>
        </div>

        <div>
          <label className="mb-1.5 block text-[13px] font-semibold text-white/80">
            About the job <span className="text-brand">*</span>
          </label>
          <textarea
            value={form.message}
            onChange={set("message")}
            rows={5}
            placeholder="Tell Paul a little about what you need, where you are, and any timescales…"
            className={`${field} resize-none ${
              errors.message ? "border-red-400/70" : "border-white/15"
            }`}
          />
          {errors.message && (
            <p className="mt-1.5 text-[13px] text-red-400/90">{errors.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="mt-1 inline-flex items-center justify-center gap-2 bg-brand px-7 py-4 text-[16px] font-semibold text-ink transition-[filter] duration-200 hover:brightness-95"
        >
          Send message
        </button>
        <p className="text-center text-[12px] text-white/40">
          No spam, ever. Your details are only used to reply to your enquiry.
        </p>
      </div>
    </form>
  );
}
