import fsp from 'fs/promises';

// BEGIN
export function getTypes(paths) {
  const promises = paths.map((filepath) => {
    return fsp.stat(filepath)
      .then((stats) => {
        if (stats.isDirectory()) {
          return 'directory';
        }

        return 'file';
      })
      .catch(() => null);
  });

  return Promise.all(promises);
}
// END