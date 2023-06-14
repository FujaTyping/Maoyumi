const { SlashCommandBuilder,EmbedBuilder } = require(`@discordjs/builders`)
const wait = require('node:timers/promises').setTimeout;
const got = require('got');

module.exports = {
    data: new SlashCommandBuilder()
    .setName("cat")
    .setDescription("ให้บอทหารูปน้องแมว"),
    async execute(interaction, client) {
        const Msgname = interaction.user.username
        const Authorprofile = client.config.defultauthorprofile

        const Load = new EmbedBuilder()
            .setColor(14024959)
            .setAuthor({ name: `รอแปปหนึงนะคะ ${Msgname} กำลังหารูปน้องแมว 😻` , iconURL: `${Authorprofile}`})

        await interaction.reply({ embeds : [Load] });
        await wait(1000);
        got("https://api.thecatapi.com/v1/images/search").then(async (response) => {
            const data = JSON.parse(response.body);
            //console.log(data[0].url);
          
            const Resmeme = new EmbedBuilder()
                .setColor(14024959)
                .setAuthor({ name: `${Msgname} น้องน่ารักมาเลย !` , iconURL: `${Authorprofile}`})
                .setImage(data[0].url)
                .setTimestamp()
  
            await interaction.editReply({  embeds: [Resmeme] })
        });
    }
}