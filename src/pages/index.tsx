'use client';

import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import Hero from '@/components/Hero';
import ResearchCard from '@/components/ResearchCard';
import researchData from '@/data/research.json';
import galleryData from '@/data/gallery.json';

export default function Home() {
  // Get first 3 research areas for homepage
  const featuredResearch = researchData.slice(0, 3);

  return (
    <>
      <Head>
        <title>Jegede Lab | UC Davis Environmental Toxicology</title>
        <meta name="description" content="Exploring the ecological impacts of pollutants through soil bioindicators. Research lab of Dr. Olukayode O. Jegede, Assistant Professor of Environmental Toxicology at UC Davis." />
        <meta name="keywords" content="environmental toxicology, soil bioindicators, pollutants, UC Davis, research lab" />
      </Head>

      <Hero galleryItems={galleryData} />

      {/* Research Areas Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-4xl font-bold text-ucd-navy mb-4">
              Research Areas
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Our research focuses on understanding how environmental pollutants affect soil ecosystems and biodiversity.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredResearch.map((research) => (
              <ResearchCard
                key={research.id}
                title={research.title}
                description={research.description}
                keywords={research.keywords}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/research"
              className="inline-block text-ucd-navy font-semibold hover:text-ucd-gold transition-colors"
            >
              View All Research Areas →
            </Link>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-4xl font-bold text-ucd-navy mb-4">
              Recent Publications
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Our latest research findings published in leading environmental science journals.
            </p>
          </motion.div>

          <div className="text-center">
            <Link
              href="/publications"
              className="inline-block bg-ucd-navy text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-900 transition-colors shadow-lg"
            >
              View All Publications
            </Link>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-20 bg-ucd-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl font-bold mb-4">
              Join Our Lab
            </h2>
            <p className="text-gray-200 max-w-2xl mx-auto mb-8">
              We are always looking for motivated students and researchers interested in environmental toxicology and soil ecology.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-ucd-gold text-ucd-navy px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors shadow-lg"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}





