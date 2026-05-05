import fs from 'fs/promises';
import path from 'path';
import { parseCsv } from '@/lib/csv';
import { mapPeopleRows, type PersonItem } from '@/data/loaders';

export async function loadPeopleDataFromFile(): Promise<PersonItem[]> {
  const filePath = path.join(process.cwd(), 'public', 'data', 'people.csv');
  const content = await fs.readFile(filePath, 'utf8');
  return mapPeopleRows(parseCsv(content));
}
