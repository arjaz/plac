const fs = require('fs');

const parseFile = require('./parseFile');
const createData = require('./createData');

const data = parseFile('dict.txt');

(async function() {
    let packedData = await createData(data);
    await console.log(packedData);
})();
    
