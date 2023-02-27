const { SlashCommandBuilder,EmbedBuilder } = require(`@discordjs/builders`)

module.exports = {
    data: new SlashCommandBuilder()
    .setName("botping")
    .setDescription("ดูการตอบสนองของบอท"),
    async execute(interaction, client) {
        const PingCMD = new EmbedBuilder()
        .setColor(16777215)
        .setAuthor({ name: "🏓 pong !" , iconURL: 'https://cdn.discordapp.com/attachments/1071401485239332864/1073205416328183908/00000-4163793642-Anime_girl_cat_purple_smile.png'})
        .setTimestamp()

        await interaction.reply({ embeds : [PingCMD] });
    }
}