'use client';

import { motion } from 'framer-motion';

interface PublicationCardProps {
  authors: string;
  year: number;
  title: string;
  journal: string;
  doi: string;
  volume?: string;
  pages?: string;
}

const PublicationCard = ({ authors, year, title, journal, doi, volume, pages }: PublicationCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-md p-6 border-l-4 border-ucd-gold"
    >
      <div className="flex items-start justify-between mb-3">
        <span className="text-sm font-semibold text-ucd-navy bg-ucd-gold/20 px-3 py-1 rounded">
          {year}
        </span>
        <span className="text-sm text-gray-600 italic">{journal}</span>
      </div>
      
      <h3 className="font-serif text-lg font-semibold text-ucd-navy mb-2">
        <a
          href={doi}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-ucd-gold transition-colors"
        >
          {title}
        </a>
      </h3>
      
      <p className="text-gray-700 text-sm mb-3">{authors}</p>
      
      {(volume || pages) && (
        <p className="text-gray-500 text-xs mb-3">
          {volume && `Vol. ${volume}`} {pages && `, pp. ${pages}`}
        </p>
      )}
      
      <a
        href={doi}
        target="_blank"
        rel="noopener noreferrer"
        className="text-ucd-navy text-sm font-medium hover:text-ucd-gold transition-colors inline-flex items-center"
      >
        View on Publisher
        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </a>
    </motion.div>
  );
};

export default PublicationCard;






