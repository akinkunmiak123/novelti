"use client";

import { useState } from "react";

const services = [
  "Regular domestic clean",
  "One-off deep clean",
  "End of tenancy clean",
  "Office or commercial clean",
  "Airbnb changeover",
  "Carpet or upholstery",
  "Window, patio or jet washing",
  "New build / after builders",
];

type Status = "idle" | "sending" | "sent" | "error";

const field =
  "w-full border border-line bg-white px-3.5 py-3 text-ink placeholder:text-steel/70 focus:border-moss";
const label = "mb-1.5 block text-sm font-semibold text-ink";

export default function QuoteForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    setStatus("sending");
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
      setMessage(
        "That didn't send. Call 07454 265760 or email info@novelticleaning.com and we'll pick it up straight away.",
      );
    }
  }

  if (status === "sent") {
    return (
      <div className="border border-moss bg-moss-pale p-8">
        <h3 className="text-2xl">Got it — thanks.</h3>
        <p className="mt-3 max-w-[50ch] leading-relaxed text-ink">
          Bunmi will read your details and come back with a fixed price, usually
          within one working day. If it's urgent, ring 07454 265760.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate={false} className="grid gap-5">
      {/* Honeypot: hidden from people, tempting to bots */}
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label htmlFor="company-website">Leave this empty</label>
        <input id="company-website" name="company-website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="name">
            Your name
          </label>
          <input id="name" name="name" className={field} autoComplete="name" required />
        </div>
        <div>
          <label className={label} htmlFor="phone">
            Phone number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className={field}
            autoComplete="tel"
            required
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className={field}
            autoComplete="email"
            required
          />
        </div>
        <div>
          <label className={label} htmlFor="postcode">
            Postcode
          </label>
          <input
            id="postcode"
            name="postcode"
            className={field}
            autoComplete="postal-code"
            placeholder="GL50 1AA"
            required
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="service">
            What needs cleaning
          </label>
          <select id="service" name="service" className={field} required defaultValue="">
            <option value="" disabled>
              Choose one
            </option>
            {services.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className={label} htmlFor="property">
            Size of property
          </label>
          <select id="property" name="property" className={field} defaultValue="">
            <option value="">Not sure yet</option>
            <option>Studio or 1 bed</option>
            <option>2 bed</option>
            <option>3 bed</option>
            <option>4 bed or larger</option>
            <option>Commercial premises</option>
          </select>
        </div>
      </div>

      <div>
        <label className={label} htmlFor="details">
          Anything else we should know
        </label>
        <textarea
          id="details"
          name="details"
          rows={4}
          className={field}
          placeholder="Dates that suit you, parking, pets, oven or carpets included."
        />
      </div>

      <label className="flex items-start gap-3 text-sm leading-relaxed text-steel">
        <input
          type="checkbox"
          name="consent"
          required
          className="mt-1 size-4 shrink-0 accent-[#17643f]"
        />
        <span>
          I'm happy for Novelti to use these details to reply to my enquiry. See
          the{" "}
          <a href="/privacy" className="underline decoration-moss underline-offset-2">
            privacy policy
          </a>
          .
        </span>
      </label>

      {status === "error" && (
        <p className="border-l-4 border-amber bg-white px-4 py-3 text-sm text-ink">
          {message}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="justify-self-start bg-ink px-7 py-3.5 font-display text-base font-bold text-white transition-colors hover:bg-moss disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send my details"}
      </button>
    </form>
  );
}
