import React from 'react';
import equipImg from '../assets/images/gym_floor_equipment_1791293510742.jpg';

interface FeaturesProps {
  onSelectPlans: () => void;
}

export const Features: React.FC<FeaturesProps> = ({ onSelectPlans }) => {
  const WHATSAPP_URL = 'https://wa.me/918750090823';

  const highlights = [
    {
      title: 'State-of-the-Art Equipment',
      tagline: 'Raw Iron & Precision Ergonomics',
      desc: 'Heavy cast-iron dumbbells up to 60kg, Olympic competition barbells, calibrated power racks, and targeted biomechanical machines for maximum hypertrophy.',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="6" cy="12" r="3" />
          <circle cx="18" cy="12" r="3" />
          <line x1="9" y1="12" x2="15" y2="12" />
          <line x1="6" y1="6" x2="6" y2="9" />
          <line x1="6" y1="15" x2="6" y2="18" />
          <line x1="18" y1="6" x2="18" y2="9" />
          <line x1="18" y1="15" x2="18" y2="18" />
        </svg>
      ),
    },
    {
      title: 'Expert Trainers',
      tagline: 'Form, Science & Accountability',
      desc: 'Certified coaches specializing in progressive overload, biomechanics, posture correction, and injury-free strength development for both men and women.',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      title: '24/7 Access',
      tagline: 'Zero Excuses. Any Hour.',
      desc: 'Round-the-clock secure entry so you never miss a workout. Train early dawn before shifts, or late midnight when the iron room is dead silent.',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
    },
    {
      title: 'Personalized Plans',
      tagline: 'Custom Macros & Periodization',
      desc: 'Targeted caloric guidelines, high-protein meal templates, and tailored weekly workout splits structured for your exact physical ambitions.',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
          <path d="m9 16 2 2 4-4" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative w-full py-24 sm:py-32 bg-black border-t border-white/[0.08] overflow-hidden">
      {/* Background Subtle Radial Gradient for Depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-[11px] font-display uppercase tracking-[0.4em] text-neutral-400 block mb-3">
              Standard of Excellence
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl uppercase tracking-[0.12em] text-metallic">
              Why Indian Fitness Gym
            </h2>
          </div>
          <p className="text-sm sm:text-base text-neutral-400 max-w-md font-light leading-relaxed">
            We stripped away unnecessary distractions to build an uncompromising sanctuary for pure strength, conditioning, and mental grit in Delhi.
          </p>
        </div>

        {/* 4 Glass Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="glass-panel glass-panel-hover p-7 rounded-2xl flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-white mb-6 group-hover:border-white/30 group-hover:bg-white/[0.09] transition-all">
                  {item.icon}
                </div>
                <h3 className="font-display font-bold text-lg uppercase tracking-[0.1em] text-white mb-1.5">
                  {item.title}
                </h3>
                <p className="text-xs font-mono tracking-wider text-neutral-400 mb-3.5">
                  {item.tagline}
                </p>
                <p className="text-xs text-neutral-400 font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-[10px] uppercase font-mono tracking-widest text-neutral-500 group-hover:text-neutral-300 transition-colors">
                <span>Core Pillar 0{idx + 1}</span>
                <span>Ready</span>
              </div>
            </div>
          ))}
        </div>

        {/* Banner with Gym Floor Photo Preview & Join WhatsApp CTA */}
        <div className="relative rounded-2xl overflow-hidden border border-white/10 p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 bg-neutral-950">
          <div className="absolute inset-0 z-0 opacity-25">
            <img
              src={equipImg}
              alt="Gym floor heavy weights"
              className="w-full h-full object-cover filter grayscale contrast-125"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/60" />
          </div>

          <div className="relative z-10 max-w-2xl">
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-neutral-400 mb-2 block">
              Direct Access
            </span>
            <h3 className="font-display font-bold text-2xl sm:text-3xl uppercase tracking-[0.14em] text-white mb-3">
              Ready to redefine your physical limits?
            </h3>
            <p className="text-sm text-neutral-300 font-light leading-relaxed">
              Step into Indian Fitness Gym. Connect with our head conditioning team on WhatsApp for membership pricing, current batch slots, and floor trials.
            </p>
          </div>

          <div className="relative z-10 flex flex-wrap items-center gap-4 shrink-0">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-button px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-[0.2em] inline-flex items-center gap-2 group"
            >
              <span>Join Now</span>
              <svg
                className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
            <button
              onClick={onSelectPlans}
              className="px-6 py-3.5 rounded-full text-xs font-medium uppercase tracking-[0.2em] text-neutral-400 hover:text-white border border-white/10 hover:border-white/30 transition-all cursor-pointer"
            >
              Compare Plans
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
