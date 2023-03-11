const {EmbedBuilder, messageLink} = require('discord.js');

module.exports = {
    config: {
        name: 'loop',
        description: 'loop music',
        usage: `m.loop`,
    },
    async run (client,message,args) {
        const MusicAuthorprofile = client.config.defultauthorprofile
        if (!message.member.voice.channel) {
            const NotinVC = new EmbedBuilder()
              .setColor(16711680)
              .setAuthor({ name: `กรุณาเข้าห้องก่อนจะใช้คำสั่งนะคะ !` , iconURL: `${MusicAuthorprofile}`})
              .setTimestamp()
    
            return message.channel.send({  embeds : [NotinVC] })
        } else {
        const queue = client.distube.getQueue(message)
        const NospngP = new EmbedBuilder()
            .setColor(16711680)
            .setAuthor({ name: `ไม่มีเพลงที่เล่นอยู่ขณะนี้นะคะ !` , iconURL: `${MusicAuthorprofile}`})
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
        mode = mode ? (mode === 2 ? 'ทั้งหมดในคิวนี้' : 'เพลงนี้เท่านั้น') : 'ปืด (ปกติ)'
        const ChangeLoop = new EmbedBuilder()
            .setColor(14024959)
            .setAuthor({ name: `ระบบลูป / วนซ้ำ : ${mode}` , iconURL: `${MusicAuthorprofile}`})
            .setTimestamp()
        message.channel.send({ embeds : [ChangeLoop] })
        }
    }
}