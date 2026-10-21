"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface HeaderProps {
  onSearch?: (query: string) => void;
}

export default function Header({ onSearch }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [shopsOpen, setShopsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [cartCount] = useState(0);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch && searchQuery.trim()) {
      onSearch(searchQuery.trim());
    }
  };

  return (
    <>
      {/* Top Header:  Social, Cart */}
      <header className="w-full bg-[#052124] border-b border-[#f2d383]/15 text-[#f2d383] text-xs uppercase tracking-widest relative z-40">
        <div className="max-w-[1800px] mx-auto px-6 py-2.5 flex items-center justify-between">
          {/* Top Center: Social Links */}
          <div className="flex items-center space-x-5">
            <a
              href="https://instagram.com/crowsnestbarber"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-[#f2d383] hover:text-white transition-colors"
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
              className="text-[#f2d383] hover:text-white transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
              </svg>
            </a>
          </div>

          {/* Top Right: Cart */}
          <div className="flex-1 flex justify-end">
            <a
              href="#gift-cards"
              className="flex items-center space-x-1.5 text-[#f2d383] hover:text-white transition-colors tracking-widest font-medium"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              <span>CART ({cartCount})</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Bottom Header: Nav & Central Raven Branding */}
      <header className="sticky top-0 z-30 w-full bg-[#052124]/95 backdrop-blur-md border-b border-[#f2d383]/20 transition-all duration-300">
        <div className="max-w-[1800px] mx-auto px-6 py-4 flex items-center justify-between">
          {/* Desktop Left Nav */}
          <nav className="hidden lg:flex items-center space-x-8 text-xs tracking-[0.2em] uppercase font-medium text-[#f2d383]">
            {/* About Us Folder */}
            <div className="relative group">
              <button
                type="button"
                className="flex items-center py-2 hover:text-[#f2d383]/60 transition-colors"
              >
                <span>ABOUT US</span>
                <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 top-full pt-1 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200">
                <div className="bg-[#f2d383] text-[#052124] min-w-[200px] shadow-2xl py-3 px-4 flex flex-col space-y-2">
                  <a
                    href="#our-story-1"
                    className="hover:text-[#052124]/70 transition-colors py-1 block text-xs tracking-widest font-semibold"
                  >
                    OUR STORY
                  </a>
                  <a
                    href="#book-now"
                    className="hover:text-[#052124]/70 transition-colors py-1 block text-xs tracking-widest font-semibold"
                  >
                    BARBERS
                  </a>
                </div>
              </div>
            </div>

            {/* Shops Folder - Tenerife locations */}
            <div className="relative group">
              <button
                type="button"
                className="flex items-center py-2 hover:text-[#f2d383]/60 transition-colors"
              >
                <span>SHOPS</span>
                <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 top-full pt-1 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200">
                <div className="bg-[#f2d383] text-[#052124] min-w-[260px] shadow-2xl py-3 px-4 flex flex-col space-y-2">
                  <a
                    href="#book-now"
                    className="hover:text-[#052124]/70 transition-colors py-1 block text-xs tracking-widest font-semibold"
                  >
                    SANTA CRUZ DE TENERIFE
                  </a>
                  <a
                    href="#book-now"
                    className="hover:text-[#052124]/70 transition-colors py-1 block text-xs tracking-widest font-semibold"
                  >
                    COSTA ADEJE
                  </a>
                  <a
                    href="#book-now"
                    className="hover:text-[#052124]/70 transition-colors py-1 block text-xs tracking-widest font-semibold"
                  >
                    LOS CRISTIANOS
                  </a>
                  <a
                    href="#book-now"
                    className="hover:text-[#052124]/70 transition-colors py-1 block text-xs tracking-widest font-semibold"
                  >
                    PLAYA DE LAS AMÉRICAS
                  </a>
                  <a
                    href="#book-now"
                    className="hover:text-[#052124]/70 transition-colors py-1 block text-xs tracking-widest font-semibold"
                  >
                    PUERTO DE LA CRUZ
                  </a>
                  <a
                    href="#book-now"
                    className="hover:text-[#052124]/70 transition-colors py-1 block text-xs tracking-widest font-semibold"
                  >
                    SAN CRISTÓBAL DE LA LAGUNA
                  </a>
                </div>
              </div>
            </div>

            <a
              href="#haircuts"
              className="py-2 hover:text-[#f2d383]/60 transition-colors tracking-[0.2em]"
            >
              STYLES
            </a>
            <a
              href="#gift-cards"
              className="py-2 hover:text-[#f2d383]/60 transition-colors tracking-[0.2em]"
            >
              GIFT CARDS
            </a>
            <a
              href="mailto:info@crowsnestbarbershop.com"
              className="py-2 hover:text-[#f2d383]/60 transition-colors tracking-[0.2em]"
            >
              CONTACT
            </a>
          </nav>

          {/* Central Logo & Tagline */}
          <div className="flex flex-col items-center justify-center">
            <Link href="/" className="flex items-center flex-col group">
              <div className="relative w-11 h-11 transition-transform group-hover:scale-105 duration-300">
                <Image
                  src="/images/crowsnest_icon_yellow.png"
                  alt="Crowsnest Barbershop Icon"
                  fill
                  sizes="44px"
                  className="object-contain"
                  priority
                />
              </div>
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#f2d383] mt-1 font-medium hidden sm:block">
                CROWSNEST BARBERSHOP
              </span>
            </Link>
          </div>

          {/* Desktop Right Nav (BOOK NOW Button) */}
          <div className="hidden lg:flex items-center space-x-6">
            <a
              href="#book-now"
              className="text-xs uppercase tracking-[0.2em] font-semibold text-[#052124] bg-[#f2d383] hover:bg-[#f2d383]/90 transition-all px-6 py-2.5 rounded-sm"
            >
              BOOK NOW
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              className="text-[#f2d383] hover:text-white p-2 focus:outline-none"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-Out / Overlay Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[96px] z-50 bg-[#052124] bg-opacity-98 border-t border-[#f2d383]/20 overflow-y-auto px-8 py-10 flex flex-col justify-between">
          <div className="flex flex-col space-y-6 text-sm tracking-[0.2em] uppercase text-[#f2d383]">
            {/* Mobile About Accordion */}
            <div>
              <button
                type="button"
                onClick={() => setAboutOpen(!aboutOpen)}
                className="w-full flex items-center justify-between py-2 border-b border-[#f2d383]/20"
              >
                <span>ABOUT US</span>
                <span className="text-lg">{aboutOpen ? "−" : "+"}</span>
              </button>
              {aboutOpen && (
                <div className="pl-4 py-3 flex flex-col space-y-3 text-xs text-white/90">
                  <a
                    href="#our-story-1"
                    onClick={() => setMobileMenuOpen(false)}
                    className="hover:text-[#f2d383] py-1"
                  >
                    OUR STORY
                  </a>
                  <a
                    href="#book-now"
                    onClick={() => setMobileMenuOpen(false)}
                    className="hover:text-[#f2d383] py-1"
                  >
                    BARBERS
                  </a>
                </div>
              )}
            </div>

            {/* Mobile Shops Accordion */}
            <div>
              <button
                type="button"
                onClick={() => setShopsOpen(!shopsOpen)}
                className="w-full flex items-center justify-between py-2 border-b border-[#f2d383]/20"
              >
                <span>SHOPS (TENERIFE)</span>
                <span className="text-lg">{shopsOpen ? "−" : "+"}</span>
              </button>
              {shopsOpen && (
                <div className="pl-4 py-3 flex flex-col space-y-3 text-xs text-white/90">
                  <a
                    href="#book-now"
                    onClick={() => setMobileMenuOpen(false)}
                    className="hover:text-[#f2d383] py-1"
                  >
                    SANTA CRUZ DE TENERIFE
                  </a>
                  <a
                    href="#book-now"
                    onClick={() => setMobileMenuOpen(false)}
                    className="hover:text-[#f2d383] py-1"
                  >
                    COSTA ADEJE
                  </a>
                  <a
                    href="#book-now"
                    onClick={() => setMobileMenuOpen(false)}
                    className="hover:text-[#f2d383] py-1"
                  >
                    LOS CRISTIANOS
                  </a>
                  <a
                    href="#book-now"
                    onClick={() => setMobileMenuOpen(false)}
                    className="hover:text-[#f2d383] py-1"
                  >
                    PLAYA DE LAS AMÉRICAS
                  </a>
                  <a
                    href="#book-now"
                    onClick={() => setMobileMenuOpen(false)}
                    className="hover:text-[#f2d383] py-1"
                  >
                    PUERTO DE LA CRUZ
                  </a>
                  <a
                    href="#book-now"
                    onClick={() => setMobileMenuOpen(false)}
                    className="hover:text-[#f2d383] py-1"
                  >
                    SAN CRISTÓBAL DE LA LAGUNA
                  </a>
                </div>
              )}
            </div>

            <a
              href="#haircuts"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-[#f2d383]/20"
            >
              STYLES
            </a>

            <a
              href="#gift-cards"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-[#f2d383]/20"
            >
              GIFT CARDS
            </a>

            <a
              href="mailto:info@crowsnestbarbershop.com"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-[#f2d383]/20"
            >
              CONTACT
            </a>

            <a
              href="#book-now"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 text-center text-xs tracking-[0.2em] font-semibold text-[#052124] bg-[#f2d383] py-3.5 rounded-sm"
            >
              BOOK NOW
            </a>
          </div>

          <div className="pt-8 text-center text-xs text-[#f2d383]/60 tracking-widest uppercase">
            Crowsnest Barbershop © 2026
          </div>
        </div>
      )}
    </>
  );
}
