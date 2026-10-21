"use client";

import { useState } from "react";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

interface LocationItem {
  id: string;
  name: string;
  city: string;
  address: string;
  postalCode: string;
  phone: string;
  hours: string;
  image: string;
  bookingUrl: string;
}

const LOCATIONS: LocationItem[] = [
  {
    id: "santa-cruz",
    name: "CASTILLO HOUSE",
    city: "SANTA CRUZ DE TENERIFE",
    address: "Calle del Castillo 15",
    postalCode: "38002 Santa Cruz de Tenerife",
    phone: "+34 922 10 20 30",
    hours: "Mon - Sat: 9:30 AM - 8:30 PM",
    image: "/images/location-1.jpg",
    bookingUrl: "#book",
  },
  {
    id: "costa-adeje",
    name: "COSTA ADEJE",
    city: "COSTA ADEJE",
    address: "Avenida de Bruselas 48, 2nd Floor",
    postalCode: "38660 Costa Adeje",
    phone: "+34 922 23 45 67",
    hours: "Mon - Sat: 10:00 AM - 9:00 PM",
    image: "/images/location-2.jpg",
    bookingUrl: "#book",
  },
  {
    id: "los-cristianos",
    name: "LOS CRISTIANOS",
    city: "LOS CRISTIANOS",
    address: "Paseo Marítimo 10",
    postalCode: "38650 Los Cristianos, Arona",
    phone: "+34 922 34 56 78",
    hours: "Mon - Sun: 10:00 AM - 8:00 PM",
    image: "/images/location-3.jpg",
    bookingUrl: "#book",
  },
  {
    id: "playa-americas",
    name: "AMÉRICAS STRIP",
    city: "PLAYA DE LAS AMÉRICAS",
    address: "Avenida de Las Américas 2",
    postalCode: "38660 Playa de las Américas",
    phone: "+34 922 45 67 89",
    hours: "Mon - Sat: 10:00 AM - 9:00 PM",
    image: "/images/location-4.jpg",
    bookingUrl: "#book",
  },
  {
    id: "puerto-cruz",
    name: "PUERTO DE LA CRUZ",
    city: "PUERTO DE LA CRUZ",
    address: "Calle Quintana 90",
    postalCode: "38400 Puerto de la Cruz",
    phone: "+34 922 56 78 90",
    hours: "Mon - Sat: 9:30 AM - 8:00 PM",
    image: "/images/location-5.jpg",
    bookingUrl: "#book",
  },
  {
    id: "la-laguna",
    name: "HISTORIC CENTER",
    city: "SAN CRISTÓBAL DE LA LAGUNA",
    address: "Calle Herradores 44",
    postalCode: "38202 La Laguna",
    phone: "+34 922 67 89 01",
    hours: "Mon - Sat: 9:00 AM - 8:00 PM",
    image: "/images/location-6.jpg",
    bookingUrl: "#book",
  },
];

export default function Locations() {
  const [selectedLocation, setSelectedLocation] = useState<LocationItem | null>(null);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Signature Haircut",
    date: "",
    time: "11:00 AM",
  });

  const handleOpenBooking = (loc: LocationItem) => {
    setSelectedLocation(loc);
    setBookingSuccess(false);
  };

  const handleSubmitBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSuccess(true);
    setTimeout(() => {
      setSelectedLocation(null);
      setBookingSuccess(false);
    }, 2500);
  };

  return (
    <section id="book-now" className="relative bg-[#052124] py-20 px-6 sm:px-10 lg:px-16 scroll-mt-20">
      <div className="max-w-[1400px] mx-auto">
        {/* Header Block */}
        <ScrollReveal direction="up" duration={700}>
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl sm:text-4xl font-normal uppercase tracking-[0.16em] text-white mb-4">
              Book An Appointment
            </h2>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-light tracking-wide">
              We have six barbershops across Santa Cruz de Tenerife, Costa Adeje, Los Cristianos,
              Playa de las Américas, Puerto de la Cruz and San Cristóbal de La Laguna. Click on the
              location you wish to make an appointment for.
            </p>
          </div>
        </ScrollReveal>

        {/* 6 Location Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {LOCATIONS.map((loc, idx) => (
            <ScrollReveal
              key={loc.id}
              direction="up"
              delay={idx * 120}
              duration={700}
            >
              <div
                onClick={() => handleOpenBooking(loc)}
                className="group relative h-[380px] sm:h-[420px] rounded-sm overflow-hidden cursor-pointer shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
              >
                {/* Background Location Image */}
                <div className="absolute inset-0">
                  <Image
                    src={loc.image}
                    alt={loc.city}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                  />
                  {/* Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/30 group-hover:bg-black/60 transition-colors duration-300" />
                </div>

                {/* Poster Card Overlay Content */}
                <div className="relative z-10 h-full p-8 flex flex-col justify-end items-center text-center">
                  <span className="text-[11px] font-medium tracking-[0.22em] text-[#f2d383] uppercase mb-1">
                    {loc.name}
                  </span>

                  <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-[0.14em] text-white mb-2 leading-tight">
                    {loc.city}
                  </h3>

                  <p className="text-xs uppercase tracking-[0.18em] text-gray-300 mb-6 font-light">
                    {loc.address}
                  </p>

                  <button
                    type="button"
                    className="inline-block bg-[#f2d383] text-[#052124] group-hover:bg-white group-hover:text-[#052124] transition-all duration-300 text-xs font-semibold uppercase tracking-[0.2em] px-7 py-3 rounded-sm shadow-md"
                  >
                    BOOK NOW
                  </button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Interactive Booking Modal */}
      {selectedLocation && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="relative bg-[#052124] border border-[#f2d383]/40 w-full max-w-lg p-6 sm:p-8 rounded-sm shadow-2xl text-white">
            {/* Close Button */}
            <button
              onClick={() => setSelectedLocation(null)}
              className="absolute top-4 right-4 text-[#f2d383] hover:text-white transition-colors"
              aria-label="Close booking modal"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {bookingSuccess ? (
              <div className="py-10 text-center space-y-4">
                <div className="w-14 h-14 mx-auto rounded-full bg-[#f2d383] text-[#052124] flex items-center justify-center">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold uppercase tracking-wider text-[#f2d383]">
                  Appointment Confirmed!
                </h3>
                <p className="text-sm text-gray-300">
                  We look forward to seeing you at our {selectedLocation.city} shop on {formData.date || "your requested date"}.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmitBooking} className="space-y-5">
                <div>
                  <span className="text-xs uppercase tracking-[0.2em] text-[#f2d383]">
                    Book An Appointment
                  </span>
                  <h3 className="text-2xl font-bold uppercase tracking-wider text-white mt-1">
                    {selectedLocation.city}
                  </h3>
                  <p className="text-xs text-gray-400 tracking-wide mt-0.5">
                    {selectedLocation.address} • {selectedLocation.phone}
                  </p>
                </div>

                <div className="space-y-4 text-xs tracking-wider">
                  <div>
                    <label className="block uppercase text-gray-300 mb-1">Select Service</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-[#0d484f] border border-[#f2d383]/30 text-white p-2.5 rounded-sm outline-none focus:border-[#f2d383]"
                    >
                      <option value="Signature Haircut">Signature Haircut - €25</option>
                      <option value="Beard Trim & Sculpt">Beard Trim & Sculpt - €18</option>
                      <option value="Full Haircut & Hot Towel Shave">Haircut & Hot Towel Shave - €40</option>
                      <option value="Buzz Cut">Buzz Cut - €18</option>
                      <option value="Kids Haircut">Kids Haircut - €20</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block uppercase text-gray-300 mb-1">Date</label>
                      <input
                        type="date"
                        required
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full bg-[#0d484f] border border-[#f2d383]/30 text-white p-2.5 rounded-sm outline-none focus:border-[#f2d383]"
                      />
                    </div>
                    <div>
                      <label className="block uppercase text-gray-300 mb-1">Time</label>
                      <select
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                        className="w-full bg-[#0d484f] border border-[#f2d383]/30 text-white p-2.5 rounded-sm outline-none focus:border-[#f2d383]"
                      >
                        <option value="10:00 AM">10:00 AM</option>
                        <option value="11:00 AM">11:00 AM</option>
                        <option value="12:00 PM">12:00 PM</option>
                        <option value="02:00 PM">02:00 PM</option>
                        <option value="03:30 PM">03:30 PM</option>
                        <option value="05:00 PM">05:00 PM</option>
                        <option value="06:30 PM">06:30 PM</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block uppercase text-gray-300 mb-1">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#0d484f] border border-[#f2d383]/30 text-white p-2.5 rounded-sm outline-none focus:border-[#f2d383] placeholder-gray-400"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block uppercase text-gray-300 mb-1">Email</label>
                      <input
                        type="email"
                        required
                        placeholder="you@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#0d484f] border border-[#f2d383]/30 text-white p-2.5 rounded-sm outline-none focus:border-[#f2d383] placeholder-gray-400"
                      />
                    </div>
                    <div>
                      <label className="block uppercase text-gray-300 mb-1">Phone</label>
                      <input
                        type="tel"
                        required
                        placeholder="+34 600 000 000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#0d484f] border border-[#f2d383]/30 text-white p-2.5 rounded-sm outline-none focus:border-[#f2d383] placeholder-gray-400"
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-[#f2d383] hover:bg-white text-[#052124] font-semibold text-xs uppercase tracking-[0.2em] py-3.5 rounded-sm transition-colors"
                  >
                    Confirm Booking
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
