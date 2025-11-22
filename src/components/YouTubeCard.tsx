'use client';

import { motion } from 'framer-motion';

interface YouTubeCardProps {
  title: string;
  videoId: string;
  description?: string;
  thumbnail?: string;
}

const YouTubeCard = ({ title, videoId, description, thumbnail }: YouTubeCardProps) => {
  const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
  const defaultThumbnail = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg shadow-md overflow-hidden"
    >
      <div className="relative w-full h-48 bg-gray-200">
        <img
          src={thumbnail || defaultThumbnail}
          alt={title}
          className="w-full h-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="225"%3E%3Crect fill="%23ddd" width="400" height="225"/%3E%3Ctext fill="%23999" font-family="sans-serif" font-size="18" dy="10.5" font-weight="bold" x="50%25" y="50%25" text-anchor="middle"%3EVideo Thumbnail%3C/text%3E%3C/svg%3E';
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/20 transition-colors">
          <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-serif text-lg font-semibold text-ucd-navy mb-2 line-clamp-2">
          {title}
        </h3>
        
        {description && (
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {description}
          </p>
        )}
        
        <a
          href={videoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-ucd-navy font-semibold hover:text-ucd-gold transition-colors"
        >
          Watch on YouTube
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </motion.div>
  );
};

export default YouTubeCard;

