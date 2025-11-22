'use client';

import { motion } from 'framer-motion';
import Head from 'next/head';
import PublicationCard from '@/components/PublicationCard';
import publicationsData from '@/data/publications.json';

export default function Publications() {
  // Sort publications by year (newest first)
  const sortedPublications = [...publicationsData].sort((a, b) => b.year - a.year);

  return (
    <>
      <Head>
        <title>Publications | Jegede Lab</title>
        <meta name="description" content="Peer-reviewed publications from the Jegede Lab on environmental toxicology and soil ecotoxicology." />
      </Head>

      <div className="pt-24 pb-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-ucd-navy mb-6">
              Publications
            </h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our research findings published in leading environmental science and toxicology journals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {sortedPublications.map((publication) => (
              <PublicationCard
                key={publication.id}
                authors={publication.authors}
                year={publication.year}
                title={publication.title}
                journal={publication.journal}
                doi={publication.doi}
                volume={publication.volume}
                pages={publication.pages}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}






