const {EmbedBuilder} = require('discord.js');

module.exports = {
    config: {
        name: 'checkers',
        description: 'start vc checkers',
        usage: `m.checkers`,
    },
    async run (client,message,args) {
        if (!message.member.voice.channel) {
            const NotinVC = new EmbedBuilder()
              .setColor(16711680)
              .setAuthor({ name: `กรุณาเข้าห้องก่อนจะใช้งานคำสั่งนะคะ !` , iconURL: 'https://cdn.discordapp.com/attachments/1071401485239332864/1073205416328183908/00000-4163793642-Anime_girl_cat_purple_smile.png'})
              .setTimestamp()
    
            return message.channel.send({  embeds : [NotinVC] })
        } else {
            client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'checkers').then(async invite => {
                const StartACT = new EmbedBuilder()
                    .setColor(14024959)
                    .setAuthor({ name: `กิจกรรม Checkers in the Park` , iconURL: 'https://cdn.discordapp.com/attachments/1071401485239332864/1073205416328183908/00000-4163793642-Anime_girl_cat_purple_smile.png'})
                    .setDescription(`Checkers in the Park ถูกใช้ในห้อง : <#${message.member.voice.channel.id}>\n[คลิกที่นี้เพื่อเข้าร่วมกิจกรรมนะคะ !](${invite.code})`)
                    .setImage("https://cdn.discordapp.com/attachments/1024635780360056883/1077549537490640906/CIP2.png")
                    .setTimestamp()

                return message.channel.send({  embeds : [StartACT] });
            });
        }
    }
}