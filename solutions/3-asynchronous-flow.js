import fs from 'fs';

// BEGIN
export function compareFileSizes(path1, path2, cb) {
  fs.stat(path1, (err1, stats1) => {
    if (err1) {
      cb(err1);
      return;
    }

    fs.stat(path2, (err2, stats2) => {
      if (err2) {
        cb(err2);
        return;
      }

      const size1 = stats1.size;
      const size2 = stats2.size;

      cb(null, Math.sign(size1 - size2));
    });
  });
}
// END