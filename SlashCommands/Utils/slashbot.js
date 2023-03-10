const { SlashCommandBuilder,EmbedBuilder } = require(`@discordjs/builders`)
const wait = require('node:timers/promises').setTimeout;

module.exports = {
    data: new SlashCommandBuilder()
    .setName("bot")
    .setDescription("คำสั่งของ Maoyumi")
    .addSubcommand(subcommand =>
		subcommand
			.setName('invite')
			.setDescription('เชิญบอทเข้าเชิฟเวอร์ของคุณ')
    )
	.addSubcommand(subcommand =>
		subcommand
			.setName('ping')
			.setDescription('ดูการตอบสนองของบอท')
    )
    .addSubcommand(subcommand =>
		subcommand
			.setName('help')
			.setDescription('ดูคำสั่งทั้งหมดของบอท')
    ),
    async execute(interaction, client) {
        const CmdChoics = interaction.options.getSubcommand()
        const Authorprofile = client.config.defultauthorprofile

        if (CmdChoics == "ping") {
            const PingCMD = new EmbedBuilder()
                .setColor(16777215)
                .setAuthor({ name: "🏓 pong !" , iconURL: `${Authorprofile}`})
                .setTimestamp()

            await interaction.reply({ embeds : [PingCMD] });
            let delay = await parseFloat(interaction.createdTimestamp - interaction.createdTimestamp);
            let websocket = await parseFloat(client.ws.ping);
            let ping_result = `ความล่าช้าของบอท : ${websocket} ms\nความล่าช้าของ API : ${delay} ms`;
            await wait(500);

            const PingEdit = new EmbedBuilder()
                .setColor(16777215)
                .setAuthor({ name: ping_result , iconURL: `${Authorprofile}`})
                .setTimestamp()
            await interaction.editReply({ embeds : [PingEdit] });
        } else if (CmdChoics == "invite") {
            const InviteCmd = new EmbedBuilder()
                .setColor(16777215)
                .setAuthor({ name: "เชิญหนูเข้าเชิฟเวอร์ของคุณกัน !" , iconURL: `${Authorprofile}`})
                .setThumbnail(`${Authorprofile}`)
                .setDescription("เชิญบอท : [>> กดที่นี้เพื่อเชิญบอท <<](https://discord.com/api/oauth2/authorize?client_id=1060182470630330529&permissions=8&scope=bot%20applications.commands)\nคำสั่งทั้งหมด : `/bot help`")
                .setFooter({ text: '⚠ ตอนเชิญบอท กรุณาให้สิทธิ สร้างคำสั่งในเชิฟเวอร์ ด้วยนะ !'})
                .setTimestamp()

            await interaction.reply({ embeds : [InviteCmd] });
        } else if (CmdChoics == "help") {
            const HelpCmd = new EmbedBuilder()
                .setColor(16777215)
                .setAuthor({ name: "นี้คือคำสั่งทั้งหมดของหนู !" , iconURL: `${Authorprofile}`})
                .setThumbnail(`${Authorprofile}`)
                .setDescription(`Prefix : \`m.\` (ปิดใช้งานไปแล้ว)\nคำสั่ง : ตอนนี้ย้ายไปใช้ Slash commands [ / ] หมดแล้ว\nคำสั่งทั้งหมด (prefix กับ slash commands) : \`${client.allcommand}\``)
                .setTimestamp()

            await interaction.reply({ embeds : [HelpCmd] });
        }
    }
}