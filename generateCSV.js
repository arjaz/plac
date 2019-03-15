const fs = require('fs');

function writeToFile(filename, data) {
    let fileData = '';
    for (let word of data) {
        let line =  word.translate +
                    '<br>' +
                    (!word.img ? '' : '<img src="' + word.img + '">') +
                    word.word +
                    '<br><br>' +
                    (!word.examples ? '' : word.examples) + '\n';
        fileData += line;
    }
    fs.writeFileSync(filename, fileData);
}

module.exports = writeToFile;
