const {EmbedBuilder} = require('discord.js');

module.exports = {
    config: {
        name: 'setting',
        description: 'แสดงตั้งค่าทั้งหมดของบอท',
        usage: `mao!setting`,
    },
    async run (bot,message,args) {
        
        const CatSetting = new EmbedBuilder()
            .setColor(0)
            .setTitle(`การตั้งค่า - Mao`)
            .setDescription("ภาษา : ไทย-TH : ✅ | English-EN : ✅ | 中國人-CN : 🟨 | Français-FR : 🟨\n...\nSlash command :  ❌\n...\nEmbed message : 🟨\n...\nคำหยาบ :  ✅  (อยู่ในระดับสูงสุด)\nหมายเหตุ : หากเปิดอยู่คำตอบที่บอทตอบบางคำอาจจะเป็นคำพูดที่ไม่เหมาะสม !\n...\nPrefix : `แมว` หรือ <@1060182470630330529>")
            .setThumbnail("https://cdn.discordapp.com/attachments/988037995531759658/1061963539671171162/562-5626046_anime-cat-girl-kawaii-removebg-preview.png")
            .setTimestamp()
            .setFooter({ text: 'Bot setting (เปลื่ยนแปลงไม่ได้ Haha!) - V.0.1 BETA'});

        message.reply({ embeds: [CatSetting] })
    }
}