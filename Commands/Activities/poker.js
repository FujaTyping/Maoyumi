const {EmbedBuilder} = require('discord.js');

module.exports = {
    config: {
        name: 'poker',
        description: 'start poker night',
        usage: `m.poker`,
    },
    async run (client,message,args) {
        if (!message.member.voice.channel) {
            const NotinVC = new EmbedBuilder()
              .setColor(16711680)
              .setAuthor({ name: `กรุณาเข้าห้องก่อนจะใช้งานคำสั่งนะคะ !` , iconURL: 'https://cdn.discordapp.com/attachments/1061529756203499571/1083435558937837608/New_Project_13.png'})
              .setTimestamp()
    
            return message.channel.send({  embeds : [NotinVC] })
        } else {
            client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'poker').then(async invite => {
                const StartACT = new EmbedBuilder()
                    .setColor(14024959)
                    .setAuthor({ name: `กิจกรรม Poker Night` , iconURL: 'https://cdn.discordapp.com/attachments/1061529756203499571/1083435558937837608/New_Project_13.png'})
                    .setDescription(`Poker Night ถูกใช้ในห้อง : <#${message.member.voice.channel.id}>\n🔞  เกมนี้ต้องอายุ 18+ ถึงจะเล่นได้ !\n[>> คลิกที่นี้เพื่อเข้าร่วมกิจกรรมนะคะ ! <<](${invite.code})`)
                    .setImage("https://cdn.discordapp.com/attachments/1061529756203499571/1077901308150939668/PO.png")
                    .setTimestamp()

                return message.channel.send({  embeds : [StartACT] });
            });
        }
    }
}