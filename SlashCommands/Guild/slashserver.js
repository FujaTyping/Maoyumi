const { SlashCommandBuilder,EmbedBuilder,PermissionsBitField } = require(`discord.js`);
const wait = require('node:timers/promises').setTimeout;

module.exports = {
    data: new SlashCommandBuilder()
    .setName("server")
    .setDescription("คำสั่งเชิฟเวอร์ของ Maoyumi")
    .addSubcommand(subcommand =>
		subcommand
			.setName('info')
			.setDescription('ดูข้อมูลเชิฟเวอร์')
    )
    .addSubcommand(subcommand =>
		subcommand
			.setName('timeout')
			.setDescription('หมดเวลาคนในเชิฟเวอร์')
            .addUserOption(option => 
                option.setName('target')
                    .setDescription('เลือกคนที่ต้องการหมดเวลา')
                    .setRequired(true))
            .addNumberOption(option =>
                option.setName('duration')
                    .setDescription('ระบุระยะเวลาที่ต้องการหมเดเวลา (นาที)')
                    .setRequired(true))
            .addStringOption(option =>
                option.setName('reason')
                    .setDescription('ระบุเหตุผลการหมดเวลา'))
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
    
            await interaction.reply({  embeds: [Info] })
        } else if (CmdChoics == "timeout") {

            if (interaction.member.permissions.has([PermissionsBitField.Flags.KickMembers, PermissionsBitField.Flags.BanMembers])) {
                const guild = interaction.guild
                const userTarget = interaction.options.getUser('target')
                const duration = interaction.options.getNumber('duration')
                const reason = interaction.options.getString('reason') ?? 'ไม่ระบุเหตผล'
                //const realUser = userTarget.member
                const InguildUser = await guild.members.fetch(userTarget)
                const realTime = duration * 60000
    
                if (duration <= "0" ) {
                    const Timelimut = new EmbedBuilder()
                        .setColor(16711680)
                        .setAuthor({ name: "กรุณาระบุตัวเลขที่ มากกว่า 0 คะ !" , iconURL: 'https://cdn.discordapp.com/attachments/1061529756203499571/1083435558937837608/New_Project_13.png'})
                        .setTimestamp()
                    
                    await interaction.reply({  embeds: [Timelimut] })
                } else {
                    const TimeputCmD = new EmbedBuilder()
                        .setColor(14024959)
                        .setAuthor({ name: "Timeout เรียบร้อยแล้วคะ !" , iconURL: 'https://cdn.discordapp.com/attachments/1061529756203499571/1083435558937837608/New_Project_13.png'})
                        .setDescription(`คุณ ${userTarget} ถูก Timeout โดย ${interaction.user.username}`)
                        .setThumbnail(InguildUser.user.avatarURL())
                        .addFields(
                            { name: 'ระยะเวลา', value: `${duration} นาที`, inline: true },
                            { name: 'เหตุผล', value: `${reason}`, inline: true },
                        )
                        .setTimestamp()
                    
                    await InguildUser.timeout(realTime,reason)
                    await interaction.reply({  embeds: [TimeputCmD] })
                }
            } else {
                const ReqPrems = new EmbedBuilder()
                    .setColor(16711680)
                    .setAuthor({ name: `คุณ ${interaction.user.username} ไม่มีสิทธิ Timeout คนอื่นนะคะ !` , iconURL: 'https://cdn.discordapp.com/attachments/1061529756203499571/1083435558937837608/New_Project_13.png'})
                    .setTimestamp()
                
                await interaction.reply({  embeds: [ReqPrems] })
            }
        }
    }
}
