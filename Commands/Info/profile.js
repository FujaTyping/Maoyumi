const {EmbedBuilder} = require('discord.js');

module.exports = {
    config: {
        name: 'profile',
        description: 'see your profile',
        usage: `m.profile`,
    },
    async run (client,message,args) {
        const ProfileMsg = new EmbedBuilder()
            .setColor(16777215)
            .setAuthor({ name: `บัตรประจำตัวของคุณ ${message.author.username}` , iconURL: 'https://cdn.discordapp.com/attachments/1071401485239332864/1073205416328183908/00000-4163793642-Anime_girl_cat_purple_smile.png'})
            .setThumbnail(message.author.avatarURL())
            .setDescription(`◈  ชื่อ : \`${message.author.username}\`\n┊ ไอดี : \`${message.author.id}\`\n┊ สร้างเมื่อ : \`${message.author.createdAt.toLocaleString()}\`\n◈  เชิฟเวอร์ : \`${message.guild}\``)
            .setTimestamp()

        message.reply({ embeds : [ProfileMsg] })
    }
}