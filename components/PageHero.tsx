import Link from "next/link";
import Photo from "./Photo";

type PageHeroProps = {
  title: string;
  lead: string;
  photoAlt: string;
  photoBrief: string;
  photoSrc?: string;
};

export default function PageHero({
  title,
  lead,
  photoAlt,
  photoBrief,
  photoSrc,
}: PageHeroProps) {
  return (
    <section className="border-b border-line">
      <div className="mx-auto grid max-w-6xl lg:grid-cols-[1.05fr_1fr]">
        <div className="bg-moss px-6 py-14 text-white sm:px-10 lg:py-20">
          <h1 className="max-w-[17ch] text-4xl leading-[1.05] sm:text-5xl">
            {title}
          </h1>
          <p className="mt-6 max-w-[46ch] text-lg leading-relaxed text-white/85">
            {lead}
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="/get-a-quote"
              className="bg-white px-7 py-4 font-display text-base font-bold text-moss transition-colors hover:bg-amber hover:text-ink"
            >
              Get a fixed quote
            </Link>
            <a
              href="tel:+447454265760"
              className="border border-white/45 px-7 py-4 font-display text-base font-bold text-white transition-colors hover:bg-white/10"
            >
              Call 07454 265760
            </a>
          </div>
        </div>

        <Photo
          alt={photoAlt}
          brief={photoBrief}
          src={photoSrc}
          className="min-h-[280px] lg:min-h-full"
          priority
        />
      </div>
    </section>
  );
}
