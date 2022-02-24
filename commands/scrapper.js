const Discord = require("discord.js");
var Scraper = require('images-scraper');
const google = new Scraper({
    puppeteer: {
        headless: true
    }
})

module.exports = {
    name: 'scrapper',
    description: 'this is a ping command!',
    async execute(client, message, args){


        const image_query = args.join(' ');
        if(!image_query) return message.channel.send('enter image name');
        if(image_query == 'goobue'){
            message.channel.send('goobue loves you');
        }

        const image_results = await google.scrape(image_query, 1);
        console.log(image_results[0].url);
        const embed = new Discord.MessageEmbed().setImage(image_results[0].url);
        message.channel.send({ embeds: [embed] })

    }
}