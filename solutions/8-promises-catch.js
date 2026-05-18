import fsp from 'fs/promises';

// BEGIN
export async function touch(filepath) {
  try {
    await fsp.access(filepath);
  } catch (e) {
    await fsp.writeFile(filepath, '');
  }
}
// END