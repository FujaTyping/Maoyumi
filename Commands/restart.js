const {EmbedBuilder} = require('discord.js');
const dotenv = require('dotenv')

dotenv.config();

module.exports = {
    config: {
        name: 'restart',
        description: 'restart bot',
        usage: `mao!restart`,
    },
    async run (client,message,args) {
        if (message.author.id == "729556554491232256") {
            message.reply("Restarting ...").then(message => {
                client.destroy();
                client.login(process.env.TOKEN);
                message.edit("Restart complete !")
                console.log(`[API] : ${client.user.tag} Restarted !`)
            })
        } else {
            message.reply(`<@${message.author.id}> คุณไม่มีสิทธ์ Restart หนูนะคะ !`)
        }
    }
}