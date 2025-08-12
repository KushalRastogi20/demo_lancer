// app/components/ContactSection.js
'use client';

import { useEffect, useRef, useState } from 'react';
import * as anime from 'animejs'; from 'animejs';

export default function ContactSection({ config }) {
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            
            anime.timeline()
              .add({
                targets: '.contact-title',
                opacity: [0, 1],
                translateY: [30, 0],
                duration: 800,
                easing: 'easeOutQuart'
              })
              .add({
                targets: '.form-field',
                opacity: [0, 1],
                translateY: [30, 0],
                duration: 600,
                delay: anime.stagger(100),
                easing: 'easeOutQuart'
              }, '-=400')
              .add({
                targets: '.contact-map',
                opacity: [0, 1],
                scale: [0.95, 1],
                duration: 800,
                easing: 'easeOutQuart'
              }, '-=600');
            
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="contact-title opacity-0 text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {config.contact.title}
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="form-field opacity-0">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  required
                />
              </div>
              
              <div className="form-field opacity-0">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  required
                />
              </div>
              
              <div className="form-field opacity-0">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  required
                ></textarea>
              </div>
              
              <div className="form-field opacity-0">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:scale-105 transition-all duration-300 will-change-transform"
                >
                  Send Message
                </button>
              </div>
            </form>

            {/* Contact Info */}
            <div className="mt-8 space-y-4">
              <div className="form-field opacity-0 flex items-center space-x-3">
                <span className="text-blue-600">📍</span>
                <span className="text-gray-700">{config.contact.address}</span>
              </div>
              <div className="form-field opacity-0 flex items-center space-x-3">
                <span className="text-blue-600">📞</span>
                <span className="text-gray-700">{config.contact.phone}</span>
              </div>
              <div className="form-field opacity-0 flex items-center space-x-3">
                <span className="text-blue-600">✉️</span>
                <span className="text-gray-700">{config.contact.email}</span>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="contact-map opacity-0">
            <iframe
              src={config.contact.mapEmbed}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg shadow-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
