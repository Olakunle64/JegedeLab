'use client';

import { motion } from 'framer-motion';

interface NewsCardProps {
  title: string;
  source: string;
  url: string;
  date?: string;
  description?: string;
}

const NewsCard = ({ title, source, url, date, description }: NewsCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg shadow-md p-6 border-l-4 border-ucd-gold"
    >
      <div className="flex items-start justify-between mb-3">
        <span className="text-xs font-semibold text-ucd-navy bg-ucd-gold/20 px-3 py-1 rounded">
          {source}
        </span>
        {date && (
          <span className="text-sm text-gray-600">{date}</span>
        )}
      </div>
      
      <h3 className="font-serif text-lg font-semibold text-ucd-navy mb-2">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-ucd-gold transition-colors"
        >
          {title}
        </a>
      </h3>
      
      {description && (
        <p className="text-gray-700 text-sm mb-4 line-clamp-3">
          {description}
        </p>
      )}
      
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-ucd-navy text-sm font-medium hover:text-ucd-gold transition-colors inline-flex items-center"
      >
        Read Article
        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </a>
    </motion.div>
  );
};

export default NewsCard;

