// This command is indev version !

const {EmbedBuilder, PermissionsBitField} = require('discord.js');
const { ms } = require('translate-google/languages');

module.exports = {
    config: {
        name: 'timeout',
        description: 'set time out to user',
        usage: `m.timeout`,
    },
    async run (client,message,args) {
        const UnderDev = new EmbedBuilder()
            .setColor(16711680)
            .setAuthor({ name: `Debug : Timeout` , iconURL: 'https://cdn.discordapp.com/attachments/1071401485239332864/1073205416328183908/00000-4163793642-Anime_girl_cat_purple_smile.png'})
            .setDescription(`ขอโทษนะคะคุณ <@${message.author.id}> แต่ระบบ Timeout ถูกปิดใช้งานชั่วคร่าว\nขออภัยในความไม่สะดวกนะค่ะ !`)
            .setTimestamp()

        message.reply({ embeds : [UnderDev ] })
    }
}