import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Plans } from './components/Plans';
import { Location } from './components/Location';
import { Footer } from './components/Footer';

export default function App() {
  const [activePage, setActivePage] = useState<'home' | 'plans' | 'location'>('home');

  // Scroll to top on page switch
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activePage]);

  return (
    <div className="min-h-screen bg-[#050505] text-neutral-100 flex flex-col font-sans selection:bg-neutral-800 selection:text-white">
      {/* Sticky Monochrome Navbar */}
      <Navbar activePage={activePage} onNavigate={setActivePage} />

      {/* Main Content Area */}
      <main className="flex-grow">
        {activePage === 'home' && (
          <div className="animate-in fade-in duration-500">
            {/* Page 1: Hero Section (Exact Reference Replica) */}
            <Hero onExplorePlans={() => setActivePage('plans')} />

            {/* Why Indian Fitness Gym Section */}
            <Features onSelectPlans={() => setActivePage('plans')} />

            {/* Section preview teasers to navigate to Plans & Location */}
            <section className="w-full py-16 bg-black border-t border-white/[0.06]">
              <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Plans Quick Gateway */}
                <div
                  onClick={() => setActivePage('plans')}
                  className="glass-panel glass-panel-hover p-8 rounded-2xl cursor-pointer group flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-neutral-400 block mb-2">
                      Pricing & Membership
                    </span>
                    <h3 className="font-display font-bold text-2xl uppercase tracking-[0.12em] text-white group-hover:text-metallic transition-colors mb-3">
                      Explore Plans & Tiers →
                    </h3>
                    <p className="text-xs text-neutral-400 font-light leading-relaxed">
                      Discover our NEWBIE, PRO, and ULTRA packages built for every stage of your lifting journey.
                    </p>
                  </div>
                  <div className="mt-6 flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-300">
                    <span>View 3 Membership Options</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>

                {/* Location Quick Gateway */}
                <div
                  onClick={() => setActivePage('location')}
                  className="glass-panel glass-panel-hover p-8 rounded-2xl cursor-pointer group flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-neutral-400 block mb-2">
                      Delhi Facility HQ
                    </span>
                    <h3 className="font-display font-bold text-2xl uppercase tracking-[0.12em] text-white group-hover:text-metallic transition-colors mb-3">
                      Visit Mandoli Facility →
                    </h3>
                    <p className="text-xs text-neutral-400 font-light leading-relaxed">
                      Find our full address in Bank Colony, operating hours (6 AM – 10 PM), and embedded interactive map.
                    </p>
                  </div>
                  <div className="mt-6 flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-300">
                    <span>See Map & Directions</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {activePage === 'plans' && (
          <div className="animate-in fade-in duration-500">
            {/* Page 2: Membership Plans */}
            <Plans />

            {/* Bottom transition banner */}
            <div className="py-12 bg-black border-t border-white/[0.06] text-center">
              <button
                onClick={() => setActivePage('location')}
                className="text-xs uppercase font-mono tracking-[0.25em] text-neutral-400 hover:text-white transition-colors cursor-pointer"
              >
                Want to see the gym in person? Check Location & Directions →
              </button>
            </div>
          </div>
        )}

        {activePage === 'location' && (
          <div className="animate-in fade-in duration-500">
            {/* Page 3: Location and Visit Us */}
            <Location />

            {/* Bottom transition banner */}
            <div className="py-12 bg-black border-t border-white/[0.06] text-center">
              <button
                onClick={() => setActivePage('plans')}
                className="text-xs uppercase font-mono tracking-[0.25em] text-neutral-400 hover:text-white transition-colors cursor-pointer"
              >
                Ready to commit? Choose a Membership Tier →
              </button>
            </div>
          </div>
        )}
      </main>

      {/* Massive Professional Legal & Account Links Footer (Consistent across all pages) */}
      <Footer />
    </div>
  );
}
