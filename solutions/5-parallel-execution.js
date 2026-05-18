import path from 'path';
import fs from 'fs';
import _ from 'lodash';
import async from 'async';

// BEGIN
export function getDirectorySize(dirPath, cb) {
  fs.readdir(dirPath, (err, files) => {
    if (err) {
      cb(err);
      return;
    }

    const fullPaths = files.map((file) => path.join(dirPath, file));

    async.map(fullPaths, fs.stat, (error, stats) => {
      if (error) {
        cb(error);
        return;
      }

      const size = _.sumBy(stats, (stat) => {
        if (stat.isFile()) {
          return stat.size;
        }

        return 0;
      });

      cb(null, size);
    });
  });
}
// END
