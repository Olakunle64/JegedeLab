'use client';

import { motion } from 'framer-motion';
import Head from 'next/head';
import MemberCard from '@/components/MemberCard';
import peopleData from '@/data/people.json';

export default function People() {
  return (
    <>
      <Head>
        <title>People | Jegede Lab</title>
        <meta name="description" content="Meet the team: Principal Investigator, graduate students, and alumni of the Jegede Lab at UC Davis." />
      </Head>

      <div className="pt-24 pb-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Principal Investigator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h1 className="font-serif text-4xl font-bold text-ucd-navy mb-8 text-center">
              Principal Investigator
            </h1>
            
            <div className="max-w-4xl mx-auto bg-gray-50 rounded-lg p-8 shadow-md">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="w-64 h-64 mx-auto md:mx-0 rounded-full bg-gray-200 overflow-hidden relative">
                  <img
                    src={peopleData.pi.photo}
                    alt={peopleData.pi.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="256" height="256"%3E%3Crect fill="%23ddd" width="256" height="256"/%3E%3Ctext fill="%23999" font-family="sans-serif" font-size="18" dy="10.5" font-weight="bold" x="50%25" y="50%25" text-anchor="middle"%3EPI%3C/text%3E%3C/svg%3E';
                    }}
                  />
                </div>
                
                <div>
                  <h2 className="font-serif text-3xl font-bold text-ucd-navy mb-2">
                    {peopleData.pi.name}
                  </h2>
                  <p className="text-ucd-gold font-semibold text-lg mb-4">
                    {peopleData.pi.title}
                  </p>
                  <p className="text-gray-700 mb-4">{peopleData.pi.bio}</p>
                  
                  <div className="space-y-2 mb-4">
                    <p className="text-gray-700">
                      <strong>Research Focus:</strong> {peopleData.pi.researchFocus}
                    </p>
                    <p className="text-gray-700">
                      <strong>Office:</strong> {peopleData.pi.office}
                    </p>
                    <p className="text-gray-700">
                      <strong>Address:</strong> {peopleData.pi.address}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-4">
                    <a
                      href={`mailto:${peopleData.pi.email}`}
                      className="text-ucd-navy hover:text-ucd-gold transition-colors font-medium"
                    >
                      📧 {peopleData.pi.email}
                    </a>
                    <a
                      href={`tel:${peopleData.pi.phone.replace(/\s/g, '')}`}
                      className="text-ucd-navy hover:text-ucd-gold transition-colors font-medium"
                    >
                      📞 {peopleData.pi.phone}
                    </a>
                  </div>
                  
                  <div className="mt-4">
                    <a
                      href={peopleData.pi.scholar}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-ucd-navy hover:text-ucd-gold transition-colors font-medium inline-flex items-center"
                    >
                      Google Scholar
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Graduate Students */}
          {peopleData.graduateStudents.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <h2 className="font-serif text-4xl font-bold text-ucd-navy mb-8 text-center">
                Graduate Students
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {peopleData.graduateStudents.map((student) => (
                  <MemberCard
                    key={student.id}
                    name={student.name}
                    role={student.role}
                    photo={student.photo}
                    researchFocus={student.researchFocus}
                    email={student.email}
                    bio={student.bio}
                  />
                ))}
              </div>
            </motion.div>
          )}

          {/* Alumni */}
          {peopleData.alumni.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-4xl font-bold text-ucd-navy mb-8 text-center">
                Alumni
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {peopleData.alumni.map((alumnus) => (
                  <MemberCard
                    key={alumnus.id}
                    name={alumnus.name}
                    role={alumnus.role}
                    photo={alumnus.photo}
                    researchFocus={alumnus.researchFocus}
                    currentPosition={alumnus.currentPosition}
                    bio={alumnus.bio}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </>
  );
}






