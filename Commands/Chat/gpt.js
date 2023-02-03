const {EmbedBuilder} = require('discord.js');
//const fetch = require('node-fetch');
const translate = require('translate-google')
API_URL = 'https://api-inference.huggingface.co/models/r3dhummingbird/DialoGPT-medium-joshua';

module.exports = {
    config: {
        name: 'gpt',
        description: 'Use chat gpt',
        usage: `mao!gpt`,
    },
    async run (client,message,args) {
        if (!args[0]) {
            message.reply('กรุณาพิมพ์คำสั่งให้ถูกต้อง !\n- mao!gpt <text>\nเช่น mao!gpt hello , mao!gpt สวัสดี');
        } else {
            message.reply("Mao is typing").then(async message => {
                const UserText = message.content;
                const rawtext = await translate(UserText, {to: 'en'});
                //message.reply(`${rawtext}`);
    
                const payload = {
                    inputs: {
                        text: rawtext
                    }
                };
    
                const headers = {
                    'Authorization': 'Bearer ' + process.env.HUGGINGFACE_TOKEN
                };
                
                //message.channel.startTyping();
    
                const response = await fetch(API_URL, {
                    method: 'post',
                    body: JSON.stringify(payload),
                    headers: headers
                });
                const data = await response.json();
                let botResponse = '';
                if (data.hasOwnProperty('generated_text')) {
                    botResponse = data.generated_text;
                } else if (data.hasOwnProperty('error')) {
                    botResponse = data.error;
                }
    
                //message.channel.stopTyping();
                const translated = await translate(botResponse, {to: 'th'});
                //message.reply(`${botResponse}`);
                message.edit(`${translated}`);
            })
    
        }
    }
}