'use client';

import { useRef, useEffect } from 'react';
import { Play, Sparkles, Brain, Compass } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface VideoCardProps {
  src: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  spanClass: string;
}

function VideoCard({ src, title, subtitle, icon, spanClass }: VideoCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Play video on hover and apply 3D tilt/depth
  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      // Keep it at progress 0 when paused
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`group relative overflow-hidden rounded-3xl border border-white/5 bg-zinc-950/40 backdrop-blur-md transition-all duration-700 hover:border-brand-purple/40 hover:shadow-[0_0_50px_rgba(106,13,173,0.3)] ${spanClass} min-h-[380px] flex flex-col justify-end cursor-pointer`}
    >
      {/* Video Background (Auto looping, playsInline, muted, paused by default, plays on hover) */}
      <video
        ref={videoRef}
        src={src}
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover opacity-30 scale-100 transition-all duration-1000 ease-out group-hover:scale-105 group-hover:opacity-75"
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent transition-opacity duration-700 group-hover:opacity-90" />
      
      {/* Subtle spotlight that follows mouse inside the card */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x,_50%)_var(--y,_50%),rgba(106,13,173,0.15)_0,transparent_50%)] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
           onMouseMove={(e) => {
             const rect = e.currentTarget.parentElement?.getBoundingClientRect();
             if (rect) {
               const x = e.clientX - rect.left;
               const y = e.clientY - rect.top;
               e.currentTarget.style.setProperty('--x', `${x}px`);
               e.currentTarget.style.setProperty('--y', `${y}px`);
             }
           }}
      />

      {/* Content overlay */}
      <div className="relative z-10 p-8 space-y-4">
        
        {/* Floating Icon */}
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-brand-gold group-hover:text-brand-purple group-hover:bg-brand-purple/10 group-hover:border-brand-purple/20 transition-all duration-500 transform group-hover:rotate-12">
          {icon}
        </div>

        <div>
          <span className="text-[10px] uppercase font-bold tracking-widest text-brand-gold/60">
            {subtitle}
          </span>
          <h4 className="font-cinzel text-2xl font-black uppercase tracking-wider text-white mt-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-brand-purple transition-all duration-300">
            {title}
          </h4>
        </div>

        {/* Action / CTA reveal on hover */}
        <div className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-white/50 group-hover:text-brand-gold transition-colors duration-300">
          <Play size={14} className="fill-current" />
          <span>Hover to preview performance</span>
        </div>

      </div>

      {/* Outer purple neon border lines */}
      <div className="absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r from-transparent via-brand-purple to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
    </div>
  );
}

export default function Performances() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Fade-in cards on scroll using ScrollTrigger
    const cards = gsap.utils.toArray('.perf-card');
    cards.forEach((card: any) => {
      gsap.fromTo(card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none none',
          }
        }
      );
    });
  }, []);

  return (
    <section id="performances" ref={containerRef} className="relative bg-[#070707] py-24 lg:py-32">
      {/* Background Ambience */}
      <div className="absolute top-[30%] right-[5%] h-[60vh] w-[60vh] rounded-full bg-brand-purple/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[5%] h-[50vh] w-[50vh] rounded-full bg-brand-purple/5 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Headers */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="font-cinzel text-xs font-bold uppercase tracking-[0.4em] text-brand-gold">
            Live Clips
          </h2>
          <h3 className="mt-2 font-cinzel text-4xl font-extrabold uppercase tracking-widest text-white md:text-5xl drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            Performance Clips
          </h3>
          <p className="mt-4 mx-auto max-w-lg text-xs font-light tracking-widest text-white/50 uppercase">
            Witness fragments of psychological marvel and illusion captured live on stage
          </p>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          
          {/* Card 1: Mind Reading Experience - m1.mp4 (lg:col-span-7) */}
          <div className="perf-card lg:col-span-7">
            <VideoCard
              src="/m1.mp4"
              title="Mind Reading Experience"
              subtitle="Psychological Perception"
              icon={<Brain size={22} />}
              spanClass="w-full"
            />
          </div>

          {/* Card 2: Interactive Mentalism - m2.mp4 (lg:col-span-5) */}
          <div className="perf-card lg:col-span-5">
            <VideoCard
              src="/m2.mp4"
              title="Interactive Mentalism"
              subtitle="Audience Influence"
              icon={<Compass size={22} />}
              spanClass="w-full"
            />
          </div>

          {/* Card 3: Hypnosis & Illusions - m3.mp4 (lg:col-span-12) */}
          <div className="perf-card lg:col-span-12">
            <VideoCard
              src="/m3.mp4"
              title="Hypnosis & Illusions"
              subtitle="Altered Realities"
              icon={<Sparkles size={22} />}
              spanClass="w-full lg:min-h-[420px]"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
