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
        
        const ListbanID = client.config.banID
        if (interaction.user.id == ListbanID){ //Blacklist People
            const Authorprofile = client.config.defultauthorprofile
            const BlackPerms = new EmbedBuilder()
              .setColor(16711680)
              .setAuthor({ name: `คุณ ${interaction.user.username} ไม่มีสิทธ์ใช้งาน Slash commands ของหนูนะคะ !\n(Banned by the owner)` , iconURL: `${Authorprofile}`})
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