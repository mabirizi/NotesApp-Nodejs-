const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes.js')

// const command = process.argv[2]

// if (command === "add") {
//     console.log(chalk.green.inverse.bold('Adding a note'))
// } else if (command === 'remove') {
//     console.log(chalk.red.inverse.bold('Removing a note'))
//     console.log(chalk.blue.inverse.bold('Reading a note'))
//     console.log(chalk.yellow.inverse.bold('listing a note'))
// } 

yargs.command({
    command: 'add',
    describe: 'Adding a new note',
    handler: function () {
        console.log(chalk.green.inverse.bold('Adding a note'))
    }
})


yargs.command({
    command: 'remove',
    describe: 'Removing a note',
    handler: function () {
        console.log(chalk.red.inverse.bold('Removing a note'))
    }
})


yargs.command({
    command: 'read',
    describe: 'Reading a note',
    handler: function () {
        console.log(chalk.blue.inverse.bold('Reading a note'))
    }
})


yargs.command({
    command: 'list',
    describe: 'listing a note',
    handler: function () {
        console.log(chalk.yellow.inverse.bold('listing a note'))
    }
})


console.log(yargs.argv)
// const msg = getNotes()

// console.log(chalk.green.bold.bgBlue(msg) )

//const fs = require('fs');

//fs.writeFileSync('notes.txt', 'This file was ceted by Nodejs');

//fs.appendFileSync('notes.txt', 'My name is Mabirizi');

// const add = require('./utils.js')

// const sum = add(4,-2)

// console.log(sum)

