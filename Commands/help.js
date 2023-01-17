const {EmbedBuilder} = require('discord.js');

module.exports = {
    config: {
        name: 'help',
        description: 'แสดงคำสั่งทั้งหมดของบอท',
        usage: `mao!help`,
    },
    async run (client,message,args) {
        
        const CatHelp = new EmbedBuilder()
            .setColor(16580861)
            .setTitle(`คำสั่งข่วยเหลือ - Mao`)
            .setDescription("นี้คือคำสั่งทั้งหมดของหนู !\n.....\nกำลังปรับปรุ่งระบบ help")
            /*.addFields(
                { name: 'แมว หรือ <@1060182470630330529>', value: 'เป็นการคุยกับบอท', inline: true },
                { name: 'หิว หรือ กิน', value: 'เป็นการใช้ระบบสุ่มอาหาร', inline: true },
                { name: 'มีม หรือ meme', value: 'เป็นการให้บอทหามีมให้', inline: true },
                { name: 'สุ่ม หรือ เลข', value: 'เป็นการใช้ระบบสุ่มตัวเลข', inline: true },
                { name: 'mao!setting', value: 'เป็นการดูตั้งค่าของบอท', inline: true },
                { name: 'mao!help', value: 'เป็นการดูคำสั่งทั้งหมดของบอท', inline: true },
                { name: 'mao!rps', value: 'เป็นการเล่นเกมเป่ายิงชุบกับบอท', inline: true },
            )*/
            .setThumbnail("https://cdn.discordapp.com/attachments/988037995531759658/1064139171121336330/OIP-removebg-preview.png")
            .setTimestamp()
            .setFooter({ text: 'Bot help - V.0.1 BETA'});

        message.reply({ embeds: [CatHelp] })
    }
}