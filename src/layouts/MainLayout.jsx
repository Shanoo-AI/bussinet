import { useLayoutEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from '@/components/navigation/Header';
import { Footer } from '@/components/navigation/Footer';

export function MainLayout() {
  const location = useLocation();

  useLayoutEffect(() => {
    if (location.hash) {
      const targetId = decodeURIComponent(location.hash.slice(1));
      document.getElementById(targetId)?.scrollIntoView({
        block: 'start',
        behavior: 'instant',
      });
      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location.pathname, location.search, location.hash]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main id="main-content" className="flex-1 pt-32 lg:pt-28">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
