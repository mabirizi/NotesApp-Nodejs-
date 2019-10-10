const chalk = require('chalk');
const getNotes = require('./notes.js')

const command = process.argv[2]

if (command === "add") {
    console.log(chalk.green.inverse.bold('Adding a note'))
} else if (command === 'remove') {
    console.log(chalk.red.inverse.bold('Removing a note'))
} 

// const msg = getNotes()

// console.log(chalk.green.bold.bgBlue(msg) )

//const fs = require('fs');

//fs.writeFileSync('notes.txt', 'This file was ceted by Nodejs');

//fs.appendFileSync('notes.txt', 'My name is Mabirizi');

// const add = require('./utils.js')

// const sum = add(4,-2)

// console.log(sum)

