const Discord = require("discord.js");
module.exports = {
    name: 'scrapper',
    description: 'this is a ping command!',
    execute(message,args){

    const puppeteer = require('puppeteer');

    async function scrapeProduct(url){
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(url);
//destructuring
        const [el] = await page.$x('//*[@id="mw-content-text"]/div[1]/figure/a/img');
        const src = await el.getProperty('src');
        const imgURL = await src.jsonValue();

        console.log({imgURL});
        const embed = new Discord.MessageEmbed().setImage(imgURL)
        console.log({embed})
        message.channel.send({ embeds: [embed] })
    }

scrapeProduct('https://finalfantasy.fandom.com/wiki/Goobbue_(Final_Fantasy_XIV)');

        message.channel.send('goobue loves you');

    }
}