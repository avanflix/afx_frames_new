import type { Metadata } from "next";
import FrameTile from "@/components/FrameTile";
import { workGallery, studioGallery } from "@/lib/data";
import Reveal from "@/components/Reveal";
import { StaggerGrid, StaggerItem } from "@/components/StaggerGrid";

export const metadata: Metadata = {
  title: "Work — AFX Frames",
};

export default function WorkPage() {
  return (
    <div className="relative overflow-hidden">
      <div className="blob w-[420px] h-[420px] bg-primary -top-32 -right-32" />
      <div className="relative mx-auto max-w-6xl px-6 md:px-10 py-16 md:py-24">
        <Reveal className="mb-14">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-ink">
            Our <span className="text-primary italic">Work</span>
          </h1>
        </Reveal>

        <StaggerGrid className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-20 md:mb-28">
          {workGallery.map((src, i) => (
            <StaggerItem key={src}>
              <FrameTile
                hue={0}
                frame={`010${i + 4}`}
                image={src}
                alt="AFX Frames portfolio shoot"
                className="aspect-[3/4] card-lift"
              />
            </StaggerItem>
          ))}
        </StaggerGrid>

        <Reveal className="mb-14">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-ink">
            More From <span className="text-primary italic">Our Studio</span>
          </h2>
        </Reveal>
      
        <StaggerGrid className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {studioGallery.map((src, i) => (
            <StaggerItem key={src} className={i === 0 ? "col-span-2" : ""}>
              <FrameTile
                hue={0}
                frame={`011${i}`}
                image={src}
                alt="AFX Frames portfolio shoot"
                className={i === 0 ? "aspect-[16/9] card-lift" : "aspect-[3/4] card-lift"}
              />
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </div>
  );
}
