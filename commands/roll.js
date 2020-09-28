module.exports = {
    name: 'roll',
    description: 'Returns the total of a dice roll, in the form of !roll [number of dice]d[dice] ex) !roll 2d10',
    execute(message, args) {
        rollCommand(message, args);
    }
}

const rollCommand = (message, args) => {
    args.forEach(arg => {
        let dice = arg.split(('d'));
        let numOfDice = parseInt(dice.shift(), 10);
        dice = parseInt(dice, 10);

        if (isArgumentValid(dice, numOfDice)) {
            message.reply("Please enter a command in the form of !roll [number of dice]d[dice] ex) !roll 2d10");
            return;
        }

        let total = findDiceRollTotal(dice, numOfDice);

        message.reply(`${arg}: ${total}`);
    });
}

const isArgumentValid = (dice, numOfDice) => {
    return isNaN(dice) || isNaN(numOfDice);
}

const findDiceRollTotal = (dice, numOfDice) => {
    let total = 0;
    for (let i = 0; i < numOfDice; i++) {
        total += getRandomInt(dice) + 1;
    }
    return total;
}

const getRandomInt = max => {
    return Math.floor(Math.random() * Math.floor(max));
}