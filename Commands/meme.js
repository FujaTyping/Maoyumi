const {EmbedBuilder} = require('discord.js');
const got = require('got');

module.exports = {
    config: {
        name: 'meme',
        description: 'หามีม',
        usage: `mao!meme`,
    },
    async run (client,message,args) {
        message.reply(`รอแปปหนึงนะคะ กำลังหามีมให้ <@${message.author.id}> 🔎\n`)

        got("https://meme-api.com/gimme").then( (response) =>{
            const data = JSON.parse(response.body);

            message.reply({files: [`${data['url']}`]})
        })
    }
}