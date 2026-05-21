'use client';

import { Phone, Mail, ArrowUp } from 'lucide-react';
import { Instagram, Youtube } from '@/components/Icons';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Hero', id: 'top' },
    { label: 'Inside ECHO', id: 'about' },
    { label: 'Performances', id: 'performances' },
    { label: 'Experiences', id: 'experience' },
    { label: 'Testimonials', id: 'testimonials' },
    { label: 'Bookings', id: 'booking' },
  ];

  return (
    <footer className="relative bg-[#070707] border-t border-white/5 py-12 lg:py-16 overflow-hidden">
      {/* Background gradients representing smoke and glowing ambience */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[20vh] w-full bg-gradient-to-t from-brand-purple/10 to-transparent pointer-events-none blur-xl" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center justify-between gap-8 border-b border-white/5 pb-10 md:flex-row">
          
          {/* Brand/Signature */}
          <div className="text-center md:text-left space-y-2">
            <h4 className="font-cinzel text-xl font-black tracking-[0.2em] text-white">
              ALAN VARKALA
            </h4>
            <p className="text-[10px] uppercase font-bold tracking-widest text-brand-gold/60">
              Modern Mentalism &bull; Hypnosis &bull; Psychological Illusions
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 text-[10px] font-bold uppercase tracking-widest text-white/50">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  if (link.id === 'top') {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  } else {
                    document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="transition-colors duration-300 hover:text-brand-purple hover:drop-shadow-[0_0_8px_rgba(106,13,173,0.8)] cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-6 text-white/50">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300 hover:text-brand-purple hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300 hover:text-brand-purple hover:scale-110"
              aria-label="YouTube"
            >
              <Youtube size={18} />
            </a>
            <a
              href="https://wa.me/918921554228"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300 hover:text-brand-purple hover:scale-110"
              aria-label="WhatsApp"
            >
              <Phone size={18} />
            </a>
            <a
              href="mailto:contact@alanvarkala.com"
              className="transition-colors duration-300 hover:text-brand-purple hover:scale-110"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="flex flex-col items-center justify-between gap-4 pt-10 text-[10px] font-medium tracking-widest text-white/30 uppercase md:flex-row">
          <p>&copy; {currentYear} Alan Varkala. All Rights Reserved.</p>
          <div className="flex items-center space-x-2">
            <span>Designed for luxury illusion entertainment</span>
            <button
              onClick={scrollToTop}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/50 transition-all duration-300 hover:border-brand-purple hover:bg-brand-purple/10 hover:text-brand-gold hover:-translate-y-1 shadow-lg"
              aria-label="Scroll to top"
            >
              <ArrowUp size={14} />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
