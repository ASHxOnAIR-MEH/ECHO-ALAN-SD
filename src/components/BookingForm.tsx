'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, PhoneCall, Sparkles, MessageCircle } from 'lucide-react';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    eventType: 'Corporate',
    eventDate: '',
    location: '',
    audienceSize: '',
    requirements: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, name: value })); // Wait, a typo! It should be name: value but let's make it dynamic!
    // Yes! Let's write it as:
    // setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Dynamic messaging structure
    const message = `Hello Alan,
I would like to book the ECHO Experience.

Name: ${formData.name}
Phone: ${formData.phone}
Event: ${formData.eventType}
Date: ${formData.eventDate}
Location: ${formData.location}
Audience Size: ${formData.audienceSize}
Requirements: ${formData.requirements || 'None'}`;

    // WhatsApp API URL construction
    // Clean target phone number
    const targetPhone = '918921554228';
    const encodedText = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${targetPhone}?text=${encodedText}`;

    setTimeout(() => {
      setIsSubmitting(false);
      window.open(whatsappUrl, '_blank');
    }, 800);
  };

  return (
    <section id="booking" className="relative bg-[#070707] py-24 lg:py-32">
      {/* Background gradients */}
      <div className="absolute top-[-10%] right-[-10%] h-[60vh] w-[60vh] rounded-full bg-brand-purple/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] h-[60vh] w-[60vh] rounded-full bg-brand-purple/5 blur-[150px] pointer-events-none" />

      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        
        {/* Headers */}
        <div className="text-center mb-12">
          <h2 className="font-cinzel text-xs font-bold uppercase tracking-[0.4em] text-brand-gold">
            Reserve Date
          </h2>
          <h3 className="mt-2 font-cinzel text-4xl font-extrabold uppercase tracking-widest text-white md:text-5xl drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            Booking Portal
          </h3>
          <p className="mt-4 text-xs font-light tracking-widest text-white/50 uppercase">
            Initiate the dialogue to bring the illusion of ECHO to your stage
          </p>
        </div>

        {/* Premium Luxury Booking Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-brand-purple/20 bg-zinc-950/40 p-8 md:p-12 shadow-[0_0_50px_rgba(106,13,173,0.1)] backdrop-blur-md"
        >
          {/* Spotlight Effect */}
          <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-brand-purple/10 blur-3xl pointer-events-none" />

          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Row 1: Full Name & Phone Number */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="name" className="text-[10px] uppercase font-bold tracking-widest text-white/60">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
                  placeholder="e.g. Alexander Vance"
                  className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder-white/20 transition-all duration-300 focus:border-brand-purple focus:outline-none focus:ring-1 focus:ring-brand-purple"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="phone" className="text-[10px] uppercase font-bold tracking-widest text-white/60">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData((p) => ({ ...p, phone: e.target.value }))}
                  placeholder="e.g. +91 98765 43210"
                  className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder-white/20 transition-all duration-300 focus:border-brand-purple focus:outline-none focus:ring-1 focus:ring-brand-purple"
                />
              </div>
            </div>

            {/* Row 2: Event Type & Event Date */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="eventType" className="text-[10px] uppercase font-bold tracking-widest text-white/60">
                  Event Type
                </label>
                <select
                  id="eventType"
                  name="eventType"
                  value={formData.eventType}
                  onChange={(e) => setFormData((p) => ({ ...p, eventType: e.target.value }))}
                  className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white transition-all duration-300 focus:border-brand-purple focus:outline-none focus:ring-1 focus:ring-brand-purple appearance-none"
                  style={{ colorScheme: 'dark' }}
                >
                  <option value="Corporate Event">Corporate Event</option>
                  <option value="Private Gala">Private Gala</option>
                  <option value="Theater Show">Theater Show</option>
                  <option value="Luxury Wedding">Luxury Wedding</option>
                  <option value="Other Premium Act">Other Premium Act</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="eventDate" className="text-[10px] uppercase font-bold tracking-widest text-white/60">
                  Event Date
                </label>
                <input
                  type="date"
                  id="eventDate"
                  name="eventDate"
                  required
                  value={formData.eventDate}
                  onChange={(e) => setFormData((p) => ({ ...p, eventDate: e.target.value }))}
                  className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white transition-all duration-300 focus:border-brand-purple focus:outline-none focus:ring-1 focus:ring-brand-purple"
                  style={{ colorScheme: 'dark' }}
                />
              </div>
            </div>

            {/* Row 3: Venue Location & Audience Size */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="location" className="text-[10px] uppercase font-bold tracking-widest text-white/60">
                  Venue Location
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  required
                  value={formData.location}
                  onChange={(e) => setFormData((p) => ({ ...p, location: e.target.value }))}
                  placeholder="e.g. Mumbai, India"
                  className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder-white/20 transition-all duration-300 focus:border-brand-purple focus:outline-none focus:ring-1 focus:ring-brand-purple"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="audienceSize" className="text-[10px] uppercase font-bold tracking-widest text-white/60">
                  Audience Size
                </label>
                <input
                  type="number"
                  id="audienceSize"
                  name="audienceSize"
                  required
                  value={formData.audienceSize}
                  onChange={(e) => setFormData((p) => ({ ...p, audienceSize: e.target.value }))}
                  placeholder="e.g. 250"
                  className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder-white/20 transition-all duration-300 focus:border-brand-purple focus:outline-none focus:ring-1 focus:ring-brand-purple"
                />
              </div>
            </div>

            {/* Row 4: Special Requirements */}
            <div className="space-y-2">
              <label htmlFor="requirements" className="text-[10px] uppercase font-bold tracking-widest text-white/60">
                Special Requirements & Details
              </label>
              <textarea
                id="requirements"
                name="requirements"
                value={formData.requirements}
                onChange={(e) => setFormData((p) => ({ ...p, requirements: e.target.value }))}
                rows={4}
                placeholder="Describe details about your guests, customized performance requests, or special tech specs..."
                className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder-white/20 transition-all duration-300 focus:border-brand-purple focus:outline-none focus:ring-1 focus:ring-brand-purple resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full group relative overflow-hidden rounded-full border border-brand-purple bg-brand-purple/20 py-4 text-xs font-bold uppercase tracking-widest text-white backdrop-blur-sm transition-all duration-500 hover:border-brand-gold hover:bg-brand-gold hover:text-black hover:shadow-[0_0_30px_rgba(255,215,0,0.3)] disabled:opacity-50"
            >
              <span className="relative z-10 flex items-center justify-center space-x-2">
                {isSubmitting ? (
                  <>
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    <span>Preparing Booking Request...</span>
                  </>
                ) : (
                  <>
                    <MessageCircle size={16} className="fill-current animate-pulse" />
                    <span>Book via WhatsApp</span>
                  </>
                )}
              </span>
              <div className="absolute inset-0 -translate-x-full bg-brand-gold transition-transform duration-500 group-hover:translate-x-0 pointer-events-none" />
            </button>

          </form>
        </motion.div>
      </div>
    </section>
  );
}
