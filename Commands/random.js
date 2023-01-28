const {EmbedBuilder} = require('discord.js');

module.exports = {
    config: {
        name: 'random',
        description: 'สุ่มเลข',
        usage: `mao!random`,
    },
    async run (client,message,args) {
        const NumberRespones = Math.floor(Math.random() * 45);

        message.reply("เรามีผู้โชคดี 🎉🎉🎉\nเลขที่ "+ NumberRespones)
    }
}