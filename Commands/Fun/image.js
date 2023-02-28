const {EmbedBuilder,ActionRowBuilder,ButtonBuilder,ButtonStyle,Events} = require('discord.js');

module.exports = {
    config: {
        name: 'image',
        description: 'sent random image',
        usage: `m.image`,
    },
    async run (client,message,args) {
        const slashBT = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setLabel('View docs')
                    .setURL('https://bit.ly/DocsMAO')
                    .setStyle(ButtonStyle.Link),
        );

        const Wanmove = new EmbedBuilder()
        .setColor(16777215)
        .setAuthor({ name: "คำสั่งนี้ถูกย้ายเป็น Slash command เรียบร้อยแล้ว !" , iconURL: 'https://cdn.discordapp.com/attachments/1071401485239332864/1073205416328183908/00000-4163793642-Anime_girl_cat_purple_smile.png'})
        .setDescription('ลองใช้คำสั่ง `/imagine` แทนดูสิ')
        .setFooter({ text: '⚠ หากไม่สารถใช้ Slash command ได้ กรุณาเชิญบอทใหม่ !'})
        .setTimestamp()

        message.reply({ embeds : [Wanmove] , components: [slashBT]})
    }
}