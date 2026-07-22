import Image from "next/image";

type PortfolioCardProps = {
  image: string;
  title: string;
  description: string;
  alt?: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

export default function PortfolioCard({
  image,
  title,
  description,
  alt,
  className = "",
  sizes = "(min-width: 768px) 45vw, 90vw",
  priority = false,
}: PortfolioCardProps) {
  return (
    <div className="group overflow-hidden rounded-3xl bg-white shadow-soft hover:shadow-xl transition-all duration-500">
      {/* Image */}
      <div className={`relative overflow-hidden ${className}`}>
        <Image
          src={image}
          alt={alt || title}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-6">
          <div className="translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
            <h3 className="text-xl font-semibold text-white">
              {title}
            </h3>
            <p className="mt-2 text-sm text-white/80 leading-relaxed">
              {description}
            </p>
          </div>
        </div>

        <span className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-black/5" />
      </div>

      {/* Default Content */}
      <div className="p-5 transition-opacity duration-300 group-hover:opacity-0">
        <h3 className="text-lg font-semibold text-zinc-900">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-zinc-600">
          {description}
        </p>
      </div>
    </div>
  );
}