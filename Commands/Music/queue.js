const {EmbedBuilder, messageLink} = require('discord.js');

module.exports = {
    config: {
        name: 'queue',
        description: 'see music queue',
        usage: `m.queue`,
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
            const NoQspngP = new EmbedBuilder()
                .setColor(16711680)
                .setAuthor({ name: `ไม่มีคิวเพลงที่เล่นอยู่ขณะนี้นะคะ !` , iconURL: 'https://cdn.discordapp.com/attachments/1071401485239332864/1073205416328183908/00000-4163793642-Anime_girl_cat_purple_smile.png'})
                .setTimestamp()
            if (!queue) return message.channel.send({ embeds : [NoQspngP] })
            const q = queue.songs
              .map((song, i) => `**${`${i} .**`} ${song.name} - ${song.user}`)
              .join('\n')
            const QueueSer = new EmbedBuilder()
              .setColor(14024959)
              .setAuthor({ name: `ดูคิวเพลงทั้งหมด` , iconURL: 'https://cdn.discordapp.com/attachments/1071401485239332864/1073205416328183908/00000-4163793642-Anime_girl_cat_purple_smile.png'})
              .setDescription(`${q}`)
              .setTimestamp()
            message.channel.send({ embeds : [QueueSer] })
        }
    }
}