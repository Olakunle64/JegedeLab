'use client';

import { motion } from 'framer-motion';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { loadContactConfig } from '@/data/loaders';

export default function Contact() {
  const [contactEmbedUrl, setContactEmbedUrl] = useState('');

  useEffect(() => {
    loadContactConfig()
      .then((config) => setContactEmbedUrl(config.googleFormEmbedUrl))
      .catch(() => setContactEmbedUrl(''));
  }, []);

  const embedSrc = process.env.NEXT_PUBLIC_CONTACT_FORM_EMBED_URL?.trim() || contactEmbedUrl.trim() || '';

  return (
    <>
      <Head>
        <title>Contact | Jegede Lab</title>
        <meta name="description" content="Get in touch with the Jegede Lab. Join our research team or learn more about our work." />
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
              Join Our Lab / Get in Touch
            </h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We are always looking for motivated students and researchers interested in environmental toxicology,
              soil ecology, and one-health research. Whether you&apos;re interested in joining our lab, collaborating,
              or learning more about our work, we&apos;d love to hear from you.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-2xl font-bold text-ucd-navy mb-6">
                Send us a Message
              </h2>

              {embedSrc ? (
                <div className="rounded-lg overflow-hidden border border-gray-200 shadow-md bg-gray-50">
                  <iframe
                    src={embedSrc}
                    width="100%"
                    height={1720}
                    className="block w-full min-h-[720px] border-0"
                    title="Contact the Jegede Lab"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              ) : (
                <div className="rounded-lg border border-dashed border-gray-300 bg-gray-50 p-8 text-center text-gray-700">
                  <p className="mb-4">
                    Add your Google Form embed URL to{' '}
                    <code className="text-sm bg-white px-2 py-0.5 rounded border border-gray-200">
                      public/data/contact.csv
                    </code>{' '}
                    as key <code className="text-sm bg-white px-2 py-0.5 rounded border border-gray-200">googleFormEmbedUrl</code>, or set{' '}
                    <code className="text-sm bg-white px-2 py-0.5 rounded border border-gray-200">
                      NEXT_PUBLIC_CONTACT_FORM_EMBED_URL
                    </code>{' '}
                    in your hosting environment.
                  </p>
                  <p>
                    In Google Forms: <strong>Send</strong> → <strong>&lt;&gt; Embed HTML</strong> → copy the{' '}
                    <code className="text-sm">src</code> URL (it should end with <code className="text-sm">embedded=true</code>).
                  </p>
                  <p className="mt-6">
                    <a
                      href="mailto:ojegede@ucdavis.edu"
                      className="font-semibold text-ucd-navy hover:text-ucd-gold transition-colors"
                    >
                      ojegede@ucdavis.edu
                    </a>
                  </p>
                </div>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-2xl font-bold text-ucd-navy mb-6">
                Contact Information
              </h2>

              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-ucd-navy mb-2">Department</h3>
                    <p className="text-gray-700">
                      Department of Molecular Biosciences (Primary)
                      <br />
                      Weil School of Veterinary Medicine
                      <br />
                      Department of Environmental Toxicology (Secondary)
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-ucd-navy mb-2">Address</h3>
                    <p className="text-gray-700">
                      <strong>Primary Office:</strong><br />
                      1089 Veterinary Medicine Drive<br />
                      Davis, CA 95616
                      <br />
                      <br />
                      <strong>Secondary Office:</strong><br />
                      4138 Meyer Hall<br />
                      One Shields Avenue<br />
                      Davis, CA 95616
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-ucd-navy mb-2">Contact</h3>
                    <p className="text-gray-700">
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
              </div>

              <div className="rounded-lg overflow-hidden shadow-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3120.1234567890123!2d-121.7528496846789!3d38.53822097963567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085299c6c8d4b9f%3A0x3b51af36cdb0e5f5!2sMeyer%20Hall%2C%20Davis%2C%20CA%2095616!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="UC Davis Location"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
