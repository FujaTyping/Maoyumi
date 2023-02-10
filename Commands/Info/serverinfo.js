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
            .setColor(16777215)
            .setAuthor({ name: "Server info - ข้อมูลเชิฟเวอร์" , iconURL: 'https://cdn.discordapp.com/attachments/1061529756203499571/1071323436057645126/Settings_S2.png'})
            .setThumbnail(message.guild.iconURL())
            .setDescription(`ชื่อเชิฟเวอร์ : **${message.guild}**\nID เชิฟเวอร์ : **${message.guild.id}**\nสร้างเมื่อ : **${message.guild.createdAt.toLocaleString()}**\n`)
            .addFields(
                { name: 'เจ้าของเชิฟเวอร์', value: `${owner}`, inline: true },
                { name: 'จำนวนสมาชิกในเชิฟเวอร์นี้', value: `${message.guild.memberCount} คน`, inline: true },
                { name: 'จำนวน Emoji ในเชิฟเวอร์นี้', value:  `${message.guild.emojis.cache.size} อัน`, inline: true },
                { name: 'จำนวนบทบาทในเชิฟเวอร์นี้', value: `${message.guild.roles.cache.size} บทบาท`, inline: true },
                { name: 'เชิฟเวอร์นี้อยู่ในประเทศ', value: `${message.guild.preferredLocale}`, inline: true },
            )
            .setTimestamp()

        message.channel.send({  embeds: [Info] } )
    }
}