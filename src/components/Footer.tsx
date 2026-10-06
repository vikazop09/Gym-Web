import React from 'react';
import { DumbbellIcon } from './DumbbellIcon';

export const Footer: React.FC = () => {
  const WHATSAPP_URL = 'https://wa.me/918750090823';

  const legalLinks = [
    'Privacy Policy',
    'Terms of Service',
    'Cookie Policy',
    'Cookie Preferences',
    'Refund Policy',
    'Cancellation Policy',
    'Shipping Policy',
    'Return / Exchange Policy',
    'Disclaimer',
    'Accessibility Statement',
    'Data Processing Agreement',
    'Acceptable Use Policy',
    'Security Policy',
    'Community Guidelines',
  ];

  const accountLinks = [
    'Login',
    'Register',
    'Email Verification',
    'Forgot Password',
    'Reset Password',
    'Onboarding',
    'Account Settings',
    'Cancel Subscription',
  ];

  const supportLinks = [
    'Help Center',
  ];

  return (
    <footer className="w-full bg-[#050505] border-t border-white/[0.08] text-neutral-400 select-none">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-16 sm:pt-20 pb-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-14 pb-16 border-b border-white/[0.08]">
          {/* Brand Info Column */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              {/* Brand Logo & Wordmark */}
              <div className="flex items-center gap-3.5 mb-5">
                <div className="p-1.5 rounded bg-white/[0.05] border border-white/10">
                  <DumbbellIcon className="w-6 h-5 text-white" />
                </div>
                <div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-display font-bold text-base tracking-[0.2em] text-white">
                      INDIAN FITNESS
                    </span>
                    <span className="font-display text-xs tracking-[0.3em] text-neutral-400 font-light border-l border-white/20 pl-1.5">
                      GYM
                    </span>
                  </div>
                </div>
              </div>

              {/* Tagline */}
              <p className="font-display text-xs uppercase tracking-[0.25em] text-neutral-300 font-semibold mb-4">
                Train Different.
              </p>

              <p className="text-xs text-neutral-400 font-light leading-relaxed max-w-sm mb-6">
                A dedicated, minimal, and high-performance training ground engineered for athletes who prioritize discipline, raw iron, and measurable results.
              </p>

              {/* Address & WhatsApp Contacts */}
              <div className="space-y-2.5 text-xs text-neutral-300 font-light pt-4 border-t border-white/[0.06]">
                <div className="flex items-start gap-2.5">
                  <span className="text-neutral-500 font-mono text-[11px] uppercase tracking-wider w-16 shrink-0">
                    Address:
                  </span>
                  <span>Bank Colony, Mandoli, Delhi - 110093</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="text-neutral-500 font-mono text-[11px] uppercase tracking-wider w-16 shrink-0">
                    WhatsApp:
                  </span>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-neutral-300 transition-colors underline underline-offset-2 font-medium"
                  >
                    +91 87500 90823
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="text-neutral-500 font-mono text-[11px] uppercase tracking-wider w-16 shrink-0">
                    Hours:
                  </span>
                  <span>Open Daily: 6:00 AM – 10:00 PM</span>
                </div>
              </div>
            </div>

            {/* Direct Connect Action */}
            <div className="mt-8">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-button px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-[0.2em] inline-flex items-center gap-2"
              >
                <span>Connect via WhatsApp</span>
                <svg
                  className="w-3.5 h-3.5 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Legal Column */}
          <div className="lg:col-span-4">
            <h4 className="font-display text-xs uppercase tracking-[0.3em] text-white font-bold mb-6 pb-2 border-b border-white/[0.08]">
              Legal
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 text-xs text-neutral-400">
              {legalLinks.map((link, idx) => (
                <li key={idx}>
                  <span className="cursor-default hover:text-neutral-200 transition-colors inline-block py-0.5">
                    {link}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Account Column */}
          <div className="lg:col-span-2">
            <h4 className="font-display text-xs uppercase tracking-[0.3em] text-white font-bold mb-6 pb-2 border-b border-white/[0.08]">
              Account
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              {accountLinks.map((link, idx) => (
                <li key={idx}>
                  <span className="cursor-default hover:text-neutral-200 transition-colors inline-block py-0.5">
                    {link}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Column */}
          <div className="lg:col-span-2">
            <h4 className="font-display text-xs uppercase tracking-[0.3em] text-white font-bold mb-6 pb-2 border-b border-white/[0.08]">
              Support
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              {supportLinks.map((link, idx) => (
                <li key={idx}>
                  <span className="cursor-default hover:text-neutral-200 transition-colors inline-block py-0.5">
                    {link}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
              <p className="text-[11px] font-display uppercase tracking-[0.2em] text-white font-semibold mb-1">
                Direct Desk
              </p>
              <p className="text-[11px] text-neutral-400 font-light leading-relaxed mb-3">
                Need immediate membership confirmation or directions?
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-mono uppercase tracking-wider text-white underline underline-offset-4 hover:text-neutral-300 block"
              >
                Chat on WhatsApp →
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Compliance Notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 font-light">
          <p className="tracking-wide">
            © 2026 Indian Fitness Gym. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6 text-[11px] font-mono tracking-widest text-neutral-500 uppercase">
            <span>Mandoli, Delhi 110093</span>
            <span>·</span>
            <span>Monochrome Aesthetic</span>
            <span>·</span>
            <span className="text-neutral-400">Pure Iron</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
