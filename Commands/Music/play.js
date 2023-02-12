const {EmbedBuilder, messageLink} = require('discord.js');

module.exports = {
    config: {
        name: 'play',
        description: 'play music',
        usage: `m.play`,
    },
    async run (client,message,args) {

      if (!message.member.voice.channel) {
        const NotinVC = new EmbedBuilder()
          .setColor(16711680)
          .setAuthor({ name: `กรุณาเข้าห้องก่อนจะเล่นเพลงนะคะ ! !` , iconURL: 'https://cdn.discordapp.com/attachments/1071401485239332864/1073205416328183908/00000-4163793642-Anime_girl_cat_purple_smile.png'})
          .setTimestamp()

        return message.channel.send({  embeds : [NotinVC] })
      } else {
        const string = args.join(' ')
        const NospngName = new EmbedBuilder()
          .setColor(16711680)
          .setAuthor({ name: `ดูเหมือนว่าชื่อเพลง / ลิงค์เพลงจะไม่ถูกต้องนะ !` , iconURL: 'https://cdn.discordapp.com/attachments/1071401485239332864/1073205416328183908/00000-4163793642-Anime_girl_cat_purple_smile.png'})
          .setTimestamp()
        if (!string) return message.channel.send({ embeds : [NospngName] })
        //console.log(string)
        client.distube.play(message.member.voice.channel, string, {
          member: message.member,
          textChannel: message.channel,
          message
        })
      }

    }
}