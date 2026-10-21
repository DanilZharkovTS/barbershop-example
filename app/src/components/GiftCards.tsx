import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function GiftCards() {
  return (
    <section id="gift-cards" className="relative bg-[#052124] py-16 px-6 sm:px-10 lg:px-16 scroll-mt-20 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        {/* Top Border Divider */}
        <hr className="border-t border-[#f2d383]/25 mb-16" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Text Column */}
          <ScrollReveal direction="right" duration={700}>
            <div className="space-y-6 max-w-xl">
              <h2 className="text-3xl sm:text-4xl font-normal uppercase tracking-[0.16em] text-white">
                Crows Nest Gift Cards
              </h2>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-light tracking-wide">
                You can purchase a gift card online that can be redeemed in store for services and
                products at all of our locations.
              </p>
              <div>
                <a
                  href="https://squareup.com/gift/S5WH2Q6R0BHW5/order"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block border border-[#f2d383] text-[#f2d383] hover:bg-[#f2d383] hover:text-[#052124] transition-all duration-300 text-xs font-semibold uppercase tracking-[0.2em] px-7 py-3 rounded-sm shadow-md hover:scale-105"
                >
                  PURCHASE
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Image Column */}
          <ScrollReveal direction="zoom" duration={800} delay={150}>
            <div className="relative w-full aspect-[1217/744] overflow-hidden rounded-sm group shadow-2xl">
              <a
                href="https://squareup.com/gift/S5WH2Q6R0BHW5/order"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full"
              >
                <Image
                  src="/images/gift-cards.png"
                  alt="Crowsnest Gift Cards"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain transition-transform duration-700 group-hover:scale-105"
                />
              </a>
            </div>
          </ScrollReveal>
        </div>

        {/* Bottom Border Divider */}
        <hr className="border-t border-[#f2d383]/25 mt-16" />
      </div>
    </section>
  );
}
