const {EmbedBuilder, messageLink} = require('discord.js');

module.exports = {
    config: {
        name: 'queue',
        description: 'see music queue',
        usage: `m.queue`,
    },
    async run (client,message,args) {
        if (!message.member.voice.channel) {
            const NotinVC = new EmbedBuilder()
            .setColor(16711680)
            .setAuthor({ name: `กรุณาเข้าห้องก่อนจะใช้คำสั่งนะคะ !` , iconURL: 'https://cdn.discordapp.com/attachments/1071401485239332864/1073205416328183908/00000-4163793642-Anime_girl_cat_purple_smile.png'})
            .setTimestamp()

            return message.channel.send({  embeds : [NotinVC] })
        } else {
            const DisableMusic = new EmbedBuilder()
                .setColor(16711680)
                .setAuthor({ name: `ปิดใช้งานระบบเล่นเพลงถาวรแล้ว !` , iconURL: 'https://cdn.discordapp.com/attachments/1071401485239332864/1073205416328183908/00000-4163793642-Anime_girl_cat_purple_smile.png'})
                .setDescription('ถูกปิดใช้งานเนื่องจากขัดต่อข้อกำหนดในการให้บริการของ Discord (ToS)\nในอนาคตอาจจะเปิดให้ใช้งานได้แค่ Spotify กับ Soundcloud เท่านั้น')
                .setTimestamp()

            return message.channel.send({  embeds : [DisableMusic] })
        }
    }
}