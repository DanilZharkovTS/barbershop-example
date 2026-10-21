import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0d484f] text-[#f2d383] py-16 px-6 sm:px-10 lg:px-16 border-t border-[#f2d383]/20">
      <div className="max-w-[1400px] mx-auto flex flex-col items-center text-center space-y-10">
        {/* Brand Icon with Zoom Reveal */}
        <ScrollReveal direction="zoom" duration={600}>
          <div className="relative w-12 h-12">
            <Image
              src="/images/crowsnest_icon_yellow.png"
              alt="Crowsnest Barbershop"
              fill
              sizes="48px"
              className="object-contain"
            />
          </div>
        </ScrollReveal>

        {/* Business Info: Email & Hours */}
        <ScrollReveal direction="up" duration={700} delay={100}>
          <div className="space-y-4">
            <div>
              <a
                href="mailto:info@crowsnestbarbershop.com"
                className="text-sm tracking-[0.2em] uppercase hover:text-white transition-colors border-b border-[#f2d383]/40 pb-0.5"
              >
                info@crowsnestbarbershop.com
              </a>
            </div>

            <div className="pt-2 text-xs tracking-[0.18em] text-gray-200 uppercase space-y-1 font-light">
              <div className="text-[#f2d383] font-semibold text-xs tracking-[0.22em] mb-1">
                HOURS
              </div>
              <p>Monday – Saturday: 9:30 AM – 8:30 PM</p>
              <p>Sunday: 10:00 AM – 6:00 PM</p>
            </div>
          </div>
        </ScrollReveal>

        {/* Social Accounts */}
        <ScrollReveal direction="up" duration={700} delay={200}>
          <div className="flex items-center space-x-6">
            <a
              href="https://instagram.com/crowsnestbarber"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-10 h-10 rounded-full border border-[#f2d383]/40 flex items-center justify-center text-[#f2d383] hover:text-[#052124] hover:bg-[#f2d383] transition-all duration-300 hover:scale-110"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href="https://facebook.com/crowsnestbarbershop"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-10 h-10 rounded-full border border-[#f2d383]/40 flex items-center justify-center text-[#f2d383] hover:text-[#052124] hover:bg-[#f2d383] transition-all duration-300 hover:scale-110"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
              </svg>
            </a>
          </div>
        </ScrollReveal>

        {/* Footer Navigation */}
        <nav className="flex items-center space-x-8 text-xs tracking-[0.25em] uppercase font-semibold">
          <a
            href="mailto:info@crowsnestbarbershop.com"
            className="hover:text-white transition-colors"
          >
            CONTACT
          </a>
          <a href="#book-now" className="hover:text-white transition-colors">
            BOOK NOW
          </a>
        </nav>

        {/* Copyright */}
        <div className="text-[11px] tracking-[0.2em] text-[#f2d383]/60 uppercase pt-4 border-t border-[#f2d383]/10 w-full">
          © 2026 CROWSNEST BARBERSHOP • ALL RIGHTS RESERVED
        </div>
      </div>
    </footer>
  );
}
