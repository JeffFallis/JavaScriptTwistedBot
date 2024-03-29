const fs = require('fs');
const Discord = require('discord.js');
const config = require("./config.json");

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.login(config.BOT_TOKEN);

const prefix = "!";

client.on("ready", () => {
    console.log("Bot is up and running");
})

client.on("message", message => {
    endIfBotMessage(message);
    endIfNoPrefix(message);

    const commandBody = message.content.slice(prefix.length);
    const args = commandBody.split((' '));
    const command = args.shift().toLowerCase();

    if (!client.commands.has(command)) return;

    try {
        client.commands.get(command).execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply('There was an error trying to execute that command!');
    }
});

const endIfBotMessage = (message) => {
    if (message.author.bot) return;
}

const endIfNoPrefix = (message) => {
    if (!message.content.startsWith(prefix)) return;
}