import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { business } from "@/lib/constants";
import { ClockIcon, MapPinIcon, PhoneIcon } from "@/components/ui/icons";

const mapQuery = encodeURIComponent(business.address.full);

export default function StoreLocation() {
  return (
    <section className="bg-black py-20 sm:py-24" aria-labelledby="location-heading">
      <Container className="flex flex-col gap-12">
        <Reveal>
          <div id="location-heading">
            <SectionHeading eyebrow="Come See Us" title="Visit Our Store" align="left" />
          </div>
        </Reveal>

        <Reveal className="grid lg:grid-cols-5 border border-charcoal-border">
          <div className="lg:col-span-3 aspect-[4/3] lg:aspect-auto lg:min-h-[24rem] bg-charcoal">
            <iframe
              title={`Map to ${business.name}`}
              src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
              className="w-full h-full grayscale-[35%] contrast-125"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="lg:col-span-2 bg-charcoal border-t lg:border-t-0 lg:border-l border-charcoal-border p-8 sm:p-10 flex flex-col gap-6 justify-center">
            <div className="flex items-start gap-3.5">
              <MapPinIcon className="size-5 text-gold shrink-0 mt-0.5" />
              <div>
                <p className="font-display text-xs font-semibold uppercase tracking-widest text-gold">
                  Address
                </p>
                <p className="text-sm text-cream/90 mt-1">{business.address.full}</p>
              </div>
            </div>
            <div className="flex items-start gap-3.5">
              <PhoneIcon className="size-5 text-gold shrink-0 mt-0.5" />
              <div>
                <p className="font-display text-xs font-semibold uppercase tracking-widest text-gold">
                  Phone
                </p>
                <a href={business.phone.href} className="text-sm text-cream/90 mt-1 hover:text-gold transition-colors">
                  {business.phone.display}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3.5">
              <ClockIcon className="size-5 text-gold shrink-0 mt-0.5" />
              <div>
                <p className="font-display text-xs font-semibold uppercase tracking-widest text-gold">
                  Hours
                </p>
                <p className="text-sm text-gray-400 mt-1">{business.hours.display}</p>
              </div>
            </div>

            <div className="mt-2 flex flex-col sm:flex-row gap-3">
              <ButtonLink
                href={`https://www.google.com/maps/dir/?api=1&destination=${mapQuery}`}
                variant="secondary"
                className="w-full"
              >
                Get Directions
              </ButtonLink>
              <ButtonLink href={business.phone.href} variant="primary" className="w-full">
                Call The Store
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
