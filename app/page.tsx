import Link from "next/link";
import Image from "next/image";
import FrameTile from "@/components/FrameTile";
import { testimonials, workGallery, studioGallery, contact } from "@/lib/data";
import { ArrowRight, Quote, Phone, Mail } from "lucide-react";
import Reveal from "@/components/Reveal";
import { StaggerGrid, StaggerItem } from "@/components/StaggerGrid";


export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden md:-mt-10">

        <div className="relative mx-auto max-w-7xl px-6 md:px-10 md:pb-20 flex flex-col-reverse md:flex-row items-center justify-between">
          <Reveal className="w-full md:flex-1 text-center md:text-left  md:mx-10">
            <h1 className="font-display text-balance text-[15vw] leading-[0.88] md:text-[7rem] md:leading-[0.88] font-bold tracking-[-0.06em]">
              <span className="text-primary italic">
                Afx
              </span>{"    "}
              <span className="text-zinc-900">
                Frames
              </span>
            </h1>
            <div className="mt-8 flex flex-col gap-2 text-sm text-muted">
              <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="inline-flex items-center gap-2 hover:text-primary transition-colors w-fit">
                <Phone className="w-3.5 h-3.5" /> {contact.phone}
              </a>
              <a href={`mailto:${contact.email}`} className="inline-flex items-center gap-2 hover:text-primary transition-colors w-fit">
                <Mail className="w-3.5 h-3.5" /> {contact.email}
              </a>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link
                href="/work"
                className="group inline-flex items-center gap-2.5 rounded-full bg-grad-primary text-white pl-6 pr-3 py-3 text-sm font-semibold shadow-glow hover:shadow-softLg transition-all"
              >
                View Portfolio
                <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-semibold text-ink hover:border-primary hover:text-primary transition-colors"
              >
                Start Your Transformation
              </Link>
            </div>
          </Reveal>

          <Reveal
            delay={0.15}
            direction="scale"
            className="relative w-full md:w-[42%] h-[420px] md:h-[600px] flex justify-center"
          >
            <div className="relative w-full h-full drop-shadow-[0_25px_45px_rgba(28,26,23,0.22)]">
              <Image
                src="/photos/cutouts/hero_1.png"
                alt="AFX Frames portfolio shoot"
                fill
                priority
                sizes="(min-width: 768px) 30vw, 50vw"
                className="object-contain object-bottom"
              />
            </div>
          </Reveal>
        </div>

        <svg
          className="block w-full text-surface"
          viewBox="0 0 1440 80"
          fill="currentColor"
          preserveAspectRatio="none"
        >
          <path d="M0,32 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" />
        </svg>
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-6 md:px-10 py-20 md:py-28 grid md:grid-cols-12 gap-10 items-center">
          <Reveal direction="scale" className="md:col-span-5 relative h-[380px] md:h-[460px]">
            <div className="relative w-full h-full drop-shadow-[0_20px_38px_rgba(28,26,23,0.20)]">
              <Image
                src="/photos/cutouts/about1.png"
                alt="AFX Frames studio portfolio shoot"
                fill
                sizes="(min-width: 768px) 40vw, 90vw"
                className="object-contain object-bottom"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-7">
            <p className="font-mono text-[11px] tracking-widest2 uppercase text-primary font-medium mb-6">
              Meet AFX Frames
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight text-balance mb-6">
              A Premium <span className="text-primary italic">Creative Studio</span>
            </h2>
            <p className="text-[16px] leading-relaxed text-ink/85 mb-4">
              We are a full-service creative studio dedicated to producing
              world-class visual content for talent at every stage of their
              career.
            </p>
            <p className="text-[15px] leading-relaxed text-muted">
              Every frame we capture is a deliberate act of storytelling,
              partnering with models, actors, influencers, and children to
              create impactful portfolios. We craft visuals that open doors,
              command attention, build confidence, and define successful
              careers.
            </p>
            <Link href="/studio" className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-primary underline-fade">
              Meet the studio <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* VISION */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 md:px-10 grid md:grid-cols-12 gap-8 items-center">
          <Reveal direction="scale" className="md:col-span-4 relative h-[360px] md:h-[440px]">
            <div className="relative w-full h-full drop-shadow-[0_20px_38px_rgba(28,26,23,0.20)]">
              <Image
                src="/photos/cutouts/about.png"
                alt="AFX Frames vision shoot"
                fill
                sizes="(min-width: 768px) 35vw, 90vw"
                className="object-contain object-bottom"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-8">
            <p className="font-mono text-[11px] tracking-widest2 uppercase text-primary font-medium mb-6">
              Behind the Lens
            </p>
            <blockquote className="font-display text-2xl md:text-4xl font-semibold leading-snug text-balance mb-6">
              &ldquo;We don&apos;t just create portfolios.&rdquo;
              <br />
              <span className="text-primary italic">
                &ldquo;We build presence, identity, and visual impact.&rdquo;
              </span>
            </blockquote>
            <p className="text-muted leading-relaxed max-w-xl border-l-2 border-primary pl-5">
              Every frame we capture is a deliberate act of storytelling. We
              partner with models, actors, influencers, and children to craft
              portfolios that open doors, command attention, and define
              careers.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SELECTED WORK */}
      <section className="bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <Reveal className="flex items-end justify-between mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ink italic">
              Our <span className="text-primary italic">Portfolio</span>
            </h2>
            <Link href="/work" className="text-sm font-semibold text-primary underline-fade hidden sm:inline-flex items-center gap-1.5">
              View all <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </Reveal>

          <StaggerGrid className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {[...workGallery].map((src, i) => (
              <StaggerItem key={src} className={i === 0 ? "col-span-2 md:col-span-1" : ""}>
                <Link href="/work" className="group block">
                  <FrameTile
                    hue={0}
                    frame={`10${i + 4}`}
                    image={src}
                    alt="AFX Frames portfolio shoot"
                    className="aspect-[4/5] card-lift"
                  />
                </Link>
              </StaggerItem>
            ))}
          </StaggerGrid>
          <div className="mt-8 text-center sm:hidden">
            <Link href="/work" className="text-sm font-semibold text-primary underline-fade inline-flex items-center gap-1.5">
              View all work <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}

      <section className="py-20 md:py-28 bg-surface">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <Reveal>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-14">
              Client <span className="text-primary italic">Stories</span>
            </h2>
          </Reveal>

          <StaggerGrid className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <StaggerItem key={t.name}>
                <article className="group overflow-hidden rounded-3xl bg-white shadow-soft hover:shadow-2xl transition-all duration-500">
                  {/* Image */}
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={t.image}
                      alt={t.name}
                      fill
                      sizes="200px"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-6">
                      <div className="translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                        <Quote className="w-6 h-6 text-white/80 mb-3" />

                        <p className="text-sm leading-relaxed text-white/90">
                          "{t.quote}"
                        </p>

                        {/* <div className="mt-5">
                          <h3 className="text-lg font-semibold text-white">
                            {t.name}
                          </h3>

                          <p className="text-sm text-primary">
                            {t.role}
                          </p>
                        </div> */}
                      </div>
                    </div>
                  </div>

                  {/* Default Content */}
                  <div className="p-6 transition-opacity duration-300 ">
                    <h3 className="text-lg font-semibold text-zinc-900">
                      {t.name}
                    </h3>

                    <p className="text-sm text-primary mt-1">
                      {t.role}
                    </p>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32">
        <Reveal direction="scale" className="mx-auto max-w-5xl px-6 md:px-10">
          <div className="rounded-xl4 bg-surface border border-primary/25 shadow-glow px-8 py-16 md:py-24 text-center relative overflow-hidden">
            <div className="blob w-72 h-72 bg-primary -top-20 -left-20" />
            <div className="blob w-72 h-72 bg-secondary -bottom-20 -right-10" />
            <h2 className="relative font-display text-4xl md:text-6xl font-bold text-ink text-balance">
              Thank <span className="text-primary italic">you.</span>
            </h2>
            <p className="relative mt-5 text-muted max-w-lg mx-auto leading-relaxed">
              We look forward to bringing yBehind the Lens to life through
              compelling visuals that inspire, connect, and create lasting
              impact.
            </p>
            <Link
              href="/contact"
              className="relative mt-10 inline-flex items-center gap-3 bg-grad-primary text-white px-8 py-4 rounded-full text-sm font-semibold shadow-glow hover:scale-[1.03] transition-transform"
            >
              Start Your Transformation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
