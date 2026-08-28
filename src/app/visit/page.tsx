import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import StoreLocation from "@/components/home/StoreLocation";
import Container from "@/components/ui/Container";
import { business } from "@/lib/constants";
import { ClockIcon } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Visit Our Store",
  description: "Store hours, address, and directions for Venice Sports Cards & Collectibles in Venice, FL.",
};

export default function VisitPage() {
  return (
    <>
      <PageHero
        eyebrow="Come See Us"
        title="Visit Our Store"
        description={`${business.address.full} — ${business.phone.display}`}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Visit Us" }]}
      />

      <section className="bg-charcoal border-b border-charcoal-border py-10">
        <Container>
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 justify-center text-center sm:text-left">
            <ClockIcon className="size-5 text-gold shrink-0 mx-auto sm:mx-0" />
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-x-8 gap-y-1">
              {business.hours.schedule.map((d) => (
                <p key={d.day} className="text-sm text-gray-300">
                  <span className="text-cream font-medium">{d.day}:</span> {d.hours}
                </p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <StoreLocation />
    </>
  );
}
