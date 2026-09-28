import { Link } from 'react-router-dom';
import { homeContent } from '@/data/content';
import { Button } from '@/components/ui/Button';
import { AnimatedHeading, AnimatedText, AnimatedLines } from '@/components/animations/AnimatedText';
import { AnimatedSection, AnimatedItem } from '@/components/animations/AnimatedSection';
import { OptimizedImage } from '@/components/ui/OptimizedImage';
import { images } from '@/data/images';

export function WhoWeAre() {
  return (
    <AnimatedSection id="who-we-are" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <AnimatedItem className="order-2 lg:order-1">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-dark-100 group">
              <OptimizedImage
                src={images.about.team}
                alt="Bussinet International team working together"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                priority={true}
                placeholder="skeleton"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-700/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true" />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-dark-900/90 to-transparent">
                <p className="text-white text-sm font-medium">Over 24 years of excellence</p>
              </div>
            </div>
          </AnimatedItem>

          <AnimatedItem delay={0.2} className="order-1 lg:order-2">
            <div className="pr-4 lg:pr-12">
              <AnimatedHeading
                as="h2"
                id="who-we-are-heading"
                className="mb-4"
                delay={0.1}
                stagger={0.03}
              >
                {homeContent.whoWeAre.title}
              </AnimatedHeading>

              <AnimatedText
                as="p"
                className="body-lg text-dark-600 mb-6"
                delay={0.2}
                stagger={0.02}
              >
                {homeContent.whoWeAre.description}
              </AnimatedText>

              <AnimatedLines
                lines={[
                  'Founded in 2000 with a vision for technological excellence',
                  'Serving diverse industries: finance, healthcare, education, retail',
                  'Expertise in Information Security, Networking, Infrastructure & Advisory',
                  'Long-lasting partnerships with businesses of all sizes',
                ]}
                className="space-y-3 text-dark-600 mb-8"
                delay={0.3}
                stagger={0.08}
              />

              <Button asChild variant="secondary" size="lg">
                <Link to={homeContent.whoWeAre.cta.href}>
                  {homeContent.whoWeAre.cta.label}
                </Link>
              </Button>
            </div>
          </AnimatedItem>
        </div>
      </div>
    </AnimatedSection>
  );
}


