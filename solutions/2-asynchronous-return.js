import fs from 'fs';

// BEGIN
export default function write(path, data, cb) {
  fs.writeFile(path, data, (err) => {
    if (err) {
      throw err;
    }

    cb();
  });
}
// END