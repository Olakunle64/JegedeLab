'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface GalleryItem {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
}

interface BackgroundSlideshowProps {
  items: GalleryItem[];
  interval?: number; // Time in milliseconds between slides (default: 5000)
}

const BackgroundSlideshow = ({ items, interval = 5000 }: BackgroundSlideshowProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (items.length === 0) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, interval);

    return () => clearInterval(timer);
  }, [items.length, interval]);

  if (items.length === 0) {
    return null;
  }

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          className="absolute inset-0 w-full h-full"
        >
          <img
            src={items[currentIndex].image}
            alt={items[currentIndex].title}
            className="w-full h-full object-cover"
            onError={(e) => {
              // Fallback if image doesn't exist
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
            }}
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-ucd-navy/80 via-ucd-navy/70 to-blue-900/80" />
        </motion.div>
      </AnimatePresence>

      {/* Slide indicators */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'w-8 bg-ucd-gold'
                : 'w-2 bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default BackgroundSlideshow;

