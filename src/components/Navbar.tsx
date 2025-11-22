'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isMenuOpen]);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/people', label: 'People' },
    { href: '/research', label: 'Research' },
    { href: '/publications', label: 'Publications' },
    { href: '/youtube', label: 'Media' },
    { href: '/contact', label: 'Contact' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-ucd-navy shadow-lg' : 'bg-ucd-navy/95 backdrop-blur-sm'
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link 
              href="/" 
              className="flex items-center hover:opacity-80 transition-opacity"
              onClick={closeMenu}
            >
              <Image
                src="/images/gallery/Logo for the Lab.png"
                alt="Jegede Lab - Agricultural Toxicology"
                width={180}
                height={60}
                className="h-12 w-auto object-contain"
                priority
              />
            </Link>
            
            {/* Desktop menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white hover:text-ucd-gold transition-colors font-medium"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-white hover:text-ucd-gold transition-colors p-2 -mr-2 relative z-[100]"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
            >
              <div className="w-6 h-6 relative">
                <motion.span
                  className="absolute top-0 left-0 w-6 h-0.5 bg-current block"
                  animate={{
                    rotate: isMenuOpen ? 45 : 0,
                    y: isMenuOpen ? 8 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="absolute top-2.5 left-0 w-6 h-0.5 bg-current block"
                  animate={{
                    opacity: isMenuOpen ? 0 : 1,
                  }}
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  className="absolute top-5 left-0 w-6 h-0.5 bg-current block"
                  animate={{
                    rotate: isMenuOpen ? -45 : 0,
                    y: isMenuOpen ? -8 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu - rendered outside nav for proper z-index stacking */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] md:hidden"
              onClick={closeMenu}
            />
            
            {/* Menu panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
              className="fixed top-0 right-0 h-full w-64 max-w-[80vw] bg-ucd-navy shadow-2xl z-[70] md:hidden overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col pt-20 px-6 pb-6">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    <Link
                      href={link.href}
                      onClick={closeMenu}
                      className="block py-4 text-white hover:text-ucd-gold transition-colors font-medium text-lg border-b border-white/10"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;





