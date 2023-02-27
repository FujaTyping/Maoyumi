const { SlashCommandBuilder,EmbedBuilder } = require(`@discordjs/builders`)

module.exports = {
    data: new SlashCommandBuilder()
    .setName("imagine")
    .setDescription("ให้บอทสร้างรูปภาพให้"),
    async execute(interaction, client) {
        const seed = Math.floor(Math.random() * 1000);
        const Msgname = interaction.user.username

        const SendImg = new EmbedBuilder()
            .setColor(14024959)
            .setAuthor({ name: `สร้างภาพให้กับ ${Msgname} เรียบร้อยแล้วคะ !` , iconURL: 'https://cdn.discordapp.com/attachments/1071401485239332864/1073205416328183908/00000-4163793642-Anime_girl_cat_purple_smile.png'})
            .setImage(`https://picsum.photos/seed/${seed}/512/512`)
            .setTimestamp()

        await interaction.reply({ embeds : [SendImg] })
    }
}