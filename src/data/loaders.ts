import { fetchCsv } from '@/lib/csv';

export interface GalleryItem {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
}

export interface ResearchItem {
  id: number;
  title: string;
  description: string;
  keywords: string[];
  publications: number[];
}

export interface PublicationItem {
  id: number;
  authors: string;
  year: number;
  title: string;
  journal: string;
  doi: string;
  volume: string;
  pages: string;
}

export interface YouTubeItem {
  id: number;
  title: string;
  videoId: string;
  description: string;
  thumbnail: string;
}

export interface NewsItem {
  id: number;
  title: string;
  source: string;
  url: string;
  date: string;
  description: string;
}

export interface ContactConfig {
  googleFormEmbedUrl: string;
}

export type PeopleGroup = 'PI' | 'GSR' | 'UNDERGRAD' | 'ALUMNI';

export interface PersonItem {
  id: number;
  group: PeopleGroup;
  name: string;
  title: string;
  role: string;
  photo: string;
  bio: string;
  email: string;
  phone: string;
  researchFocus: string;
  currentPosition: string;
  primaryOffice: string;
  secondaryOffice: string;
  scholar: string;
  sortOrder: number;
  active: boolean;
}

const toNumber = (value: string, fallback = 0): number => {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
};

const toBool = (value: string): boolean => ['true', '1', 'yes'].includes(value.toLowerCase().trim());

const splitList = (value: string): string[] =>
  value
    .split('|')
    .map((v) => v.trim())
    .filter((v) => v.length > 0);

export async function loadGalleryData(): Promise<GalleryItem[]> {
  const rows = await fetchCsv('/data/gallery.csv');
  return rows.map((row) => ({
    id: toNumber(row.id),
    title: row.title,
    description: row.description,
    image: row.image,
    category: row.category,
  }));
}

export async function loadResearchData(): Promise<ResearchItem[]> {
  const rows = await fetchCsv('/data/research.csv');
  return rows.map((row) => ({
    id: toNumber(row.id),
    title: row.title,
    description: row.description,
    keywords: splitList(row.keywords),
    publications: splitList(row.publications).map((id) => toNumber(id)),
  }));
}

export async function loadPublicationsData(): Promise<PublicationItem[]> {
  const rows = await fetchCsv('/data/publications.csv');
  return rows.map((row) => ({
    id: toNumber(row.id),
    authors: row.authors,
    year: toNumber(row.year),
    title: row.title,
    journal: row.journal,
    doi: row.doi,
    volume: row.volume,
    pages: row.pages,
  }));
}

export async function loadYouTubeData(): Promise<YouTubeItem[]> {
  const rows = await fetchCsv('/data/youtube.csv');
  return rows.map((row) => ({
    id: toNumber(row.id),
    title: row.title,
    videoId: row.videoId,
    description: row.description,
    thumbnail: row.thumbnail,
  }));
}

export async function loadNewsData(): Promise<NewsItem[]> {
  const rows = await fetchCsv('/data/news.csv');
  return rows.map((row) => ({
    id: toNumber(row.id),
    title: row.title,
    source: row.source,
    url: row.url,
    date: row.date,
    description: row.description,
  }));
}

export async function loadContactConfig(): Promise<ContactConfig> {
  const rows = await fetchCsv('/data/contact.csv');
  const map = new Map(rows.map((row) => [row.key, row.value]));
  return {
    googleFormEmbedUrl: map.get('googleFormEmbedUrl') ?? '',
  };
}

export async function loadPeopleData(): Promise<PersonItem[]> {
  const rows = await fetchCsv('/data/people.csv');
  return mapPeopleRows(rows);
}

export function mapPeopleRows(rows: Array<Record<string, string>>): PersonItem[] {
  return rows
    .map((row) => ({
      id: toNumber(row.id),
      group: (row.group || '').toUpperCase() as PeopleGroup,
      name: row.name,
      title: row.title,
      role: row.role,
      photo: row.photo,
      bio: row.bio,
      email: row.email,
      phone: row.phone,
      researchFocus: row.researchFocus,
      currentPosition: row.currentPosition,
      primaryOffice: row.primaryOffice,
      secondaryOffice: row.secondaryOffice,
      scholar: row.scholar,
      sortOrder: toNumber(row.sortOrder),
      active: toBool(row.active || 'true'),
    }))
    .filter((row) => row.active)
    .sort((a, b) => a.sortOrder - b.sortOrder);
}
