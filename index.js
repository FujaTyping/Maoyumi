const {Client, WebhookClient , GatewayIntentBits, DiscordAPIError, Message, channelLink, EmbedBuilder, ActivityType, Collection} = require('discord.js');
const dotenv = require('dotenv')
const { DiscordTogether } = require('discord-together');
const wait = require('node:timers/promises').setTimeout;
const term = require( 'terminal-kit' ).terminal ;

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
            GatewayIntentBits.GuildVoiceStates
        ]
    }
);

client.config = require("./config.json")

const { DisTube } = require('distube');
const { SoundCloudPlugin } = require("@distube/soundcloud");
const { SpotifyPlugin } = require('@distube/spotify')
const MusicAuthorprofile = client.config.defultauthorprofile

client.distube = new DisTube(client, {
    leaveOnStop: false,
    emitNewSongOnly: true,
    emitAddSongWhenCreatingQueue: false,
    emitAddListWhenCreatingQueue: false,
    plugins: [
      new SoundCloudPlugin(),
      new SpotifyPlugin({
        emitEventsAfterFetching: true
      })
    ]
})

const status = queue =>
  `ระดับเสียง : \`${queue.volume}%\` | วนซ้ำเพลง : \`${
    queue.repeatMode ? (queue.repeatMode === 2 ? 'คิวเพลงทั้งหมด' : 'เพลงนี้') : 'ปิด'
  }\``
client.distube
  .on('playSong', (queue, song) => {
    client.distube.setVolume(queue, 35);
    let Titlesong ;
    if (song.source == "youtube") {
      Titlesong = "title"
    } else {
      Titlesong = song.source
    }
    const PlayCMD = new EmbedBuilder()
      .setTitle(`<:maoyumi:1083605849605406830>  ${song.name}`)
      //.setURL(`${song.url}`)
      .setColor(14024959)
      //.setAuthor({ name: `${song.name}` , iconURL: 'https://cdn.discordapp.com/attachments/988037995531759658/1082920882441289738/00028-3147869600.png'})
      .setDescription(`กำลังเล่นเพลงในห้อง <#${queue.voiceChannel.id}> - โดย : ${song.user}\nผู้แต่ง : \`${song.uploader.name}\` ระยะเวลา : \`${song.formattedDuration}\` ระดับเสียง : \`${queue.volume}\``)
      //.setImage(song.thumbnail)
      //.setThumbnail(song.thumbnail)
      .setFooter({ text: `ℹ แหล่งที่มา : ${Titlesong}` })
      .setTimestamp()

    queue.textChannel.send({ embeds : [PlayCMD] })
  }
  )
  .on('addSong', (queue, song) => {
    let Titlesong ;
    if (song.source == "youtube") {
      Titlesong = "title"
    } else {
      Titlesong = song.source
    }
    const AddsongCMD = new EmbedBuilder()
      .setTitle(`<:maoyumi:1083605849605406830>  ${song.name}`)
      //.setURL(`${song.url}`)
      .setColor(9240744)
      //.setAuthor({ name: `${song.name}` , iconURL: 'https://cdn.discordapp.com/attachments/988037995531759658/1082920882441289738/00028-3147869600.png'})
      .setDescription(`เพลงถูกเพิ่มไปยังคิวแล้ว - โดย : ${song.user}\nใช้คำสั่ง \`m.skip\` เพื่อข้ามเพลง`)
      //.setThumbnail(song.thumbnail)
      .setFooter({ text: `ℹ แหล่งที่มา : ${Titlesong}` })
      .setTimestamp()

    queue.textChannel.send({ embeds : [AddsongCMD] })
  }
  )
  .on('addList', (queue, playlist) => {
    const AddListCMD = new EmbedBuilder()
      .setColor(14024959)
      .setAuthor({ name: `${playlist.name}` , iconURL: `${MusicAuthorprofile}`})
      .setDescription(`เพลย์ลิสถูกเพิ่มไปยังคิวแล้ว ทั้งหมด \`${playlist.songs.length}\` เพลง - โดย : ${song.user}\nใช้คำสั่ง \`/music skip\` เพื่อข้ามเพลง`)
      .setTimestamp()

    queue.textChannel.send({ embeds : [AddListCMD] })
  }
  )
  .on('error', (channel, e) => {
    if (channel) channel.send("```diff\n"+`- ${e.toString().slice(0, 1974)}`+" try again later !\n```")
    else console.error(e)
  })
  .on('empty', queue => {
    queue.textChannel.send(`ห้องนี้ไม่มีใครอยู่เลย หนูขอออกจากห้องนะครับ !`)
  })
  .on('searchNoResult', (message, query) => {
    const NoseaCMD = new EmbedBuilder()
      .setColor(16711680)
      .setAuthor({ name: `${query}` , iconURL: `${MusicAuthorprofile}`})
      .setDescription(`หนูไม่พบเพลงนี้ - ลองใส่ชื่อเพลง / ลิงค์ เพลงใหม่ดูสิ !`)
      .setTimestamp()

    message.channel.send({ embeds : [NoseaCMD] })
  }
  )
  .on('finish', queue => queue.textChannel.send('เล่นเพลงเสร็จแล้วคะ !\nใช้คำสั่ง `m.stop` เพื่อนำบอทออกจากห้อง'))

/*
const webhookClient = new WebhookClient({ url: client.config.webhook });
console.log(`[CLIENT] : Debug mode is ON`);

client.on("debug", ( e ) => {
  const Debugembed = new EmbedBuilder()
    .setAuthor({ name: `Maoyumi Debug` , iconURL: 'https://cdn.discordapp.com/attachments/1061529756203499571/1083435558937837608/New_Project_13.png'})
    .setDescription(`${e}`)
    .setColor(657930);

  webhookClient.send({
    content: null,
    embeds: [Debugembed]
  });
  //console.log(e)
});
*/

const prefix = client.config.prefix

client.discordTogether = new DiscordTogether(client);

console.log(`[CLIENT] : Finish create instance`);

console.log('[CLIENT] : Loading commands');

// Readcommandfile-nonslash
const fs = require("fs");
let CommandCount = 0;
let FolderCount = 0;
const Allcommand = [];

client.commands = new Collection();
client.slashcommands = new Collection();

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
    Allcommand.push(...commandFiles.map(file => file.replaceAll(".js","")));
}

// Readcommandfile-slash
let SlashCommandCount = 0;
let SlashCommandFolderCount = 0;

const SlashFunctions = fs.readdirSync("./Functions").filter(file => file.endsWith(".js"));
const SlasheventFiles = fs.readdirSync("./Events").filter(file => file.endsWith(".js"));
const SlashcommandFolders = fs.readdirSync("./SlashCommands");

(async () => {
    for (file of SlashFunctions) {
        require(`./Functions/${file}`)(client);
    }
    client.handleEvents(SlasheventFiles, "./Events");
    client.handleCommands(SlashcommandFolders, "./SlashCommands");
})();

for (const folder of SlashcommandFolders) {
    const SlashcommandFiles = fs.readdirSync(`./SlashCommands/${folder}`).filter(file => file.endsWith('.js'));
    SlashCommandFolderCount=SlashCommandFolderCount+1;

    for (const file of SlashcommandFiles) {
        const props = require(`./SlashCommands/${folder}/${file}`);
        //console.log(`[FS] : Loaded ${file}`)
        SlashCommandCount=SlashCommandCount+1;
    }
    Allcommand.push(...SlashcommandFiles.map(file => file.replaceAll(".js","")));
}

client.allcommand = Allcommand
console.log(`[FS] : Successfully loaded ${FolderCount} folders`);
console.log(`[FS] : Successfully loaded ${CommandCount} commands`);
console.log(`[FS] : Successfully loaded ${SlashCommandFolderCount} [/] folders`);
console.log(`[FS] : Successfully loaded ${SlashCommandCount} [/] commands`);
console.log(`[CLIENT] : All commands => ${Allcommand} `);

// ---------------------------------------------------------------------

const cooldown = new Set();

function addToCooldown(ID) {
  cooldown.add(ID);
  setTimeout(() => {
      cooldown.delete(ID);
  }, 3000 /* 3 seconds */);
}

client.on("messageCreate", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if(!cmd.startsWith(prefix)) return;

    let commandfile = client.commands.get(cmd.slice(prefix.length));
    const ListbanID = client.config.banID
    const Authorprofile = client.config.defultauthorprofile
    if (message.author.id == ListbanID) { //Blacklist People
      const BlackPerms = new EmbedBuilder()
        .setColor(16711680)
        .setAuthor({ name: `คุณ ${message.author.username} ไม่มีสิทธ์ใช้งานคำสั่งของหนูนะคะ !\n(Banned by the owner)` , iconURL: `${Authorprofile}`})
        .setTimestamp()

      message.reply({  embeds: [BlackPerms] })
    } else {
      if (cooldown.has(message.author.id)) {
        message.reply(`⏰ คุณ <@${message.author.id}> ใช้คำสั่งเร็วเกินไป !\nกรุณารอ \`3 วินาที\` เพื่อใช้คำสั่งอีกครั้ง`)
     } else {
        try {
          commandfile.run(client,message,args)
          addToCooldown(message.author.id);
        } catch (error) {
          message.reply("```diff\n- "+error+" try again later !\n```")
        }
     }
    }
});

// ---------------------------------------------------------------------

const { OpenAIApi, Configuration } = require("openai")
const config = new Configuration({
    apiKey: process.env.OPENAI_KEY
})
const openai = new OpenAIApi(config)
const PAST_MESSAGES = 2

// Chat Bot
client.on('messageCreate', async message => {
    //if(message.channelId == "1060184115447599194" || message.channelId == "1061522412715376690" || message.channelId == "1061529756203499571") {
    if(message.content.includes("มาวยูมิ") || message.content.includes('<@1060182470630330529>') || message.content.includes('Maoyumi') || message.content.includes('maoyumi') || message.content.includes("ม่าวยูมิ") || message.content.includes("ม่าว") || message.content.includes("มาว") || message.content.includes("Mao") || message.content.includes("mao")) {
        if(message.author.bot) return;

        message.channel.sendTyping()
        const ListbanID = client.config.banID

        message.reply("<a:TYPING:1074264222864789565>").then(async message => {
          if (message.author.id == ListbanID) { //Blacklist people
            
            const rawBAns = [
                "หนูไม่อยากคุยกับคุณแล้วคะ !","เสือกไร !","เป็นเหี้ยอะไรมากไหม ?","ออกไปไกลๆ ไป !","เรื่องของมึง !",`<@${message.author.id}> ไปคุยกับ||พ่อ||มึงไป`,
                `<@${message.author.id}> ไปคุยกับ||แม่||มึงไป`,"อย่ามายุ่งกับหนู !","เสือกๆๆๆ",`F*UCK YOU <@${message.author.id}>`,`<@${message.author.id}> ไอ||ชาติหมา||`,
                `SH*T`,`ปากดีจังอะเรา <@${message.author.id}>`,"ไอสัส",`<@${message.author.id}> เป็นคนดีมักไม่มีที่ยืน เลยต้องเหี้ยให้กลมกลืนเพื่อให้มีจุดยืนในสังคม`,
                `ด่าคนอื่นทั้งที เอาดีๆอย่าให้เข้าตัวเอง <@${message.author.id}>`,`ไม่อยากสนิท เดี๋ยวติดเสนียด <@${message.author.id}>`,`รู้แค่เปลือก อย่าเสือกรู้ดี <@${message.author.id}>`,
                `เรื่องจริงไม่เหมือนฝัน .. เรื่องของฉันไม่ต้องเสือก <@${message.author.id}>`
            ]
            const BAns = Math.floor(Math.random() * rawBAns.length);

            message.edit(`<:maoyumi:1083605849605406830>  : `+rawBAns[BAns])
            
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

            try {
              const response = await openai.createCompletion({
                  prompt,
                  model: "text-davinci-003",
                  max_tokens: 256,
                  stop: ["\n"]
              })

              const rawres = response.data.choices[0].text
              let Ans = rawres.replaceAll("ฉัน", "หนู");
              Ans = Ans.replaceAll("ผม", "หนู")
              Ans = Ans.replaceAll("เรา", "หนู")
              Ans = Ans.replaceAll("ครับ", "คะ")
              
              message.edit(`<:maoyumi:1083605849605406830>  : ${Ans}`)
            } catch (error) {
              message.edit("```diff\n- "+error+" try again later !\n```")
            }

        }
      })

    }
});
console.log("[CMD] : Loaded ChatBot")

// Web UI
/*
const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, '/Assets')))
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/Assets/index.html")
})
*/

// Web UI (Simple)
const app = require('express')();
app.get("/", (req, res) => {
    res.send("Online!")
})

app.listen(5263)

console.log("----------")
console.log('[SERVICE] : Now online at port : 5263 | localhost:5263')

client.on('ready', async ()=>{
    console.log(`[API] : Connected ${client.user.tag} successfully !`)
    client.user.setPresence({ activities: [{ name: `/bot help | ${client.guilds.cache.size} Servers` , type: ActivityType.Streaming , url: "https://www.twitch.tv/maoyumi" }]});
    console.log("[WORKER] : Finished")
    await wait(3000)
    await clearevery()
    term.table( [
      [ `${client.user.tag}` , 'Status : Online' ] ,
      ] , {
        borderChars: 'lightRounded' ,
        borderAttr: { color: 'magenta' } ,
        width: 60 ,
        fit: true
      }
    ) ;
    console.log("[Console] : Log now clear")
})

//Join servermessage
client.on('guildCreate', guild => {
    const Authorprofile = client.config.defultauthorprofile
    const Botname = client.config.botname
    const ServerMessage = new EmbedBuilder()
      .setColor(14024959)
      .setTitle(`ขอบคุณที่เชิญหนูเข้า - Server นี้นะ`)
      .setDescription(`สวัสดีทุกคนนะคะหนูชื่อ - ${Botname}\nเป็น ChatBot ที่สร้างจาก FujaTyping\n.....\nคำสั่งขอหนู ณ ตอนนี้\n- ใช้คำสั่ง \`/bot help\` เพื่อดูคำสั่งทั้งหมด`)
      //.setImage("https://cdn.discordapp.com/attachments/1024635780360056883/1069976864178839632/ezgif-4-83f97196ce.png")
      .setThumbnail(`${Authorprofile}`)
      .setTimestamp()
      .setFooter({ text: 'Welcome message from system !'});

    guild.systemChannel.send({ embeds: [ServerMessage] })
});
console.log("[GUILD] : Loaded JoinServer")

function clearevery() {
  console.clear()
}

console.log('[API] : Connecting to Discord network');
client.login(process.env.TOKEN)
