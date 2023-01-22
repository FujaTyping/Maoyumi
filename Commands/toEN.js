const {EmbedBuilder} = require('discord.js');
const translate = require('translate-google')

module.exports = {
    config: {
        name: 'toEN',
        description: 'Translate to eng',
        usage: `mao!toEN`,
    },
    async run (client,message,args) {
        if (!args[0]) {
            message.reply('กรุณาพิมพ์คำสั่งให้ถูกต้อง !\n- mao!toEN <text>\nเช่น mao!toEN สวัสดี');
        } else {
            const UserText = message.content;
            const rawtext = await translate(UserText, {to: 'en'});
            message.reply(`**Translate to English** : ${rawtext}`);
        }
    }
}