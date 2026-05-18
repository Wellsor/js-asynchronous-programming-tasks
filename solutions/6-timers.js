import fs from 'fs';

// BEGIN
export default function watch(filepath, period, cb) {
  let lastMtime = Date.now();

  const id = setInterval(() => {
    fs.stat(filepath, (err, stats) => {
      if (err) {
        clearInterval(id);
        cb(err);
        return;
      }

      if (stats.mtimeMs > lastMtime) {
        lastMtime = stats.mtimeMs;
        cb(null);
      }
    });
  }, period);

  return id;
}
// END
