const {EmbedBuilder} = require('discord.js');

module.exports = {
    config: {
        name: 'random',
        description: 'สุ่มเลข',
        usage: `m!random`,
    },
    async run (client,message,args) {
        const NumberRespones = Math.floor(Math.random() * 45);

        const RdNb = new EmbedBuilder()
            .setColor(15401215)
            .setAuthor({ name: `เรามีผู้โชคดี 🎉🎉🎉\nเลขที่ ${NumberRespones}` , iconURL: 'https://cdn.discordapp.com/attachments/1071401485239332864/1073205416328183908/00000-4163793642-Anime_girl_cat_purple_smile.png'})
            .setTimestamp()

        message.reply({  embeds: [RdNb] })
    }
}