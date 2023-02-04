const {EmbedBuilder} = require('discord.js');

module.exports = {
    config: {
        name: 'help',
        description: 'แสดงคำสั่งทั้งหมดของบอท',
        usage: `mao!help`,
    },
    async run (client,message,args) {
        
        const CatHelp = new EmbedBuilder()
            .setColor(16777215)
            .setAuthor({ name: `คำสั่งข่วยเหลือ - MAO` , iconURL: 'https://cdn.discordapp.com/attachments/1061529756203499571/1071323436057645126/Settings_S2.png'})
            .setDescription("นี้คือคำสั่งทั้งหมดของหนู !\n.....\nกำลังปรับปรุ่งระบบ help : ตอนนี้สามารถ ดู Command ได้ที่ https://bit.ly/MAO5263")
            /*.addFields(
                { name: 'แมว หรือ <@1060182470630330529>', value: 'เป็นการคุยกับบอท', inline: true },
                { name: 'หิว หรือ กิน', value: 'เป็นการใช้ระบบสุ่มอาหาร', inline: true },
                { name: 'มีม หรือ meme', value: 'เป็นการให้บอทหามีมให้', inline: true },
                { name: 'สุ่ม หรือ เลข', value: 'เป็นการใช้ระบบสุ่มตัวเลข', inline: true },
                { name: 'mao!setting', value: 'เป็นการดูตั้งค่าของบอท', inline: true },
                { name: 'mao!help', value: 'เป็นการดูคำสั่งทั้งหมดของบอท', inline: true },
                { name: 'mao!rps', value: 'เป็นการเล่นเกมเป่ายิงชุบกับบอท', inline: true },
            )*/
            .setThumbnail("https://cdn.discordapp.com/attachments/1024635780360056883/1069968391290503208/00006-3271186202-Anime_girl_cat.png")
            .setTimestamp()
            .setFooter({ text: 'Bot help - V.0.1 BETA'});

        message.reply({ embeds: [CatHelp] })
    }
}