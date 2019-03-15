const fs = require('fs');

function writeToFile(filename, data) {
    let fileData = '';
    for (let word of data) {
        let line = `${word.word}<br>${!word.img ? '' : '<img src="' + word.img + '">'};${!word.translate ? 'Перевод не найдено' : word.translate}<br><br>${!word.examples ? '' : word.examples}\n`;
        fileData += line;
    }
    fs.writeFileSync(filename, fileData);
}

module.exports = writeToFile;