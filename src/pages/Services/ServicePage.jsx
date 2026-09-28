import { useParams, Link } from 'react-router-dom';
import { getServiceBySlug } from '@/data/services';
import { Button } from '@/components/ui/Button';
import { AnimatedSection, AnimatedItem } from '@/components/animations/AnimatedSection';
import { AnimatedHeading, AnimatedText } from '@/components/animations/AnimatedText';
import { PageLayout } from '@/layouts/PageLayout';
import { useState } from 'react';

export function ServicePage() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);
  const [heroImageLoaded, setHeroImageLoaded] = useState(null);
  const [contentImageLoaded, setContentImageLoaded] = useState(null);
  const [heroImageError, setHeroImageError] = useState(null);
  const [contentImageError, setContentImageError] = useState(null);

  if (!service) {
    return (
      <PageLayout>
        <AnimatedSection className="min-h-[60vh] flex items-center justify-center text-center">
          <div className="max-w-md mx-auto px-4">
            <AnimatedHeading as="h1" className="page-heading mb-4">Service Not Found</AnimatedHeading>
            <AnimatedText as="p" className="body-lg text-dark-600 mb-8">
              The service you're looking for doesn't exist or has been moved.
            </AnimatedText>
            <Button asChild variant="primary">
              <Link to="/services">Back to Services</Link>
            </Button>
          </div>
        </AnimatedSection>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <AnimatedSection className="bg-dark-900 text-white py-20 lg:py-28 relative overflow-hidden" id="service-hero">
        <div className="absolute inset-0" aria-hidden="true">
          {heroImageError !== service.image && (
            <img
              src={service.image}
              alt=""
              className={`w-full h-full object-cover opacity-30 transition-opacity duration-700 ${
                heroImageLoaded === service.image ? 'opacity-30' : 'opacity-0'
              }`}
              onLoad={() => setHeroImageLoaded(service.image)}
              onError={() => setHeroImageError(service.image)}
              loading="eager"
              fetchPriority="high"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-dark-950/95 via-dark-900/90 to-dark-900/70" />
          {heroImageLoaded !== service.image && heroImageError !== service.image && (
            <div className="absolute inset-0 bg-dark-900 animate-pulse" aria-hidden="true" />
          )}
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedHeading as="h1" id="service-title" className="page-heading mb-6" delay={0.1}>
            {service.title}
          </AnimatedHeading>
          <AnimatedText as="p" className="text-lg sm:text-xl lg:text-2xl text-dark-300 leading-relaxed max-w-3xl" delay={0.2}>
            {service.shortDescription}
          </AnimatedText>
        </div>
      </AnimatedSection>

      <AnimatedSection id="about-service" className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <AnimatedItem delay={0.1}>
              <AnimatedHeading as="h2" className="section-heading mb-5" delay={0.1}>
                About this Service
              </AnimatedHeading>
              <AnimatedText as="div" className="body-lg text-dark-600 prose prose-dark max-w-none" delay={0.2}>
                {service.about}
              </AnimatedText>
            </AnimatedItem>

            <AnimatedItem delay={0.2} className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-dark-100 sticky top-24 relative group">
                {contentImageError !== service.image && (
                  <img
                    src={service.image}
                    alt={`${service.title} service illustration`}
                    className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${
                      contentImageLoaded === service.image ? 'opacity-100 scale-100' : 'opacity-0 scale-102'
                    }`}
                    onLoad={() => setContentImageLoaded(service.image)}
                    onError={() => setContentImageError(service.image)}
                    loading="lazy"
                  />
                )}
                {contentImageLoaded !== service.image && contentImageError !== service.image && (
                  <div className="absolute inset-0 flex items-center justify-center bg-dark-100">
                    <div className="text-center p-8">
                      <div className="w-12 h-12 border-4 border-primary-200 border-t-primary-700 rounded-full animate-spin mx-auto mb-4" aria-hidden="true" />
                      <p className="text-dark-500 text-sm">Loading image...</p>
                    </div>
                  </div>
                )}
                {contentImageError === service.image && (
                  <div className="absolute inset-0 flex items-center justify-center bg-dark-100">
                    <div className="text-center p-8">
                      <svg className="w-16 h-16 mx-auto mb-4 text-dark-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <p className="text-dark-500">Unable to load image</p>
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true" />
              </div>
            </AnimatedItem>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="features" className="bg-dark-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
            <AnimatedHeading as="h2" className="mb-4" delay={0.1}>
              What's Included
            </AnimatedHeading>
            <AnimatedText as="p" className="body-lg text-dark-600" delay={0.2}>
              Comprehensive solutions tailored to your specific needs
            </AnimatedText>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.whatsIncluded.map((feature, index) => (
              <AnimatedItem key={feature} index={index} delay={0.1 + index * 0.05}>
                <div className="bg-white rounded-xl p-6 border border-dark-100 hover:shadow-lg hover:shadow-dark-900/10 transition-all duration-500 h-full group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-accent-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true" />
                  <div className="relative w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center mb-3 text-primary-700 group-hover:bg-primary-700 group-hover:text-white transition-all duration-300">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="relative font-semibold text-dark-900 mb-1 group-hover:text-primary-700 transition-colors duration-300">{feature}</h4>
                </div>
              </AnimatedItem>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="detailed-content" className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedHeading as="h2" className="mb-6 text-center" delay={0.1}>
            Detailed Overview
          </AnimatedHeading>
          <div className="prose prose-dark max-w-none lg:prose-lg">
            <AnimatedText as="div" className="body-md text-dark-600" delay={0.2}>
              {service.detailedContent}
            </AnimatedText>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="cta" className="bg-primary-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&q=80')] bg-cover bg-center opacity-10" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-700 via-primary-800 to-primary-900" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16 lg:py-20">
          <AnimatedHeading as="h2" className="mb-4" delay={0.1}>
            Interested in {service.title}?
          </AnimatedHeading>
          <AnimatedText as="p" className="body-lg text-primary-100 mb-8 max-w-2xl mx-auto" delay={0.2}>
            Our team of experts is ready to help you implement the perfect solution for your business needs.
          </AnimatedText>
          <AnimatedItem delay={0.3}>
            <Button asChild variant="secondary" size="lg" className="border-white mr-4">
              <Link to="/contact-us">Contact Us</Link>
            </Button>
            <Button asChild variant="ghost" size="lg" className="text-white hover:bg-white/10">
              <Link to="/services">View All Services</Link>
            </Button>
          </AnimatedItem>
        </div>
      </AnimatedSection>
    </PageLayout>
  );
}