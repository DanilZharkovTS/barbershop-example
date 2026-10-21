"use client";

import { useState } from "react";
import Image from "next/image";

interface Haircut {
  id: string;
  title: string;
  category: "classic" | "fades" | "beard";
  tag: string;
  description: string;
  product: string;
  image: string;
}

const HAIRCUTS: Haircut[] = [
  {
    id: "cut-1",
    title: "High Skin Fade & Crop",
    category: "fades",
    tag: "Sharp Fade",
    description: "Ultra-clean skin fade blending seamlessly into a textured French crop with forward flow.",
    product: "Matte Texture Clay",
    image: "/images/haircuts/cut-1.jpg",
  },
  {
    id: "cut-2",
    title: "Executive Side Part",
    category: "classic",
    tag: "Heritage Cut",
    description: "Classic 1950s gentleman's taper with a razor-etched hard part and polished finish.",
    product: "High Sheen Pomade",
    image: "/images/haircuts/cut-2.jpg",
  },
  {
    id: "cut-3",
    title: "Full Beard Sculpt & Blend",
    category: "beard",
    tag: "Beard Grooming",
    description: "Full volume beard trim with straight razor cheek lines and organic cheek-to-sideburn taper.",
    product: "Cedarwood Beard Oil & Balm",
    image: "/images/haircuts/cut-3.jpg",
  },
  {
    id: "cut-4",
    title: "Vintage Low Taper Pompadour",
    category: "classic",
    tag: "Timeless",
    description: "Sculpted volume through the crown with soft scissor-tapered sides for a timeless silhouette.",
    product: "Medium Hold Styling Cream",
    image: "/images/haircuts/cut-4.jpg",
  },
  {
    id: "cut-5",
    title: "Textured Crop & Drop Fade",
    category: "fades",
    tag: "Modern Edge",
    description: "Natural movement on top paired with a dropped neckline taper for an effortless daily look.",
    product: "Sea Salt Spray & Matte Paste",
    image: "/images/haircuts/cut-5.jpg",
  },
  {
    id: "cut-6",
    title: "Slick Back Scissor Cut",
    category: "classic",
    tag: "Traditional",
    description: "Layered shears-only cut combed back with clean natural temples and neckline.",
    product: "Classic Heavy Wax",
    image: "/images/haircuts/cut-6.jpg",
  },
  {
    id: "cut-7",
    title: "Razor Fade & Beard Connection",
    category: "beard",
    tag: "Razor Work",
    description: "Zero gap foil fade transitioning seamlessly into crisp geometric beard contours.",
    product: "Aftershave Tonic & Beard Butter",
    image: "/images/haircuts/cut-7.jpg",
  },
  {
    id: "cut-8",
    title: "Clean Buzz & Temple Taper",
    category: "fades",
    tag: "Minimalist",
    description: "Even buzz cut on top with precision edge work and faded sideburns for low-maintenance style.",
    product: "Scalp Tonic & SPF Balancer",
    image: "/images/haircuts/cut-8.jpg",
  },
];

type CategoryFilter = "all" | "classic" | "fades" | "beard";

export default function HaircutsGallery() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("all");
  const [selectedPhoto, setSelectedPhoto] = useState<Haircut | null>(null);

  const filteredCuts =
    activeCategory === "all"
      ? HAIRCUTS
      : HAIRCUTS.filter((c) => c.category === activeCategory);

  return (
    <section id="haircuts" className="relative bg-[#052124] py-20 px-6 sm:px-10 lg:px-16 scroll-mt-20">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.25em] text-[#f2d383] font-medium block mb-2">
              Our Master Craft
            </span>
            <h2 className="text-3xl sm:text-4xl font-normal uppercase tracking-[0.16em] text-white">
              Signature Cuts &amp; Styles
            </h2>
            <p className="text-sm sm:text-base text-gray-300 font-light tracking-wide mt-3 leading-relaxed">
              Precision craft, timeless silhouettes, and razor-sharp fades tailored to your look.
              Browse our craft and choose the signature style for your next session.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.18em]">
            {[
              { key: "all", label: "All Cuts" },
              { key: "classic", label: "Classic" },
              { key: "fades", label: "Sharp Fades" },
              { key: "beard", label: "Beard & Razor" },
            ].map((tab) => (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveCategory(tab.key as CategoryFilter)}
                className={`px-4 py-2 rounded-sm transition-all duration-200 border ${
                  activeCategory === tab.key
                    ? "bg-[#f2d383] text-[#052124] border-[#f2d383] font-semibold"
                    : "bg-transparent text-gray-300 border-[#f2d383]/20 hover:border-[#f2d383]/60 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredCuts.map((cut) => (
            <div
              key={cut.id}
              onClick={() => setSelectedPhoto(cut)}
              className="group relative h-[360px] sm:h-[400px] bg-black/40 rounded-sm overflow-hidden cursor-pointer shadow-xl border border-[#f2d383]/15 transition-all duration-300 hover:-translate-y-1 hover:border-[#f2d383]/50"
            >
              {/* Photo */}
              <div className="absolute inset-0">
                <Image
                  src={cut.image}
                  alt={cut.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
                />
                {/* Vignette Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/20 group-hover:from-black/95 transition-all duration-300" />
              </div>

              {/* Tag in Top Left */}
              <div className="absolute top-4 left-4 z-10">
                <span className="text-[10px] uppercase tracking-[0.2em] font-semibold px-2.5 py-1 bg-[#052124]/85 text-[#f2d383] border border-[#f2d383]/30 rounded-xs">
                  {cut.tag}
                </span>
              </div>

              {/* Bottom Info Overlay */}
              <div className="absolute bottom-0 inset-x-0 p-5 z-10 flex flex-col justify-end text-left">
                <h3 className="text-lg font-bold uppercase tracking-[0.12em] text-white group-hover:text-[#f2d383] transition-colors leading-snug mb-1">
                  {cut.title}
                </h3>
                <p className="text-xs text-gray-300 line-clamp-2 font-light tracking-wide mb-3">
                  {cut.description}
                </p>

                <div className="flex items-center justify-between text-[11px] text-[#f2d383] uppercase tracking-widest pt-2 border-t border-[#f2d383]/20">
                  <span className="truncate pr-2 font-light text-gray-400">
                    {cut.product}
                  </span>
                  <span className="shrink-0 font-semibold group-hover:translate-x-1 transition-transform">
                    VIEW &rarr;
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Cut Detail Modal */}
      {selectedPhoto && (
        <div
          onClick={() => setSelectedPhoto(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-[#052124] border border-[#f2d383]/40 w-full max-w-3xl rounded-sm shadow-2xl overflow-hidden text-white grid grid-cols-1 md:grid-cols-2"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-20 text-[#f2d383] hover:text-white bg-[#052124]/80 p-1.5 rounded-full border border-[#f2d383]/30"
              aria-label="Close photo preview"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Left: Big Photo */}
            <div className="relative h-72 md:h-full min-h-[320px] bg-black">
              <Image
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>

            {/* Right: Cut Details */}
            <div className="p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div>
                <span className="text-[11px] uppercase tracking-[0.25em] text-[#f2d383] font-semibold block mb-1">
                  {selectedPhoto.tag}
                </span>
                <h3 className="text-2xl font-bold uppercase tracking-[0.14em] text-white mb-3">
                  {selectedPhoto.title}
                </h3>
                <p className="text-sm text-gray-300 font-light leading-relaxed tracking-wide mb-6">
                  {selectedPhoto.description}
                </p>

                <div className="bg-[#0d484f] p-4 rounded-sm border border-[#f2d383]/20 space-y-2">
                  <div className="text-[11px] uppercase tracking-wider text-[#f2d383] font-semibold">
                    Recommended Styling Product:
                  </div>
                  <div className="text-xs text-white tracking-wide">
                    {selectedPhoto.product}
                  </div>
                </div>
              </div>

              <div>
                <a
                  href="#book-now"
                  onClick={() => setSelectedPhoto(null)}
                  className="block text-center w-full bg-[#f2d383] hover:bg-white text-[#052124] font-semibold text-xs uppercase tracking-[0.2em] py-3.5 rounded-sm transition-colors shadow-md"
                >
                  Book This Style
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
