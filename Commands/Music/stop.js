const {EmbedBuilder, messageLink} = require('discord.js');

module.exports = {
    config: {
        name: 'stop',
        description: 'stop music',
        usage: `m.stop`,
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
            const ConLeave = new EmbedBuilder()
                .setColor(14024959)
                .setAuthor({ name: `ออกจากห้องแล้วคะ !` , iconURL: `${MusicAuthorprofile}`})
                .setTimestamp()

            message.channel.send({ embeds : [ConLeave] })
            client.distube.voices.leave(message)
        }
    }
}