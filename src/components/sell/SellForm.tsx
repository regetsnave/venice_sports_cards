"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/Button";

const inputCls =
  "w-full bg-black border border-charcoal-border px-4 py-3 text-sm text-cream placeholder:text-gray-500 focus:outline-none focus:border-gold focus:shadow-[0_0_0_3px_rgba(198,161,91,0.15)] transition-shadow";
const labelCls = "text-xs font-display uppercase tracking-wide text-gray-400";

// TODO(integration): connect this to a real endpoint (API route + email
// service, or a form provider) before launch. Currently front-end only —
// no data is transmitted or stored anywhere.
export default function SellForm() {
  const [status, setStatus] = useState<"idle" | "submitted">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitted");
  }

  if (status === "submitted") {
    return (
      <div className="border border-gold/30 bg-black p-8" role="status">
        <p className="font-display text-lg text-gold uppercase">Submission Received</p>
        <p className="text-sm text-gray-300 mt-2">
          Thanks for the details &mdash; in the live site, this would notify the shop so they
          can follow up about your collection.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-5">
      <div className="flex flex-col gap-2">
        <label htmlFor="sell-name" className={labelCls}>
          Name
        </label>
        <input id="sell-name" name="name" type="text" required className={inputCls} />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="sell-email" className={labelCls}>
          Email
        </label>
        <input id="sell-email" name="email" type="email" required className={inputCls} />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="sell-phone" className={labelCls}>
          Phone
        </label>
        <input id="sell-phone" name="phone" type="tel" className={inputCls} />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="sell-category" className={labelCls}>
          Sports / TCG Category
        </label>
        <select id="sell-category" name="category" className={inputCls} defaultValue="">
          <option value="" disabled>
            Select a category
          </option>
          <option>Pok&eacute;mon</option>
          <option>One Piece</option>
          <option>Football</option>
          <option>Baseball</option>
          <option>Basketball</option>
          <option>Hockey</option>
          <option>Mixed / Other</option>
        </select>
      </div>
      <div className="flex flex-col gap-2 sm:col-span-2">
        <label htmlFor="sell-type" className={labelCls}>
          Type of Collection
        </label>
        <input
          id="sell-type"
          name="collectionType"
          type="text"
          placeholder="e.g. singles, graded slabs, sealed boxes, a full binder..."
          className={inputCls}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="sell-count" className={labelCls}>
          Approximate Number of Cards
        </label>
        <input id="sell-count" name="cardCount" type="text" placeholder="e.g. 50, 500, 5000+" className={inputCls} />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="sell-graded" className={labelCls}>
          Any Graded Cards?
        </label>
        <select id="sell-graded" name="hasGraded" className={inputCls} defaultValue="">
          <option value="" disabled>
            Select an answer
          </option>
          <option>Yes</option>
          <option>No</option>
          <option>Not sure</option>
        </select>
      </div>
      <div className="flex flex-col gap-2 sm:col-span-2">
        <label htmlFor="sell-value" className={labelCls}>
          Estimated Value (optional)
        </label>
        <input id="sell-value" name="estimatedValue" type="text" placeholder="e.g. under $100, $500-$1,000, not sure" className={inputCls} />
      </div>
      <div className="flex flex-col gap-2 sm:col-span-2">
        <label htmlFor="sell-photos" className={labelCls}>
          Upload Photos (optional)
        </label>
        <input
          id="sell-photos"
          name="photos"
          type="file"
          multiple
          accept="image/*"
          className="w-full bg-black border border-charcoal-border px-4 py-3 text-sm text-gray-400 file:mr-4 file:border-0 file:bg-gold file:text-black file:px-3 file:py-1.5 file:font-display file:text-xs file:font-semibold file:uppercase file:tracking-wide focus:outline-none focus:border-gold"
        />
      </div>
      <div className="flex flex-col gap-2 sm:col-span-2">
        <label htmlFor="sell-message" className={labelCls}>
          Message
        </label>
        <textarea id="sell-message" name="message" rows={5} className={inputCls} />
      </div>
      <div className="sm:col-span-2">
        <Button type="submit" className="w-full sm:w-auto">
          Submit For Evaluation
        </Button>
      </div>
    </form>
  );
}
