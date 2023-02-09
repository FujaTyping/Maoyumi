// This command is indev version !

const {EmbedBuilder, PermissionsBitField} = require('discord.js');
const { ms } = require('translate-google/languages');

module.exports = {
    config: {
        name: 'timeout',
        description: 'set time out to user',
        usage: `mao!timeout`,
    },
    async run (client,message,args) {
        const person = args[0]
        const havetime = args[1]
        const reson = args[2]
        const LunchCMD = message.author.username

        if (message.author.id == "729556554491232256") {
            const Accept = new EmbedBuilder()
                .setColor(65300)
                .setAuthor({ name: `Debug : Timeout สำเร็จ !` , iconURL: 'https://cdn.discordapp.com/attachments/1071401485239332864/1073205416328183908/00000-4163793642-Anime_girl_cat_purple_smile.png'})
                .setDescription(`คุณ ${person} ถูก Timeout โดย ${LunchCMD}`)
                .addFields(
                    { name: 'ระยะเวลา', value: `${havetime} วินาที`, inline: true },
                    { name: 'เหตุผล', value: `${reson}`, inline: true },
                )
                .setTimestamp()

            message.reply({ embeds : [Accept] })
        } else {
            const Notper = new EmbedBuilder()
                .setColor(16711680)
                .setAuthor({ name: `${message.author.username} คุณไม่มีสิทธ์ Timeout คนอื่นนะคะ !` , iconURL: 'https://cdn.discordapp.com/attachments/1071401485239332864/1073205416328183908/00000-4163793642-Anime_girl_cat_purple_smile.png'})
                .setTimestamp()

            message.reply({ embeds : [Notper] })
        }
    }
}