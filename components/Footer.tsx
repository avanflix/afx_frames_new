import Link from "next/link";
import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { contact } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="mt-20 md:mt-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="rounded-xl4 bg-surface border border-primary/25 p-10 md:p-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 shadow-glow relative overflow-hidden">
          <div className="blob w-64 h-64 bg-primary -top-24 -left-16" />
          <div className="relative">
            <p className="font-display text-2xl md:text-3xl font-semibold text-ink text-balance max-w-md">
              Got something worth <span className="text-primary italic">framing?</span>
            </p>
            <p className="text-muted text-sm mt-2 max-w-sm">
              We look forward to bringing yBehind the Lens to life.
            </p>
          </div>
          <Link
            href="/contact"
            className="group relative inline-flex shrink-0 items-center gap-2 rounded-full bg-grad-primary text-white px-6 py-3.5 text-sm font-semibold shadow-glow hover:shadow-softLg transition-all"
          >
            Start Your Transformation
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 md:px-10 py-16 md:py-20 grid grid-cols-2 md:grid-cols-5 gap-10">
        <div className="col-span-2">
          <p className="font-display italic text-2xl font-semibold text-ink">
            AFX Frames
          </p>
          <p className="mt-3 text-sm text-muted max-w-[26ch] leading-relaxed">
            A premium creative studio, based in {contact.location}.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a
              href={`mailto:${contact.email}`}
              aria-label="Email"
              className="w-10 h-10 rounded-full border border-line flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={`tel:${contact.phone.replace(/\s/g, "")}`}
              aria-label="Phone"
              className="w-10 h-10 rounded-full border border-line flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div>
          <p className="font-mono text-[11px] tracking-widest2 uppercase text-muted mb-4">
            Studio
          </p>
          <ul className="space-y-3 text-sm">
            <li><Link href="/work" className="underline-fade">Work</Link></li>
            <li><Link href="/studio" className="underline-fade">Studio</Link></li>
            <li><Link href="/services" className="underline-fade">Services</Link></li>
          </ul>
        </div>

        <div>
          <p className="font-mono text-[11px] tracking-widest2 uppercase text-muted mb-4">
            Connect
          </p>
          <ul className="space-y-3 text-sm">
            <li><a href={`mailto:${contact.email}`} className="underline-fade">{contact.email}</a></li>
            <li><a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="underline-fade">{contact.phone}</a></li>
          </ul>
        </div>

        <div>
          <p className="font-mono text-[11px] tracking-widest2 uppercase text-muted mb-4">
            Enquiries
          </p>
          <ul className="space-y-3 text-sm">
            <li><Link href="/contact" className="underline-fade">Start Your Transformation →</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto max-w-6xl px-6 md:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted">
          <span>© {new Date().getFullYear()} AFX Frames Studio</span>
        </div>
      </div>
    </footer>
  );
}
