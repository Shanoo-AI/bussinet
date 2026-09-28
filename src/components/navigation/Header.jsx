'use client';

import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { mainNavigation, headerUtility } from '@/data/navigation';
import { Logo } from '@/components/common/Logo';
import { SocialLinks } from '@/components/common/SocialIcons';
import { useIsMobile } from '@/hooks/useMediaQuery';

function MobileDropdown({ item, index }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-dark-100 pb-4 last:border-0 last:pb-0">
      <button
        type="button"
        className="flex items-center justify-between w-full text-left text-base font-medium text-dark-900"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={`mobile-dropdown-${index}`}
      >
        {item.label}
        <svg
          className={`w-5 h-5 text-dark-500 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            id={`mobile-dropdown-${index}`}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-3 space-y-2 pl-4 border-l-2 border-primary-100"
            role="menu"
          >
            {item.dropdownItems.map((dropdownItem) => (
              <li key={dropdownItem.label}>
                <Link
                  to={dropdownItem.href}
                  className="block py-2 text-sm text-dark-600 hover:text-primary-700 transition-colors"
                  role="menuitem"
                >
                  {dropdownItem.label}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();
  const headerRef = useRef(null);
  const prevPathnameRef = useRef(location.pathname);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (prevPathnameRef.current !== location.pathname) {
      prevPathnameRef.current = location.pathname;
      if (mobileMenuOpen) setMobileMenuOpen(false);
      if (openDropdown !== null) setOpenDropdown(null);
    }
  }, [location.pathname, mobileMenuOpen, openDropdown]);

  const handleDropdownClick = (index) => {
    if (isMobile) {
      setOpenDropdown(openDropdown === index ? null : index);
    }
  };

  const handleDropdownKeyDown = (event, index) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleDropdownClick(index);
    }
  };

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-sm border-b border-dark-200'
          : 'bg-transparent'
      }`}
      role="banner"
    >
      <div className="sr-only">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary-700 focus:text-white focus:rounded-lg focus:font-medium">
          {headerUtility.skipToContent}
        </a>
      </div>

      <div className="hidden lg:flex items-center justify-between px-6 py-2 bg-dark-900 text-dark-100 text-sm border-b border-dark-800">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-accent-500" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5 14.5 7.62 14.5 9 13.38 11.5 12 11.5z"/>
            </svg>
            <span>{headerUtility.location}</span>
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-accent-500" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
            <a href={`mailto:${headerUtility.email}`} className="hover:text-accent-500 transition-colors">{headerUtility.email}</a>
          </span>
        </div>
        <SocialLinks links={headerUtility.socialLinks} size="sm" />
      </div>

      <nav className={`relative px-4 lg:px-6 py-4 ${isScrolled ? 'bg-white' : 'bg-transparent'}`} aria-label="Main navigation">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex-shrink-0" aria-label="Bussinet International - Home">
            <Logo width={160} height={50} />
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {mainNavigation.map((item, index) => {
              if (item.hasDropdown) {
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(index)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button
                      type="button"
                      className={`flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-primary-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 rounded ${openDropdown === index ? 'text-primary-700' : ''}`}
                      aria-haspopup="true"
                      aria-expanded={openDropdown === index}
                      aria-label={`${item.label} menu`}
                      onClick={() => handleDropdownClick(index)}
                      onKeyDown={(e) => handleDropdownKeyDown(e, index)}
                    >
                      {item.label}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    <AnimatePresence>
                      {openDropdown === index && (
                        <motion.div
                          initial={{ opacity: 0, y: -10, scaleY: 0.95 }}
                          animate={{ opacity: 1, y: 0, scaleY: 1 }}
                          exit={{ opacity: 0, y: -10, scaleY: 0.95 }}
                          transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                          className="absolute top-full left-0 mt-2 w-64 rounded-lg bg-white border border-dark-200 shadow-lg py-2 z-50"
                          role="menu"
                        >
                          {item.dropdownItems.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.label}
                              to={dropdownItem.href}
                              className="block px-4 py-2.5 text-sm text-dark-700 hover:bg-primary-50 hover:text-primary-700 transition-colors"
                              role="menuitem"
                            >
                              {dropdownItem.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }
              return (
                <Link
                  key={item.label}
                  to={item.href}
                  className="text-sm font-medium transition-colors hover:text-primary-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 rounded"
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <Link
              to={headerUtility.cta.href}
              className="btn-primary text-sm px-6 py-2.5"
            >
              {headerUtility.cta.label}
            </Link>
          </div>

          <button
            type="button"
            className="lg:hidden p-2 rounded-lg text-dark-600 hover:bg-dark-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden bg-white border-t border-dark-200"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <div className="px-4 py-4 space-y-4">
              {mainNavigation.map((item, index) => {
                if (item.hasDropdown) {
                  return <MobileDropdown key={item.label} item={item} index={index} />;
                }
                return (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="block py-2 text-base font-medium text-dark-900 hover:text-primary-700 transition-colors"
                  >
                    {item.label}
                  </Link>
                );
              })}
              <div className="pt-4 border-t border-dark-100">
                <Link
                  to={headerUtility.cta.href}
                  className="btn-primary w-full justify-center"
                >
                  {headerUtility.cta.label}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}