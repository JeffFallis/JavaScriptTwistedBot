module.exports = {
    name: 'sum',
    description: 'Sum all arguements and return the total!',
    execute(message, args) {
        sumCommand(message, args);
    }
}

const sumCommand = (message, args) => {
    const numArgs = args.map(x => parseFloat(x));
    const sum = numArgs.reduce((counter, x) => counter += x);
    message.reply(`The sum of all the arguments you provided is ${sum}`);
}