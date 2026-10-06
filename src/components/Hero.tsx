import React from 'react';
import heroImg from '../assets/images/hero_overhead_gym_1791293498945.jpg';

interface HeroProps {
  onExplorePlans: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExplorePlans }) => {
  const WHATSAPP_URL = 'https://wa.me/918750090823';

  return (
    <section className="relative w-full min-h-[92vh] sm:min-h-screen flex items-center overflow-hidden bg-black select-none">
      {/* Background Overhead Gym Photo with Monochrome Treatments */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Athlete holding dumbbells on dark gym flooring, overhead view"
          className="w-full h-full object-cover object-center filter grayscale contrast-125 brightness-90 transform scale-100 transition-transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
        />

        {/* Ambient Dark Overlay and Directional Light Streaks Vignette */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60" />

        {/* Subtle diagonal light beam reflection */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20 mix-blend-overlay"
          style={{
            background:
              'linear-gradient(115deg, transparent 40%, rgba(255,255,255,0.4) 50%, transparent 60%)',
          }}
        />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20 flex flex-col justify-center">
        {/* Exact Layout Replica from Reference Image */}
        <div className="max-w-2xl transform transition-all duration-700 ease-out translate-y-0 opacity-100 animate-in fade-in slide-in-from-bottom-6">
          {/* Small spaced label line */}
          <p className="font-display text-xs sm:text-sm md:text-base font-normal tracking-[0.45em] sm:tracking-[0.55em] text-neutral-300 uppercase mb-3 sm:mb-4">
            DISCIPLINE BUILDS
          </p>

          {/* Large bold heading below (bold metallic/silver gradient shine) */}
          <h1 className="font-display font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[0.14em] sm:tracking-[0.18em] uppercase leading-none mb-6">
            <span className="text-metallic-silver block">
              STRONGER
            </span>
            <span className="text-metallic-silver block mt-1 sm:mt-2">
              YOU
            </span>
          </h1>

          {/* Thin horizontal line + small tagline combo */}
          <div className="flex items-center gap-4 sm:gap-6 mt-6 sm:mt-8">
            <span className="w-12 sm:w-16 h-[1.5px] bg-neutral-400 block shrink-0 opacity-80" />
            <p className="font-display text-[11px] sm:text-xs md:text-sm tracking-[0.3em] sm:tracking-[0.35em] text-neutral-300 uppercase font-light">
              SAME YOU. BUT STRONGER.
            </p>
          </div>

          {/* Glass CTA Actions */}
          <div className="flex flex-wrap items-center gap-4 mt-12 sm:mt-14">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-button px-7 py-3.5 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-[0.22em] inline-flex items-center gap-3 group"
            >
              <span>Join On WhatsApp</span>
              <span className="w-2 h-2 rounded-full bg-white group-hover:scale-125 transition-transform" />
            </a>

            <button
              onClick={onExplorePlans}
              className="px-6 py-3.5 rounded-full text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-neutral-400 hover:text-white transition-colors cursor-pointer border border-transparent hover:border-white/20"
            >
              View Membership Plans ↓
            </button>
          </div>
        </div>
      </div>

      {/* Subtle bottom gradient divider */}
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
};
