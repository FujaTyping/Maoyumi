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
        const Authorprofile = client.config.defultauthorprofile

        if (message.author.id == "729556554491232256") {
            const RestartCMD = new EmbedBuilder()
                .setColor(16777215)
                .setAuthor({ name: "กำลังรีสตาร์ทบอท ..." , iconURL: `${Authorprofile}`})
                .setTimestamp()

            message.reply({ embeds : [RestartCMD] }).then(message => {
                client.destroy();
                client.login(process.env.TOKEN);
                client.user.setPresence({ activities: [{ name: `m.!help | ${client.guilds.cache.size} Servers` , type: ActivityType.Streaming , url: "https://www.twitch.tv/maoyumi" }]});
                const ComRestart = new EmbedBuilder()
                    .setColor(16777215)
                    .setAuthor({ name: "รีสตาร์ทบอทเสร็จแล้วคะ !" , iconURL: `${Authorprofile}`})
                    .setTimestamp()

                message.edit({ embeds : [ComRestart] })
                console.log(`[CLIENT] : ${client.user.tag} Restarted by the OWNER !`)
            })
        } else {
            const CantRestart = new EmbedBuilder()
                .setColor(16711680)
                .setAuthor({ name: `${message.author.username} คุณไม่มีสิทธ์รีสตาร์ทหนูนะคะ !` , iconURL: `${Authorprofile}`})
                .setTimestamp()

            message.reply({ embeds : [CantRestart] })
        }
    }
}