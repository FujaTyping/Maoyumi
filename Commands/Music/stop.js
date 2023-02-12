const {EmbedBuilder, messageLink} = require('discord.js');

module.exports = {
    config: {
        name: 'stop',
        description: 'stop music',
        usage: `m.stop`,
    },
    async run (client,message,args) {
        const ConLeave = new EmbedBuilder()
            .setColor(14024959)
            .setAuthor({ name: `ออกจากห้องแล้วคะ !` , iconURL: 'https://cdn.discordapp.com/attachments/1071401485239332864/1073205416328183908/00000-4163793642-Anime_girl_cat_purple_smile.png'})
            .setTimestamp()

        message.channel.send({ embeds : [ConLeave] })
        client.distube.voices.leave(message)
    }
}