"use client";

import { useState } from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";

const shootTypes = [
  "Kids Portfolio",
  "Model Portfolio",
  "Fashion Photography",
  "Personal Branding",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [shootType, setShootType] = useState(shootTypes[0]);

  if (submitted) {
    return (
      <div className="rounded-xl4 border border-line bg-surface p-10 md:p-14 text-center">
        <div className="w-14 h-14 rounded-full bg-grad-primary flex items-center justify-center mx-auto mb-5 shadow-glow">
          <CheckCircle2 className="w-7 h-7 text-white" />
        </div>
        <p className="font-display text-2xl font-semibold mb-2">
          Frame received.
        </p>
        <p className="text-muted text-sm">
          We reply to every enquiry within two working days.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="rounded-xl4 border border-line bg-surface shadow-soft p-8 md:p-10 space-y-7"
    >
      <div className="grid sm:grid-cols-2 gap-6">
        <label className="block">
          <span className="font-mono text-[11px] tracking-widest2 uppercase text-muted">
            Full Name
          </span>
          <input
            required
            type="text"
            placeholder="John Doe"
            className="mt-2 w-full rounded-xl2 border border-line bg-surface px-4 py-3 text-ink placeholder:text-muted/60 outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/10"
          />
        </label>

        <label className="block">
          <span className="font-mono text-[11px] tracking-widest2 uppercase text-muted">
            Phone Number
          </span>
          <input
            required
            type="tel"
            placeholder="+91 98765 43210"
            className="mt-2 w-full rounded-xl2 border border-line bg-surface px-4 py-3 text-ink placeholder:text-muted/60 outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/10"
          />
        </label>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <label className="block">
          <span className="font-mono text-[11px] tracking-widest2 uppercase text-muted">
            Email Address
          </span>
          <input
            required
            type="email"
            placeholder="john@example.com"
            className="mt-2 w-full rounded-xl2 border border-line bg-surface px-4 py-3 text-ink placeholder:text-muted/60 outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/10"
          />
        </label>

        <label className="block">
          <span className="font-mono text-[11px] tracking-widest2 uppercase text-muted">
            Preferred Shoot Date
          </span>
          <input
            required
            type="date"
            className="mt-2 w-full rounded-xl2 border border-line bg-surface px-4 py-3 text-ink outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/10"
          />
        </label>
      </div>

      <div>
        <span className="font-mono text-[11px] tracking-widest2 uppercase text-muted">
          Shoot Type
        </span>

        <div className="mt-3 flex flex-wrap gap-2">
          {shootTypes.map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => setShootType(type)}
              className={`rounded-full px-4 py-2 text-sm transition-all border ${
                shootType === type
                  ? "bg-grad-primary text-white border-transparent shadow-glow"
                  : "border-line text-ink/70 hover:border-primary hover:text-ink"
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      <label className="block">
        <span className="font-mono text-[11px] tracking-widest2 uppercase text-muted">
          Tell us about your shoot
        </span>
        <textarea
          required
          rows={2}
          placeholder="Tell us about yBehind the Lens, preferred location or anything you'd like us to know..."
          className="mt-2 w-full resize-none rounded-xl2 border border-line bg-surface px-4 py-3 text-ink placeholder:text-muted/60 outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/10"
        />
      </label>

      <button
        type="submit"
        className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-grad-primary px-8 py-4 text-sm font-semibold text-white shadow-glow transition-all hover:shadow-softLg sm:w-auto"
      >
        Send Enquiry
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </button>
    </form>
  );
}