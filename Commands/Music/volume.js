const {EmbedBuilder, messageLink} = require('discord.js');

module.exports = {
    config: {
        name: 'volume',
        description: 'change volume',
        usage: `m.volume`,
    },
    async run (client,message,args) {
        const MusicAuthorprofile = client.config.defultauthorprofile
        const queue = client.distube.getQueue(message)
        if (!message.member.voice.channel) {
            const NotinVC = new EmbedBuilder()
              .setColor(16711680)
              .setAuthor({ name: `กรุณาเข้าห้องก่อนจะใช้คำสั่งนะคะ !` , iconURL: `${MusicAuthorprofile}`})
              .setTimestamp()
    
            return message.channel.send({  embeds : [NotinVC] })
        } else {
            const NoQspngP = new EmbedBuilder()
                .setColor(16711680)
                .setAuthor({ name: `ไม่มีคิวเพลงที่เล่นอยู่ขณะนี้นะคะ !` , iconURL: `${MusicAuthorprofile}`})
                .setTimestamp()
            if (!queue) return message.channel.send({ embeds : [NoQspngP] })
            const volume = parseInt(args[0])
            const Numreq = new EmbedBuilder()
                .setColor(16711680)
                .setAuthor({ name: `กรุณาระบุตัวเลขให้ถูกต้องนะคะ !` , iconURL: `${MusicAuthorprofile}`})
                .setDescription('ระบุตัวเลข `1-100` เท่านั้น')
                .setTimestamp()
            if (isNaN(volume)) return message.channel.send({ embeds : [Numreq] })
            queue.setVolume(volume)
            const Cvolume = new EmbedBuilder()
                .setColor(14024959)
                .setAuthor({ name: `ตั้งระดับเสียงเป็น ${volume} เรียบร้อยแล้วคะ !` , iconURL: `${MusicAuthorprofile}`})
                .setTimestamp()
            message.channel.send({ embeds : [Cvolume] })
        }
    }
}