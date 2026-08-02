import './globals.css';
import type { Metadata } from 'next';
import { Fraunces, Inter } from 'next/font/google';
import { Navbar } from '@/components/site/navbar';
import { Footer } from '@/components/site/footer';
import { ScrollToTop } from '@/components/site/scroll-to-top';
import { siteConfig } from '@/lib/site';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://urbannestdesign.in'),
  title: {
    default: 'UrbanNest Interior Designers | Luxury Indian Home Interiors',
    template: '%s | UrbanNest Interior Designers',
  },
  description:
    'UrbanNest Interior Designers crafts premium residential and commercial interiors in Bengaluru — modular kitchens, living rooms, bedrooms, offices and bespoke furniture with a warm, modern luxury aesthetic.',
  keywords: [
    'interior designers Bengaluru',
    'luxury home interiors India',
    'modular kitchen design',
    'residential interior design',
    'office interiors Bangalore',
    'commercial interior design',
    'UrbanNest',
  ],
  authors: [{ name: 'UrbanNest Interior Designers' }],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://urbannestdesign.in',
    siteName: 'UrbanNest Interior Designers',
    title: 'UrbanNest Interior Designers | Luxury Indian Home Interiors',
    description:
      'Premium residential and commercial interiors in Bengaluru — modern luxury, warm earthy palettes, end-to-end execution.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UrbanNest Interior Designers | Luxury Indian Home Interiors',
    description:
      'Premium residential and commercial interiors in Bengaluru — modern luxury, warm earthy palettes, end-to-end execution.',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://urbannestdesign.in' },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="font-body antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
