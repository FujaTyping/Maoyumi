const {EmbedBuilder} = require('discord.js');

const cooldown = new Set();

function addToCooldown(ID) {
cooldown.add(ID);
setTimeout(() => {
    cooldown.delete(ID);
}, 5000 /* 5 seconds */);
}

module.exports = {
    name: 'interactionCreate',
    async execute(interaction, client) {

        if (!interaction.isCommand()) return;

        const command = client.slashcommands.get(interaction.commandName);

        if (!command) return

        if (interaction.user.id == "881775476841009202") { //Blacklist People
            const BlackPerms = new EmbedBuilder()
              .setColor(16711680)
              .setAuthor({ name: `คุณ ${interaction.user.username} ไม่มีสิทธ์ใช้งาน Slash commands ของหนูนะคะ !\n(Banned by the owner)` , iconURL: 'https://cdn.discordapp.com/attachments/1071401485239332864/1073205416328183908/00000-4163793642-Anime_girl_cat_purple_smile.png'})
              .setTimestamp()
      
            interaction.reply({  embeds: [BlackPerms] })
          } else {
            if (cooldown.has(interaction.user.id)) {
                interaction.reply(`⏰ คุณ <@${interaction.user.id}> ใช้คำสั่งเร็วเกินไป !\nกรุณารอ \`5 วินาที\` เพื่อใช้ Slash commands อีกครั้ง`)
            } else {
                try{
                    await command.execute(interaction, client);
                    addToCooldown(interaction.user.id);
                } catch (error) {
                    //console.log(error);
                    await interaction.reply("```diff\n- There was an error while executing this command try again later !\n```");
                } 
            }
        }

    },
};