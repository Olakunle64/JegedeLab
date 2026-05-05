import type { GetServerSideProps } from 'next';
import PeoplePageClient from '@/components/PeoplePageClient';
import type { PersonItem } from '@/data/loaders';
import { loadPeopleDataFromFile } from '@/lib/people-data-server';

interface PeoplePageProps {
  peopleData: PersonItem[];
}

export default function PeoplePage({ peopleData }: PeoplePageProps) {
  return <PeoplePageClient peopleData={peopleData} />;
}

export const getServerSideProps: GetServerSideProps<PeoplePageProps> = async () => {
  const peopleData = await loadPeopleDataFromFile();
  return {
    props: {
      peopleData,
    },
  };
};
