"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

/** Demo-only cart interaction — this is a concept storefront with no connected checkout. */
export default function AddToCartDemo() {
  const [added, setAdded] = useState(false);

  return (
    <div className="flex flex-col gap-2">
      <Button
        onClick={() => setAdded(true)}
        className="w-full sm:w-auto"
        aria-live="polite"
      >
        {added ? "Added to Demo Cart" : "Add to Cart"}
      </Button>
      {added && (
        <p className="text-xs text-gray-500 italic" role="status">
          This is a concept storefront &mdash; checkout is not yet connected.
        </p>
      )}
    </div>
  );
}
