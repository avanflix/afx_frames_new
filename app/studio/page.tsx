import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { StaggerGrid, StaggerItem } from "@/components/StaggerGrid";
import { whyAfx } from "@/lib/data";

export const metadata: Metadata = {
  title: "Studio — AFX Frames",
};

export default function StudioPage() {
  return (
    <div className="relative overflow-hidden">
      <div className="blob w-[460px] h-[460px] bg-secondary -top-40 -left-40" />
      <div className="absolute inset-0 bg-grad-radial-soft" />

      <div className="relative mx-auto max-w-6xl px-6 md:px-10 pt-16 md:pt-24 pb-10">
        <Reveal>
          <p className="font-mono text-[11px] tracking-widest2 uppercase text-primary font-medium mb-6">
            Why AFX Frames
          </p>
          <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight text-balance max-w-3xl">
            Why <span className="text-primary italic">AFX Frames</span>
          </h1>
        </Reveal>
      </div>

      <div className="relative mx-auto max-w-6xl px-6 md:px-10 grid md:grid-cols-12 gap-10 md:gap-14 py-10 md:py-16 items-center">
        <StaggerGrid className="md:col-span-7 space-y-6">
          {whyAfx.map((w) => (
            <StaggerItem key={w.number} className="flex items-start gap-4">
              <span className="shrink-0 w-9 h-9 rounded-full bg-primary/10 border border-primary/30 text-primary font-mono text-xs font-semibold flex items-center justify-center">
                {w.number}
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold mb-1">{w.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{w.detail}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>
        <Reveal direction="scale" delay={0.1} className="md:col-span-5 relative aspect-[4/5] rounded-xl4 overflow-hidden shadow-soft">
          <Image
            src="/photos/why-studio.jpg"
            alt="Inside the AFX Frames studio"
            fill
            sizes="(min-width: 768px) 40vw, 90vw"
            className="object-cover"
          />
        </Reveal>
      </div>

      {/* BEHIND THE SCENES */}
      <div className="relative bg-surface py-20 md:py-28 mt-10">
        <div className="mx-auto max-w-6xl px-6 md:px-10 grid md:grid-cols-12 gap-10 items-center">
          <Reveal className="md:col-span-6">
            <p className="font-mono text-[11px] tracking-widest2 uppercase text-primary font-medium mb-6">
              Behind the scenes
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight text-balance mb-6">
              Every Great Shot Starts <span className="text-primary italic">Before the Camera Clicks</span>
            </h2>
            <p className="text-[15px] leading-relaxed text-ink/85 mb-4">
              Every photoshoot is carefully planned, from concept development
              and styling to lighting and shot composition. Our team ensures
              every detail is thoughtfully executed to create a seamless and
              professional experience.
            </p>
            <p className="text-[15px] leading-relaxed text-muted">
              Through creative direction, precision, and collaboration, we
              capture authentic moments that reflect confidence, personality,
              and purpose — delivering visuals that exceed expectations and
              leave a lasting impression.
            </p>
          </Reveal>
          <Reveal delay={0.1} direction="scale" className="md:col-span-6 relative grid grid-cols-2 gap-4">
            <div className="relative aspect-[3/4] rounded-xl3 overflow-hidden shadow-soft mt-8">
              <Image
                src="/photos/behind-1.jpg"
                alt="Behind the scenes at AFX Frames"
                fill
                sizes="(min-width: 768px) 20vw, 45vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[3/4] rounded-xl3 overflow-hidden shadow-soft">
              <Image
                src="/photos/behind-2.jpg"
                alt="Behind the scenes at AFX Frames"
                fill
                sizes="(min-width: 768px) 20vw, 45vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
