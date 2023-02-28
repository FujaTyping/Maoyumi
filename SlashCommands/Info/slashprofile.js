const { SlashCommandBuilder,EmbedBuilder } = require(`@discordjs/builders`)

module.exports = {
    data: new SlashCommandBuilder()
    .setName("profile")
    .setDescription("ดูโปรไฟล์ของคุณ"),
    async execute(interaction, client) {
        const ProfileMsg = new EmbedBuilder()
        .setColor(14024959)
        .setAuthor({ name: `บัตรประจำตัวของคุณ ${interaction.user.username}` , iconURL: 'https://cdn.discordapp.com/attachments/1071401485239332864/1073205416328183908/00000-4163793642-Anime_girl_cat_purple_smile.png'})
        .setThumbnail(interaction.user.avatarURL())
        .setDescription(`◈  ชื่อ : \`${interaction.user.username}\`\n┊ ไอดี : \`${interaction.user.id}\`\n┊ เงิน : \`0 (รออัพเดท)\`\n┊ สร้างเมื่อ : \`${interaction.user.createdAt.toLocaleString()}\`\n◈  เชิฟเวอร์ : \`${interaction.guild}\``)
        .setTimestamp()

    await interaction.reply({ embeds : [ProfileMsg] })
    }
}