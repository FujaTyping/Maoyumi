const {EmbedBuilder} = require('discord.js');
const translate = require('translate-google')

module.exports = {
    config: {
        name: 'toTH',
        description: 'Translate to thai',
        usage: `mao!toTH`,
    },
    async run (client,message,args) {
        const UserText = message.content;
        const rawtext = await translate(UserText, {to: 'th'});
        message.reply(`**แปลเป็น ภาษาไทย** : ${rawtext}`);
    }
}