const {EmbedBuilder, messageLink} = require('discord.js');
//const { SoundCloudPlugin } = require("@distube/soundcloud");
//const scPlugin = new SoundCloudPlugin();

module.exports = {
    config: {
        name: 'play',
        description: 'play music',
        usage: `m.play`,
    },
    async run (client,message,args) {
      const MusicAuthorprofile = client.config.defultauthorprofile
        if (!message.member.voice.channel) {
          const NotinVC = new EmbedBuilder()
            .setColor(16711680)
            .setAuthor({ name: `กรุณาเข้าห้องก่อนจะเล่นเพลงนะคะ !` , iconURL: `${MusicAuthorprofile}`})
            .setTimestamp()

          return message.channel.send({  embeds : [NotinVC] })
        } else {
          const string = args.join(' ')
          const NospngName = new EmbedBuilder()
            .setColor(16711680)
            .setAuthor({ name: `ดูเหมือนว่าชื่อเพลง / ลิงค์เพลงจะไม่ถูกต้องนะ !` , iconURL: `${MusicAuthorprofile}`})
            .setTimestamp()
          if (!string) return message.channel.send({ embeds : [NospngName] })
          //console.log(string)

          if (string.includes("https://www.youtube.com") || string.includes("https://youtu.be")) {
            const IsYT = new EmbedBuilder()
              .setColor(16711680)
              .setAuthor({ name: `หนูไม่สามารถเล่นเพลง ${string} ได้` , iconURL: `${MusicAuthorprofile}`})
              .setDescription("เนื่องจากไม่สามารถเล่นเพลงได้จาก Youtube แล้ว\nเพราะขัดต่อข้อกำหนดในการให้บริการของ Discord (ToS)\n❔ : ลองใช้ชื่อเพลง (แนะนำ) / ลิ้งค์เพลง จาก Spotify , Soundcloud !")
              .setTimestamp();
            message.channel.send({ embeds : [IsYT] });
          } else {
              client.distube.play(message.member.voice.channel, string, {
                member: message.member,
                textChannel: message.channel,
                message
              })
          }

        }
    }
}