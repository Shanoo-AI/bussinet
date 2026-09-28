import { Link } from 'react-router-dom';
import { cn } from '@/utils/cn';
import { AnimatedItem } from '../animations/AnimatedSection';

export function ServiceCard({
  service,
  variant = 'default',
  className,
  index = 0,
}) {
  const variants = {
    default: 'service-card group',
    featured: 'service-card service-card--featured group',
    compact: 'service-card service-card--compact group',
  };

  return (
    <AnimatedItem index={index} className={cn(variants[variant], className)}>
      <Link
        to={service.slug ? `/services/${service.slug}` : '/services'}
        className="service-card__link"
      >
        <div className="service-card__image-wrap">
          <img
            src={service.image}
            alt=""
            className="service-card__image"
            loading={index < 3 ? 'eager' : 'lazy'}
          />
          <span className="service-card__number">{String(index + 1).padStart(2, '0')}</span>
          <span className="service-card__arrow" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M7 17 17 7M7 7h10v10" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
        <div className="service-card__content">
          <h3 className="service-card__title">{service.title}</h3>
          <p className="service-card__description">{service.shortDescription}</p>
          <span className="service-card__learn">
            Explore service
            <span aria-hidden="true">↗</span>
          </span>
        </div>
      </Link>
    </AnimatedItem>
  );
}

export function ServiceGrid({ services, className }) {
  return (
    <div className={cn('grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8', className)}>
      {services.map((service, index) => (
        <ServiceCard key={service.id} service={service} index={index} />
      ))}
    </div>
  );
}

export function FeatureCard({
  icon,
  title,
  description,
  className,
  index = 0,
}) {
  return (
    <AnimatedItem index={index} className={cn('bg-white rounded-2xl border border-dark-100 p-6 lg:p-8 hover:shadow-xl hover:shadow-dark-900/10 hover:-translate-y-1 transition-all duration-500', className)}>
      <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center mb-4 text-primary-700">
        {icon}
      </div>
      <h4 className="heading-4 mb-2">{title}</h4>
      <p className="body-sm text-dark-600">{description}</p>
    </AnimatedItem>
  );
}

export function StatsCard({
  value,
  label,
  icon,
  className,
  index = 0,
}) {
  return (
    <AnimatedItem index={index} className={cn('text-center p-6 lg:p-8', className)}>
      {icon && (
        <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary-100 flex items-center justify-center text-primary-700">
          {icon}
        </div>
      )}
      <div className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-dark-900 mb-2">{value}</div>
      <div className="text-lg text-dark-600 font-medium">{label}</div>
    </AnimatedItem>
  );
}
