'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface MemberCardProps {
  name: string;
  role: string;
  photo: string;
  researchFocus?: string;
  email?: string;
  currentPosition?: string;
  bio?: string;
}

const MemberCard = ({ name, role, photo, researchFocus, email, currentPosition, bio }: MemberCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg shadow-md p-6 text-center relative overflow-hidden"
    >
      <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gray-200 overflow-hidden">
        <img
          src={photo}
          alt={name}
          className="w-full h-full object-cover"
          onError={(e) => {
            // Fallback to placeholder if image fails to load
            (e.target as HTMLImageElement).src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="128" height="128"%3E%3Crect fill="%23ddd" width="128" height="128"/%3E%3Ctext fill="%23999" font-family="sans-serif" font-size="14" dy="10.5" font-weight="bold" x="50%25" y="50%25" text-anchor="middle"%3EPhoto%3C/text%3E%3C/svg%3E';
          }}
        />
      </div>
      
      <h3 className="font-serif text-xl font-bold text-ucd-navy mb-1">
        {name}
      </h3>
      
      <p className="text-ucd-gold font-semibold mb-2">{role}</p>
      
      {currentPosition && (
        <p className="text-gray-600 text-sm mb-3 italic">{currentPosition}</p>
      )}
      
      {researchFocus && (
        <p className="text-gray-700 text-sm mb-3">{researchFocus}</p>
      )}
      
      {email && (
        <a
          href={`mailto:${email}`}
          className="text-ucd-navy text-sm hover:text-ucd-gold transition-colors block mb-3"
        >
          {email}
        </a>
      )}

      {/* Expandable Bio Section */}
      {bio && (
        <div className="mt-4">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center justify-center gap-2 mx-auto px-4 py-2 rounded-full text-sm font-medium text-ucd-navy hover:text-ucd-gold hover:bg-gray-50 transition-all duration-200 group"
            aria-label={isExpanded ? 'Collapse bio' : 'Expand bio'}
          >
            <span>{isExpanded ? 'Less' : 'More'} Info</span>
            <motion.div
              animate={{ rotate: isExpanded ? 45 : 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="w-5 h-5 flex items-center justify-center rounded-full bg-ucd-navy/10 group-hover:bg-ucd-gold/20 transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </motion.div>
          </button>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <motion.div
                  initial={{ y: -10 }}
                  animate={{ y: 0 }}
                  exit={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 pt-4 border-t border-gray-200"
                >
                  <p className="text-gray-700 text-sm leading-relaxed text-left">
                    {bio}
                  </p>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </motion.div>
  );
};

export default MemberCard;

