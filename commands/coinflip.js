module.exports = {
    name: 'coinflip',
    description: 'Flips a coin and returns the result of heads or tails',
    execute(message, args) {
        coinFlipCommand(message, args);
    }
}

const coinFlipCommand = (message, args) => {
    
    if (hasNoArguments(args)) {
        headsOrTails(message);
    } else {
        headsOrTailsMultiple(message, args);
    }
    
}

const getRandomInt = max => {
    return Math.floor(Math.random() * Math.floor(max));
}

const hasNoArguments = args => {
    return args.length == 0;
}

const headsOrTails = (message) => {
    const coinFlipResult = getRandomInt(2);

    if (coinFlipResult == 0) {
        message.reply("Heads");
    } else if (coinFlipResult == 1) {
        message.reply("Tails");
    }
}

const headsOrTailsMultiple = (message, args) => {
    if (isNaN(args[0])) {
        message.reply("Please enter a number to specify how many coinflips");
        return;
    }
    tallyHeadsAndTails(message, args);
}

const tallyHeadsAndTails = (message, args) => {
    let heads = 0;
    let tails = 0;
    for (let i = 0; i < args[0]; i++) {
        let coinFlipResult = getRandomInt(2);
        if (coinFlipResult == 0) {
            heads += 1;
        } else if (coinFlipResult == 1) {
            tails += 1;
        }
    }
    message.reply(`Heads: ${heads} Tails: ${tails}`);
}