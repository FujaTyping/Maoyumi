const {Client, GatewayIntentBits, DiscordAPIError, Message, channelLink, EmbedBuilder, ActivityType} = require('discord.js');
const dotenv = require('dotenv')
const prefix = "แมว";

dotenv.config();

const client = new Client(
    {
        intents:[
            GatewayIntentBits.Guilds,
            GatewayIntentBits.GuildMessages,
            GatewayIntentBits.MessageContent,
            GatewayIntentBits.GuildMembers,
        ]
    }
);

/*
const { Configuration , OpenAIApi } = require('openai');
const configuration = new Configuration({
    organization: process.env.OPENAIORG,
    apiKey: process.env.OPENAIKEY,
});
const openai = new OpenAIApi(configuration);
*/

/*
const gptResponse = await openai.createCompletion({
    model: "davinci",
    prompt: `ChatGPT เป็นแชทบอทที่เป็นมิตร.\n\ 
    ChatGPT: ฉันจะทำอะไรให้คุณได้บ้าง ?\n\
    ${message.author.username}: ${message.content}\n\
    ChatGPT:`,
    temperature: 1,
    max_tokens: 100,
    stop: ["ChatGPT:","FujaTyping:"],
})
*/

// Chat Bot
client.on('messageCreate', async message => {
    //if(message.channelId == "1060184115447599194" || message.channelId == "1061522412715376690" || message.channelId == "1061529756203499571") {
    if(message.content.includes("แมว") || message.content.includes('<@1060182470630330529>') || message.content.includes('Mao') || message.content.includes('เเมว')) {
        if(message.author.bot) return;

        // Gpt Response here

        const MiuDatabasesAnswer = [
            // Message
            `<@${message.content.id}> มีอะไรหรอคะ ?` , `<@${message.content.id}> เรียกทำไมหรอ ?`, "🤔 🤔 🤔", "opps !", "หนูไปทำอะไรให้ ?",
            "ไม่รู้อะ", "ใช่เลย !" , "ขอโทษได้ไหมล่ะ !" , "😆" , "😔", "หนูทำอะไรผิด ?",
            "มาวินอย่ากินหนูนะ !!!" , "🤬" , "😡" , "It's time to play !", "ได้เวลาเล่นแล้ว !",
            "เรื่องของมึง !" , "I don't care !" , "เสือก !" , "😭" , "😎",
            "ไม่ใช่อะ !" , "ไม่ใช่คะ !" , "Thank Thank you Thank Thank Thank you Thank Thank you Thank Thank Thank you , ขอบคุณคราบบ ขอบคุณคะ ขอบคุณคราบบ ขอบคุณคะ",
            "😳" , "❤️ 🐱" , "Ok" , "หนูไม่อยากคุยกับคุณแล้ว !", "หนูกำหมัดแล้วนะ !",
            "พ่อมึงอะ" , "แม่มึงอะ" , "Never Gonna Give You Up Never Gonna Let You Down ~~~",
            "Free bobux at 👇🏻👇🏻👇🏻\nhttps://cn.roblox.cat/freebobuxhack-real/works" , "....." , "I want to play gay with you",
            "ไม่ตลกนะ !" , "🇹🇭" , "555+" , "🎉🎉 Happy New Year 2023 [รู้นะว่ามันผ่านมาแล้ว !]" , "Ok" , "Ok and?" ,
            "No !" , "Yess !" , "Yeah !" , "Nahhh" , "Ohhhh" , "Ahhhhh" , "I don't know!" , "หนูไม่เข้าใจคะ ?",
            `${message.content} คืออะไรอะ ?` , "มันคืออะไร ? มันคืออะไร ?" ,
            `${message.content} พ่อมึงอะ` , `${message.content} แม่มึงอะ` , "ออกไปไกลๆๆๆ" , "🤗" , "🤫 🤫 🤫",
            "ระวังตัวให้ดีนะ !!!" , "ไม่อยากคุยด้วย !" , "หนูงอนแล้วนะ !" , "เจ๋งไปเลย !" , "สุดยอด !" , "ขอบคุณนะ !" , "🙏🏻 🙏🏻 🙏🏻" ,
            "กาก" , `ขอ 1-1 หน่อย\nถ้า ${message.author.username} ชนะ : ให้หนูทำอะไรก็ได้\nถ้าหนูชนะ : ให้มาวินหยุดกินแมว\nOk?` ,
            "ไม่ได้ตึง !" , "โคตรตึง !" , "🤖" , "👻" , "🎲" , "ยิ้มกว้างๆ 📸" , "สัตว์" , "E ดอก" , "เฮงซวย" , "ไอ้หน้าโง่" , "LOSER :P",
            `${message.author.username} หนูอยากกิน me-o อะ` , "ตลกจังเลย [...]" , `${message.author.username} ไม่ได้ตึง` , `${message.author.username} กาก`,
            "Noob :P" , "มาเล่นเก ||ม|| กันดีกว่า !" , "Speak Thai please !" , "你好 !" , "My Friends : ChatGPT",
            "ระวังโดนเกเล่นนะ !" , "ไม่ได้ถาม !" , "🏳‍🌈" , "🥰" , "😇" , "😈" , "😱" , "คุณรู้หรื่อไม่ ? : Miu เป็นเพื่อนที่ดีที่สุดของหนูเลย !",
            "หุบปากสะ !" , "😛" , "💀 💀 💀" , "😖" , "😘" , "Kiss me please !" , "I'm not robot\nI'm Just A Little Cat",
            "น่าสนุกนะ !" , "😶" , "🧐" , "😲" , "อย่าโกธรหนูนะ !" , "หายตัว ตายตัวไปแล้ว ~~~" , "WTH !", "คุณรู้หรือไม่ ? : Roberto Nevilis เป็นผู้คิดค้นการบ้าน !\nอยากบอกอะไรกับเขาไหม ?",
            "อืม..." , "อ่าว !" , "ก็มาดิ ไม่ได้กลัว !" , "AYOOO !" , "AAAAAAAAAAAAAAAAAAAAA", "หนูยอมทำก็ได้คะ ?",
            "อะไรกัน ?" , "มีแบบนี้ด้วยหรอ ?" , "กลัวหรอ ?" , `ระวังตัวไว้ ${message.author.username} เดี๋ยวจะไปหา !` , "คุณรู้หรือไม่ ? : RoV เกมกาก" ,
            "คุณรู้หรือไม่ ? : เมื่อก่อนฉันใช้ Open ai / ChatGPT เป็นสมองของฉัน!" , "หนูจะไม่ทนแล้ว !" , `สุดจะทนกับคุณแล้ว ${message.content.username} !` , 
            "Meow Meow~~\nเป็นเสียงเรียกของแมว !" , "คุณรู้หรอไม่ ? : FujaTyping สร้างฉันขึ้นมา" , "♀️", "พูดไม่เพราะเลย !", "แย่วะ !",
            "I Love You" , "I  ❤️ You" , "ขอบคุณที่แจ้งให้ทราบนะคะ" , `โป้ง ${message.author.username} !` , "Do you want to play MINECRAFT ?",
            "👋🏻 👋🏻 👋🏻" , "D" , "👉🏻 👌🏻" , "Meow~~" , "❌ Social credit : -999999" , "✅ Social credit : +1" , "SOS" , "Help me !",
            "WTF !" , "200 IQ\nBe like !" , `หนูเหนื่อยกับคุณแล้ว ${message.author.username} !` , "คุณพูดอะไรอะ หนูฟังไม่รู้เรื่อง !" , 
            "Who ask ?" , "Didn't ask !" , "ใครถาม ?" , `หนูจะเอาชื่อ ${message.author.username} ไปใส่ใน https://gay.th` ,
            "🫶🏻" , "👀" , "🎧 🎶" , "🏀 Play basketball with me please !" , "🎱" , "Tell me your wish !" , "👽" , "คุณรู้หรอไม่ ? : BloxFruits เป็นเกมที่น่าเบื่อมากๆ",
            "ไม่ได้ถามคะ !" , "💣 (Bomb)\n⬇️\n⬇️\n⬇️\n🏘️ <<< (Your house)" , `แย่จัง ${message.author.username} วันนี้เป็นวันโชคร้ายของเธอนะ !\nดูแลตัวเองด้วยละ !` , `ดีใจจัง ${message.author.username} วันนี้เป็นวันโชคดีของเธอนะ !`,
            "⛈️ วันนี้อากาศดีจังเลย ! [Burh]" , "Me" , "หนู" , "I here" , "📸📸 Caught in 4K  📸📸" , "Hello ?" , "Are you serious right now ?" , "Are you serious !",
            `${message.content} คืออะไรอะ ?` , "ไม่มีอะไร !" , "วันนี้~~~ เป็นวันสงกรานต์" , "Do you like anime girl cat ?" , "สงกรานต์ มาสาดน้ำกัน มาสาดน้ำกัน~~~" , "โอเครๆ" , "เคๆ" , "เครๆ",
            "คุณรู้หรือไม่ ? : Roblox เมื่อก่อนชื่อ DynaBlocks" , "Today is WEDNESDAY !\n.....\nI'm ready for their stones\nI'll dance, dance, dance\nWith my hands, hands, hands\nAbove my head, head, head\nLike Jesus said~~~",
            "คุณรู้หรือไม่ ? : Friday night funkin เป็น เกมแนวกดเพลง" , "Error : 404 [Just kidding]" , "Error : 403 [Just kidding]",
            "Huhhh ?" , "What ?" , "I love emoji  👌🏻" , "🫱🏻 🥜" , "🤌🏻" , "👎🏻" , "👍🏻" , "That's cool" , "Cool" , "Do you see that ?",
            "เห็นนั้นไหม ?" , "มีใครอยู่ข้างหลังคุณอะ !!" , "👻 แหร่ๆๆ\nน่ากลัวไหม ?" , "ฮั่นแน่ !" , "จ๊ะเอ๋ตัวเอง !" , "เชื่ยๆ" , "ลองดูคลิปนี้ดูสิ : https://bit.ly/3jXwWMq",
            // Music 
            /*
            "ลองฟังเพลงนี้ดูสิ : https://bit.ly/3ItInWl", "ลองฟังเพลงนี้ดูสิ : https://bit.ly/3Xc1YOJ" , "ลองฟังเพลงนี้ดูสิ : https://bit.ly/3ihqM9s" , "ลองฟังเพลงที่ดูสิ : https://bit.ly/3XckEhn",
            "ลองฟังเพลงนี้ดูสิ : https://bit.ly/3GJsRUW" , "ลองฟังเพลงนี้ดูสิ : https://bit.ly/3Cwc9FV" , "ลองฟังเพลงนี้ดูสิ : https://bit.ly/3jNQYIY" , "ลองฟังเพลงนี้ดูสิ : https://bit.ly/3ZgaONp",
            "ลองฟังเพลงนี้ดูสิ : https://bit.ly/3WWnJlV" , "ลองฟังเพลงนี้ดูสิ : https://bit.ly/3ikMLfD" , "ลองฟังเพลงนี้ดูสิ : https://bit.ly/3QlbkFT" , "" ,
            */
            // Joke
            "หนูมีมุขตลกมาเล่าให้ฟัง !\n.....\nวันอะไรไม่ควรสระผม\nเฉลย : วันพฤหัส เพราะวันพฤหัส สระ บ่ ดี" , "หนูมีมุขตลกมาเล่าให้ฟัง !\n.....\nเลขอะไรเอ่ย มาก่อน 1 2 3 4\nเฉลย : ก็ 1 2 3 3 ไง" , "หนูมีมุขตลกมาเล่าให้ฟัง !\n.....\nนกอะไรอยู่ในทะเล\nเฉลย : นกอินทรี (Nok in sea)",
            "หนูมีมุขตลกมาเล่าให้ฟัง !\n.....\nลิงอะไรที่เราชอบ\nเฉลย : ลิงจั๊กๆ รักจริงๆ" , "หนูมีมุขตลกมาเล่าให้ฟัง !\n.....\nปีอะไรมีหลายสี\nเฉลย : ปีโป้" , "หนูมีมุขตลกมาเล่าให้ฟัง !\n.....\nมดอะไรใหญ่กว่ามดเอ็กซ์\nเฉลย : มดเอ็กซ์แอล",
            "หนูมีมุขตลกมาเล่าให้ฟัง !\n.....\nแมวอะไรเอ่ย ห้ามขับรถ?\nเฉลย : แมวเล้า (เมาแล้ว)" , "หนูมีมุขตลกมาเล่าให้ฟัง !\n.....\nแมวอะไรอยู่ใต้ดิน\nเฉลย : แมวกัน (มันแกว)" , "หนูมีมุขตลกมาเล่าให้ฟัง !\n.....\nทำไม ปลาจึงวางไข่\nเฉลย : เพราะ ถ้าโยน ไข่จะแตก"
        ];

        const MiuResponseAnswer = Math.floor(Math.random() * MiuDatabasesAnswer.length);

        /*
        const ResponseAnswer = new EmbedBuilder()
            .setColor(16711680)
            .setTitle(`คำตอบของคุณ - ${message.author.username}`)
            //.setDescription(`${gptResponse.data.choices[0].text}`)
            //.setDescription(`ตอนนี้ปิดปรับปรุ่งระบบ ChatBot 🚫\nกำลังปรับปรุ่ง : prefix กับ Database !\n.....\nขออภัยในความไม่สะดวกนะคะ !`)
            .setDescription(MiuDatabasesAnswer[MiuResponseAnswer])
            .setThumbnail(message.author.avatarURL())
            .setTimestamp()
            .setFooter({ text: 'ฟังไทยได้แล้วไว้ยยยยยยย!!!!'});
        */

        message.reply(MiuDatabasesAnswer[MiuResponseAnswer]);
    }
});
console.log("[CMD] : Loaded ChatBot")

// RandomFood
client.on('messageCreate', async message =>{
	if(message.content.includes("หิว") || message.content.includes("กิน")) {
        if(message.author.bot) return;

        const ListFood = [ 
            "กินไอติม ดวงพรปะ !" , "กินไก่ ร้านวาสนาไหม ?\nอร่อยนะ" , "ลองกินราดหน้านายพลดูสิ !" , "ซุ้มอีสานก็อร่อยเหมือนกันนะเนี้ย !" , "กินก๋วยเตี๋ยว สุวิมลปะ !",
            "น้ำดื่มสิงค์ ไหม?" , "ไม่รู้เหมือนกันคะ !" , "ไม่ต้องกินข้าวก็ได้คะ !" , "ลองกินข้าวหมูกรอบ ร้านนุช ไหม?" , "กินข้าวขาหมู ร้านนุชปะ !" , "กิขข้าวมันไก่ ร้านนุช ไหม ?",
            "ลองกินร้าน จอมยุทธ ดูไหม ?" , "ร้าน โตเต ก็อาาาาร่อยนะ !" , "ลองกินข้าวมันไก่ เมวิกา มั้ย?" , "กินน้า Eat น้ำแข็งใสดูสิ" , "ข้าวราดแกง อาบังก็อร่อยนะ" , "อยากกิน ชูซิ-ลูกชิ้น จัง !",
        ];

        const FoodResponseAnswer = Math.floor(Math.random() * ListFood.length);

        /*
        const RandomFoodList = new EmbedBuilder()
            .setColor(2795263)
            .setTitle(`${message.author.username} - เมนูนี้คุณคงจะชอบนะ`)
            .setDescription(ListFood[FoodResponseAnswer])
            .setThumbnail(message.author.avatarURL())
            .setTimestamp()
            .setFooter({ text: 'ระบบสุ่มอาหาร (ฐานข้อมูลยังอยู่ใน Hatyaiwittayalai school)'});
        */

		message.reply(ListFood[FoodResponseAnswer])
	}
});
console.log("[CMD] : Loaded RandomFood")

//RandomMeme
const got = require('got');

client.on(`messageCreate`, async message => {
    if(message.content.includes("meme") || message.content.includes("มีม")) {
        if(message.author.bot) return;
        message.reply(`รอแปปหนึงนะคะ กำลังหามีมให้ <@${message.author.id}> 🔎\n`)

        got("https://meme-api.com/gimme").then( (response) =>{
            const data = JSON.parse(response.body);
            /*
            const MemeResponse = new EmbedBuilder ()
                .setColor(16777215)
                .setTitle(`หนูมีมีมให้คุณด้วยละ - ${message.author.username}`)
                .setDescription("หนูหวังว่ามีมนี้คุณจะชอบนะ 🤗")
                .setThumbnail(message.author.avatarURL())
                .setImage(`${data['url']}`)
                .setTimestamp()
                .setFooter({ text: 'Use : MemeAPI'});
            */

            message.reply({files: [`${data['url']}`]})
        })
    }
});
console.log("[CMD] : Loaded RandomMeme")

// RandomNumber
client.on('messageCreate' , async message => {
    if(message.content.includes("สุ่ม") || message.content.includes("เลข")) {
        if(message.author.bot) return;

        const NumberRespones = Math.floor(Math.random() * 45);

        /*
        const RandomNumLRist = new EmbedBuilder()
            .setColor(524494)
            .setTitle(`หนูสุ่มตัวเลขให้คุณแล้วนะ - ${message.author.username}`)
            .setDescription("เรามีผู้โชคดี 🎉🎉🎉\n เลขที่ "+NumberRespones)
            .setThumbnail(message.author.avatarURL())
            .setTimestamp()
            .setFooter({ text: 'ระบบสุ่มตัวเลข ตั้งแต่ 1-44'});
        */

        message.reply("เรามีผู้โชคดี 🎉🎉🎉\n เลขที่ "+ NumberRespones)
    }
});
console.log("[CMD] : Loaded RandomNumber")

// BotSetting
client.on('messageCreate' , async message => {
    if(message.content == "😺 ตั้งค่า" || message.content == "😺 setting") {
        if(message.author.bot) return;

        const CatSetting = new EmbedBuilder()
            .setColor(0)
            .setTitle(`การตั้งค่า - Mao`)
            .setDescription("ภาษา : ไทย-TH : ✅ | English-EN : ✅ | 中國人-CN : 🟨 | Français-FR : 🟨\n...\nSlash command :  ❌\n...\nEmbed message : 🟨\n...\nคำหยาบ :  ✅  (อยู่ในระดับสูงสุด)\nหมายเหตุ : หากเปิดอยู่คำตอบที่บอทตอบบางคำอาจจะเป็นคำพูดที่ไม่เหมาะสม !\n...\nPrefix : `แมว` หรือ <@1060182470630330529>")
            .setThumbnail("https://cdn.discordapp.com/attachments/988037995531759658/1061963539671171162/562-5626046_anime-cat-girl-kawaii-removebg-preview.png")
            .setTimestamp()
            .setFooter({ text: 'Bot setting (เปลื่ยนแปลงไม่ได้ Haha!) - V.0.1 BETA'});

        message.reply({ embeds: [CatSetting] })
    }
});
console.log("[CMD] : Loaded BotSetting")

//BotHelp
client.on('messageCreate' , async message => {
    if(message.content == "😺 ช่วย" || message.content == "😺 help") {
        if(message.author.bot) return;

        const CatHelp = new EmbedBuilder()
            .setColor(16580861)
            .setTitle(`คำสั่งข่วยเหลือ - Mao`)
            .setDescription("นี้คือคำสั่งทั้งหมดของหนู !")
            .addFields(
                { name: 'แมว หรือ <@1060182470630330529>', value: 'เป็นการคุยกับบอท', inline: true },
                { name: 'หิว หรือ กิน', value: 'เป็นการใช้ระบบสุ่มอาหาร', inline: true },
                { name: 'มีม หรือ meme', value: 'เป็นการให้บอทหามีมให้', inline: true },
                { name: 'สุ่ม หรือ เลข', value: 'เป็นการใช้ระบบสุ่มตัวเลข', inline: true },
                { name: '😺 ตั้งค่า หรือ 😺 setting', value: 'เป็นการดูตั้งค่าของบอท', inline: true },
                { name: '😺 ช่วย หรือ 😺 help', value: 'เป็นการดูคำสั่งทั้งหมดของบอท', inline: true },
            )
            .setThumbnail("https://cdn.discordapp.com/attachments/988037995531759658/1061963539671171162/562-5626046_anime-cat-girl-kawaii-removebg-preview.png")
            .setTimestamp()
            .setFooter({ text: 'Bot help - V.0.1 BETA'});

        message.reply({ embeds: [CatHelp] })
    }
});
console.log("[CMD] : Loaded BotHelp")

// Web UI

const app = require('express')();
app.get("/", (req, res) => {
    res.send("Online!")
})

app.listen(5555)

console.log("----------")
console.log('[WEB] : Now online at port : 5555')

client.on('ready', ()=>{
    console.log('[BOT] : Mao is wake up!')
    client.user.setPresence({ activities: [{ name: '😺 help | Mao == แมว!' , type: ActivityType.Streaming , url: "https://www.twitch.tv/mao" }]});
})

//Join servermessage
client.on('guildCreate', guild => {
    const ServerMessage = new EmbedBuilder()
    .setColor(721032)
    .setTitle(`ขอบคุณที่เชิญหนูเข้า - Server นี้นะ`)
    .setDescription("สวัสดีทุกคนนะคะหนูชื่อ - Mao\nเป็น ChatBot ที่สร้างจาก FujaTyping และ Miu\n.....\nคำสั่งขอหนู ณ ตอนนี้\n- ใช้คำสั่ง 😺 help เพื่อดูคำสั่งทั้งหมด")
    .setImage("https://cdn.discordapp.com/attachments/988037995531759658/1063060259524059156/MaobotWelcome.png")
    .setTimestamp()
    .setFooter({ text: 'Welcome message from system !'});

    guild.systemChannel.send({ embeds: [ServerMessage] })
});
console.log("[GUILD] : Loaded JoinServer")

//User userjoin
client.on('guildMemberAdd', (member)  => { 
    const channel = member.guild.channels.cache.get('1015645355406278679');

    const JoinMsg = new EmbedBuilder()
        .setColor(2752256)
        .setTitle(`ยินดีต้อนรับสมาชิกใหม่ - Welcome`)
        .setDescription(`ยินดีต้อนรับ <@${member.id}> เข้าสู่ YDev Community !\nYDev Community เป็นสถานที่ที่จะสามารถ Hang out / หาเพื่อน / พูดคุย กันได้\n.....\n- กรุณาอ่านกฏของดีสที่ <#1026828154469355541>\n- อย่างลืมไปเช็คประกาศบ่อยด้วยละ <#1015943699827527710>\n- กิจกรรมก็มีบ่อยๆนะ <#1015943896800448533>`)
        .setTimestamp()
        .setImage("https://cdn.discordapp.com/attachments/1024635780360056883/1063643581690155148/UserWelcome.png")
        .setFooter({ text: 'Welcome message from system !'});

    channel.send({ embeds: [JoinMsg] })
})
console.log("[GUILD] : Loaded UserjoinMsg")

//User userleave
client.on('guildMemberRemove', (member)  => { 
    const channel = member.guild.channels.cache.get('1015645355406278679');

    const LeaveMsg = new EmbedBuilder()
        .setColor(16711680)
        .setTitle(`สมาชิกได้ออกไปแล้ว - Goodbye`)
        .setDescription(`ลาก่อน <@${member.id}> ได้ออกจาก YDev Community !\nเอาไว้เจอกันใหม่นะครับ Goodluck !`)
        .setTimestamp()
        .setImage("https://cdn.discordapp.com/attachments/988037995531759658/1063640374393966592/UserLeave.png")
        .setFooter({ text: 'Leave message from system !'});

    channel.send({ embeds: [LeaveMsg] })
})
console.log("[GUILD] : Loaded UserleaveMsg")

client.login(process.env.TOKEN)
