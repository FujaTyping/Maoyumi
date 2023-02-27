const { SlashCommandBuilder,EmbedBuilder } = require(`@discordjs/builders`)
const wait = require('node:timers/promises').setTimeout;

module.exports = {
    data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("ดูการตอบสนองของบอท"),
    async execute(interaction, client) {
        const PingCMD = new EmbedBuilder()
            .setColor(16777215)
            .setAuthor({ name: "🏓 pong !" , iconURL: 'https://cdn.discordapp.com/attachments/1071401485239332864/1073205416328183908/00000-4163793642-Anime_girl_cat_purple_smile.png'})
            .setTimestamp()

        await interaction.reply({ embeds : [PingCMD] });
        let delay = await parseFloat(interaction.createdTimestamp - interaction.createdTimestamp);
        let websocket = await parseFloat(client.ws.ping);
        let ping_result = `ความล่าช้าของบอท : ${websocket} ms\nความล่าช้าของ API : ${delay} ms`;
        await wait(1000);
        const PingEdit = new EmbedBuilder()
            .setColor(16777215)
            .setAuthor({ name: ping_result , iconURL: 'https://cdn.discordapp.com/attachments/1071401485239332864/1073205416328183908/00000-4163793642-Anime_girl_cat_purple_smile.png'})
            .setTimestamp()
        await interaction.editReply({ embeds : [PingEdit] });
    }
}