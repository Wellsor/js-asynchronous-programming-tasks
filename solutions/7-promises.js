import fsp from 'fs/promises';

// BEGIN
export async function reverse(filepath) {
  const data = await fsp.readFile(filepath, 'utf-8');

  const lines = data.split('\n');
  const reversed = lines.reverse().join('\n');

  await fsp.writeFile(filepath, reversed);
}
// END