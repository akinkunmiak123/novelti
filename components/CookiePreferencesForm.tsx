"use client";

import { useEffect, useState } from "react";
import {
  categories,
  defaultConsent,
  readConsent,
  writeConsent,
  type ConsentState,
} from "@/lib/cookie-consent";

export default function CookiePreferencesForm() {
  const [consent, setConsent] = useState<ConsentState>(defaultConsent);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setConsent(readConsent() ?? defaultConsent);
  }, []);

  function toggle(id: keyof ConsentState) {
    setConsent((prev) => ({ ...prev, [id]: !prev[id] }));
    setSaved(false);
  }

  function save() {
    writeConsent(consent);
    setSaved(true);
  }

  function acceptAll() {
    const state: ConsentState = { necessary: true, analytics: true };
    setConsent(state);
    writeConsent(state);
    setSaved(true);
  }

  return (
    <div className="mt-10">
      <div className="divide-y divide-line border-y border-line">
        {categories.map((category) => (
          <div
            key={category.id}
            className="flex items-start justify-between gap-6 py-6"
          >
            <div>
              <h2 className="font-display text-lg font-bold text-ink">
                {category.label}
              </h2>
              <p className="mt-1.5 max-w-[56ch] text-[15px] leading-relaxed text-steel">
                {category.body}
              </p>
            </div>
            <button
              type="button"
              role="switch"
              aria-checked={consent[category.id]}
              aria-label={`${category.label} cookies`}
              disabled={category.locked}
              onClick={() => toggle(category.id)}
              className={`relative h-7 w-12 shrink-0 rounded-full transition-colors ${
                consent[category.id] ? 'bg-moss' : 'bg-line'
              } ${category.locked ? 'cursor-not-allowed opacity-70' : ''}`}
            >
              <span
                className={`absolute top-0.5 size-6 rounded-full bg-white shadow transition-transform ${
                  consent[category.id] ? 'translate-x-5' : 'translate-x-0.5'
                }`}
              />
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={save}
          className="inline-flex min-h-12 items-center justify-center bg-moss px-7 py-3.5 font-display text-sm font-bold text-white transition-all duration-200 hover:bg-moss-deep focus:outline-none focus:ring-2 focus:ring-moss focus:ring-offset-2 active:translate-y-px"
        >
          Save preferences
        </button>

        <button
          type="button"
          onClick={acceptAll}
          className="inline-flex min-h-12 items-center justify-center border border-ink/20 bg-white px-7 py-3.5 font-display text-sm font-bold text-ink transition-all duration-200 hover:border-moss hover:bg-moss-pale hover:text-moss-deep focus:outline-none focus:ring-2 focus:ring-moss focus:ring-offset-2 active:translate-y-px"
        >
          Accept all
        </button>

        {saved && (
          <p role="status" className="ml-1 text-sm font-semibold text-moss">
            Preferences saved.
          </p>
        )}
      </div>
    </div>
  )
}
