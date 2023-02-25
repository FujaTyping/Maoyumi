const { REST } = require("@discordjs/rest");
const { Routes } = require('discord-api-types/v9');
const dotenv = require('dotenv')
const fs = require('fs');

dotenv.config();

const clientId = process.env.CLIENT_ID ; 
const token = process.env.TOKEN
const guildId = "0" ; 

module.exports = (client) => {
    client.handleCommands = async (commandFolders, path) => {
        client.commandArray = [];
        for (folder of commandFolders) {
            const commandFiles = fs.readdirSync(`${path}/${folder}`).filter(file => file.endsWith('.js'));
            for (const file of commandFiles) {
                const command = require(`../SlashCommands/${folder}/${file}`);
                client.commands.set(command.data.name, command);
                client.commandArray.push(command.data.toJSON());
            }
        }

        const rest = new REST({
            version: '9'
        }).setToken(token);

        (async () => {
            try {
                console.log('[API] : Refreshing application commands [/]');

                await rest.put(
                    Routes.applicationCommands(clientId), {
                        body: client.commandArray
                    },
                );

                console.log('[API] : Reloaded application commands [/]');
            } catch (error) {
                console.error(error);
            }
        });
    };
};