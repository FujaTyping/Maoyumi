const {EmbedBuilder,ActivityType} = require('discord.js');
const dotenv = require('dotenv')

dotenv.config();

module.exports = {
    config: {
        name: 'restart',
        description: 'restart bot',
        usage: `m.restart`,
    },
    async run (client,message,args) {
        if (message.author.id == "729556554491232256") {
            const RestartCMD = new EmbedBuilder()
                .setColor(16777215)
                .setAuthor({ name: "กำลังรีสตาร์ทบอท ..." , iconURL: 'https://cdn.discordapp.com/attachments/1061529756203499571/1071323436057645126/Settings_S2.png'})
                .setTimestamp()

            message.reply({ embeds : [RestartCMD] }).then(message => {
                client.destroy();
                client.login(process.env.TOKEN);
                client.user.setPresence({ activities: [{ name: `m.!help | ${client.guilds.cache.size} Servers` , type: ActivityType.Streaming , url: "https://www.twitch.tv/mao" }]});
                const ComRestart = new EmbedBuilder()
                    .setColor(16777215)
                    .setAuthor({ name: "รีสตาร์ทบอทเสร็จแล้วคะ !" , iconURL: 'https://cdn.discordapp.com/attachments/1061529756203499571/1071323436057645126/Settings_S2.png'})
                    .setTimestamp()

                message.edit({ embeds : [ComRestart] })
                console.log(`[CLIENT] : ${client.user.tag} Restarted by the OWNER !`)
            })
        } else {
            const CantRestart = new EmbedBuilder()
                .setColor(16711680)
                .setAuthor({ name: `${message.author.username} คุณไม่มีสิทธ์รีสตาร์ทหนูนะคะ !` , iconURL: 'https://cdn.discordapp.com/attachments/1061529756203499571/1071323436057645126/Settings_S2.png'})
                .setTimestamp()

            message.reply({ embeds : [CantRestart] })
        }
    }
}