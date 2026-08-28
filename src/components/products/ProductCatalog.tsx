"use client";

import { useMemo, useState } from "react";
import DemoProductCard from "@/components/ui/concept/DemoProductCard";
import { categories, type CategorySlug as NavCategorySlug } from "@/lib/constants";
import { type CardCondition, type DemoProduct } from "@/data/demoInventory";

type SortMode = "newest" | "price-asc" | "price-desc";

const priceBuckets = [
  { label: "Any Price", min: 0, max: Infinity },
  { label: "Under $50", min: 0, max: 50 },
  { label: "$50 – $150", min: 50, max: 150 },
  { label: "$150 – $500", min: 150, max: 500 },
  { label: "$500 – $1,000", min: 500, max: 1000 },
  { label: "$1,000+", min: 1000, max: Infinity },
];

const grades = ["10", "9.5", "9", "8", "7"];

const selectCls =
  "bg-black border border-charcoal-border px-3.5 py-2.5 text-sm text-cream focus:outline-none focus:border-gold transition-colors";

export default function ProductCatalog({
  products,
  lockedCategory,
}: {
  products: DemoProduct[];
  lockedCategory?: NavCategorySlug;
}) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<string>("all");
  const [condition, setCondition] = useState<CardCondition | "all">("all");
  const [grade, setGrade] = useState<string>("all");
  const [priceBucket, setPriceBucket] = useState(0);
  const [sort, setSort] = useState<SortMode>("newest");

  const results = useMemo(() => {
    const bucket = priceBuckets[priceBucket];
    const q = search.trim().toLowerCase();

    let list = products.filter((p) => {
      if (category !== "all" && p.theme !== category) return false;
      if (condition !== "all" && p.condition !== condition) return false;
      if (grade !== "all" && p.grade?.value !== grade) return false;
      if (p.price < bucket.min || p.price > bucket.max) return false;
      if (q && !`${p.title} ${p.setName} ${p.faceLabel}`.toLowerCase().includes(q)) return false;
      return true;
    });

    if (sort === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
    else if (sort === "price-desc") list = [...list].sort((a, b) => b.price - a.price);

    return list;
  }, [products, search, category, condition, grade, priceBucket, sort]);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4 border border-charcoal-border bg-charcoal p-5 sm:p-6">
        <div className="flex flex-col sm:flex-row gap-3">
          <label htmlFor="catalog-search" className="sr-only">
            Search products
          </label>
          <input
            id="catalog-search"
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by title or set..."
            className="flex-1 bg-black border border-charcoal-border px-4 py-2.5 text-sm text-cream placeholder:text-gray-500 focus:outline-none focus:border-gold transition-colors"
          />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {!lockedCategory && (
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className={selectCls}
              aria-label="Category"
            >
              <option value="all">All Categories</option>
              {categories
                .filter((c) => c.slug !== "graded" && c.slug !== "sealed")
                .map((c) => (
                  <option key={c.slug} value={c.slug}>
                    {c.label}
                  </option>
                ))}
            </select>
          )}
          <select
            value={condition}
            onChange={(e) => setCondition(e.target.value as CardCondition | "all")}
            className={selectCls}
            aria-label="Condition"
          >
            <option value="all">Graded / Raw / Sealed</option>
            <option value="graded">Graded</option>
            <option value="raw">Raw</option>
            <option value="sealed">Sealed</option>
          </select>
          <select value={grade} onChange={(e) => setGrade(e.target.value)} className={selectCls} aria-label="Grade">
            <option value="all">Any Grade</option>
            {grades.map((g) => (
              <option key={g} value={g}>
                Grade {g}
              </option>
            ))}
          </select>
          <select
            value={priceBucket}
            onChange={(e) => setPriceBucket(Number(e.target.value))}
            className={selectCls}
            aria-label="Price range"
          >
            {priceBuckets.map((b, i) => (
              <option key={b.label} value={i}>
                {b.label}
              </option>
            ))}
          </select>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as SortMode)}
            className={`${selectCls} col-span-2 sm:col-span-1 lg:col-span-2`}
            aria-label="Sort by"
          >
            <option value="newest">Sort: Newest</option>
            <option value="price-asc">Sort: Price Low to High</option>
            <option value="price-desc">Sort: Price High to Low</option>
          </select>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-400">
          {results.length} {results.length === 1 ? "result" : "results"}
        </p>
        <p className="text-xs uppercase tracking-widest text-gray-500">Demo Inventory</p>
      </div>

      {results.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {results.map((p) => (
            <DemoProductCard key={p.id} card={p} />
          ))}
        </div>
      ) : (
        <div className="border border-charcoal-border bg-charcoal py-16 px-6 text-center">
          <p className="text-gray-400">No products match those filters.</p>
        </div>
      )}
    </div>
  );
}
