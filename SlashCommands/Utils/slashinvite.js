const { SlashCommandBuilder,EmbedBuilder } = require(`@discordjs/builders`)

module.exports = {
    data: new SlashCommandBuilder()
    .setName("invite")
    .setDescription("เชิญบอทเข้าเชิฟเวอร์ของคุณ"),
    async execute(interaction, client) {
        const PingCMD = new EmbedBuilder()
            .setColor(16777215)
            .setAuthor({ name: "เชิญหนูเข้าเชิฟเวอร์ของคุณกัน !" , iconURL: 'https://cdn.discordapp.com/attachments/1071401485239332864/1073205416328183908/00000-4163793642-Anime_girl_cat_purple_smile.png'})
            .setThumbnail('https://cdn.discordapp.com/attachments/1071401485239332864/1073205416328183908/00000-4163793642-Anime_girl_cat_purple_smile.png')
            .setDescription("เชิญบอท : [>> กดที่นี้เพื่อเชิญบอท <<](https://discord.com/oauth2/authorize?client_id=1060182470630330529&permissions=8&scope=bot%20applications.commands)\nDocs : https://bit.ly/DocsMAO\n...\nคำสั่งมีมากกว่า 28 อย่าง")
            .setImage("https://cdn.discordapp.com/attachments/1015943699827527710/1079203464816640100/SC.png")
            .setFooter({ text: '⚠ ตอนเชิญบอท กรุณาให้สิทธิ สร้างคำสั่งในเชิฟเวอร์ ด้วยนะ !'})
            .setTimestamp()

        await interaction.reply({ embeds : [PingCMD] });
    }
}