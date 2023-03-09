const {EmbedBuilder} = require('discord.js');

module.exports = {
    config: {
        name: 'lettertile',
        description: 'start vc letter tile',
        usage: `m.lettertile`,
    },
    async run (client,message,args) {
        if (!message.member.voice.channel) {
            const NotinVC = new EmbedBuilder()
              .setColor(16711680)
              .setAuthor({ name: `กรุณาเข้าห้องก่อนจะใช้งานคำสั่งนะคะ !` , iconURL: 'https://cdn.discordapp.com/attachments/1061529756203499571/1083435558937837608/New_Project_13.png'})
              .setTimestamp()
    
            return message.channel.send({  embeds : [NotinVC] })
        } else {
            client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'lettertile').then(async invite => {
                const StartACT = new EmbedBuilder()
                    .setColor(14024959)
                    .setAuthor({ name: `กิจกรรม Letter Tile` , iconURL: 'https://cdn.discordapp.com/attachments/1061529756203499571/1083435558937837608/New_Project_13.png'})
                    .setDescription(`Letter Tile ถูกใช้ในห้อง : <#${message.member.voice.channel.id}>\n[>> คลิกที่นี้เพื่อเข้าร่วมกิจกรรมนะคะ ! <<](${invite.code})`)
                    .setImage("https://cdn.discordapp.com/attachments/1024635780360056883/1077548164627841064/LL.png")
                    .setTimestamp()

                return message.channel.send({  embeds : [StartACT] });
            });
        }
    }
}