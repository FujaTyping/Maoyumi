const {EmbedBuilder} = require('discord.js');

module.exports = {
    config: {
        name: 'random',
        description: 'สุ่มเลข',
        usage: `m.random`,
    },
    async run (client,message,args) {
        const NumberRespones = Math.floor(Math.random() * 45);

        const RdNb = new EmbedBuilder()
            .setColor(14024959)
            .setAuthor({ name: `เรามีผู้โชคดี 🎉🎉🎉\nเลขที่ ${NumberRespones}` , iconURL: 'https://cdn.discordapp.com/attachments/1061529756203499571/1083435558937837608/New_Project_13.png'})
            .setTimestamp()

        message.reply({  embeds: [RdNb] })
    }
}