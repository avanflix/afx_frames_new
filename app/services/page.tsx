import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { StaggerGrid, StaggerItem } from "@/components/StaggerGrid";
import { specialties, services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services — AFX Frames",
};

export default function ServicesPage() {
  return (
    <div className="relative overflow-hidden">
      <div className="blob w-[460px] h-[460px] bg-primary -top-40 -right-40" />
      <div className="absolute inset-0 bg-grad-radial-soft" />

      {/* SIGNATURE SERVICES */}
      <div className="relative mx-auto max-w-6xl px-6 md:px-10 pt-16 md:pt-24 pb-16 md:pb-20">
        <Reveal className="max-w-2xl mb-14">
          <p className="font-mono text-[11px] tracking-widest2 uppercase text-primary font-medium mb-6">
            Our Expertise
          </p>
          <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight text-balance mb-6">
            Signature <span className="text-primary italic">Services</span>
          </h1>
          <p className="text-muted leading-relaxed">
            We create premium portfolios and branded visual experiences
            tailored for models, actors, influencers, entrepreneurs, and
            emerging talent. Every project blends creativity, technical
            excellence, and strategic direction to deliver imagery that
            captures attention, builds credibility, and creates lasting
            opportunities.
          </p>
        </Reveal>

        <StaggerGrid className="grid md:grid-cols-2 gap-x-10 gap-y-8 mb-16">
          {specialties.map((s) => (
            <StaggerItem key={s.number} className="flex items-start gap-5">
              <span className="font-display italic text-3xl md:text-4xl font-semibold text-primary/40 shrink-0">
                {s.number}.
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold mb-1">{s.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{s.detail}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>

        <Reveal direction="scale" className="grid grid-cols-3 gap-10 md:gap-10 max-w-5xl">
          <div className="relative aspect-[4/5] rounded-xl3 overflow-hidden shadow-soft">
            <Image src="/photos/services-1.jpg" alt="AFX Frames signature service shoot" fill sizes="(min-width: 768px) 25vw, 45vw" className="object-cover" />
          </div>
          <div className="relative aspect-[4/5] rounded-xl3 overflow-hidden shadow-soft mt-8">
            <Image src="/photos/studio-6.jpg" alt="AFX Frames signature service shoot" fill sizes="(min-width: 768px) 25vw, 45vw" className="object-cover" />
          </div>
          <div className="relative aspect-[4/5] rounded-xl3 overflow-hidden shadow-soft">
            <Image src="/photos/studio-8.jpg" alt="AFX Frames signature service shoot" fill sizes="(min-width: 768px) 25vw, 45vw" className="object-cover" />
          </div>
        </Reveal>
      </div>

      {/* OUR SERVICES */}
      <div className="relative bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <Reveal className="mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-balance">
              Signature <span className="text-primary italic">Services</span>
            </h2>
          </Reveal>
          <StaggerGrid className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
            {services.map((s) => (
              <StaggerItem
                key={s.number}
                className="rounded-xl3 bg-bg border border-line shadow-soft card-lift p-6"
              >
                <span className="font-mono text-primary text-sm font-semibold">{s.number}</span>
                <h3 className="font-display text-base font-semibold mt-3 mb-1.5">{s.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{s.detail}</p>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </div>
    </div>
  );
}
