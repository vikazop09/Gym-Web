import React from 'react';
import { DumbbellIcon } from './DumbbellIcon';

interface NavbarProps {
  activePage: 'home' | 'plans' | 'location';
  onNavigate: (page: 'home' | 'plans' | 'location') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activePage, onNavigate }) => {
  const WHATSAPP_URL = 'https://wa.me/918750090823';

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-black/75 border-b border-white/[0.08] transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Left: Dumbbell Icon + INDIAN FITNESS GYM wordmark */}
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center gap-3.5 group cursor-pointer text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-white"
          aria-label="Indian Fitness Gym Home"
        >
          <div className="p-1.5 rounded bg-white/[0.05] border border-white/10 group-hover:border-white/30 transition-colors">
            <DumbbellIcon className="w-6 h-5 text-white group-hover:scale-105 transition-transform" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-baseline gap-1.5">
              <span className="font-display font-bold text-sm sm:text-base tracking-[0.2em] text-white">
                INDIAN FITNESS
              </span>
              <span className="font-display text-[10px] sm:text-xs tracking-[0.3em] text-neutral-400 font-light border-l border-white/20 pl-1.5">
                GYM
              </span>
            </div>
            <span className="text-[9px] uppercase tracking-[0.35em] text-neutral-500 font-medium">
              Delhi · Mandoli
            </span>
          </div>
        </button>

        {/* Center/Page Navigation Tabs for quick switching between 3 pages */}
        <nav className="flex items-center gap-1 sm:gap-2 px-2 py-1 rounded-full bg-white/[0.03] border border-white/[0.07]">
          {(['home', 'plans', 'location'] as const).map((page) => {
            const isActive = activePage === page;
            const labels = {
              home: 'Home',
              plans: 'Plans',
              location: 'Location',
            };
            return (
              <button
                key={page}
                onClick={() => onNavigate(page)}
                className={`px-3 sm:px-4 py-1 text-[11px] sm:text-xs font-medium uppercase tracking-[0.18em] transition-all duration-200 cursor-pointer rounded-full ${
                  isActive
                    ? 'bg-white text-black font-semibold shadow-sm shadow-white/20'
                    : 'text-neutral-400 hover:text-white hover:bg-white/[0.05]'
                }`}
              >
                {labels[page]}
              </button>
            );
          })}
        </nav>

        {/* Right: Exact Reference Nav Links (visual only) + Join Now WhatsApp button */}
        <div className="flex items-center gap-6 sm:gap-8">
          {/* Reference spaced-out visual nav links (NON-FUNCTIONAL as instructed) */}
          <div className="hidden lg:flex items-center gap-7 text-[11px] font-medium tracking-[0.3em] uppercase text-neutral-400 selection:none select-none">
            <span className="hover:text-white transition-colors cursor-default">Train</span>
            <span className="text-neutral-700">|</span>
            <span className="hover:text-white transition-colors cursor-default">Eat</span>
            <span className="text-neutral-700">|</span>
            <span className="hover:text-white transition-colors cursor-default">Progress</span>
            <span className="text-neutral-700">|</span>
            <span className="hover:text-white transition-colors cursor-default">Be Better</span>
          </div>

          {/* Join Now WhatsApp Button (Only functional action) */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-button px-4 sm:px-5 py-2 rounded-full text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] whitespace-nowrap inline-flex items-center gap-2"
          >
            <span>Join Now</span>
            <svg
              className="w-3.5 h-3.5 text-white/80"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
};
