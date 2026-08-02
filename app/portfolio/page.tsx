import type { Metadata } from 'next';
import { PageHeader } from '@/components/site/page-header';
import { PortfolioGallery } from '@/components/site/sections/portfolio-gallery';
import { CTASection } from '@/components/site/cta-section';

export const metadata: Metadata = {
  title: 'Portfolio — Selected Interior Design Work',
  description:
    'Browse a curated portfolio of UrbanNest interior design work — residential, modular kitchens, living rooms, bedrooms, offices and commercial spaces.',
};

export default function PortfolioPage() {
  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        title="A curated look at our work"
        description="Filter by category to explore homes, kitchens, offices and hospitality spaces we have designed and built across Bengaluru and beyond."
        image="https://images.pexels.com/photos/33559373/pexels-photo-33559373.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />
      <PortfolioGallery />
      <CTASection />
    </>
  );
}
