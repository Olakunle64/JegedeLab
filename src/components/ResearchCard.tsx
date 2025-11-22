'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface ResearchCardProps {
  title: string;
  description: string;
  keywords?: string[];
  href?: string;
}

const ResearchCard = ({ title, description, keywords, href = '/research' }: ResearchCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg shadow-md p-6 h-full flex flex-col"
    >
      <h3 className="font-serif text-xl font-bold text-ucd-navy mb-3">
        {title}
      </h3>
      <p className="text-gray-700 mb-4 flex-grow">
        {description}
      </p>
      {keywords && keywords.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {keywords.map((keyword, index) => (
            <span
              key={index}
              className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
            >
              {keyword}
            </span>
          ))}
        </div>
      )}
      <Link
        href={href}
        className="text-ucd-navy font-semibold hover:text-ucd-gold transition-colors inline-flex items-center"
      >
        Learn More
        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </motion.div>
  );
};

export default ResearchCard;






