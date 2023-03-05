const { SlashCommandBuilder,EmbedBuilder } = require(`@discordjs/builders`)

module.exports = {
    data: new SlashCommandBuilder()
    .setName("food")
    .setDescription("ให้บอทสุ่มอาหารให้"),
    async execute(interaction, client) {
        const dbFood = [
            "ข้าวไข่เจียว","ข้าวหมูทอด","ข้าวไก่ย่าง","น้ำแข็งใส่","ข้าวไข่ดาว","ข้าวผัดกระเพราหมูสับ","ข้าวหน้าไก่","หมี่กะทิ",
            "ข้าวผัดไข่","ยำวุ้นเส้น","ข้าวผัดปู","ข้าวห่อหมกมะพร้าวอ่อน","ข้าวผัดต้มยำกุ้ง","ส้มตำไข่ฟู","ข้าวคะน้าหมูกรอบเจ",
            "ข้าวแกงเขียวหวานเจ","ราดหน้า","ส้มตำผลไม้","ยำไข่ดาว","ข้าวต้มกุ้ง","ก๋วยเตียวลุยสวน","ก๋วยเตียวเรือ อยุธยา",
            "ขนมทองหยิบ","ขนมทองหยอด","ขนมกล้วย","ขนมทองเอก","ขนมเผือกกวน","ไส้กรอกอีสาน","ข้าวอบกุนเชียง",
            "ข้าวหมูผัดไข่","ข้าวหอยนางรมชุบแป้งทอด","ข้าวหอมใหญ่ชุบแป้งทอด","ส้มตำไทย","ต้มยำกุ้ง","ทอดมันปลากราย",
            "ไข่ทรงเครื่อง","ขนมจีนน้ำยากะทิ","เต้าหูคลุกไข่ทอด","ลาบหมู"
        ]
        const FoodAns= Math.floor(Math.random() * dbFood.length);
        const FoodMsg = new EmbedBuilder()
            .setColor(14024959)
            .setAuthor({ name: `คุณ ${interaction.user.username} ลองกิน ${dbFood[FoodAns]} ดูไหม` , iconURL: 'https://cdn.discordapp.com/attachments/1071401485239332864/1073205416328183908/00000-4163793642-Anime_girl_cat_purple_smile.png'})
            .setTimestamp()

        await interaction.reply({ embeds : [FoodMsg] })
    }
}