import fs from 'fs';

// BEGIN
export function move(from, to, cb) {
  fs.readFile(from, 'utf-8', (readError, data) => {
    if (readError) {
      cb(readError);
      return;
    }

    fs.writeFile(to, data, (writeError) => {
      if (writeError) {
        cb(writeError);
        return;
      }

      fs.unlink(from, (removeError) => {
        if (removeError) {
          cb(removeError);
          return;
        }

        cb(null);
      });
    });
  });
}
// END
