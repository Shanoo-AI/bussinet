import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { preloadCriticalImages } from './data/images'
import './styles/globals.css'
import App from './App.jsx'

// Preload critical images and fonts after DOM is ready
if (typeof window !== 'undefined') {
  const initPreload = () => {
    preloadCriticalImages();
    
    // Preload fonts
    const fontLinks = [
      { href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap', rel: 'preload', as: 'style' },
      { href: 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap', rel: 'preload', as: 'style' },
    ];
    
    fontLinks.forEach(({ href, rel, as }) => {
      const link = document.createElement('link');
      link.href = href;
      link.rel = rel;
      link.as = as;
      document.head.appendChild(link);
    });
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPreload);
  } else {
    initPreload();
  }
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)