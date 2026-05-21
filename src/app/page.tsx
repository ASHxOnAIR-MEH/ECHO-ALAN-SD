'use client';

import Hero from '@/components/Hero';
import About from '@/components/About';
import Performances from '@/components/Performances';
import EchoPackage from '@/components/EchoPackage';
import Testimonials from '@/components/Testimonials';
import BookingForm from '@/components/BookingForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      {/* 1. Fullscreen Cinematic Hero Video Section */}
      <Hero />

      {/* 2. Bento Grid Inside The Mind of ECHO (About) */}
      <About />

      {/* 3. Performances Video Grid */}
      <Performances />

      {/* 4. ECHO Experience Package Pricing Card */}
      <EchoPackage />

      {/* 5. Luxury Testimonials (Audience Reactions) */}
      <Testimonials />

      {/* 6. Premium Booking Portal (WhatsApp Direct) */}
      <BookingForm />

      {/* 7. Luxury Cinematic Footer */}
      <Footer />
    </>
  );
}
