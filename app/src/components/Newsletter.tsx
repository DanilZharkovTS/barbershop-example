"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="home-subscribe" className="relative bg-[#052124] py-20 px-6 sm:px-10 lg:px-16 scroll-mt-20">
      <div className="max-w-2xl mx-auto text-center">
        <ScrollReveal direction="up" duration={700}>
          <header className="mb-8">
            <h2 className="text-3xl sm:text-4xl font-normal uppercase tracking-[0.16em] text-white mb-4">
              Let&apos;s stay in touch.
            </h2>
            <p className="text-sm sm:text-base text-gray-300 font-light tracking-wide max-w-lg mx-auto">
              Sign up with your email address to receive news, promotions, events and updates.
            </p>
          </header>
        </ScrollReveal>

        {submitted ? (
          <ScrollReveal direction="zoom" duration={500}>
            <div className="py-6 px-4 bg-[#0d484f] border border-[#f2d383]/40 rounded-sm">
              <p className="text-[#f2d383] text-sm uppercase tracking-[0.2em] font-medium">
                Thank you for subscribing!
              </p>
            </div>
          </ScrollReveal>
        ) : (
          <ScrollReveal direction="up" duration={700} delay={150}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  required
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#0d484f] border border-[#f2d383]/40 focus:border-[#f2d383] text-white text-xs tracking-wider px-4 py-3.5 outline-none rounded-sm placeholder-gray-400 transition-colors"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto shrink-0 bg-[#f2d383] hover:bg-white text-[#052124] transition-all text-xs font-semibold uppercase tracking-[0.2em] px-8 py-3.5 rounded-sm disabled:opacity-50 hover:shadow-lg active:translate-y-0.5"
                >
                  {loading ? "Signing Up..." : "Sign Up"}
                </button>
              </div>
              <p className="text-xs text-gray-400 tracking-wider font-light pt-2">
                We respect your privacy.
              </p>
            </form>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}
