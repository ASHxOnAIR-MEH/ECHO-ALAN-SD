'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Phone, ArrowDown } from 'lucide-react';
import { Instagram } from '@/components/Icons';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const bottomNameRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Trigger metadata load
    const handleLoadedMetadata = () => {
      setVideoLoaded(true);
      
      // Initialize GSAP ScrollTrigger scroll-control video
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1, // Smooth scrub
          pin: true,
          anticipatePin: 1,
        }
      });

      // Animate video playback currentTime
      tl.to(video, {
        currentTime: video.duration || 5,
        ease: 'none',
      }, 0);

      // Animate text layers out or in based on scroll
      tl.to(headingRef.current, {
        scale: 1.2,
        letterSpacing: '12px',
        opacity: 0,
        filter: 'blur(10px)',
        ease: 'power1.out',
      }, 0);

      tl.to([subRef.current, descRef.current, buttonsRef.current], {
        y: -50,
        opacity: 0,
        filter: 'blur(5px)',
        stagger: 0.1,
        ease: 'power1.out',
      }, 0);

      tl.to(scrollIndicatorRef.current, {
        opacity: 0,
        y: 20,
        ease: 'power1.out',
      }, 0);
    };

    if (video.readyState >= 1) {
      handleLoadedMetadata();
    } else {
      video.addEventListener('loadedmetadata', handleLoadedMetadata);
    }

    // Scroll buttons handlers
    const scrollToSection = (id: string) => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    };

    return () => {
      if (video) {
        video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      }
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="relative h-[250vh] w-full bg-[#070707]">
      {/* Pinned Video Container */}
      <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden">
        {/* Cinematic Video Player */}
        <video
          ref={videoRef}
          src="/hero-video.mp4"
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-1000"
          style={{ opacity: videoLoaded ? 0.35 : 0 }}
        />

        {/* Loading placeholder / Fallback smoke effect */}
        {!videoLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-[#070707]">
            <div className="relative flex flex-col items-center">
              <div className="h-16 w-16 animate-spin rounded-full border-4 border-brand-purple border-t-brand-gold"></div>
              <p className="mt-4 text-xs font-medium uppercase tracking-widest text-brand-gold/60">Loading Experience</p>
            </div>
          </div>
        )}

        {/* Vignette Overlay & Smoke Filters */}
        <div className="absolute inset-0 bg-radial-vignette pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-transparent to-[#070707]/80 pointer-events-none" />

        {/* Spotlight Ambience Glow (Bottom center and Top left) */}
        <div className="absolute bottom-[-10%] left-1/2 h-[50vh] w-[80vw] -translate-x-1/2 rounded-full bg-brand-purple/10 blur-[120px] pointer-events-none" />
        <div className="absolute top-[-10%] left-[-10%] h-[60vh] w-[60vh] rounded-full bg-brand-purple/10 blur-[150px] pointer-events-none" />

        {/* TOP RIGHT: Social Links & Contact */}
        <div className="absolute right-6 top-8 z-30 flex items-center space-x-6 text-white/70 sm:right-12">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-300 hover:text-brand-purple hover:scale-110"
            aria-label="Instagram"
          >
            <Instagram size={20} />
          </a>
          <a
            href="https://wa.me/918921554228"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-300 hover:text-brand-purple hover:scale-110"
            aria-label="WhatsApp"
          >
            <Phone size={20} />
          </a>
          <a
            href="mailto:contact@alanvarkala.com"
            className="transition-all duration-300 hover:text-brand-purple hover:scale-110"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>

        {/* HERO CONTENT */}
        <div className="relative z-20 mx-auto flex max-w-6xl flex-col items-center px-6 text-center">
          {/* Main Title: ECHO */}
          <h1
            ref={headingRef}
            className="font-cinzel text-8xl font-black uppercase tracking-[0.25em] text-white drop-shadow-[0_0_30px_rgba(106,13,173,0.5)] md:text-[11rem] lg:text-[14rem]"
          >
            ECHO
          </h1>

          {/* Subtitle */}
          <div
            ref={subRef}
            className="mt-4 font-cinzel text-lg font-bold uppercase tracking-[0.4em] text-brand-gold drop-shadow-[0_2px_10px_rgba(255,215,0,0.3)] md:text-2xl"
          >
            Experience The Impossible
          </div>

          {/* Description */}
          <p
            ref={descRef}
            className="mt-6 max-w-xl text-xs font-light tracking-[0.15em] text-white/70 uppercase leading-relaxed md:text-sm"
          >
            Modern Mentalism &bull; Hypnosis &bull; Psychological Illusions &bull; Interactive Live Experience
          </p>

          {/* Action Buttons */}
          <div
            ref={buttonsRef}
            className="mt-10 flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6"
          >
            <button
              onClick={() => {
                const booking = document.getElementById('booking');
                booking?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group relative overflow-hidden rounded-full border border-brand-purple bg-brand-purple/20 px-8 py-3.5 text-xs font-semibold uppercase tracking-widest text-white backdrop-blur-sm transition-all duration-500 hover:border-brand-gold hover:bg-brand-gold hover:text-black hover:shadow-[0_0_25px_rgba(255,215,0,0.4)]"
            >
              <span className="relative z-10 transition-transform duration-500 group-hover:scale-105">Book ECHO</span>
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-brand-gold to-yellow-400 transition-transform duration-500 group-hover:translate-x-0 pointer-events-none" />
            </button>
            <button
              onClick={() => {
                const performances = document.getElementById('performances');
                performances?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="rounded-full border border-white/20 bg-white/5 px-8 py-3.5 text-xs font-semibold uppercase tracking-widest text-white backdrop-blur-sm transition-all duration-300 hover:border-white/60 hover:bg-white/10 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]"
            >
              Watch Performances
            </button>
          </div>
        </div>

        {/* BOTTOM LEFT: Brand Typography */}
        <div
          ref={bottomNameRef}
          className="absolute bottom-10 left-6 z-20 font-cinzel text-lg font-bold tracking-[0.3em] text-white/50 sm:left-12 sm:text-xl"
        >
          ALAN VARKALA
        </div>

        {/* BOTTOM RIGHT: Animated Scroll Indicator */}
        <div
          ref={scrollIndicatorRef}
          className="absolute bottom-10 right-6 z-20 flex flex-col items-center space-y-2 text-white/50 sm:right-12"
        >
          <span className="text-[10px] uppercase tracking-[0.25em] font-light">Scroll Down</span>
          <div className="flex h-10 w-6 items-start justify-center rounded-full border border-white/30 p-1">
            <div className="h-2 w-1.5 animate-bounce rounded-full bg-brand-gold" />
          </div>
        </div>
      </div>
    </div>
  );
}
