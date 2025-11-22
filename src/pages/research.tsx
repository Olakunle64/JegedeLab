'use client';

import { motion } from 'framer-motion';
import Head from 'next/head';
import ResearchCard from '@/components/ResearchCard';
import researchData from '@/data/research.json';

export default function Research() {
  return (
    <>
      <Head>
        <title>Research | Jegede Lab</title>
        <meta name="description" content="Research areas and projects in the Jegede Lab focusing on pollutants, soil bioindicators, and one-health approaches." />
      </Head>

      <div className="pt-24 pb-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-ucd-navy mb-6">
              Research
            </h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Dr. Jegede&apos;s research focuses on understanding the ecological impacts of environmental pollutants 
              through the study of soil-based invertebrates. Our work encompasses pesticides (neonicotinoids, rodenticides), 
              heavy metals, per- and polyfluoroalkyl substances (PFAS), microplastics, and other emerging contaminants. 
              We employ soil bioindicators to assess ecosystem health and develop risk assessment frameworks for 
              environmental protection.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {researchData.map((research) => (
              <ResearchCard
                key={research.id}
                title={research.title}
                description={research.description}
                keywords={research.keywords}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}






