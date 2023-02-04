const {Client, GatewayIntentBits, DiscordAPIError, Message, channelLink, EmbedBuilder, ActivityType, Collection} = require('discord.js');
const dotenv = require('dotenv')
const prefix = "mao!";

console.log(`[WORKER] : Starting`);

dotenv.config();

console.log(`[CLIENT] : Creating instance`);
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
console.log(`[CLIENT] : Finish create instance`);

console.log('[CLIENT] : Loading commands');
// Readcommandfile
const fs = require("fs");
let CommandCount = 0;

client.commands = new Collection();

const commandFolders = fs.readdirSync(`./Commands/`)

for (const folder of commandFolders) {
    const commandFiles = fs.readdirSync(`./Commands/${folder}`).filter(file => file.endsWith('.js'));

    for (const file of commandFiles) {
        const props = require(`./Commands/${folder}/${file}`);
        console.log(`[FS] : Loaded ${file}`)
        CommandCount=CommandCount+1;
        client.commands.set(props.config.name, props)
    }

}
console.log(`[FS] : Successfully loaded ${CommandCount} commands`);

client.on("messageCreate", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if(!cmd.startsWith(prefix)) return;

    let commandfile = client.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(client,message,args);
});

// ---------------------------------------------------------------------

// Chat Bot
client.on('messageCreate', async message => {
    //if(message.channelId == "1060184115447599194" || message.channelId == "1061522412715376690" || message.channelId == "1061529756203499571") {
    if(message.content.includes("แมว") || message.content.includes('<@1060182470630330529>') || message.content.includes('MAO') || message.content.includes('Mao') || message.content.includes("เเมว")) {
        if(message.author.bot) return;

        let ChatArray = message.content.split(" ");
        let Chatargs = ChatArray.slice(1);
        
        let MiuDatabasesAnswer = [];

        if (!Chatargs[0]) {
            MiuDatabasesAnswer = [`${message.author.username} มีอะไรให้หนูช่วยไหม ?`,`มีอะไรหรอ ${message.author.username} ?`,`เรียกทำไมหรอ ${message.author.username} ?`];
        } else {
            MiuDatabasesAnswer = [
                // Message
                "🤔 ", "opps !", "หนูไปทำอะไรให้ ?",
                "ไม่รู้อะ", "ใช่เลย !" , "ขอโทษได้ไหมล่ะ !" , "😆" , "😔", "หนูทำอะไรผิด ?",
                "มาวินอย่ากินหนูนะ !!!" , "🤬" , "😡" , "It's time to play !", "ได้เวลาเล่นแล้ว !",
                "เรื่องของมึง !" , "I don't care !" , "เสือก !" , "😭" , "😎",
                "ไม่ใช่อะ !" , "ไม่ใช่คะ !" , "RIP MIU (My Best Friends)\n`2018-2023`" ,
                "😳" , "❤️ 🐱" , "Ok" , "หนูไม่อยากคุยกับคุณแล้ว !", "หนูกำหมัดแล้วนะ !",
                "||พ่อ||มึงอะ" , "||แม่||มึงอะ" , "🎁" , "🙄" ,
                "....." , "☠" , "💀" ,
                "ไม่ตลกนะ !" , "🇹🇭" , "555+" , "Ok" , "Ok and?" ,
                "No !" , "Yess !" , "Yeah !" , "Nahhh" , "Ohhhh" , "Ahhhhh" , "I don't know!" , "หนูไม่เข้าใจคะ ?",
                `${message.content} คืออะไรอะ ?` , "มันคืออะไร ? มันคืออะไร ?" ,
                `${message.content} ||พ่อ||มึงอะ` , `${message.content} ||แม่||มึงอะ` , "ออกไปไกลๆๆๆ" , "🤗" , "🤫 ",
                "ระวังตัวให้ดีนะ !!!" , "ไม่อยากคุยด้วย !" , "หนูงอลแล้วนะ !" , "เจ๋งไปเลย !" , "สุดยอด !" , "ขอบคุณนะ !" , "🙏🏻 " ,
                "กาก" , `ขอ 1-1 หน่อย\nถ้า ${message.author.username} ชนะ : ให้หนูทำอะไรก็ได้\nถ้าหนูชนะ : ให้มาวินหยุดกินแมว\nOk?` ,
                "ไม่ได้ตึง !" , "โคตรตึง !" , "🤖" , "👻" , "🎲" , "ยิ้มกว้างๆ 📸" , "สัตว์" , "E ดอก" , "เฮงซวย" , "ไอ้หน้าโง่" , "LOSER :P",
                `${message.author.username} หนูอยากกิน me-o อะ` , "ตลกจังเลย [...]" , `${message.author.username} ไม่ได้ตึง` , `${message.author.username} กาก`,
                "Noob :P" , "มาเล่นเก ||ม|| กันดีกว่า !" , "Speak Thai please !" , "你好 !" , "My Friends : ChatGPT and Miu",
                "ระวังโดนเกเล่นนะ !" , "ไม่ได้ถาม !" , "🏳‍🌈" , "🥰" , "😇" , "😈" , "😱" , "คุณรู้หรื่อไม่ ? : Miu เป็นเพื่อนที่ดีที่สุดของหนูเลย !",
                "หุบปากสะ !" , "😛" , "💀 " , "😖" , "😘" , "Kiss me please !" ,
                "น่าสนุกนะ !" , "😶" , "🧐" , "😲" , "อย่าโกธรหนูนะ !" , "หายตัว หายตัวไปแล้ว ~~~" , "WTH !", "คุณรู้หรือไม่ ? : Roberto Nevilis เป็นผู้คิดค้นการบ้าน !\nอยากบอกอะไรกับเขาไหม ?",
                "อืม..." , "อ่าว !" , "ก็มาดิ ไม่ได้กลัว !" , "AYOOO !" , "AAAAAAAAAAAAAAAAAAAAA", "หนูยอมทำก็ได้คะ ?",
                "อะไรกัน ?" , "มีแบบนี้ด้วยหรอ ?" , "กลัวหรอ ?" , `ระวังตัวไว้ ${message.author.username} เดี๋ยวจะไปหา !` ,
                "หนูจะไม่ทนแล้ว !" , `สุดจะทนกับคุณแล้ว ${message.author.username} !` , 
                "Meow Meow~~\nเป็นเสียงเรียกของแมว !" , "คุณรู้หรอไม่ ? : FujaTyping สร้างฉันขึ้นมา" , "♀️", "พูดไม่เพราะเลย !", "แย่วะ !",
                "I Love You" , "I  ❤️ You" , "ขอบคุณที่แจ้งให้ทราบนะคะ" , `โป้ง ${message.author.username} !` ,
                "👋🏻" , "D" , "👉🏻 👌🏻" , "Meow~~" , "❌ Social credit : -999999" , "✅ Social credit : +1" , "SOS" , "Help me !",
                "WTF !" , "200 IQ\nBe like !" , `หนูเหนื่อยกับคุณแล้ว ${message.author.username} !` , "คุณพูดอะไรอะ หนูฟังไม่รู้เรื่อง !" , 
                "Who ask ?" , "Didn't ask !" , "ใครถาม ?" , `หนูจะเอาชื่อ ${message.author.username} ไปใส่ใน https://gay.th` ,
                "🫶🏻" , "👀" , "🎧 🎶" , "🎱" , "Tell me your wish !" , "👽" ,
                "ไม่ได้ถามคะ !" , "💣 (Bomb)\n⬇️\n⬇️\n⬇️\n🏘️ <<< (Your house)" , `แย่จัง ${message.author.username} วันนี้เป็นวันโชคร้ายของเธอนะ !\nดูแลตัวเองด้วยละ !` , `ดีใจจัง ${message.author.username} วันนี้เป็นวันโชคดีของเธอนะ !`,
                "⛈️ วันนี้อากาศดีจังเลย ! [Burh]" , "Me" , "หนู" , "I here" , "📸📸 Caught in 4K  📸📸" , "Hello ?" , "Are you serious right now ?" , "Are you serious !",
                `${message.content} คืออะไรอะ ?` , "ไม่มีอะไร !" , "Do you like anime girl cat ?" , "โอเครๆ" , "เคๆ" , "เครๆ",
                "Error : 404 [Just kidding]" , "Error : 403 [Just kidding]",
                "Huhhh ?" , "What ?" , "I love emoji  👌🏻" , "🫱🏻 🥜" , "🤌🏻" , "👎🏻" , "👍🏻" , "That's cool" , "Cool" , "Do you see that ?",
                "เห็นนั้นไหม ?" , "มีใครอยู่ข้างหลังคุณอะ !!" , "👻 แหร่ๆๆ\nน่ากลัวไหม ?" , "ฮั่นแน่ !" , "จ๊ะเอ๋ตัวเอง !" , "เชื่ยๆ" ,
            ];
        }

        const MiuResponseAnswer = Math.floor(Math.random() * MiuDatabasesAnswer.length);

        const ResponseAnswer = new EmbedBuilder()
            .setColor(15401215)
            .setAuthor({ name: " : " + MiuDatabasesAnswer[MiuResponseAnswer] , iconURL: 'https://cdn.discordapp.com/attachments/1061529756203499571/1071290286166265856/00006-3271186202-Anime_girl_cat.png'})

        message.reply({ embeds : [ResponseAnswer] });
    }
});
console.log("[CMD] : Loaded ChatBot")

// Web UI

const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, '/Assets')))

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/Assets/index.html")
})

app.listen(5263)

console.log("----------")
console.log('[SERVICE] : Now online at port : 5263 | localhost:5263')

client.on('ready', ()=>{
    console.log(`[API] : Connected ${client.user.tag} successfully !`)
    client.user.setPresence({ activities: [{ name: `mao!help | ${client.guilds.cache.size} Servers` , type: ActivityType.Streaming , url: "https://www.twitch.tv/mao" }]});
    console.log("[WORKER] : Finished")
})

//Join servermessage
client.on('guildCreate', guild => {
    const ServerMessage = new EmbedBuilder()
    .setColor(15401215)
    .setTitle(`ขอบคุณที่เชิญหนูเข้า - Server นี้นะ`)
    .setDescription("สวัสดีทุกคนนะคะหนูชื่อ - Mao\nเป็น ChatBot ที่สร้างจาก FujaTyping และ Miu\n.....\nคำสั่งขอหนู ณ ตอนนี้\n- ใช้คำสั่ง mao!help เพื่อดูคำสั่งทั้งหมด")
    .setImage("https://cdn.discordapp.com/attachments/1024635780360056883/1069976864178839632/ezgif-4-83f97196ce.png")
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

console.log('[API] : Connecting to Discord network');
client.login(process.env.TOKEN)
