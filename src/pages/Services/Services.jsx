import { services } from '@/data/services';
import { ServiceCard } from '@/components/cards/ServiceCard';
import { AnimatedSection, StaggeredContainer, StaggeredItem, AnimatedItem } from '@/components/animations/AnimatedSection';
import { AnimatedHeading, AnimatedText } from '@/components/animations/AnimatedText';
import { PageLayout } from '@/layouts/PageLayout';
import { images } from '@/data/images';
import { useState, useEffect } from 'react';

export function Services() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <PageLayout>
      <AnimatedSection className="bg-dark-900 text-white py-20 lg:py-28 relative overflow-hidden" id="services-hero">
        <div className="absolute inset-0" aria-hidden="true">
          <img
            src={images.hero.background}
            alt=""
            className="w-full h-full object-cover opacity-20"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedHeading as="h1" className="page-heading mb-6" delay={0.1}>
            Our Services
          </AnimatedHeading>
          <AnimatedText as="p" className="text-lg sm:text-xl lg:text-2xl text-dark-300 leading-relaxed max-w-3xl mx-auto" delay={0.2}>
            Driven by our innovative and dynamic team, we deliver comprehensive IT solutions to hundreds of organizations across Pakistan, the USA, the UK, and the Middle East.
          </AnimatedText>
        </div>
      </AnimatedSection>

      <AnimatedSection id="services-grid" className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {isLoaded ? (
            <StaggeredContainer stagger={0.1} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {services.map((service, index) => (
                <StaggeredItem key={service.id} index={index}>
                  <ServiceCard service={service} variant="default" index={index} />
                </StaggeredItem>
              ))}
            </StaggeredContainer>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" aria-hidden="true" role="status" aria-label="Loading services">
              {Array.from({ length: 9 }).map((_, i) => (
                <div key={i} className="card-interactive animate-pulse">
                  <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-xl bg-dark-200 mb-5 lg:mb-6 animate-pulse" />
                  <div className="skeleton animate-pulse h-6 w-3/4 mb-3" />
                  <div className="skeleton animate-pulse h-4 w-full mb-2" />
                  <div className="skeleton animate-pulse h-4 w-5/6 mb-2" />
                  <div className="skeleton animate-pulse h-4 w-1/2 mt-4" />
                </div>
              ))}
            </div>
          )}
        </div>
      </AnimatedSection>

      <AnimatedSection id="cta" className="bg-primary-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&q=80')] bg-cover bg-center opacity-10" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-700 via-primary-800 to-primary-900" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16 lg:py-20">
          <AnimatedHeading as="h2" className="mb-4" delay={0.1}>
            Ready to transform your business?
          </AnimatedHeading>
          <AnimatedText as="p" className="body-lg text-primary-100 mb-8 max-w-2xl mx-auto" delay={0.2}>
            Let's discuss how our comprehensive IT solutions can help you achieve your strategic goals.
          </AnimatedText>
          <AnimatedItem delay={0.3}>
            <a href="/contact-us" className="btn-secondary border-white hover:bg-white/10 inline-flex">
              Get Started
            </a>
          </AnimatedItem>
        </div>
      </AnimatedSection>
    </PageLayout>
  );
}