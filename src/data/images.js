// Image references used throughout the website.

export const images = {
  // Use a remote, high-resolution infrastructure image for the homepage feature.
  hero: {
    background: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1600&q=85&auto=format&fit=crop',
    backgroundMobile: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&q=80&auto=format&fit=crop',
  },

  // Service images - each tailored to the specific service
  services: {
    'information-security': 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80&auto=format&fit=crop',
    'information-management': 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80&auto=format&fit=crop',
    'advisory-services': 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80&auto=format&fit=crop',
    'data-center': '/images/hero/infrastructure.webp',
    'networking-services': 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80&auto=format&fit=crop',
    'training-services': 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80&auto=format&fit=crop',
    'web-development': 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80&auto=format&fit=crop',
    'graphic-designing': 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80&auto=format&fit=crop',
    'seo-and-digital-marketing': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80&auto=format&fit=crop',
  },

  // About page images
  about: {
    team: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80&auto=format&fit=crop',
    office: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80&auto=format&fit=crop',
    mission: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80&auto=format&fit=crop',
  },

  // Contact page
  contact: {
    office: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80&auto=format&fit=crop',
  },

  // Fallback placeholder
  placeholder: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&q=80&auto=format&fit=crop',

  // Logo
  logo: {
    light: '/images/logo/bussinet-mark.png',
    dark: '/images/logo/bussinet-mark.png',
  },
};

// Helper function to get service image with fallback
export const getServiceImage = (slug) => {
  return images.services[slug] || images.placeholder;
};

// Helper function to get responsive image URLs
export const getResponsiveImageUrl = (url, width) => {
  if (!url.includes('unsplash.com')) return url;
  const baseUrl = url.split('?')[0];
  return `${baseUrl}?w=${width}&q=80&auto=format&fit=crop`;
};

// Preload critical images
export const preloadCriticalImages = () => {
  const criticalImages = [
    images.hero.background,
    images.services['information-security'],
    images.services['web-development'],
    images.services['graphic-designing'],
  ];
  
  criticalImages.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  });
};

export default images;