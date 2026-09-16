import Link from "next/link";

export default function CtaBand({
  heading,
  body,
}: {
  heading: string;
  body: string;
}) {
  return (
    <section className="bg-ink text-paper">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-16 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="max-w-[20ch] text-3xl">{heading}</h2>
          <p className="mt-3 max-w-[50ch] leading-relaxed text-paper/70">
            {body}
          </p>
        </div>
        <div className="flex shrink-0 flex-wrap gap-4">
          <Link
            href="/get-a-quote"
            className="bg-amber px-7 py-4 font-display text-base font-bold text-ink transition-colors hover:bg-white"
          >
            Get a fixed quote
          </Link>
          <a
            href="tel:+447454265760"
            className="border border-white/30 px-7 py-4 font-display text-base font-bold text-paper transition-colors hover:bg-white/10"
          >
            07454 265760
          </a>
        </div>
      </div>
    </section>
  );
}
