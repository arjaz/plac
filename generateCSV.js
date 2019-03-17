const fs = require('fs');

function writeToFile(filename, data) {
   let fileData = '';
   for (let word of data.resultArr) {
      let line =  word.translate +
                  '<br>' +
                  (!word.img ? '' : '<img src="' + word.img + '">') + ';' +
                  word.word +
                  '<br><br>' +
                  (!word.examples ? '' : word.examples) + '\n';
      fileData += line;
   }
   fs.writeFileSync(filename, fileData);

  if (data.errorArr.length === 0) console.log('Parse was successful');
  else {
    console.log(`There are ${data.errorArr.length} failed parsings.`);
    for (let fail of data.errorArr) {
      console.log(fail);
    }
  }

}

module.exports = writeToFile;
