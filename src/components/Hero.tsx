'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import BackgroundSlideshow from './BackgroundSlideshow';

interface HeroProps {
  galleryItems?: Array<{
    id: number;
    title: string;
    description: string;
    image: string;
    category: string;
  }>;
}

const Hero = ({ galleryItems = [] }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-white pt-20 sm:pt-24 overflow-hidden">
      {/* Background Slideshow */}
      {galleryItems.length > 0 && (
        <BackgroundSlideshow items={galleryItems} interval={5000} />
      )}
      
      {/* Fallback gradient background if no gallery items */}
      {galleryItems.length === 0 && (
        <div className="absolute inset-0 bg-gradient-to-br from-ucd-navy via-ucd-navy to-blue-900" />
      )}

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            Jegede Lab
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-gray-200">
            UC Davis Environmental Toxicology
          </p>
          <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Exploring the ecological impacts of pollutants through soil bioindicators.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/research"
              className="inline-block bg-ucd-gold text-ucd-navy px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors shadow-lg"
            >
              Learn More
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;






