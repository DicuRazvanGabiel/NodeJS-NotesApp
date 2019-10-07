const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes');

// Customize yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },

        body: {
            describe: 'The content of the note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        notes.addNote( argv.title, argv.body );
    }
});

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.removeNote(argv.title);
    }
});

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
    },
    handler: function (argv) {
        const note = notes.getNote(argv.title)
        if(note){
            console.log(chalk.blue.bold('Title: ' + note.title) + ' ' +chalk.black.bgWhite('Body: ' + note.body + ' '));
        }
    }
});

// Create list command
yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler: function () {
        const notesList = notes.listNotes();
        notesList.forEach(note => {
            console.log(chalk.blue.bold('Title: ' + note.title) + ' ' +chalk.black.bgWhite('Body: ' + note.body + ' '));
        });
    }
});

yargs.parse();