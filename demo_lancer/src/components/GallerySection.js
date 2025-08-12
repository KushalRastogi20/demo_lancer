// app/components/GallerySection.js
'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import * as anime from 'animejs'; from 'animejs';

export default function GallerySection({ config }) {
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            
            anime.timeline()
              .add({
                targets: '.gallery-title',
                opacity: [0, 1],
                translateY: [30, 0],
                duration: 800,
                easing: 'easeOutQuart'
              })
              .add({
                targets: '.gallery-item',
                opacity: [0, 1],
                scale: [0.9, 1],
                duration: 600,
                delay: anime.stagger(100),
                easing: 'easeOutQuart'
              }, '-=400');
            
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

  return (
    <section id="gallery" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="gallery-title opacity-0 text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {config.gallery.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {config.gallery.images.map((image, index) => (
            <div
              key={index}
              className="gallery-item opacity-0 group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Image
                src={image}
                alt={`Gallery image ${index + 1}`}
                width={400}
                height={300}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500 will-change-transform"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
