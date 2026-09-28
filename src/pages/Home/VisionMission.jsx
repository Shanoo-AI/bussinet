import { homeContent } from '@/data/content';
import { AnimatedSection, AnimatedItem } from '@/components/animations/AnimatedSection';
import { AnimatedHeading, AnimatedText } from '@/components/animations/AnimatedText';
import { images } from '@/data/images';
import { OptimizedImage } from '@/components/ui/OptimizedImage';

export function VisionMission() {
  const { vision, mission } = homeContent.visionMission;

  return (
    <AnimatedSection id="vision-mission" className="bg-dark-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&q=80')] bg-cover bg-center opacity-5" aria-hidden="true" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <AnimatedHeading as="h2" className="mb-4" delay={0.1}>
            Our Guiding Principles
          </AnimatedHeading>
          <AnimatedText as="p" className="body-lg text-dark-600" delay={0.2}>
            Our vision and mission drive everything we do, guiding our decisions and inspiring our team to deliver excellence.
          </AnimatedText>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <AnimatedItem delay={0.1} className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" aria-hidden="true" />
            <div className="relative bg-white rounded-2xl p-8 lg:p-10 border border-dark-100 hover:shadow-xl hover:shadow-dark-900/10 hover:border-accent-200 transition-all duration-500 h-full">
              <div className="w-14 h-14 rounded-xl bg-accent-100 flex items-center justify-center mb-5 text-accent-600 group-hover:bg-accent-500 group-hover:text-white transition-all duration-500">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="heading-4 mb-3">{vision.title}</h3>
              <p className="body-md text-dark-600">{vision.description}</p>
            </div>
          </AnimatedItem>

          <AnimatedItem delay={0.2} className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" aria-hidden="true" />
            <div className="relative bg-white rounded-2xl p-8 lg:p-10 border border-dark-100 hover:shadow-xl hover:shadow-dark-900/10 hover:border-primary-200 transition-all duration-500 h-full">
              <div className="w-14 h-14 rounded-xl bg-primary-100 flex items-center justify-center mb-5 text-primary-700 group-hover:bg-primary-700 group-hover:text-white transition-all duration-500">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="heading-4 mb-3">{mission.title}</h3>
              <p className="body-md text-dark-600">{mission.description}</p>
            </div>
          </AnimatedItem>
        </div>
      </div>
    </AnimatedSection>
  );
}


