const {EmbedBuilder} = require('discord.js');

module.exports = {
    config: {
        name: 'random',
        description: 'สุ่มเลข',
        usage: `mao!random`,
    },
    async run (client,message,args) {
        const NumberRespones = Math.floor(Math.random() * 45);

        const RdNb = new EmbedBuilder()
            .setColor(15401215)
            .setAuthor({ name: `เรามีผู้โชคดี 🎉🎉🎉\nเลขที่ ${NumberRespones}` , iconURL: 'https://cdn.discordapp.com/attachments/1061529756203499571/1071290286166265856/00006-3271186202-Anime_girl_cat.png'})
            .setTimestamp()

        message.reply({  embeds: [RdNb] })
    }
}