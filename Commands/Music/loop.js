const {EmbedBuilder, messageLink} = require('discord.js');

module.exports = {
    config: {
        name: 'loop',
        description: 'loop music',
        usage: `m.loop`,
    },
    async run (client,message,args) {
        if (!message.member.voice.channel) {
            const NotinVC = new EmbedBuilder()
              .setColor(16711680)
              .setAuthor({ name: `กรุณาเข้าห้องก่อนจะใช้คำสั่งนะคะ !` , iconURL: 'https://cdn.discordapp.com/attachments/1061529756203499571/1083435558937837608/New_Project_13.png'})
              .setTimestamp()
    
            return message.channel.send({  embeds : [NotinVC] })
        } else {
            const DisableMusic = new EmbedBuilder()
                .setColor(16711680)
                .setAuthor({ name: `ปิดใช้งานระบบเล่นเพลงถาวรแล้ว !` , iconURL: 'https://cdn.discordapp.com/attachments/1061529756203499571/1083435558937837608/New_Project_13.png'})
                .setDescription('ถูกปิดใช้งานเนื่องจากขัดต่อข้อกำหนดในการให้บริการของ Discord (ToS)\nในอนาคตอาจจะเปิดให้ใช้งานได้แค่ Spotify กับ Soundcloud เท่านั้น')
                .setTimestamp()

            return message.channel.send({  embeds : [DisableMusic] })
        }
    }
}