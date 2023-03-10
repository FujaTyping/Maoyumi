const {EmbedBuilder,ActionRowBuilder,ButtonBuilder,ButtonStyle,Events} = require('discord.js');
const got = require('got');

module.exports = {
    config: {
        name: 'meme',
        description: 'หามีม',
        usage: `m.meme`,
    },
    async run (client,message,args) {
        const Authorprofile = client.config.defultauthorprofile
        const Wanmove = new EmbedBuilder()
            .setColor(16777215)
            .setAuthor({ name: "คำสั่งนี้ถูกย้ายเป็น Slash command เรียบร้อยแล้ว !" , iconURL: `${Authorprofile}`})
            .setDescription('ลองใช้คำสั่ง `/meme` แทนดูสิ')
            .setFooter({ text: '⚠ หากไม่สารถใช้ Slash command ได้ กรุณาเชิญบอทใหม่ !'})
            .setTimestamp()

        message.reply({ embeds : [Wanmove]})
    }
}