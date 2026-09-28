import { Link } from 'react-router-dom';
import { footerContent } from '@/data/content';
import { Logo } from '@/components/common/Logo';
import { SocialLinks } from '@/components/common/SocialIcons';
import { AnimatedSection, AnimatedItem } from '@/components/animations/AnimatedSection';

export function Footer() {
  return (
    <footer className="bg-dark-900 text-dark-100" role="contentinfo">
      <AnimatedSection className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12">
            <AnimatedItem className="lg:col-span-2" delay={0.1}>
              <Link to="/" className="block mb-6" aria-label="Bussinet International - Home">
                <Logo width={200} height={65} />
              </Link>
              <p className="text-dark-400 text-base leading-relaxed mb-6 max-w-xs">
                {footerContent.company.description}
              </p>
              <div className="space-y-3 text-dark-400 text-sm">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-accent-500 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5 14.5 7.62 14.5 9 13.38 11.5 12 11.5z"/>
                  </svg>
                  <span>{footerContent.company.address}</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-accent-500 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  <a href={`mailto:${footerContent.company.email}`} className="hover:text-accent-500 transition-colors">{footerContent.company.email}</a>
                </div>
              </div>
              <SocialLinks links={footerContent.socialLinks} size="md" className="mt-6" />
            </AnimatedItem>

            <AnimatedItem delay={0.2}>
              <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
              <nav aria-label="Quick links">
                <ul className="space-y-3">
                  {footerContent.quickLinks.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.href}
                        className="text-dark-400 hover:text-accent-500 transition-colors text-sm"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </AnimatedItem>

            <AnimatedItem delay={0.3}>
              <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
              <nav aria-label="Services">
                <ul className="space-y-3">
                  {footerContent.services.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.href}
                        className="text-dark-400 hover:text-accent-500 transition-colors text-sm"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </AnimatedItem>

            <AnimatedItem delay={0.4}>
              <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
              <address className="not-italic text-dark-400 text-sm space-y-3">
                <p>{footerContent.company.address}</p>
                <a href={`mailto:${footerContent.company.email}`} className="hover:text-accent-500 transition-colors block">{footerContent.company.email}</a>
              </address>
            </AnimatedItem>
          </div>
        </div>
      </AnimatedSection>

      <div className="border-t border-dark-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-dark-500 text-sm">{footerContent.copyright}</p>
            <div className="flex items-center gap-6">
              <Link to="/privacy-policy" className="text-dark-500 hover:text-accent-500 transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-dark-500 hover:text-accent-500 transition-colors text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
