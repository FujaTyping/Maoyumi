const {EmbedBuilder} = require('discord.js');
const got = require('got');

module.exports = {
    config: {
        name: 'meme',
        description: 'หามีม',
        usage: `mao!meme`,
    },
    async run (client,message,args) {
        const Load = new EmbedBuilder()
            .setColor(15401215)
            .setAuthor({ name: `รอแปปหนึงนะคะ กำลังหามีมให้ ${message.author.username} 🔎` , iconURL: 'https://cdn.discordapp.com/attachments/1061529756203499571/1071290286166265856/00006-3271186202-Anime_girl_cat.png'})

        message.reply({  embeds: [Load] }).then(message => {
            got("https://meme-api.com/gimme").then( (response) =>{
                const data = JSON.parse(response.body);
                const Resmeme = new EmbedBuilder()
                    .setColor(15401215)
                    .setAuthor({ name: `เจอมีมให้คุณแล้ว !` , iconURL: 'https://cdn.discordapp.com/attachments/1061529756203499571/1071290286166265856/00006-3271186202-Anime_girl_cat.png'})
                    .setImage(`${data['url']}`)

                message.edit({  embeds: [Resmeme] })
            })
        })
    }
}