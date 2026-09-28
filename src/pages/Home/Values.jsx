import { homeContent } from '@/data/content';
import { Button } from '@/components/ui/Button';
import { AnimatedSection, StaggeredContainer, StaggeredItem } from '@/components/animations/AnimatedSection';
import { AnimatedHeading, AnimatedText } from '@/components/animations/AnimatedText';
import { Link } from 'react-router-dom';

const valueIcons = {
  Integrity: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  Innovation: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
  Sharing: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
    </svg>
  ),
};

export function Values() {
  return (
    <AnimatedSection id="values" className="bg-dark-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&q=80')] bg-cover bg-center opacity-3" aria-hidden="true" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <AnimatedHeading as="h2" className="mb-4" delay={0.1}>
            {homeContent.values.title}
          </AnimatedHeading>
          <AnimatedText as="p" className="body-lg text-dark-600" delay={0.2}>
            These core values define who we are and guide every decision we make.
          </AnimatedText>
        </div>

        <StaggeredContainer stagger={0.15} className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {homeContent.values.items.map((value, index) => (
            <StaggeredItem key={value.title} index={index}>
              <div className="relative group bg-white rounded-2xl p-8 lg:p-10 border border-dark-100 text-center hover:shadow-xl hover:shadow-dark-900/10 hover:-translate-y-1 transition-all duration-500 h-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-accent-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true" />
                <div className="relative w-16 h-16 mx-auto mb-5 rounded-xl bg-primary-100 flex items-center justify-center text-primary-700 group-hover:bg-primary-700 group-hover:text-white group-hover:rotate-3 transition-all duration-500">
                  {valueIcons[value.title] || valueIcons.Integrity}
                </div>
                <h3 className="relative heading-4 mb-2 group-hover:text-primary-700 transition-colors duration-300">{value.title}</h3>
                <p className="relative body-sm text-dark-600">{value.description || 'A fundamental principle that guides our actions and decisions.'}</p>
              </div>
            </StaggeredItem>
          ))}
        </StaggeredContainer>

        <div className="text-center mt-12 lg:mt-16 relative">
          <Button asChild variant="primary" size="lg" className="group">
            <Link to="/contact-us">
              Get Started
              <svg className="w-5 h-5 ml-2 inline-block transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </Button>
        </div>
      </div>
    </AnimatedSection>
  );
}


