'use client';

import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  delay: number;
}

function TestimonialCard({ quote, author, role, delay }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8, delay }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="relative overflow-hidden rounded-3xl border border-white/5 bg-zinc-950/40 p-8 shadow-[0_4px_30px_rgba(0,0,0,0.4)] backdrop-blur-md group"
    >
      {/* Glow highlight */}
      <div className="absolute inset-0 rounded-3xl border border-brand-purple/0 group-hover:border-brand-purple/15 transition-colors duration-700 pointer-events-none" />
      
      {/* Floating Purple Light Spot */}
      <div className="absolute top-0 right-0 h-24 w-24 rounded-full bg-brand-purple/5 blur-2xl pointer-events-none group-hover:bg-brand-purple/10 transition-colors duration-700" />

      {/* Gold Quote Icon */}
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-gold/10 border border-brand-gold/20 text-brand-gold mb-6 transition-transform duration-500 group-hover:rotate-12">
        <Quote size={18} className="fill-current" />
      </div>

      {/* Stars */}
      <div className="flex space-x-1 mb-4 text-brand-gold">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={14} className="fill-current" />
        ))}
      </div>

      {/* Testimonial Quote */}
      <p className="font-cinzel text-lg font-bold italic tracking-wide text-white leading-relaxed">
        &ldquo;{quote}&rdquo;
      </p>

      {/* Separator line */}
      <div className="my-6 h-[1px] w-12 bg-brand-purple/30 group-hover:w-20 transition-all duration-500" />

      {/* Author Details */}
      <div>
        <h4 className="font-cinzel text-xs font-bold uppercase tracking-widest text-brand-gold">
          {author}
        </h4>
        <span className="text-[10px] uppercase font-semibold tracking-wider text-white/40 mt-1 block">
          {role}
        </span>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Absolutely unbelievable experience.",
      author: "Vikram Malhotra",
      role: "Corporate Gala Organizer",
      delay: 0,
    },
    {
      quote: "The audience was completely shocked.",
      author: "Dr. Ananya Sen",
      role: "Luxury Event Director",
      delay: 0.2,
    },
    {
      quote: "One of the best live performances we've witnessed.",
      author: "Rajesh K. Singhania",
      role: "VIP Private Client",
      delay: 0.4,
    },
  ];

  return (
    <section id="testimonials" className="relative bg-[#070707] py-24 lg:py-32">
      {/* Background Ambience */}
      <div className="absolute top-[20%] left-[-10%] h-[50vh] w-[50vh] rounded-full bg-brand-purple/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] h-[50vh] w-[50vh] rounded-full bg-brand-purple/5 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Headers */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="font-cinzel text-xs font-bold uppercase tracking-[0.4em] text-brand-gold">
            The Reaction
          </h2>
          <h3 className="mt-2 font-cinzel text-4xl font-extrabold uppercase tracking-widest text-white md:text-5xl drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            Audience Reactions
          </h3>
          <p className="mt-4 text-xs font-light tracking-widest text-white/50 uppercase">
            Here is what luxury event planners and guests say about ECHO
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((item, idx) => (
            <TestimonialCard
              key={idx}
              quote={item.quote}
              author={item.author}
              role={item.role}
              delay={item.delay}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
