// By : Rageous0/rps-discord.js

const {EmbedBuilder} = require('discord.js');

module.exports = {
    config: {
        name: 'rps',
        description: 'เกมเป่ายิงชุบ',
        usage: `mao!rps`,
    },
    async run (client,message,args) {
        let rps = ["scissors", "paper", "rock"];
        let i;
        if(!rps.includes(args[0])) {
            const EmbedRps = new EmbedBuilder()
                .setColor(16745728)
                .setTitle(`เกมเป่ายิงชุบ - Rock Paper Scissors`)
                .setDescription("กรุณาพิมพ์คำสั่งให้ถูกต้อง !\nคำสั่ง : mao!rps <rps>\nเช่น : mao!rps rock / mao!rps paper / mao!rps scissors")
                .setImage("https://cdn.discordapp.com/attachments/988037995531759658/1064395804468580453/RPS.png")
                .setTimestamp()
                .setFooter({ text: 'Rps - command'});

            message.reply({  embeds: [EmbedRps] });
        }
        if(args.includes("rock")) {
        i = 2;
        }
        if(args.includes("paper")) {
        i = 1;
        }
        if(args.includes("scissors")) {
        i = 0;
        }
        if(rps[i]) {
        let comp = Math.floor((Math.random() * 3) + 1);
        let comp_res = parseInt(comp) - parseInt("1");
        let comp_val = rps[parseInt(comp_res)];
          if(i === comp_res) {
            const Rpstied = new EmbedBuilder()
                .setColor(16777215)
                .setTitle(`เกมเป่ายิงชุบ - Rock Paper Scissors`)
                .setDescription("โอ้ - แย่จังเสมอกัน !\nเอาใหม่ปะละ >:D")
                .addFields(
                    { name: `คุณเลือก`, value: `${args[0]}`, inline: true },
                    { name: 'หนูเลือก', value: `${comp_val}`, inline: true },
                )
                .setImage("https://cdn.discordapp.com/attachments/988037995531759658/1064395805173223484/RPS-tied_1.png")
                .setTimestamp()
                .setFooter({ text: 'Rps - command'});

            message.reply({  embeds: [Rpstied] }); 
          }
          if(i > comp_res) {
            const Rpswin = new EmbedBuilder()
                .setColor(16711680)
                .setTitle(`เกมเป่ายิงชุบ - Rock Paper Scissors`)
                .setDescription("เย้ - หนูชนะแล้ว !")
                .addFields(
                    { name: `คุณเลือก`, value: `${args[0]}`, inline: true },
                    { name: 'หนูเลือก', value: `${comp_val}`, inline: true },
                )
                .setImage("https://cdn.discordapp.com/attachments/988037995531759658/1064395804690874408/RPS-lost_1.png")
                .setTimestamp()
                .setFooter({ text: 'Rps - command'});

            message.reply({  embeds: [Rpswin] });
          } 
          if(i < comp_res) {
            const Rpslose = new EmbedBuilder()
            .setColor(65300)
            .setTitle(`เกมเป่ายิงชุบ - Rock Paper Scissors`)
            .setDescription("ไม่นะ - คุณชนะแล้ว :(")
            .addFields(
                { name: `คุณเลือก`, value: `${args[0]}`, inline: true },
                { name: 'หนูเลือก', value: `${comp_val}`, inline: true },
            )
            .setImage("https://cdn.discordapp.com/attachments/988037995531759658/1064395804929957928/RPS-win_2.png")
            .setTimestamp()
            .setFooter({ text: 'Rps - command'});

            message.reply({  embeds: [Rpslose] });
          }
        }
    }
}