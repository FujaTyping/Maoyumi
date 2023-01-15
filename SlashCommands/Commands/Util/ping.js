const { SlashCommandBuilder } = require(`@discordjs/builders`)

module.exports = {
    data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("ดูความล่าช้าของบอท | ตรวจสอบการตอบสนองของบอท"),
    async execute(interaction, client) {
        await interaction.reply({ content: `🏓 Pong !\nความล่าช้าของบอทอยู่ที่ **${Date.now() - message.createdTimestamp}ms**\nความล่าช้าของ API อยู่ที่ **${Math.round(client.ws.ping)}ms**`});
    }
}