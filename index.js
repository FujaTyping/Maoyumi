const {Client, GatewayIntentBits, DiscordAPIError, Message, channelLink, EmbedBuilder, ActivityType, Collection} = require('discord.js');
const dotenv = require('dotenv')
const prefix = "m!";

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
let FolderCount = 0;

client.commands = new Collection();

const commandFolders = fs.readdirSync(`./Commands/`)

for (const folder of commandFolders) {
    const commandFiles = fs.readdirSync(`./Commands/${folder}`).filter(file => file.endsWith('.js'));
    FolderCount=FolderCount+1;

    for (const file of commandFiles) {
        const props = require(`./Commands/${folder}/${file}`);
        //console.log(`[FS] : Loaded ${file}`)
        CommandCount=CommandCount+1;
        client.commands.set(props.config.name, props)
    }

}
console.log(`[FS] : Successfully loaded ${FolderCount} folders`);
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

const { OpenAIApi, Configuration } = require("openai")
const config = new Configuration({
    apiKey: process.env.OPENAI_KEY
})
const openai = new OpenAIApi(config)
const PAST_MESSAGES = 1

// Chat Bot
client.on('messageCreate', async message => {
    //if(message.channelId == "1060184115447599194" || message.channelId == "1061522412715376690" || message.channelId == "1061529756203499571") {
    if(message.content.includes("แมว") || message.content.includes('<@1060182470630330529>') || message.content.includes('MAO') || message.content.includes('Mao') || message.content.includes("เเมว") || message.content.includes("mao")) {
        if(message.author.bot) return;

        message.channel.sendTyping()

        if (message.author.id == "881775476841009202") { //Blacklist people
            
            const rawBAns = [
                "หนูไม่อยากคุยกับคุณแล้วคะ !","เสือกไร !","เป็นเหี้ยอะไรมากไหม ?","ออกไปไกลๆ ไป !","เรื่องของมึง !",`<@${message.author.id}> ไปคุยกับ||พ่อ||มึงไป`,
                `<@${message.author.id}> ไปคุยกับ||แม่||มึงไป`,"อย่ามายุ่งกับหนู !","เสือกๆๆๆ",`F*UCK YOU <@${message.author.id}>`,`<@${message.author.id}> ไอ||ชาติหมา||`,
                `SH*T`,`ปากดีจังอะเรา <@${message.author.id}>`,"ไอสัส",`<@${message.author.id}> เป็นคนดีมักไม่มีที่ยืน เลยต้องเหี้ยให้กลมกลืนเพื่อให้มีจุดยืนในสังคม`,
                `ด่าคนอื่นทั้งที เอาดีๆอย่าให้เข้าตัวเอง <@${message.author.id}>`,`ไม่อยากสนิท เดี๋ยวติดเสนียด <@${message.author.id}>`,`รู้แค่เปลือก อย่าเสือกรู้ดี <@${message.author.id}>`,
                `เรื่องจริงไม่เหมือนฝัน .. เรื่องของฉันไม่ต้องเสือก <@${message.author.id}>`
            ]
            const BAns = Math.floor(Math.random() * rawBAns.length);

            message.reply(`<:MAO:1073785621748916265>  : `+rawBAns[BAns])
            
        } else {

            let messages = Array.from(await message.channel.messages.fetch({
                limit: PAST_MESSAGES,
                before: message.id
            }))
            messages = messages.map(m=>m[1])
            messages.unshift(message)
    
            let users = [...new Set([...messages.map(m=> m.author.username), client.user.username])]
    
            let lastUser = users.pop()
    
            let prompt = `The following is a conversation between ${users.join(", ")}, and ${lastUser}. \n\n`
    
            for (let i = messages.length - 1; i >= 0; i--) {
                const m = messages[i]
                prompt += `${m.author.username}: ${m.content}\n`
            }
            //console.log("prompt:", prompt)
            prompt += `${client.user.username}:`

            const response = await openai.createCompletion({
                prompt,
                model: "text-davinci-003",
                max_tokens: 256,
                stop: ["\n"]
            }).catch(error => {
                message.reply("=>  `"+error+"`  try again later !")
            })

            const rawres = response.data.choices[0].text
            let Ans = rawres.replaceAll("ฉัน", "หนู");
            Ans = Ans.replaceAll("เรา", "หนู")
            Ans = Ans.replaceAll("ครับ", "คะ")
            Ans = Ans.replaceAll("คุณ", "เธอ")

            /*
            const ResponseAnswer = new EmbedBuilder()
            .setColor(15401215)
            .setAuthor({ name: ` :  ${Finishm}` , iconURL: 'https://cdn.discordapp.com/attachments/1071401485239332864/1073205416328183908/00000-4163793642-Anime_girl_cat_purple_smile.png'})
            .setTimestamp()
    
            message.reply({ embeds : [ResponseAnswer] });
            */
            
            message.reply(`<:MAO:1073785621748916265>  : ${Ans}`).catch(error => {
                message.reply("=>  `"+error+"`  try again later !")
            })

        }
        
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
    //.setImage("https://cdn.discordapp.com/attachments/1024635780360056883/1069976864178839632/ezgif-4-83f97196ce.png")
    .setThumbnail("https://cdn.discordapp.com/attachments/1071401485239332864/1072106650258898984/00000-4163793642-Anime_girl_cat_purple_smile.png")
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
