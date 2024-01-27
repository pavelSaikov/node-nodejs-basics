import { stat, open } from 'fs/promises';

const create = async () => {
  let stats = null;

  try {
    stats = await stat('files/fresh.txt');
  } catch (error) {}

  if (stats?.isFile()) {
    throw new Error('FS operation failed');
  }

  const data = 'I am fresh and young';
  const file = await open('files/fresh.txt', 'w');
  await file.write(data);
  await file.close();
};

await create();