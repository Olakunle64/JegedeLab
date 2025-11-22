'use client';

import { motion } from 'framer-motion';
import Head from 'next/head';
import YouTubeCard from '@/components/YouTubeCard';
import NewsCard from '@/components/NewsCard';
import youtubeData from '@/data/youtube.json';
import newsData from '@/data/news.json';

export default function YouTube() {
  return (
    <>
      <Head>
        <title>Media & News | Jegede Lab</title>
        <meta name="description" content="Science communication videos and news coverage featuring Dr. Jegede on environmental toxicology research." />
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
              Media & News
            </h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Science communication videos, educational content, and news coverage related to our research on environmental toxicology.
            </p>
          </motion.div>

          {/* YouTube Videos Section */}
          {youtubeData.length > 0 && (
            <section className="mb-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <h2 className="font-serif text-3xl font-bold text-ucd-navy mb-4">
                  YouTube Videos
                </h2>
                <p className="text-gray-700">
                  Science communication videos and educational content from our lab.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {youtubeData.map((video) => (
                  <YouTubeCard
                    key={video.id}
                    title={video.title}
                    videoId={video.videoId}
                    description={video.description}
                    thumbnail={video.thumbnail}
                  />
                ))}
              </div>
            </section>
          )}

          {/* News Articles Section */}
          {newsData.length > 0 && (
            <section>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <h2 className="font-serif text-3xl font-bold text-ucd-navy mb-4">
                  News Coverage
                </h2>
                <p className="text-gray-700">
                  News articles and media coverage featuring our research and expertise.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                {newsData.map((article) => (
                  <NewsCard
                    key={article.id}
                    title={article.title}
                    source={article.source}
                    url={article.url}
                    date={article.date}
                    description={article.description}
                  />
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </>
  );
}





