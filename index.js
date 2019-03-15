const fs = require('fs');

const parseFile = require('./parseFile');
const createData = require('./createData');
const writeToFile = require('./generateCSV');

const data = parseFile('dict.txt');

(async function() {
    let packedData = await createData(data);
    await writeToFile('result.csv', packedData);
})();
    
