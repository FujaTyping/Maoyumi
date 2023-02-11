const {EmbedBuilder} = require('discord.js');
const got = require('got');

module.exports = {
    config: {
        name: 'meme',
        description: 'หามีม',
        usage: `m.meme`,
    },
    async run (client,message,args) {
        const Load = new EmbedBuilder()
            .setColor(16777215)
            .setAuthor({ name: `รอแปปหนึงนะคะ กำลังหามีมให้ ${message.author.username} 🔎` , iconURL: 'https://cdn.discordapp.com/attachments/1071401485239332864/1073205416328183908/00000-4163793642-Anime_girl_cat_purple_smile.png'})

        message.reply({  embeds: [Load] }).then(message => {
            got("https://meme-api.com/gimme").then( (response) =>{
                const data = JSON.parse(response.body);
                const Resmeme = new EmbedBuilder()
                    .setColor(16777215)
                    .setAuthor({ name: `เจอมีมให้คุณแล้ว !` , iconURL: 'https://cdn.discordapp.com/attachments/1071401485239332864/1073205416328183908/00000-4163793642-Anime_girl_cat_purple_smile.png'})
                    .setImage(`${data['url']}`)
                    .setTimestamp()

                message.edit({  embeds: [Resmeme] })
            })
        })
    }
}