import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { MapPin, Mail, Phone } from "lucide-react";
import { contact } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact — AFX Frames",
};

export default function ContactPage() {
  return (
    <div className="relative overflow-hidden">
      <div className="blob w-[420px] h-[420px] bg-primary -top-32 -left-32" />
      <div className="relative mx-auto max-w-5xl px-6 md:px-10 py-16 md:py-24">
        <Reveal>
          <p className="font-mono text-[11px] tracking-widest2 uppercase text-primary font-medium mb-6">
            Let's Create Together
          </p>
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 text-balance">
            Let&apos;s frame it.
          </h1>
          <p className="text-muted max-w-lg mb-14 leading-relaxed">
            Tell us about the project we look forward to bringing your
            vision to life through compelling visuals that inspire, connect,
            and create lasting impact.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-12 gap-10 md:gap-14">
          <Reveal delay={0.1} className="md:col-span-7">
            <ContactForm />
          </Reveal>
          <Reveal delay={0.2} className="md:col-span-5 space-y-5">
            <div className="rounded-xl3 bg-surface border border-line shadow-soft p-6 flex items-start gap-4">
              <div className="w-10 h-10 shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
                <MapPin className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="font-mono text-[11px] tracking-widest2 uppercase text-muted mb-1">
                  Studio
                </p>
                <p className="text-sm text-ink">{contact.location}</p>
              </div>
            </div>
            <div className="rounded-xl3 bg-surface border border-line shadow-soft p-6 flex items-start gap-4">
              <div className="w-10 h-10 shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
                <Mail className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="font-mono text-[11px] tracking-widest2 uppercase text-muted mb-1">
                  Email
                </p>
                <a href={`mailto:${contact.email}`} className="text-sm text-ink underline-fade">
                  {contact.email}
                </a>
              </div>
            </div>
            <div className="rounded-xl3 bg-surface border border-line shadow-soft p-6 flex items-start gap-4">
              <div className="w-10 h-10 shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
                <Phone className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="font-mono text-[11px] tracking-widest2 uppercase text-muted mb-1">
                  Phone
                </p>
                <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="text-sm text-ink underline-fade">
                  {contact.phone}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
