const { SlashCommandBuilder,EmbedBuilder } = require(`@discordjs/builders`)

module.exports = {
    data: new SlashCommandBuilder()
    .setName("vegetable")
    .setDescription("เก็บผักหาเงิน"),
    async execute(interaction, client) {
        const Authorprofile = client.config.defultauthorprofile
        const veget = [
            "🍅","🍆","🌽","🌶","🍄","🥑","🥒","🥬","🥦","🥔","🧄","🧅","🥕"
        ]
        const vetcount = (Math.floor(Math.random() * (10-1)))+1
        const price = (Math.floor(Math.random() * (8-3)))+3
        const realprice = vetcount*price

        const rawvet = Math.floor(Math.random() * veget.length);

        const ResultVeg = new EmbedBuilder()
            .setColor(14024959)
            .setAuthor({ name: "เก็บผักข้างบ้านกันคะ !" , iconURL: `${Authorprofile}`})
            .setDescription(`+ ได้ ${veget[rawvet]} x${vetcount}\n+ ขายได้ ${realprice} บาท \`(ราคาอาจจะไม่คงที่นะคะ !)\``)
            .setFooter({ text: '⚠ เงินที่ได้ ณ ตอนนี้เงินยังทำอะไรไม่ได้นะคะ !'})
            .setTimestamp()

        await interaction.reply({ embeds : [ResultVeg] });
    }
}