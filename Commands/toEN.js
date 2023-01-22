const {EmbedBuilder} = require('discord.js');
const translate = require('translate-google')

module.exports = {
    config: {
        name: 'toEN',
        description: 'Translate to eng',
        usage: `mao!toEN`,
    },
    async run (client,message,args) {
        const UserText = message.content;
        const rawtext = await translate(UserText, {to: 'en'});
        message.reply(`**Translate to English** : ${rawtext}`);
    }
}