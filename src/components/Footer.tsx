'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ucd-navy text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/images/gallery/Logo for the Lab.png"
                alt="Jegede Lab - Agricultural Toxicology"
                width={200}
                height={70}
                className="h-16 w-auto object-contain"
              />
            </Link>
            <p className="text-gray-300 mb-4">
              Department of Environmental Toxicology<br />
              UC Davis
            </p>
            <p className="text-gray-400 text-sm">
              Exploring the ecological impacts of pollutants through soil bioindicators.
            </p>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/research" className="text-gray-300 hover:text-ucd-gold transition-colors">
                  Research
                </Link>
              </li>
              <li>
                <Link href="/publications" className="text-gray-300 hover:text-ucd-gold transition-colors">
                  Publications
                </Link>
              </li>
              <li>
                <Link href="/people" className="text-gray-300 hover:text-ucd-gold transition-colors">
                  People
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-ucd-gold transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Contact</h4>
            <p className="text-gray-300 text-sm mb-2">
              Department of Environmental Toxicology<br />
              4138 Meyer Hall<br />
              One Shields Avenue<br />
              Davis, CA 95616
            </p>
            <p className="text-gray-300 text-sm">
              <a href="mailto:ojegede@ucdavis.edu" className="hover:text-ucd-gold transition-colors">
                ojegede@ucdavis.edu
              </a>
              <br />
              <a href="tel:5307521086" className="hover:text-ucd-gold transition-colors">
                (530) 752-1086
              </a>
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Jegede Lab, UC Davis. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;






