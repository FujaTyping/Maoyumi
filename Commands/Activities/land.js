const {EmbedBuilder} = require('discord.js');

module.exports = {
    config: {
        name: 'land',
        description: 'start land.io',
        usage: `m.land`,
    },
    async run (client,message,args) {
        if (!message.member.voice.channel) {
            const NotinVC = new EmbedBuilder()
              .setColor(16711680)
              .setAuthor({ name: `กรุณาเข้าห้องก่อนจะใช้งานคำสั่งนะคะ !` , iconURL: 'https://cdn.discordapp.com/attachments/1061529756203499571/1083435558937837608/New_Project_13.png'})
              .setTimestamp()
    
            return message.channel.send({  embeds : [NotinVC] })
        } else {
            client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'land').then(async invite => {
                const StartACT = new EmbedBuilder()
                    .setColor(14024959)
                    .setAuthor({ name: `กิจกรรม Land.io` , iconURL: 'https://cdn.discordapp.com/attachments/1061529756203499571/1083435558937837608/New_Project_13.png'})
                    .setDescription(`Land.io ถูกใช้ในห้อง : <#${message.member.voice.channel.id}>\n[>> คลิกที่นี้เพื่อเข้าร่วมกิจกรรมนะคะ ! <<](${invite.code})`)
                    .setImage("https://cdn.discordapp.com/attachments/1024635780360056883/1077564723798736906/SH_1.png")
                    .setTimestamp()

                return message.channel.send({  embeds : [StartACT] });
            });
        }
    }
}