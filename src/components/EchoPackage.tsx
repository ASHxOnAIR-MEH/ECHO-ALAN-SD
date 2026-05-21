'use client';

import { motion } from 'framer-motion';
import { Check, Star, Zap } from 'lucide-react';

export default function EchoPackage() {
  const inclusions = [
    'Modern Mentalism & Influence',
    'Interactive Mind-Reading Illusions',
    'Full Audience Participation',
    'Real-time Psychological Experiments',
    'Immersive Stage Performance',
    'Hypnotic Trance Segments',
    'Customized Premium Entertainment Experience',
  ];

  return (
    <section id="experience" className="relative bg-[#070707] py-24 lg:py-32">
      {/* Background radial spotlight */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(106,13,173,0.06)_0,transparent_60%)] pointer-events-none" />

      {/* Decorative floating lights */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 h-72 w-72 rounded-full bg-brand-purple/10 blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute top-1/3 right-1/4 h-80 w-80 rounded-full bg-brand-gold/5 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        {/* Section Headers */}
        <div className="text-center mb-16">
          <h2 className="font-cinzel text-xs font-bold uppercase tracking-[0.4em] text-brand-gold">
            The Offering
          </h2>
          <h3 className="mt-2 font-cinzel text-4xl font-extrabold uppercase tracking-widest text-white md:text-5xl drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            ECHO EXPERIENCE PACKAGE
          </h3>
          <p className="mt-4 text-xs font-light tracking-widest text-white/50 uppercase">
            Bring the impossible to your private gala, corporate event, or luxury show
          </p>
        </div>

        {/* Premium Cinematic Pricing Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8 }}
          whileHover={{ y: -8 }}
          className="relative overflow-hidden rounded-3xl border border-brand-purple/30 bg-zinc-950/60 p-8 md:p-12 shadow-[0_0_80px_rgba(106,13,173,0.15)] backdrop-blur-xl group"
        >
          {/* Neon Border Glow */}
          <div className="absolute inset-0 rounded-3xl border border-brand-gold/0 group-hover:border-brand-gold/30 transition-colors duration-700 pointer-events-none" />
          
          {/* Spotlight Effect Top Left */}
          <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-brand-purple/20 blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          
          {/* Golden Badge */}
          <div className="absolute top-6 right-6 md:top-8 md:right-8 flex items-center space-x-1.5 rounded-full bg-brand-gold/10 border border-brand-gold/30 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-brand-gold shadow-[0_0_15px_rgba(255,215,0,0.15)]">
            <Star size={12} className="fill-current animate-spin" style={{ animationDuration: '6s' }} />
            <span>Premium Show</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
            
            {/* Left side info */}
            <div className="flex-1 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-brand-purple">
                  Exclusive Live Act
                </span>
                <h4 className="mt-2 font-cinzel text-3xl font-black uppercase tracking-wider text-white md:text-4xl drop-shadow-[0_2px_10px_rgba(255,255,255,0.1)]">
                  ECHO EXPERIENCE
                </h4>
              </div>

              <p className="text-sm font-light leading-relaxed text-white/70">
                A premium live mentalism and illusion experience featuring psychological illusion, 
                audience interaction, modern magic and hypnotic entertainment. Perfect for VIP 
                gatherings, premium galas, and corporate events seeking a luxury showpiece.
              </p>

              {/* Inclusions checklist */}
              <div className="space-y-3 pt-4">
                {inclusions.map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-3 text-xs font-medium tracking-wide text-white/80">
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-purple/20 border border-brand-purple/30 text-brand-gold">
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side Pricing Box */}
            <div className="flex flex-col items-center justify-center rounded-2xl bg-black/40 border border-white/5 p-8 text-center min-w-[240px] md:self-stretch group-hover:border-brand-purple/20 transition-all duration-700">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-gold/10 border border-brand-gold/25 text-brand-gold mb-4">
                <Zap size={20} className="fill-current animate-pulse" />
              </div>
              
              <span className="text-[10px] uppercase font-bold tracking-widest text-white/50">
                Investment
              </span>
              
              <div className="mt-2 flex items-baseline">
                <span className="font-cinzel text-5xl font-black text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                  ₹20,000
                </span>
              </div>
              
              <span className="mt-2 text-[10px] text-brand-gold/60 font-medium uppercase tracking-widest">
                All-Inclusive Show
              </span>

              {/* Book Button */}
              <button
                onClick={() => {
                  const booking = document.getElementById('booking');
                  booking?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="mt-8 w-full group/btn relative overflow-hidden rounded-full border border-brand-gold bg-brand-gold/10 py-3 text-xs font-bold uppercase tracking-widest text-brand-gold transition-all duration-500 hover:bg-brand-gold hover:text-black hover:shadow-[0_0_25px_rgba(255,215,0,0.3)]"
              >
                <span className="relative z-10">Book ECHO</span>
                <div className="absolute inset-0 -translate-y-full bg-brand-gold transition-transform duration-500 group-hover/btn:translate-y-0 pointer-events-none" />
              </button>
            </div>

          </div>

        </motion.div>
      </div>
    </section>
  );
}
