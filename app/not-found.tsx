import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="relative overflow-hidden">
      <div className="blob w-[420px] h-[420px] bg-primary top-0 left-1/2 -translate-x-1/2" />
      <div className="relative mx-auto max-w-2xl px-6 text-center py-32 md:py-48">
        {/* <p className="font-mono text-primary text-sm mb-4">f/0000 — missing</p> */}
        <h1 className="font-display text-5xl md:text-7xl font-bold mb-6">
          Frame not found.
        </h1>
        <p className="text-muted mb-10">
          That page was cut in the edit. Here&apos;s the rest of the reel.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-3 bg-grad-primary text-white px-8 py-4 rounded-full text-sm font-semibold shadow-glow hover:shadow-softLg transition-all"
        >
          Back to Home
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
