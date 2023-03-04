const { SlashCommandBuilder,EmbedBuilder } = require(`@discordjs/builders`)
const wait = require('node:timers/promises').setTimeout;

module.exports = {
    data: new SlashCommandBuilder()
    .setName("server")
    .setDescription("คำสั่งเชิฟเวอร์ของ MAO")
    .addSubcommand(subcommand =>
		subcommand
			.setName('info')
			.setDescription('ดูข้อมูลเชิฟเวอร์')
    ),
    async execute(interaction, client) {
        const CmdChoics = interaction.options.getSubcommand()

        if (CmdChoics == "info") {
            let owner = await interaction.guild.fetchOwner()
            // console.log(owner)
    
            const Info = new EmbedBuilder()
                .setColor(16777215)
                .setAuthor({ name: "Server info - ข้อมูลเชิฟเวอร์" , iconURL: 'https://cdn.discordapp.com/attachments/1061529756203499571/1071323436057645126/Settings_S2.png'})
                .setThumbnail(interaction.guild.iconURL())
                .setDescription(`ชื่อเชิฟเวอร์ : \`${interaction.guild}\`\nID เชิฟเวอร์ : \`${interaction.guild.id}\`\nสร้างเมื่อ : \`${interaction.guild.createdAt.toLocaleString()}\`\n`)
                .addFields(
                    { name: 'เจ้าของเชิฟเวอร์', value: `${owner}`, inline: true },
                    { name: 'จำนวนสมาชิกในเชิฟเวอร์นี้', value: `${interaction.guild.memberCount} คน`, inline: true },
                    { name: 'จำนวน Emoji ในเชิฟเวอร์นี้', value:  `${interaction.guild.emojis.cache.size} อัน`, inline: true },
                    { name: 'จำนวนบทบาทในเชิฟเวอร์นี้', value: `${interaction.guild.roles.cache.size} บทบาท`, inline: true },
                    { name: 'เชิฟเวอร์นี้อยู่ในประเทศ', value: `${interaction.guild.preferredLocale}`, inline: true },
                )
                .setTimestamp()
    
            await interaction.reply({  embeds: [Info] } )
        }
    }
}