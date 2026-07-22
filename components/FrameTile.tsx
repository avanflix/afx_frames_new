import Image from "next/image";

export default function FrameTile({
  hue,
  frame,
  image,
  alt,
  className = "",
  sizes = "(min-width: 768px) 45vw, 90vw",
  priority = false,
}: {
  hue: number;
  frame: string;
  image?: string;
  alt?: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={`group/tile relative overflow-hidden rounded-xl3 shadow-soft ${className}`}
    >
      {image ? (
        <Image
          src={image}
          alt={alt || `AFX Frames — frame ${frame}`}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover transition-transform duration-700 ease-out group-hover/tile:scale-110"
        />
      ) : (
        <div
          className="absolute inset-0 transition-transform duration-700 ease-out group-hover/tile:scale-110"
          style={{
            background: `linear-gradient(135deg, hsl(${hue} 85% 96%) 0%, hsl(${hue} 90% 90%) 45%, hsl(${
              (hue + 30) % 360
            } 85% 92%) 100%)`,
          }}
        />
      )}
      <div
        className="absolute inset-0 opacity-60 mix-blend-multiply"
        style={{
          background: `linear-gradient(140deg, transparent 30%, hsl(${
            (hue + 200) % 360
          } 70% 55% / 0.18) 100%)`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/5" />
      {/* <span className="absolute bottom-3 right-4 rounded-full bg-ink/70 backdrop-blur px-2.5 py-1 font-mono text-[10px] text-white/85 tracking-wide shadow-sm">
        f/{frame}
      </span> */}
      <span className="absolute inset-0 rounded-xl3 ring-1 ring-inset ring-black/[0.04]" />
    </div>
  );
}
