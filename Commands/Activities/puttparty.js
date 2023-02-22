const {EmbedBuilder} = require('discord.js');

module.exports = {
    config: {
        name: 'puttparty',
        description: 'start putt party',
        usage: `m.puttparty`,
    },
    async run (client,message,args) {
        if (!message.member.voice.channel) {
            const NotinVC = new EmbedBuilder()
              .setColor(16711680)
              .setAuthor({ name: `กรุณาเข้าห้องก่อนจะใช้งานคำสั่งนะคะ !` , iconURL: 'https://cdn.discordapp.com/attachments/1071401485239332864/1073205416328183908/00000-4163793642-Anime_girl_cat_purple_smile.png'})
              .setTimestamp()
    
            return message.channel.send({  embeds : [NotinVC] })
        } else {
            const Closed = new EmbedBuilder()
                .setColor(16711680)
                .setAuthor({ name: `คุณ ${message.author.username} เกม Putt Party ถูกปิดใช้งานถาวรแล้วนะคะ !` , iconURL: 'https://cdn.discordapp.com/attachments/1071401485239332864/1073205416328183908/00000-4163793642-Anime_girl_cat_purple_smile.png'})
                .setTimestamp()
  
            return message.channel.send({  embeds : [Closed] })
        }
    }
}