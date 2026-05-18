import fs from 'fs';

// BEGIN
export default function print(path) {
  fs.readFile(path, 'utf-8', (err, data) => {
    if (err) {
      throw err;
    }

    console.log(data);
  });
}
// END
