'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface GalleryItem {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
}

interface GalleryProps {
  items: GalleryItem[];
  maxItems?: number;
}

const Gallery = ({ items, maxItems }: GalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const displayItems = maxItems ? items.slice(0, maxItems) : items;

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {displayItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md"
            onClick={() => setSelectedImage(item)}
          >
            <div className="relative w-full h-64 bg-gray-200 overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                onError={(e) => {
                  // Fallback if image doesn't exist
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent && !parent.querySelector('.fallback-placeholder')) {
                    const placeholder = document.createElement('div');
                    placeholder.className = 'fallback-placeholder w-full h-full flex items-center justify-center bg-gray-200 text-gray-400';
                    placeholder.innerHTML = `
                      <svg class="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    `;
                    parent.appendChild(placeholder);
                  }
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <p className="text-xs font-semibold text-ucd-gold mb-1">{item.category}</p>
                  <h3 className="font-serif font-semibold text-sm">{item.title}</h3>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal for image viewing */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-ucd-gold transition-colors z-10"
              aria-label="Close"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="bg-white rounded-lg overflow-hidden">
              <div className="relative w-full h-96 bg-gray-200 flex items-center justify-center">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="max-w-full max-h-full object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              </div>
              <div className="p-6">
                <p className="text-sm font-semibold text-ucd-gold mb-2">{selectedImage.category}</p>
                <h3 className="font-serif text-2xl font-bold text-ucd-navy mb-3">{selectedImage.title}</h3>
                <p className="text-gray-700">{selectedImage.description}</p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default Gallery;

