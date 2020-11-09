module.exports = {
    name: 'kill',
    description: 'Kills a member in the server',
    execute(message, args) {
        killCommand(message, args);
    }
}

const killCommand = (message, args) => {
    if (args.length === 0 || args[0] === "help") {
        displayHelpMessage(message);
    } else {
        const user = message.mentions.users.first();
        const member = message.guild.member(user);
        if (member) {
            killUser(user, message);
        } else {
            message.reply("Member does not exist");
        }
    }
}

const displayHelpMessage = message => {
    let helpMessage = "";
    helpMessage += "\nThe !kill command kills(as a joke) a member of the guild. Use a mention to specify who dies\n";
    helpMessage += "ex) !kill @[user_name]\n";
    message.reply(helpMessage);
}

const killUser = (user, message) => {
    const killMessageId = getRandomInt(4);
    switch (killMessageId) {
        case 0:
            message.reply(`You brutally murder ${user}`);
            break;
        case 1:
            message.reply(`You stab ${user} in the face`);
            break;
        case 2:
            message.reply(`You break ${user}'s neck`);
            break;
        case 3:
            message.reply(`You shoot an arrow into ${user}'s knee`);
    }
}

const getRandomInt = max => {
    return Math.floor(Math.random() * Math.floor(max));
}
