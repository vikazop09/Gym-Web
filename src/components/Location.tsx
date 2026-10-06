import React from 'react';
import interiorImg from '../assets/images/gym_interior_facility_1791293520897.jpg';

export const Location: React.FC = () => {
  const WHATSAPP_URL = 'https://wa.me/918750090823';
  const MAP_EMBED_URL =
    'https://maps.google.com/maps?q=Bank%20Colony,%20Mandoli,%20Delhi%20110093&t=&z=15&ie=UTF8&iwloc=&output=embed';
  const GOOGLE_MAPS_EXTERNAL =
    'https://www.google.com/maps/search/?api=1&query=Bank+Colony+Mandoli+Delhi+110093';

  return (
    <section id="location" className="relative w-full py-24 sm:py-32 bg-black border-t border-white/[0.08] overflow-hidden">
      {/* Background Lighting Elements */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[300px] bg-white/[0.015] rounded-full blur-[90px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Split Screen Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* LEFT SIDE: Text and Details */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="text-[11px] font-display uppercase tracking-[0.45em] text-neutral-400 block mb-3">
              HQ & Location
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-5xl uppercase tracking-[0.14em] text-metallic mb-6">
              Visit Us
            </h2>

            <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed mb-8">
              Experience the raw iron culture, focused lifters, and uncompromising training environment that sets Indian Fitness Gym apart in East Delhi. Walk-ins are always welcomed for floor tours.
            </p>

            {/* Information Cards */}
            <div className="space-y-4 mb-10">
              {/* Working Hours */}
              <div className="glass-panel p-5 rounded-xl flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-white/[0.05] border border-white/10 text-white shrink-0 mt-0.5">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-[11px] font-display uppercase tracking-[0.2em] text-neutral-400 mb-1">
                    Training Hours
                  </h4>
                  <p className="text-sm sm:text-base font-semibold text-white tracking-wide">
                    Open Daily: 6 AM – 10 PM
                  </p>
                  <p className="text-xs text-neutral-400 font-light mt-0.5">
                    Monday through Sunday (No mid-day floor closures)
                  </p>
                </div>
              </div>

              {/* Gym Address */}
              <div className="glass-panel p-5 rounded-xl flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-white/[0.05] border border-white/10 text-white shrink-0 mt-0.5">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-[11px] font-display uppercase tracking-[0.2em] text-neutral-400 mb-1">
                    Facility Address
                  </h4>
                  <p className="text-sm sm:text-base font-semibold text-white tracking-wide">
                    Bank Colony, Mandoli
                  </p>
                  <p className="text-xs text-neutral-400 font-light mt-0.5">
                    Delhi – 110093, India
                  </p>
                </div>
              </div>

              {/* Direct Support */}
              <div className="glass-panel p-5 rounded-xl flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-white/[0.05] border border-white/10 text-white shrink-0 mt-0.5">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-[11px] font-display uppercase tracking-[0.2em] text-neutral-400 mb-1">
                    Official WhatsApp
                  </h4>
                  <p className="text-sm sm:text-base font-semibold text-white tracking-wide">
                    +91 87500 90823
                  </p>
                  <p className="text-xs text-neutral-400 font-light mt-0.5">
                    Fast response for trials, renewals & directions
                  </p>
                </div>
              </div>
            </div>

            {/* Actions: WhatsApp Contact Button + Google Maps Link */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-button px-7 py-3.5 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] inline-flex items-center gap-2.5"
              >
                <span>Message on WhatsApp</span>
                <svg
                  className="w-4 h-4 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </a>

              <a
                href={GOOGLE_MAPS_EXTERNAL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-full text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-neutral-400 hover:text-white border border-white/10 hover:border-white/30 transition-all inline-flex items-center gap-2"
              >
                <span>Open in Maps</span>
                <svg
                  className="w-3.5 h-3.5 text-neutral-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </a>
            </div>
          </div>

          {/* RIGHT SIDE: Embedded Google Map & Facility Preview */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-neutral-900 shadow-2xl h-[420px] sm:h-[480px]">
              {/* Google Map iframe */}
              <iframe
                title="Indian Fitness Gym Location Map"
                src={MAP_EMBED_URL}
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  filter: 'invert(90%) hue-rotate(180deg) contrast(95%) grayscale(85%)',
                }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />

              {/* Floating Badge over Map */}
              <div className="absolute top-4 left-4 z-20 glass-panel px-4 py-2.5 rounded-xl flex items-center gap-3 border-white/20">
                <div className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
                <div>
                  <p className="font-display text-[10px] uppercase tracking-[0.2em] text-white font-bold">
                    Indian Fitness Gym
                  </p>
                  <p className="text-[10px] text-neutral-400 font-mono">
                    Mandoli, Delhi - 110093
                  </p>
                </div>
              </div>
            </div>

            {/* Small facility visual strip */}
            <div className="relative rounded-xl overflow-hidden border border-white/10 h-32 hidden sm:flex items-center px-6 justify-between bg-neutral-950">
              <img
                src={interiorImg}
                alt="Gym facility wide interior"
                className="absolute inset-0 w-full h-full object-cover opacity-20 filter grayscale"
                referrerPolicy="no-referrer"
              />
              <div className="relative z-10">
                <h5 className="font-display text-xs uppercase tracking-[0.2em] text-white font-bold">
                  High-Capacity Free Weights Zone
                </h5>
                <p className="text-xs text-neutral-400 font-light mt-0.5">
                  Over 5,000 sq ft dedicated to heavy lifting, conditioning & turf work.
                </p>
              </div>
              <span className="relative z-10 text-[10px] font-mono uppercase tracking-[0.25em] text-neutral-400 border border-white/10 px-3 py-1.5 rounded-full">
                Floor Verified
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
