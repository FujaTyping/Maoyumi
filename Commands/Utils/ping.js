const {EmbedBuilder} = require('discord.js');

module.exports = {
    config: {
        name: 'ping',
        description: 'Test bot',
        usage: `mao!ping`,
    },
    async run (client,message,args) {
        message.reply("🏓 pong !")
    }
}