import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden"
    >
      {/* Background Hero Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Crowsnest Barbershop Atmosphere"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[52%_44%]"
        />
        {/* Dark Tint Overlay */}
        <div className="absolute inset-0 bg-black/55 backdrop-brightness-90" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center justify-center space-y-8 px-4">
        {/* Yellow Brand Wordmark Logo */}
        <div className="relative w-full max-w-[560px] h-36 sm:h-48 md:h-56 transition-transform duration-500 hover:scale-[1.02]">
          <Image
            src="/images/logo-yellow.png"
            alt="Crowsnest Barbershop"
            fill
            sizes="(max-width: 768px) 90vw, 560px"
            className="object-contain"
            priority
          />
        </div>

        {/* Primary Call to Action Button */}
        <div>
          <a
            href="#book-now"
            className="inline-block bg-[#f2d383] text-[#0d484f] hover:bg-white hover:text-[#052124] transition-all duration-300 font-medium text-sm sm:text-base tracking-[0.18em] uppercase px-9 py-4 rounded-sm shadow-xl font-rubik"
          >
            BOOK NOW
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center space-y-2 text-[#f2d383]">
        <span className="text-[10px] tracking-[0.25em] uppercase font-light text-[#f2d383]/80">
          SCROLL
        </span>
        <svg
          className="w-5 h-3 text-[#f2d383] animate-bounce"
          viewBox="0 0 48 23"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
        >
          <path d="M2 2L24 21L46 2" />
        </svg>
        <div className="w-[1.5px] h-10 bg-[#f2d383]/70" />
      </div>
    </section>
  );
}
