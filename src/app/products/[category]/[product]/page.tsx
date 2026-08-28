import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import GradedSlab from "@/components/ui/concept/GradedSlab";
import RawCard from "@/components/ui/concept/RawCard";
import SealedPackArt from "@/components/ui/concept/SealedPackArt";
import AddToCartDemo from "@/components/products/AddToCartDemo";
import RelatedProducts from "@/components/products/RelatedProducts";
import { categories } from "@/lib/constants";
import {
  demoInventory,
  formatPrice,
  getProductById,
  GRADING_BRAND,
  DEMO_DISCLAIMER,
} from "@/data/demoInventory";

export function generateStaticParams() {
  return demoInventory.map((p) => ({ category: p.theme, product: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; product: string }>;
}): Promise<Metadata> {
  const { product: productId } = await params;
  const product = getProductById(productId);
  if (!product) return {};
  return {
    title: product.title,
    description: `${product.title} — ${product.year} ${product.setName}. Concept demo product for Venice Sports Cards & Collectibles.`,
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ category: string; product: string }>;
}) {
  const { category, product: productId } = await params;
  const product = getProductById(productId);
  if (!product || product.theme !== category) notFound();

  const categoryMeta = categories.find((c) => c.slug === product.theme);
  const conditionLabel =
    product.condition === "graded" ? "Graded" : product.condition === "sealed" ? "Sealed" : "Raw / Ungraded";

  return (
    <>
      <section className="bg-black border-b border-charcoal-border py-6">
        <Container>
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Products", href: "/products" },
              { label: categoryMeta?.label ?? product.theme, href: `/products/${product.theme}` },
              { label: product.title },
            ]}
          />
        </Container>
      </section>

      <section className="bg-black py-12 sm:py-16">
        <Container className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="flex flex-col gap-4">
            <div className="relative aspect-[5/7] max-w-sm mx-auto lg:mx-0 w-full">
              {product.condition === "graded" && <GradedSlab card={product} />}
              {product.condition === "raw" && <RawCard card={product} />}
              {product.condition === "sealed" && <SealedPackArt card={product} />}
            </div>
            <p className="text-center lg:text-left text-xs uppercase tracking-widest text-gold/80 border border-gold/30 w-fit mx-auto lg:mx-0 px-2 py-1">
              Concept Preview
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
                {categoryMeta?.label ?? product.theme}
              </p>
              <h1 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-cream text-balance">
                {product.title}
              </h1>
            </div>

            <p className="font-display text-3xl font-bold text-gold">{formatPrice(product.price)}</p>

            <dl className="grid grid-cols-2 gap-x-6 gap-y-4 border-y border-charcoal-border py-6">
              <div>
                <dt className="text-xs uppercase tracking-widest text-gray-500">Condition</dt>
                <dd className="text-sm text-cream mt-1">{conditionLabel}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-widest text-gray-500">Year</dt>
                <dd className="text-sm text-cream mt-1">{product.year}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-widest text-gray-500">Set</dt>
                <dd className="text-sm text-cream mt-1">{product.setName}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-widest text-gray-500">Category</dt>
                <dd className="text-sm text-cream mt-1">{categoryMeta?.label ?? product.theme}</dd>
              </div>
              {product.condition === "graded" && product.grade && (
                <>
                  <div>
                    <dt className="text-xs uppercase tracking-widest text-gray-500">Grade</dt>
                    <dd className="text-sm text-cream mt-1">
                      {product.grade.word} {product.grade.value}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-widest text-gray-500">Grading Company</dt>
                    <dd className="text-sm text-cream mt-1">{GRADING_BRAND} (fictional, demo only)</dd>
                  </div>
                </>
              )}
              {product.cert && (
                <div>
                  <dt className="text-xs uppercase tracking-widest text-gray-500">Certification #</dt>
                  <dd className="text-sm text-cream mt-1 font-mono">{product.cert}</dd>
                </div>
              )}
            </dl>

            <div className="border border-gold/25 bg-charcoal px-4 py-3">
              <p className="text-xs text-gray-400 leading-relaxed">{DEMO_DISCLAIMER}</p>
            </div>

            <AddToCartDemo />
          </div>
        </Container>
      </section>

      <section className="bg-charcoal border-t border-charcoal-border py-12 sm:py-16">
        <Container>
          <RelatedProducts current={product} />
        </Container>
      </section>
    </>
  );
}
