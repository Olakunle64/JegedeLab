'use client';

import { motion } from 'framer-motion';
import Head from 'next/head';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submission:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-2xl font-bold text-ucd-navy mb-6">
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ucd-gold focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ucd-gold focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ucd-gold focus:border-transparent"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-ucd-navy text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-900 transition-colors shadow-lg"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
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
                      Department of Environmental Toxicology
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-ucd-navy mb-2">Address</h3>
                    <p className="text-gray-700">
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

              {/* Map */}
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






