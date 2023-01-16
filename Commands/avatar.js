const {EmbedBuilder} = require('discord.js');

module.exports = {
    config: {
        name: 'avatar',
        description: 'แสดง avatar ของคุณ',
        usage: `mao!avatar`,
    },
    async run (client,message,args) {
        const Youravatar = new EmbedBuilder()
            .setColor(16777215)
            .setTitle(`นี้คือ อวาตาร ของคุณ - Your avatar`)
            .setDescription("คุณดูดีมากเลย ❤ !")
            .setImage(message.author.avatarURL())
            .setTimestamp()
            .setFooter({ text: 'Show your avatar'});

        message.reply({  embeds: [Youravatar] })
    }
}