const { SlashCommandBuilder,EmbedBuilder } = require(`@discordjs/builders`)
const wait = require('node:timers/promises').setTimeout;
const got = require('got');

module.exports = {
    data: new SlashCommandBuilder()
    .setName("meme")
    .setDescription("ให้บอทหามีมให้"),
    async execute(interaction, client) {
        const Msgname = interaction.user.username

        const Load = new EmbedBuilder()
            .setColor(14024959)
            .setAuthor({ name: `รอแปปหนึงนะคะ กำลังหามีมให้ ${Msgname} 🔎` , iconURL: 'https://cdn.discordapp.com/attachments/1061529756203499571/1083435558937837608/New_Project_13.png'})

        await interaction.reply({ embeds : [Load] });
        await wait(500);
        got("https://meme-api.com/gimme").then( async (response) =>{
            const data = JSON.parse(response.body);
            const Resmeme = new EmbedBuilder()
                .setColor(14024959)
                .setAuthor({ name: `เจอมีมให้คุณแล้ว ${Msgname} !` , iconURL: 'https://cdn.discordapp.com/attachments/1061529756203499571/1083435558937837608/New_Project_13.png'})
                .setImage(`${data['url']}`)
                .setTimestamp()

            await interaction.editReply({  embeds: [Resmeme] })
        })
    }
}