const {EmbedBuilder} = require('discord.js');

module.exports = {
    config: {
        name: 'youtube',
        description: 'start vc youtube',
        usage: `m.youtube`,
    },
    async run (client,message,args) {
        if (!message.member.voice.channel) {
            const NotinVC = new EmbedBuilder()
              .setColor(16711680)
              .setAuthor({ name: `กรุณาเข้าห้องก่อนจะใช้งานคำสั่งนะคะ !` , iconURL: 'https://cdn.discordapp.com/attachments/1071401485239332864/1073205416328183908/00000-4163793642-Anime_girl_cat_purple_smile.png'})
              .setTimestamp()
    
            return message.channel.send({  embeds : [NotinVC] })
        } else {
            client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'youtube').then(async invite => {
                const StartACT = new EmbedBuilder()
                    .setColor(14024959)
                    .setAuthor({ name: `กิจกรรม Youtube Together` , iconURL: 'https://cdn.discordapp.com/attachments/1071401485239332864/1073205416328183908/00000-4163793642-Anime_girl_cat_purple_smile.png'})
                    .setDescription(`Youtube Together ถูกใช้ในห้อง : <#${message.member.voice.channel.id}>\n[คลิกที่นี้เพื่อเข้าร่วมกิจกรรมนะคะ !](${invite.code})`)
                    .setTimestamp()

                return message.channel.send({  embeds : [StartACT] });
            });
        }
    }
}