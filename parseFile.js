const fs = require('fs');

function parseFile(filename) {
  const data = fs.readFileSync(filename).toString().split('\n').slice(0, -1);
  return data;
}

module.exports = parseFile;
