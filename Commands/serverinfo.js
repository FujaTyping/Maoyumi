const {EmbedBuilder} = require('discord.js');

module.exports = {
    config: {
        name: 'serverinfo',
        description: 'Show server info',
        usage: `mao!serverinfo`,
    },
    async run (client,message,args) {
        let owner = await message.guild.fetchOwner()
        // console.log(owner)

        const Info = new EmbedBuilder()
            .setColor(9079434)
            .setTitle("ข้อมูลเชิฟเวอร์")
            .setThumbnail(message.guild.iconURL())
            .setDescription(`ชื่อเชิฟเวอร์ : **${message.guild}** - Server info`)
            .addFields(
                { name: 'เจ้าของเชิฟเวอร์', value: `${owner}`, inline: true },
                { name: 'จำนวนสมาชิกในเชิฟเวอร์นี้', value: `${message.guild.memberCount} คน`, inline: true },
                { name: 'จำนวน Emoji ในเชิฟเวอร์นี้', value:  `${message.guild.emojis.cache.size} อัน`, inline: true },
                { name: 'จำนวนบทบาทในเชิฟเวอร์นี้', value: `${message.guild.roles.cache.size} บทบาท`, inline: true },
                { name: 'เชิฟเวอร์นี้อยู่ในประเทศ', value: `${message.guild.preferredLocale}`, inline: true },
            )
            .setTimestamp()
            .setFooter({ text: 'Server info - command'});

        message.channel.send({  embeds: [Info] })
    }
}