import React from 'react';

export const Plans: React.FC = () => {
  const WHATSAPP_URL = 'https://wa.me/918750090823';

  const plans = [
    {
      name: 'NEWBIE',
      duration: 'Monthly / Flexible',
      price: '₹1,499',
      cadence: '/ month',
      popular: false,
      desc: 'Structured introduction to heavy resistance training, correct lifting form, and sustainable habit conditioning.',
      whatsappMsg: 'Hi Indian Fitness Gym, I want to get started with the NEWBIE membership plan.',
      features: [
        'Full access to primary gym floor & cardio deck',
        'Initial movement assessment & machine orientation',
        'Standard personal locker & hot shower amenities',
        'Beginner nutrition & protein baseline guidelines',
        'Complimentary training app tracking',
      ],
    },
    {
      name: 'PRO',
      duration: 'Quarterly / Core Athlete',
      price: '₹3,499',
      cadence: '/ quarter',
      popular: true,
      desc: 'Built for athletes committed to consistent progressive overload, measurable hypertrophy, and serious strength gains.',
      whatsappMsg: 'Hi Indian Fitness Gym, I want to sign up for the PRO (Most Popular) membership plan.',
      features: [
        '24/7 unlimited access to all training bays & free weights',
        'Bi-weekly body composition & InBody metric tracking',
        'Coached lifting form checks & spotter priority',
        'Tailored macronutrient breakdown & weekly split updates',
        'Access to recovery zone & steam room amenities',
        'Gym merchandise starter kit & shaker bottle',
      ],
    },
    {
      name: 'ULTRA',
      duration: 'Annual / VIP Elite',
      price: '₹9,999',
      cadence: '/ year',
      popular: false,
      desc: 'Uncompromising elite access with 1-on-1 private coaching, priority training bays, and total physique management.',
      whatsappMsg: 'Hi Indian Fitness Gym, I am interested in the ULTRA Elite membership plan.',
      features: [
        'All PRO tier privileges with 365-day VIP access',
        '1-on-1 Dedicated certified master coach sessions',
        'Fully personalized metabolic & micro-cycle meal planning',
        'Reserved power rack slots during peak hours',
        'Monthly deep-tissue sports recovery massage session',
        'Guest passes (2 per month) & VIP locker room access',
      ],
    },
  ];

  return (
    <section id="plans" className="relative w-full py-24 sm:py-32 bg-black border-t border-white/[0.08] overflow-hidden">
      {/* Background Lighting Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-white/[0.015] rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-[11px] font-display uppercase tracking-[0.45em] text-neutral-400 block mb-3">
            Membership Options
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl uppercase tracking-[0.14em] text-metallic mb-6">
            Choose Your Plan
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
            Transparent pricing with zero hidden maintenance charges. Every tier is backed by our strict iron discipline and top-tier facility standards.
          </p>
        </div>

        {/* 3 Pricing Cards Side-by-Side (Stacked on Mobile) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative rounded-2xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 ${
                plan.popular
                  ? 'glass-panel bg-white/[0.06] border-white/30 shadow-[0_20px_50px_rgba(255,255,255,0.08)] lg:-translate-y-2'
                  : 'glass-panel glass-panel-hover'
              }`}
            >
              {/* Most Popular Badge / Ribbon */}
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-white text-black text-[10px] font-display font-bold uppercase tracking-[0.25em] shadow-lg shadow-white/20 whitespace-nowrap">
                  Most Popular
                </div>
              )}

              <div>
                {/* Header info */}
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-display font-bold text-xl sm:text-2xl uppercase tracking-[0.15em] text-white">
                    {plan.name}
                  </h3>
                  <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase">
                    {plan.duration}
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-1.5 mb-6 pb-6 border-b border-white/[0.08]">
                  <span className="font-display font-bold text-3xl sm:text-4xl text-metallic-silver">
                    {plan.price}
                  </span>
                  <span className="text-xs text-neutral-400 font-medium tracking-wider">
                    {plan.cadence}
                  </span>
                </div>

                {/* Compelling Description */}
                <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed mb-8">
                  {plan.desc}
                </p>

                {/* Features List */}
                <div className="space-y-3.5 mb-10">
                  <span className="text-[10px] font-display uppercase tracking-[0.3em] text-neutral-400 block mb-3">
                    Plan Inclusions
                  </span>
                  {plan.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-3 text-xs text-neutral-300 font-light">
                      <svg
                        className="w-4 h-4 text-white shrink-0 mt-0.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Get Started Button linking to WhatsApp with tailored message */}
              <div className="pt-6 border-t border-white/[0.08]">
                <a
                  href={`${WHATSAPP_URL}?text=${encodeURIComponent(plan.whatsappMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3.5 rounded-full text-xs font-semibold uppercase tracking-[0.2em] inline-flex items-center justify-center gap-2 text-center transition-all ${
                    plan.popular
                      ? 'bg-white text-black hover:bg-neutral-200 shadow-md shadow-white/20 hover:scale-[1.02]'
                      : 'glass-button'
                  }`}
                >
                  <span>Get Started</span>
                  <svg
                    className="w-3.5 h-3.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </a>
                <p className="text-center text-[10px] text-neutral-500 font-mono tracking-wider mt-3">
                  Instant activation via WhatsApp
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantee and Consultation Note */}
        <div className="mt-16 text-center">
          <p className="text-xs text-neutral-400 tracking-wider">
            Need student discounts, group rates, or customized personal training packages?{' '}
            <a
              href={`${WHATSAPP_URL}?text=Hi%20Indian%20Fitness%20Gym%2C%20I%20have%20a%20question%20about%20custom%20plans.`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white underline underline-offset-4 hover:text-neutral-300 transition-colors"
            >
              Chat directly with our manager on WhatsApp
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
