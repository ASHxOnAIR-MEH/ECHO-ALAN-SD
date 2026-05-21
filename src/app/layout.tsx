import type { Metadata } from 'next';
import { Cinzel, Poppins } from 'next/font/google';
import './globals.css';
import SmoothScroll from '@/components/SmoothScroll';
import ParticleOverlay from '@/components/ParticleOverlay';

const cinzel = Cinzel({
  variable: '--font-cinzel',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
});

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'ECHO - Experience The Impossible | Alan Varkala Mentalist',
  description:
    'ECHO is an immersive live mentalism and psychological illusion experience by Alan Varkala. Bending reality through hypnosis, telepathy, and mind control.',
  keywords: [
    'Alan Varkala',
    'ECHO Mentalist',
    'Professional Mentalist',
    'Psychological Illusions',
    'Hypnosis Performer',
    'Corporate Entertainer India',
    'Live Magic Show',
  ],
  authors: [{ name: 'Alan Varkala' }],
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full bg-[#070707] text-white scroll-smooth antialiased">
      <body className={`${cinzel.variable} ${poppins.variable} font-sans min-h-full flex flex-col antialiased selection:bg-brand-purple/40 selection:text-white`}>
        {/* Core Layout Providers */}
        <SmoothScroll>
          {/* Ambient Particles */}
          <ParticleOverlay />
          
          {/* Main App */}
          <main className="flex-grow flex flex-col relative z-20 overflow-x-hidden">
            {children}
          </main>
        </SmoothScroll>
      </body>
    </html>
  );
}
