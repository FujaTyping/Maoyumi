const {EmbedBuilder} = require('discord.js');

module.exports = {
    config: {
        name: 'skip',
        description: 'skip song',
        usage: `m.skip`,
    },
    async run (client,message,args) {
        const Authorprofile = client.config.defultauthorprofile

        if (!message.member.voice.channel) {
            const NotinVC = new EmbedBuilder()
              .setColor(16711680)
              .setAuthor({ name: `กรุณาเข้าห้องก่อนจะใช้คำสั่งนะคะ !` , iconURL: `${Authorprofile}`})
              .setTimestamp()
    
            return message.channel.send({  embeds : [NotinVC] })
        } else {
            const DisableMusic = new EmbedBuilder()
                .setColor(16711680)
                .setAuthor({ name: `ปิดใช้งานระบบเล่นเพลงถาวรแล้ว !` , iconURL: `${Authorprofile}`})
                .setDescription('ถูกปิดใช้งานเนื่องจากขัดต่อข้อกำหนดในการให้บริการของ Discord (ToS)\nในอนาคตอาจจะเปิดให้ใช้งานได้แค่ Spotify กับ Soundcloud เท่านั้น')
                .setTimestamp()

            return message.channel.send({  embeds : [DisableMusic] })
        }
    }
}