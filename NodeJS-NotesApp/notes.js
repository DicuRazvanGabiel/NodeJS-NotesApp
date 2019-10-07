const fs = require('fs');
const chalk = require('chalk');
const _ = require('lodash');

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNotes = notes.filter((note) => {
        return note.title === title;
    })

    if (duplicateNotes.length === 0) {
        notes.push({
            title,
            body
        }); 

        saveNotes(notes);
        console.log(chalk.green('New note added!'));
    } else {
        console.log(chalk.bold.red('This title already exist!!!'));
    }

}

const saveNotes = (notes) => {
    const dataJson = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJson);
}

const loadNotes = () => {
    try {   
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJson = dataBuffer.toString();
        return JSON.parse(dataJson);
    } catch (error) {
        return [];
    }
}

const listNotes = () => {
    const notes = fs.readFileSync('notes.json');
    return JSON.parse(notes);
} 

const getNote = ( title ) => {
    const notes = loadNotes();
    const findedNote = notes.filter((note) => {        
        return note.title === title;
    });

    return findedNote[0];
} 

const removeNote = (title) => {
    const notes = loadNotes();
    const findedNote = notes.filter((note) => {        
        return note.title === title;
    }); 

    const excludedNotes = _.difference(notes, findedNote);
    saveNotes(excludedNotes);
    console.log(chalk.red('Note Removed'));
}

module.exports = { 
    addNote,
    listNotes,
    getNote,
    removeNote
};