const {EmbedBuilder, messageLink} = require('discord.js');

module.exports = {
    config: {
        name: 'volume',
        description: 'change volume',
        usage: `m.volume`,
    },
    async run (client,message,args) {
        if (!message.member.voice.channel) {
            const NotinVC = new EmbedBuilder()
              .setColor(16711680)
              .setAuthor({ name: `กรุณาเข้าห้องก่อนจะใช้คำสั่งนะคะ !` , iconURL: 'https://cdn.discordapp.com/attachments/1061529756203499571/1083435558937837608/New_Project_13.png'})
              .setTimestamp()
    
            return message.channel.send({  embeds : [NotinVC] })
          } else {
            const HTvol = new EmbedBuilder()
                .setColor(14024959)
                .setAuthor({ name: `วิธีการลดเสียง / เพิ่มเสียงบอท` , iconURL: 'https://cdn.discordapp.com/attachments/1061529756203499571/1083435558937837608/New_Project_13.png'})
                .setDescription("1. กดไปที่บอท <@1060182470630330529>\n2. ปรับเสียงตรงระดับเสียงผู้ใช้ได้เลย")
                .setImage("https://cdn.discordapp.com/attachments/1024635780360056883/1077981852490534974/H2V.png")
                .setTimestamp()

            message.channel.send({ embeds : [HTvol] })
          }
    }
}