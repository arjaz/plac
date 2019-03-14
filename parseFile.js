const fs = require('fs');

function parseFile(filename) {
    const data = fs.readFileSync(filename).toString().split('\n');
    return data;
}

module.exports = parseFile;