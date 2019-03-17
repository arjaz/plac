const rp = require('request-promise');
const $ = require('cheerio');

async function createData(data) {
    let resultArr = [];
    let errorArr = [];

    for (let word of data) {
        const url = encodeURI('http://slovar.e-polish.eu/ru/slovo/' +
                    word.split(' ').join('_'));

        await rp(url)
            .then(html => {
                let newWord = {};
                const translate = $('h3.translation', html).text().trim();
                const examples = $('p.example span.say', html).text()
                                                              .split('.')
                                                              .join('. ')
                                                              .trim();
                const img = $('img.pull-right', html).attr('src');

                newWord.word = word;
                if (examples) newWord.examples = examples;
                if (img) newWord.img = img;
                if (translate) {
                    newWord.translate = translate;
                    resultArr.push(newWord);
                } else {
                  errorArr.push(word);
                }
            })
            .catch(err => console.log(err));
    }
    return await { resultArr, errorArr };
};

module.exports = createData;
