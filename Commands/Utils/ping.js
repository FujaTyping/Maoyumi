const {EmbedBuilder} = require('discord.js');

module.exports = {
    config: {
        name: 'ping',
        description: 'Test bot',
        usage: `mao!ping`,
    },
    async run (client,message,args) {
        const PingCMD = new EmbedBuilder()
            .setColor(16777215)
            .setAuthor({ name: "🏓 pong !" , iconURL: 'https://cdn.discordapp.com/attachments/1071401485239332864/1073205416328183908/00000-4163793642-Anime_girl_cat_purple_smile.png'})
            .setTimestamp()

        message.reply({ embeds : [PingCMD] }).then(async message => {
            let delay = await parseFloat(message.createdTimestamp - message.createdTimestamp);
			let websocket = await parseFloat(client.ws.ping);
			let ping_result = `ความล่าช้าของบอท : ${websocket} ms\nความล่าช้าของ API : ${delay} ms`;
            const PingEdit = new EmbedBuilder()
                .setColor(16777215)
                .setAuthor({ name: ping_result , iconURL: 'https://cdn.discordapp.com/attachments/1071401485239332864/1073205416328183908/00000-4163793642-Anime_girl_cat_purple_smile.png'})
                .setTimestamp()

            message.edit({ embeds : [PingEdit] })
        })
    }
}