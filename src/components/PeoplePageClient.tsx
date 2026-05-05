'use client';

import { motion } from 'framer-motion';
import Head from 'next/head';
import { useMemo } from 'react';
import MemberCard from '@/components/MemberCard';
import type { PersonItem } from '@/data/loaders';

interface PeoplePageClientProps {
  peopleData: PersonItem[];
}

export default function PeoplePageClient({ peopleData }: PeoplePageClientProps) {
  const principalInvestigator = useMemo(
    () => peopleData.find((person) => person.group === 'PI'),
    [peopleData]
  );

  const graduateStudents = useMemo(
    () => peopleData.filter((person) => person.group === 'GSR'),
    [peopleData]
  );

  const undergrads = useMemo(
    () => peopleData.filter((person) => person.group === 'UNDERGRAD'),
    [peopleData]
  );

  const alumni = useMemo(
    () => peopleData.filter((person) => person.group === 'ALUMNI'),
    [peopleData]
  );

  return (
    <>
      <Head>
        <title>People | Jegede Lab</title>
        <meta
          name="description"
          content="Meet the team: Principal Investigator, graduate students, and alumni of the Jegede Lab at UC Davis."
        />
      </Head>

      <div className="pt-24 pb-20 bg-white">
        <div className="container mx-auto px-4">
          {principalInvestigator && (
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
                      src={principalInvestigator.photo}
                      alt={principalInvestigator.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="256" height="256"%3E%3Crect fill="%23ddd" width="256" height="256"/%3E%3Ctext fill="%23999" font-family="sans-serif" font-size="18" dy="10.5" font-weight="bold" x="50%25" y="50%25" text-anchor="middle"%3EPI%3C/text%3E%3C/svg%3E';
                      }}
                    />
                  </div>

                  <div>
                    <h2 className="font-serif text-3xl font-bold text-ucd-navy mb-2">
                      {principalInvestigator.name}
                    </h2>
                    <p className="text-ucd-gold font-semibold text-lg mb-4">
                      {principalInvestigator.title}
                    </p>
                    <p className="text-gray-700 mb-4">{principalInvestigator.bio}</p>

                    <div className="space-y-2 mb-4">
                      <p className="text-gray-700">
                        <strong>Research Focus:</strong> {principalInvestigator.researchFocus}
                      </p>
                      <p className="text-gray-700">
                        <strong>Primary Office:</strong> {principalInvestigator.primaryOffice}
                      </p>
                      <p className="text-gray-700">
                        <strong>Secondary Office:</strong> {principalInvestigator.secondaryOffice}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-4">
                      <a
                        href={`mailto:${principalInvestigator.email}`}
                        className="text-ucd-navy hover:text-ucd-gold transition-colors font-medium"
                      >
                        📧 {principalInvestigator.email}
                      </a>
                      <a
                        href={`tel:${principalInvestigator.phone.replace(/\s/g, '')}`}
                        className="text-ucd-navy hover:text-ucd-gold transition-colors font-medium"
                      >
                        📞 {principalInvestigator.phone}
                      </a>
                    </div>

                    {principalInvestigator.scholar && (
                      <div className="mt-4">
                        <a
                          href={principalInvestigator.scholar}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-ucd-navy hover:text-ucd-gold transition-colors font-medium inline-flex items-center"
                        >
                          Google Scholar
                          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {graduateStudents.length > 0 && (
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
                {graduateStudents.map((student) => (
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

          {undergrads.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <h2 className="font-serif text-4xl font-bold text-ucd-navy mb-8 text-center">
                Undergraduate Researchers
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {undergrads.map((student) => (
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

          {alumni.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-4xl font-bold text-ucd-navy mb-8 text-center">
                Alumni
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {alumni.map((alumnus) => (
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
