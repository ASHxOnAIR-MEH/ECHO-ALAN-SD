'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Eye, Shield, Users, Layers } from 'lucide-react';

interface CounterProps {
  value: number;
  suffix: string;
  duration?: number;
}

function Counter({ value, suffix, duration = 2 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    const totalMiliseconds = duration * 1000;
    const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 15);
    
    const timer = setInterval(() => {
      start += Math.ceil(end / (totalMiliseconds / incrementTime));
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="font-cinzel text-3xl font-black text-brand-gold md:text-5xl">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function About() {
  const galleryRef = useRef<HTMLDivElement>(null);

  // Auto-scroll slideshow in left bento grid cell
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      title: 'Mind Control',
      gradient: 'from-purple-900/30 to-indigo-950/40',
      text: 'Exploring the depths of sub-conscious perception.',
      pattern: 'bg-[radial-gradient(circle_at_center,rgba(106,13,173,0.15)_0,transparent_60%)]'
    },
    {
      title: 'Psychological Illusion',
      gradient: 'from-amber-950/20 to-stone-900/40',
      text: 'Bending the boundary between truth and trickery.',
      pattern: 'bg-[radial-gradient(ellipse_at_top,rgba(255,215,0,0.1)_0,transparent_50%)]'
    },
    {
      title: 'Hypnotic Suggestion',
      gradient: 'from-violet-950/30 to-zinc-900/40',
      text: 'Guiding conscious choices via unconscious hints.',
      pattern: 'bg-[radial-gradient(circle_at_bottom,rgba(106,13,173,0.15)_0,transparent_60%)]'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section id="about" className="relative bg-[#070707] py-24 lg:py-32">
      {/* Glow elements in background */}
      <div className="absolute top-[20%] left-[-10%] h-[50vh] w-[50vh] rounded-full bg-brand-purple/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] h-[50vh] w-[50vh] rounded-full bg-brand-purple/5 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center md:text-left mb-16">
          <h2 className="font-cinzel text-xs font-bold uppercase tracking-[0.4em] text-brand-gold">The Visionary</h2>
          <h3 className="mt-2 font-cinzel text-4xl font-extrabold uppercase tracking-widest text-white md:text-5xl drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            Inside the Mind of ECHO
          </h3>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          
          {/* LEFT COLUMN: Stage Wallpapers / Slideshow Gallery (lg:span-5) */}
          <div className="relative overflow-hidden rounded-3xl border border-white/5 bg-zinc-950/40 backdrop-blur-md p-1 min-h-[350px] lg:col-span-5 flex flex-col justify-between group">
            {/* Animated Slide Backdrops */}
            {slides.map((slide, idx) => (
              <div
                key={idx}
                className={`absolute inset-0 bg-gradient-to-br ${slide.gradient} transition-opacity duration-1000 ${
                  idx === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div className={`absolute inset-0 ${slide.pattern} opacity-80`} />
              </div>
            ))}

            {/* Glowing borders */}
            <div className="absolute inset-0 rounded-3xl border border-brand-purple/0 group-hover:border-brand-purple/20 transition-all duration-700 pointer-events-none" />

            {/* Header tags */}
            <div className="relative z-10 p-6 flex justify-between items-center">
              <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-brand-gold backdrop-blur-md">
                Interactive Concept
              </span>
              <span className="text-[10px] text-white/40 font-mono">0{currentSlide + 1} / 0{slides.length}</span>
            </div>

            {/* Stage wallpaper content info */}
            <div className="relative z-10 p-8 mt-auto">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-2"
              >
                <h4 className="font-cinzel text-2xl font-bold tracking-wider text-white">
                  {slides[currentSlide].title}
                </h4>
                <p className="text-xs font-light text-white/60 leading-relaxed max-w-sm">
                  {slides[currentSlide].text}
                </p>
              </motion.div>

              {/* Dots navigation */}
              <div className="mt-6 flex space-x-2">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-1.5 rounded-full transition-all duration-500 ${
                      idx === currentSlide ? 'w-8 bg-brand-gold' : 'w-2 bg-white/20'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Glassmorphism Info & Counters (lg:span-7) */}
          <div className="grid grid-cols-1 gap-6 lg:col-span-7">
            
            {/* Top Large Card: Core description */}
            <div className="relative overflow-hidden rounded-3xl border border-white/5 bg-zinc-950/40 backdrop-blur-md p-8 md:p-10 group">
              <div className="absolute top-0 right-0 h-40 w-40 rounded-full bg-brand-purple/5 blur-3xl pointer-events-none" />
              <div className="absolute inset-0 rounded-3xl border border-brand-purple/0 group-hover:border-brand-purple/20 transition-all duration-700 pointer-events-none" />
              
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-purple/10 border border-brand-purple/20 text-brand-purple mb-6">
                <Eye size={24} className="animate-pulse" />
              </div>

              <h4 className="font-cinzel text-2xl font-bold tracking-wide text-white">
                Experience The Unbelievable
              </h4>
              <p className="mt-4 text-sm font-light leading-relaxed text-white/70">
                ECHO is an immersive live mentalism and illusion experience created by **Alan Varkala**. 
                Combining psychological illusion, modern magic, audience interaction and hypnotic storytelling, 
                the show creates unforgettable moments of suspense, wonder and disbelief.
              </p>
              <p className="mt-3 text-sm font-light leading-relaxed text-white/70">
                It goes beyond simple card magic or tricks; it is a full-fledged psychological experiment 
                where your decisions are predicted, your thoughts are read, and your reality is shifted in real-time.
              </p>
            </div>

            {/* Bottom Row: Counters */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              
              {/* Counter 1: Live Performances */}
              <div className="relative overflow-hidden rounded-2xl border border-white/5 bg-zinc-950/30 backdrop-blur-md p-6 text-center group">
                <div className="absolute inset-0 rounded-2xl border border-brand-purple/0 group-hover:border-brand-purple/20 transition-all duration-700 pointer-events-none" />
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-brand-gold mb-4">
                  <Layers size={18} />
                </div>
                <div className="block">
                  <Counter value={500} suffix="+" />
                </div>
                <span className="mt-2 block text-[10px] uppercase font-bold tracking-widest text-white/50">
                  Live Performances
                </span>
              </div>

              {/* Counter 2: Audience Reached */}
              <div className="relative overflow-hidden rounded-2xl border border-white/5 bg-zinc-950/30 backdrop-blur-md p-6 text-center group">
                <div className="absolute inset-0 rounded-2xl border border-brand-purple/0 group-hover:border-brand-purple/20 transition-all duration-700 pointer-events-none" />
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-brand-gold mb-4">
                  <Users size={18} />
                </div>
                <div className="block">
                  <Counter value={100} suffix="K+" />
                </div>
                <span className="mt-2 block text-[10px] uppercase font-bold tracking-widest text-white/50">
                  Audience Reached
                </span>
              </div>

              {/* Counter 3: Interactive Experiments */}
              <div className="relative overflow-hidden rounded-2xl border border-white/5 bg-zinc-950/30 backdrop-blur-md p-6 text-center group">
                <div className="absolute inset-0 rounded-2xl border border-brand-purple/0 group-hover:border-brand-purple/20 transition-all duration-700 pointer-events-none" />
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-brand-gold mb-4">
                  <Shield size={18} />
                </div>
                <div className="block">
                  <Counter value={10} suffix="M+" />
                </div>
                <span className="mt-2 block text-[10px] uppercase font-bold tracking-widest text-white/50">
                  Interactive Experiments
                </span>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
