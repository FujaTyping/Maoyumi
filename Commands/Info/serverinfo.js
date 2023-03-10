const {EmbedBuilder} = require('discord.js');

module.exports = {
    config: {
        name: 'serverinfo',
        description: 'Show server info',
        usage: `m.serverinfo`,
    },
    async run (client,message,args) {
        const slashBT = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setLabel('View docs')
                    .setURL('https://example.com')
                    .setStyle(ButtonStyle.Link),
        );

        const Authorprofile = client.config.defultauthorprofile
        const Wanmove = new EmbedBuilder()
            .setColor(16777215)
            .setAuthor({ name: "คำสั่งนี้ถูกย้ายเป็น Slash command เรียบร้อยแล้ว !" , iconURL: `${Authorprofile}`})
            .setDescription('ลองใช้คำสั่ง `/server info` แทนดูสิ')
            .setFooter({ text: '⚠ หากไม่สารถใช้ Slash command ได้ กรุณาเชิญบอทใหม่ !'})
            .setTimestamp()

        message.reply({ embeds : [Wanmove] , components: [slashBT]})
    }
}