const {EmbedBuilder} = require('discord.js');

module.exports = {
    config: {
        name: 'skip',
        description: 'skip song',
        usage: `m.skip`,
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
        const NoQspngP = new EmbedBuilder()
            .setColor(16711680)
            .setAuthor({ name: `ไม่มีคิวเพลงที่เล่นอยู่ขณะนี้นะคะ !` , iconURL: `${MusicAuthorprofile}`})
            .setTimestamp()
        if (!queue) return message.channel.send({ embeds : [NoQspngP] })
        try {
        const song = await queue.skip()
        const SongSkip = new EmbedBuilder()
            .setColor(14024959)
            .setAuthor({ name: `ข้ามเพลงเรียบร้อยแล้วคะ !` , iconURL: `${MusicAuthorprofile}`})
            .setTimestamp()
        message.channel.send({ embeds : [SongSkip] })
        } catch (e) {
        message.channel.send("```diff\n"+`- ${e}`+" try again later !\n```")
        }
        }
    }
}