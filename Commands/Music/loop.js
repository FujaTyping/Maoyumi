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
              .setAuthor({ name: `กรุณาเข้าห้องก่อนจะใช้คำสั่งนะคะ !` , iconURL: 'https://cdn.discordapp.com/attachments/1071401485239332864/1073205416328183908/00000-4163793642-Anime_girl_cat_purple_smile.png'})
              .setTimestamp()
    
            return message.channel.send({  embeds : [NotinVC] })
        } else {
        const queue = client.distube.getQueue(message)
        const NospngP = new EmbedBuilder()
            .setColor(16711680)
            .setAuthor({ name: `ไม่มีเพลงที่เล่นอยู่ขณะนี้นะตะ !` , iconURL: 'https://cdn.discordapp.com/attachments/1071401485239332864/1073205416328183908/00000-4163793642-Anime_girl_cat_purple_smile.png'})
            .setTimestamp()
        if (!queue) return message.channel.send({ embeds : [NospngP] })
        let mode = 0
        switch (args[0]) {
        case 'off':
            mode = 0
            break
        case 'song':
            mode = 1
            break
        case 'queue':
            mode = 2
            break
        }
        mode = queue.setRepeatMode(mode)
        mode = mode ? (mode === 2 ? 'ลูปคิว' : 'ลูปเพลง') : 'ปืด'
        const ChangeLoop = new EmbedBuilder()
            .setColor(14024959)
            .setAuthor({ name: `เปลี่ยนลูปเป็น : ${mode}` , iconURL: 'https://cdn.discordapp.com/attachments/1071401485239332864/1073205416328183908/00000-4163793642-Anime_girl_cat_purple_smile.png'})
            .setTimestamp()
        message.channel.send({ embeds : [ChangeLoop] })
        }
    }
}