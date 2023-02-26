const { Discord,EmbedBuilder,ActionRowBuilder,ButtonBuilder,ButtonStyle,Events } = require('discord.js');

module.exports.config = {
    name: 'ping',
    description: 'Test bot',
    usage: `m.ping`
};

module.exports.run = async (client, message, args) => {
    const slashBT = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
                .setLabel('Docs')
                .setURL('https://bit.ly/DocsMAO')
                .setStyle(ButtonStyle.Link),
    );

    const PingCMD = new EmbedBuilder()
    .setColor(16777215)
    .setAuthor({ name: "🏓 pong !" , iconURL: 'https://cdn.discordapp.com/attachments/1071401485239332864/1073205416328183908/00000-4163793642-Anime_girl_cat_purple_smile.png'})
    .setDescription('...\nคำสั่งนี้ถูกย้ายเป็น Slash command เรียบร้อยแล้ว !')
    .setTimestamp()

    message.reply({ embeds : [PingCMD] , components: [slashBT]}).then(async message => {
        let delay = await parseFloat(message.createdTimestamp - message.createdTimestamp);
        let websocket = await parseFloat(client.ws.ping);
        let ping_result = `ความล่าช้าของบอท : ${websocket} ms\nความล่าช้าของ API : ${delay} ms`;
        const PingEdit = new EmbedBuilder()
            .setColor(16777215)
            .setAuthor({ name: ping_result , iconURL: 'https://cdn.discordapp.com/attachments/1071401485239332864/1073205416328183908/00000-4163793642-Anime_girl_cat_purple_smile.png'})
            .setDescription('...\nคำสั่งนี้ถูกย้ายเป็น Slash command เรียบร้อยแล้ว !')
            .setTimestamp()

        message.edit({ embeds : [PingEdit] , components: [slashBT]})
    })
};
