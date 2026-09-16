export type FaqItem = { q: string; a: string };

export default function Faq({
  heading,
  items,
}: {
  heading: string;
  items: FaqItem[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <section className="mx-auto max-w-6xl px-5 py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <h2 className="max-w-[22ch] text-3xl sm:text-4xl">{heading}</h2>
      <div className="mt-10 max-w-3xl border-t border-line">
        {items.map((item) => (
          <details key={item.q} className="group border-b border-line">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 font-display text-lg font-bold text-ink">
              {item.q}
              <span
                aria-hidden="true"
                className="mt-1 shrink-0 text-moss transition-transform group-open:rotate-45"
              >
                <svg width="18" height="18" viewBox="0 0 18 18">
                  <path
                    d="M9 2v14M2 9h14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="square"
                  />
                </svg>
              </span>
            </summary>
            <p className="max-w-[62ch] pb-6 leading-relaxed text-steel">
              {item.a}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
