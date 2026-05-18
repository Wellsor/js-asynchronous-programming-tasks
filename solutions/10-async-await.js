import fsp from 'fs/promises';

// BEGIN
export async function exchange(path1, path2) {
  const data1 = await fsp.readFile(path1, 'utf-8');
  const data2 = await fsp.readFile(path2, 'utf-8');

  await fsp.writeFile(path1, data2);
  await fsp.writeFile(path2, data1);
}
// END