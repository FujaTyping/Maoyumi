const { SlashCommandBuilder,EmbedBuilder } = require(`@discordjs/builders`)
const wait = require('node:timers/promises').setTimeout;
const dotenv = require('dotenv');
const { OpenAIApi, Configuration } = require("openai")
const config = new Configuration({
    apiKey: process.env.OPENAI_KEY
})
const openai = new OpenAIApi(config)

const cooldown = new Set();

function addToCooldown(ID) {
cooldown.add(ID);
setTimeout(() => {
    cooldown.delete(ID);
}, 60000 /* 5 seconds */);
}

module.exports = {
    data: new SlashCommandBuilder()
    .setName("imagine")
    .setDescription("ให้บอทสร้างรูปภาพให้")
    .addStringOption(option =>
        option.setName('propmt')
            .setDescription('กำหนดสิ่งที่จะให้บอทวาด')
            .setRequired(true)
    ),
    async execute(interaction, client) {
        const Authorprofile = client.config.defultauthorprofile
        if (cooldown.has(interaction.user.id)) {
            interaction.reply(`⏰ คุณ <@${interaction.user.id}> หนูไม่ได้วาดรูปได้เร็วขนาดนั้น !\nกรุณารอ \`1 นาที\` เพื่อให้หนูวาดรูปให้อีกครั้ง`)
        } else {
            // const seed = Math.floor(Math.random() * 1000);
            const Msgname = interaction.user.username
            const prompt = interaction.options.getString('propmt') ?? 'No prompt provided !';
    
            const Loadpic = new EmbedBuilder()
                .setColor(14024959)
                .setAuthor({ name: `กำลังสร้างภาพให้กับ ${Msgname} 🖌` , iconURL: `${Authorprofile}`})
                .setFooter({ text: '⚠ อาจจะใช้เวลา 10 - 20 วินาที ในการสร้างรูปภาพ'})
                .setTimestamp()
    
            await interaction.reply({ embeds : [Loadpic] })
            await wait(2000);
            try {
                response = await openai.createImage({
                    prompt,
                    n:1,
                    size:"512x512"
                })
                image_url = response.data.data[0].url;
                const SendImg = new EmbedBuilder()
                    .setColor(14024959)
                    .setAuthor({ name: `สร้างภาพให้กับ ${Msgname} เรียบร้อยแล้วคะ !` , iconURL: `${Authorprofile}`})
                    .setDescription(`คุณให้หนูวาด : \`${prompt}\`\n(ยิ่งกำหนดลายละเอียดภาพเยอะภาพจะสวยขึ้นนะคะ !)`)
                    .setImage(`${image_url}`)
                    .setTimestamp()
                await interaction.editReply({ embeds : [SendImg] });
                addToCooldown(interaction.user.id);
            } catch (error) {
                const Err = new EmbedBuilder()
                    .setColor(16711680)
                    .setAuthor({ name: `❌ Error เกิดอะไรขึ้น ?` , iconURL: `${Authorprofile}`})
                    .setDescription("```diff\n- "+`${error}`+" try again later !\n```")
                    .setTimestamp()
                await interaction.editReply({ embeds : [Err] });
            }
        }
    }
}