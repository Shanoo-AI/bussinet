import { Link } from 'react-router-dom';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { homeContent } from '@/data/content';
import { images } from '@/data/images';

export function Hero() {
  return (
    <section className="home-hero" aria-labelledby="hero-heading">
      <div className="home-hero__inner">
        <div className="home-hero__copy">
          <p className="home-hero__eyebrow">
            <span aria-hidden="true" />
            {homeContent.hero.eyebrow} Bussinet International
          </p>

          <h1 id="hero-heading" className="home-hero__title">
            {homeContent.hero.title}
          </h1>

          <p className="home-hero__description">
            {homeContent.hero.description}
          </p>

          <div className="home-hero__actions" role="group" aria-label="Main actions">
            <Link className="home-hero__primary" to={homeContent.hero.ctaPrimary.href}>
              {homeContent.hero.ctaPrimary.label}
              <ArrowUpRight aria-hidden="true" size={18} />
            </Link>
            <Link className="home-hero__secondary" to={homeContent.hero.ctaSecondary.href}>
              {homeContent.hero.ctaSecondary.label}
            </Link>
          </div>
        </div>

        <div className="home-hero__visual">
          <img
            className="home-hero__image"
            src={images.hero.background}
            alt="Rows of illuminated servers in a modern data center"
            fetchPriority="high"
          />
          <div className="home-hero__image-shade" aria-hidden="true" />
          <div className="home-hero__image-label">
            <span className="home-hero__image-label-number">01</span>
            <span>Information technology, since 2000</span>
          </div>
          <div className="home-hero__image-mark" aria-hidden="true">
            BI<span>.</span>
          </div>
        </div>
      </div>

      <div className="home-hero__foot">
        <div className="home-hero__foot-note">
          <span className="home-hero__status-dot" aria-hidden="true" />
          Serving organizations across
        </div>
        <p>Pakistan <span>·</span> USA <span>·</span> UK <span>·</span> Middle East</p>
        <a href="#who-we-are" className="home-hero__scroll">
          Scroll to explore <ArrowDown size={15} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
