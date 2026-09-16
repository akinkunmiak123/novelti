import Link from "next/link";

/**
 * Wordmark placeholder.
 *
 * To swap in the real logo: drop the SVG at public/brand/logo.svg and
 * uncomment the <Image> block below, then delete the text wordmark.
 */
export default function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  return (
    <Link href="/" className="inline-flex items-baseline gap-1.5">
      {/*
      <Image src="/brand/logo.svg" alt="Novelti Cleaning Services" width={150} height={45} priority />
      */}
      <span
        className={`font-display text-xl font-extrabold tracking-tight ${
          variant === "light" ? "text-white" : "text-moss"
        }`}
      >
        Novelti
      </span>
      <span
        className={`text-sm ${variant === "light" ? "text-white/70" : "text-steel"}`}
      >
        Cleaning Services
      </span>
    </Link>
  );
}
