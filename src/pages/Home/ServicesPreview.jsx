import { Link } from 'react-router-dom';
import { homeContent } from '@/data/content';
import { services } from '@/data/services';
import { Button } from '@/components/ui/Button';
import { ServiceCard } from '@/components/cards/ServiceCard';
import { AnimatedSection, StaggeredContainer, StaggeredItem } from '@/components/animations/AnimatedSection';
import { AnimatedHeading, AnimatedText } from '@/components/animations/AnimatedText';

export function ServicesPreview() {
  const featuredServices = services.slice(0, 6);

  return (
    <AnimatedSection id="services-preview" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 lg:mb-16 gap-6">
          <div>
            <AnimatedHeading as="h2" className="mb-3" delay={0.1}>
              {homeContent.services.title}
            </AnimatedHeading>
            <AnimatedText as="p" className="body-lg text-dark-600 max-w-2xl" delay={0.2}>
              {homeContent.services.description}
            </AnimatedText>
          </div>
          <Button asChild variant="secondary" size="lg" className="lg:mt-0 mt-6 lg:w-auto w-full">
            <Link to="/services" className="w-full text-center">
              View All Services
              <svg className="w-5 h-5 ml-2 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </Button>
        </div>

        <StaggeredContainer stagger={0.1} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featuredServices.map((service, index) => (
            <StaggeredItem key={service.id} index={index}>
              <ServiceCard service={service} variant="default" index={index} />
            </StaggeredItem>
          ))}
        </StaggeredContainer>
      </div>
    </AnimatedSection>
  );
}