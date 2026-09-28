import { aboutContent } from '@/data/content';
import { Button } from '@/components/ui/Button';
import { AnimatedSection, AnimatedItem, StaggeredContainer, StaggeredItem } from '@/components/animations/AnimatedSection';
import { AnimatedHeading, AnimatedText } from '@/components/animations/AnimatedText';
import { PageLayout } from '@/layouts/PageLayout';

export function About() {
  return (
    <PageLayout>
      <section className="relative bg-dark-900 text-white py-20 lg:py-28" aria-labelledby="about-hero-heading">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="page-eyebrow">About Us</p>
            <AnimatedHeading
              as="h1"
              id="about-hero-heading"
              className="page-heading mb-6"
              delay={0.1}
              stagger={0.03}
            >
              {aboutContent.hero.title}
            </AnimatedHeading>
            <AnimatedText
              as="p"
              className="text-lg sm:text-xl lg:text-2xl text-dark-300 leading-relaxed"
              delay={0.2}
              stagger={0.02}
            >
              {aboutContent.hero.description}
            </AnimatedText>
          </div>
        </div>
      </section>

      <AnimatedSection id="vision-mission" className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <AnimatedItem delay={0.1}>
              <div className="w-12 h-12 rounded-xl bg-accent-100 flex items-center justify-center mb-5 text-accent-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <AnimatedHeading as="h2" className="mb-3" delay={0.1}>
                {aboutContent.visionMission.vision.title}
              </AnimatedHeading>
              <AnimatedText as="p" className="body-lg text-dark-600" delay={0.2}>
                {aboutContent.visionMission.vision.description}
              </AnimatedText>
            </AnimatedItem>

            <AnimatedItem delay={0.2}>
              <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center mb-5 text-primary-700">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <AnimatedHeading as="h2" className="mb-3" delay={0.1}>
                {aboutContent.visionMission.mission.title}
              </AnimatedHeading>
              <AnimatedText as="p" className="body-lg text-dark-600" delay={0.2}>
                {aboutContent.visionMission.mission.description}
              </AnimatedText>
            </AnimatedItem>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="values" className="bg-dark-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
            <AnimatedHeading as="h2" className="mb-4" delay={0.1}>
              {aboutContent.values.title}
            </AnimatedHeading>
            <AnimatedText as="p" className="body-lg text-dark-600" delay={0.2}>
              {aboutContent.values.items[0].description || 'Our core values define who we are and guide every decision we make.'}
            </AnimatedText>
          </div>

          <StaggeredContainer stagger={0.15} className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {aboutContent.values.items.map((value, index) => (
              <StaggeredItem key={value.title} index={index}>
                <div className="bg-white rounded-2xl p-8 lg:p-10 border border-dark-100 text-center hover:shadow-xl hover:shadow-dark-900/10 transition-all duration-500 h-full">
                  <div className="w-16 h-16 mx-auto mb-5 rounded-xl bg-primary-100 flex items-center justify-center text-primary-700">
                    {value.title === 'Integrity' && (
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    )}
                    {value.title === 'Innovation' && (
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    )}
                    {value.title === 'Sharing' && (
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                      </svg>
                    )}
                  </div>
                  <AnimatedHeading as="h3" className="mb-2" delay={0.1}>
                    {value.title}
                  </AnimatedHeading>
                  <AnimatedText as="p" className="body-sm text-dark-600" delay={0.2}>
                    {value.description || 'A fundamental principle that guides our actions and decisions.'}
                  </AnimatedText>
                </div>
              </StaggeredItem>
            ))}
          </StaggeredContainer>
        </div>
      </AnimatedSection>

      <AnimatedSection id="contact-cta" className="bg-primary-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedHeading as="h2" className="mb-4" delay={0.1}>
            Ready to work together?
          </AnimatedHeading>
          <AnimatedText as="p" className="body-lg text-primary-100 mb-8 max-w-2xl mx-auto" delay={0.2}>
            Let's discuss how our innovative IT solutions can help transform your business challenges into opportunities.
          </AnimatedText>
          <AnimatedItem delay={0.3}>
            <Button asChild variant="secondary" size="lg" className="border-white">
              <a href={aboutContent.cta.href}>{aboutContent.cta.label}</a>
            </Button>
          </AnimatedItem>
        </div>
      </AnimatedSection>
    </PageLayout>
  );
}
