const {EmbedBuilder ,  ActionRowBuilder, ButtonBuilder, ButtonStyle, Events} = require('discord.js');

module.exports = {
    config: {
        name: 'rps',
        description: 'RockPaperScissors',
        usage: `mao!rps`,
    },
    async run (bot,message,args) {
        const EmbedRps = new EmbedBuilder()
            .setColor(16745728)
            .setTitle(`เกมเป่ายิงชุบ - Rock Paper Scissors`)
            .setDescription("กำลังพัฒนาระบบ !\nเกมจะมาเร็วๆนี้ ...")
            .setImage("https://cdn.discordapp.com/attachments/988037995531759658/1064067338242117642/ezgif-4-83f97196ce.gif")
            .setTimestamp()
            .setFooter({ text: 'Rps - command'});

        const row = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
                .setCustomId('rock')
                .setLabel('✊🏻 ค้อน')
                .setDisabled(true)
                .setStyle(ButtonStyle.Secondary),
            new ButtonBuilder()
                .setCustomId('paper')
                .setLabel('✋🏻 กระดาษ')
                .setDisabled(true)
                .setStyle(ButtonStyle.Secondary),
            new ButtonBuilder()
                .setCustomId('Scissors')
                .setLabel('✌🏻 กรรไกร')
                .setDisabled(true)
                .setStyle(ButtonStyle.Secondary),
        );

        message.reply({  embeds: [EmbedRps] ,  components: [row] })
    }
}