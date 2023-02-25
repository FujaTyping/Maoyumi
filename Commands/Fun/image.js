const {EmbedBuilder} = require('discord.js');

module.exports = {
    config: {
        name: 'image',
        description: 'sent random image',
        usage: `m.image`,
    },
    async run (client,message,args) {
        const seed = Math.floor(Math.random() * 1000);
        const hight = Math.floor(Math.random() * 400) + 100;
        const wight = Math.floor(Math.random() * 400) + 100;
        const Msgname = message.author.username

        const Load = new EmbedBuilder()
            .setColor(14024959)
            .setAuthor({ name: `รอแปปหนึงนะคะ กำลังหารูปให้ ${Msgname} 🔎` , iconURL: 'https://cdn.discordapp.com/attachments/1071401485239332864/1073205416328183908/00000-4163793642-Anime_girl_cat_purple_smile.png'})

        message.reply({  embeds: [Load] }).then(message => {
            const SendImg = new EmbedBuilder()
            .setColor(14024959)
            .setAuthor({ name: `รูปนี้ก็สวยดีนะคะ ${Msgname} !` , iconURL: 'https://cdn.discordapp.com/attachments/1071401485239332864/1073205416328183908/00000-4163793642-Anime_girl_cat_purple_smile.png'})
            .setImage(`https://picsum.photos/seed/${seed}/${hight}/${wight}`)
            .setTimestamp()

            message.edit({ embeds : [SendImg] })
        })
    }
}