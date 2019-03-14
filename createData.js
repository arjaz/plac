const rp = require('request-promise');
const $ = require('cheerio');

async function createData(data) {
    let resultArr = [];
    
    for (let word of data) {
        const url = encodeURI('http://slovar.e-polish.eu/ru/slovo/' + word.split(' ').join('_'));
        await rp(url)
            .then(html => {
                let newWord = {};
                const translate = $('h3.translation', html).text().trim();
                const examples = $('p.example span.say', html).text().split('.').join('. ').trim();
                const img = $('img.pull-right', html).attr('src');
                newWord.word = word;
                if (translate) newWord.translate = translate;   
                if (examples) newWord.examples = examples;
                if (img) newWord.img = img;
                resultArr.push(newWord);
            })
            .catch(err => console.log(err));    
    }
    
    return await resultArr;
};
    
module.exports = createData;
