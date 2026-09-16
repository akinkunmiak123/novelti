import Image from "next/image";

type PhotoProps = {
  src?: string;
  alt: string;
  brief: string;
  className?: string;
  priority?: boolean;
};

/**
 * Renders a real photo when `src` is supplied, otherwise a labelled slot
 * describing the shot that needs taking. Swap in files from /public/photos
 * and the placeholder disappears.
 */
export default function Photo({
  src,
  alt,
  brief,
  className = "",
  priority = false,
}: PhotoProps) {
  if (src) {
    return (
      <div className={`relative overflow-hidden bg-moss-pale ${className}`}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className={`flex items-center justify-center bg-moss-pale p-6 ${className}`}
      role="img"
      aria-label={alt}
    >
      <span className="max-w-[26ch] text-center text-sm leading-relaxed text-moss-deep">
        Photo needed: {brief}
      </span>
    </div>
  );
}
