import { contactContent } from '@/data/content';
import { Button } from '@/components/ui/Button';
import { AnimatedSection, AnimatedItem } from '@/components/animations/AnimatedSection';
import { AnimatedHeading, AnimatedText } from '@/components/animations/AnimatedText';
import { PageLayout } from '@/layouts/PageLayout';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitStatus('success');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <PageLayout>
      <AnimatedSection className="bg-dark-900 text-white py-20 lg:py-28 relative overflow-hidden" id="contact-hero">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="page-eyebrow">Contact Us</p>
          <AnimatedHeading as="h1" id="contact-title" className="page-heading mb-4" delay={0.1}>
            {contactContent.hero.title}
          </AnimatedHeading>
        </div>
      </AnimatedSection>

      <AnimatedSection id="contact-info" className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            <AnimatedItem delay={0.1} className="lg:col-span-1">
              <div className="space-y-8">
                <div>
                  <AnimatedHeading as="h2" className="mb-3" delay={0.1}>
                    {contactContent.contactInfo.title}
                  </AnimatedHeading>
                  <AnimatedText as="p" className="body-lg text-dark-600" delay={0.2}>
                    {contactContent.contactInfo.subtitle}
                  </AnimatedText>
                </div>

                <div className="space-y-6">
                  <AnimatedItem index={0} delay={0.3}>
                    <div className="flex items-start gap-4 p-6 bg-dark-50 rounded-xl">
                      <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center flex-shrink-0 text-primary-700">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5 14.5 7.62 14.5 9 13.38 11.5 12 11.5z"/>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-dark-900 mb-1">Address</h3>
                        <p className="text-dark-600">{contactContent.contactInfo.address}</p>
                      </div>
                    </div>
                  </AnimatedItem>

                  <AnimatedItem index={1} delay={0.4}>
                    <div className="flex items-start gap-4 p-6 bg-dark-50 rounded-xl">
                      <div className="w-12 h-12 rounded-xl bg-accent-100 flex items-center justify-center flex-shrink-0 text-accent-600">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-dark-900 mb-1">Email</h3>
                        <a href={`mailto:${contactContent.contactInfo.email}`} className="text-dark-600 hover:text-primary-700 transition-colors">{contactContent.contactInfo.email}</a>
                      </div>
                    </div>
                  </AnimatedItem>

                  <AnimatedItem index={2} delay={0.5}>
                    <div className="flex items-start gap-4 p-6 bg-dark-50 rounded-xl">
                      <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0 text-green-700">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-dark-900 mb-1">Business Hours</h3>
                        <p className="text-dark-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                        <p className="text-dark-600">Saturday: 10:00 AM - 2:00 PM</p>
                        <p className="text-dark-600">Sunday: Closed</p>
                      </div>
                    </div>
                  </AnimatedItem>
                </div>
              </div>
            </AnimatedItem>

            <AnimatedItem delay={0.2} className="lg:col-span-2">
              <div className="bg-dark-50 rounded-2xl p-6 lg:p-8">
                <AnimatedHeading as="h2" className="mb-6" delay={0.1}>
                  Send us a Message
                </AnimatedHeading>

                {submitStatus === 'success' && (
                  <AnimatedItem>
                    <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                      <div className="flex items-center gap-3">
                        <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                        </svg>
                        <p>Thank you for your message! We'll get back to you within 24 hours.</p>
                      </div>
                    </div>
                  </AnimatedItem>
                )}

                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <AnimatedItem index={0} delay={0.2}>
                      <label htmlFor="name" className="block text-sm font-medium text-dark-700 mb-2">
                        Full Name <span className="text-red-500" aria-hidden="true">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-dark-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                        placeholder="John Doe"
                        aria-required="true"
                      />
                    </AnimatedItem>

                    <AnimatedItem index={1} delay={0.2}>
                      <label htmlFor="email" className="block text-sm font-medium text-dark-700 mb-2">
                        Email Address <span className="text-red-500" aria-hidden="true">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-dark-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                        placeholder="john@company.com"
                        aria-required="true"
                      />
                    </AnimatedItem>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <AnimatedItem index={2} delay={0.2}>
                      <label htmlFor="phone" className="block text-sm font-medium text-dark-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-dark-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                        placeholder="+92 300 1234567"
                      />
                    </AnimatedItem>

                    <AnimatedItem index={3} delay={0.2}>
                      <label htmlFor="subject" className="block text-sm font-medium text-dark-700 mb-2">
                        Subject <span className="text-red-500" aria-hidden="true">*</span>
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-dark-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all bg-white"
                        aria-required="true"
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="information-security">Information Security</option>
                        <option value="information-management">Information Management</option>
                        <option value="advisory-services">Advisory Services</option>
                        <option value="data-center">Data Center</option>
                        <option value="networking-services">Networking Services</option>
                        <option value="training-services">Training Services</option>
                        <option value="web-development">Web Development</option>
                        <option value="graphic-designing">Graphic Designing</option>
                        <option value="seo-digital-marketing">SEO & Digital Marketing</option>
                        <option value="partnership">Partnership Opportunity</option>
                        <option value="careers">Careers</option>
                        <option value="other">Other</option>
                      </select>
                    </AnimatedItem>
                  </div>

                  <AnimatedItem index={4} delay={0.2}>
                    <label htmlFor="message" className="block text-sm font-medium text-dark-700 mb-2">
                      Message <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-dark-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                      placeholder="Tell us about your project or inquiry..."
                      aria-required="true"
                    />
                  </AnimatedItem>

                  <AnimatedItem index={5} delay={0.3}>
                    <Button type="submit" variant="primary" size="lg" fullWidth loading={isSubmitting}>
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </AnimatedItem>
                </form>
              </div>
            </AnimatedItem>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="map-section" className="bg-dark-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <AnimatedHeading as="h2" className="mb-4" delay={0.1}>
              Visit Our Office
            </AnimatedHeading>
            <AnimatedText as="p" className="body-lg text-dark-600" delay={0.2}>
              We'd love to meet you in person. Our office is located in the heart of Rawalpindi.
            </AnimatedText>
          </div>

          <AnimatedItem delay={0.2}>
            <div className="aspect-video rounded-2xl overflow-hidden bg-dark-200 relative">
              <div className="absolute inset-0 flex items-center justify-center text-dark-400">
                <div className="text-center p-8">
                  <svg className="w-16 h-16 mx-auto mb-4 text-dark-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="text-lg font-medium text-dark-600">Interactive Map</p>
                  <p className="text-sm text-dark-500 mt-1">{contactContent.contactInfo.address}</p>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-primary-700 hover:text-primary-800 font-medium"
                  >
                    Open in Google Maps
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </AnimatedItem>
        </div>
      </AnimatedSection>
    </PageLayout>
  );
}
