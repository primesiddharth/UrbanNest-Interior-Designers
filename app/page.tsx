import { Hero } from '@/components/site/sections/hero';
import { AboutStudio } from '@/components/site/sections/about-studio';
import { ServicesGrid } from '@/components/site/sections/services-grid';
import { FeaturedProjects } from '@/components/site/sections/featured-projects';
import { DesignProcess } from '@/components/site/sections/design-process';
import { WhyChooseUs } from '@/components/site/sections/why-choose-us';
import { Statistics } from '@/components/site/sections/statistics';
import { Testimonials } from '@/components/site/sections/testimonials';
import { HomeFAQ } from '@/components/site/sections/home-faq';
import { CTASection } from '@/components/site/cta-section';

export default function Home() {
  return (
    <>
      <Hero />
      <AboutStudio />
      <ServicesGrid />
      <FeaturedProjects />
      <DesignProcess />
      <WhyChooseUs />
      <Statistics />
      <Testimonials />
      <HomeFAQ />
      <CTASection />
    </>
  );
}
