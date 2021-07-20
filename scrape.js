const request = require('request');
const cheerio = require('cheerio');

function scrapper(URL) {
    request(URL, (error, response, html)=> {
        if(!error && response.statusCode ==200) {
            const $ = cheerio.load(html);
            let nextPage = $("input[type^='button-']:first");
            if(nextPage.length) {
                newURL =  nextPage.attr("href");
            }
            scrapper(newURL); // recursion    

        } else {
            return false;
        }
    })
}

scrapper('https://codequiz.azurewebsites.net/');
