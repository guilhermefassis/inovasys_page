
import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero-section';
import { ServicesSection } from '@/components/services-section';
import { ResultsSection } from '@/components/results-section';
import { TestimonialsSection } from '@/components/testimonials-section';
import { WhyChooseSection } from '@/components/why-choose-section';
import { ContactSection } from '@/components/contact-section';
import { Footer } from '@/components/footer';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesSection />
      <ResultsSection />
      <TestimonialsSection />
      <WhyChooseSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
