const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes.js')

yargs.command({
    command: 'add',
    describe: 'Adding a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: "string",
        },
        body: {
            describe:'message body',
            demandOption: true,
            type: "string",
        }
    },
    handler: function (argv) {
        console.log('Title:'+chalk.green.inverse.bold(argv.title)+'  Message:'+chalk.green.inverse.bold(argv.body))
    }
})


yargs.command({
    command: 'remove',
    describe: 'Removing a note',
    handler: function (argv) {
        console.log(chalk.red.inverse.bold('Removing a note'), argv)
    }
})


yargs.command({
    command: 'read',
    describe: 'Reading a note',
    handler: function (argv) {
        console.log(chalk.blue.inverse.bold('Reading a note'), argv)
    }
})


yargs.command({
    command: 'list',
    describe: 'listing a note',
    handler: function (argv) {
        console.log(chalk.yellow.inverse.bold('listing a note'), argv)
    }
})

yargs.parse()
