const {EmbedBuilder} = require('discord.js');

module.exports = {
    config: {
        name: 'gpt',
        description: 'Use chat gpt',
        usage: `mao!gpt`,
    },
    async run (client,message,args) {
        if (!args[0]) {
            const Notgpt = new EmbedBuilder()
                .setColor(4194164)
                .setTitle(`Gpt AI - Chat`)
                .setDescription("กรุณาพิมพ์คำสั่งให้ถูกต้อง !\nคำสั่ง : mao!gpt <prompt>\nเช่น : mao!gpt hello / mao!gpt สวัสดี หรือ ข้อความอะไรก็ได้")
                .setThumbnail("https://www.bing.com/th?id=OSK.b31f563c6377b6a1f180c5fcc837290c&w=116&h=116&c=7&o=6&pid=SANGAM")
                .setTimestamp()
                .setFooter({ text: 'OpanAI - Gpt'});

            message.reply({  embeds: [Notgpt] });
        } else {
            message.reply(`กำลังประมวลผลข้อมูล ...`);
            const UserText = args[0];

            const { Configuration , OpenAIApi } = require('openai');
            const configuration = new Configuration({
                organization: process.env.OPENAIORG,
                apiKey: process.env.OPENAIKEY,
            });
            const openai = new OpenAIApi(configuration);
    
            const gptResponse = await openai.createCompletion({
                model: "davinci",
                prompt: `${UserText}`,
                temperature: 1,
                max_tokens: 100,
                stop: ["ChatGPT:","FujaTyping:"],
            })

            const Responsegpt = new EmbedBuilder()
                .setColor(4194164)
                .setTitle(`Gpt AI - Chat`)
                .setDescription("Chat Gpt : "+`${gptResponse.data.choices[0].text}`)
                .setThumbnail("https://www.bing.com/th?id=OSK.b31f563c6377b6a1f180c5fcc837290c&w=116&h=116&c=7&o=6&pid=SANGAM")
                .setTimestamp()
                .setFooter({ text: 'OpanAI - Gpt'});

            message.reply({  embeds: [Responsegpt] });
    
        }
    }
}