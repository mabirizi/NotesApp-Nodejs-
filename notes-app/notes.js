const chalk = require("chalk");
const fs = require("fs");
const getNotes = () => {
  return "Your notes.....";
};

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find(note => note.title === title);

  if (!duplicateNote) {
    notes.push({
      title,
      body
    });

    saveNotes(notes);
    console.log("Note added");
  } else {
    console.log("Note title taken");
  }
};

const removeNote = title => {
  const notes = loadNotes();

  const remove_note = notes.filter(note => note.title !== title);

  if (notes.length > remove_note.length) {
    saveNotes(remove_note);
    console.log(chalk.green.inverse("Note removed"));
  } else {
    console.log(chalk.red.inverse("no matched Note removed"));
  }
};

const readNote = title => {
  const notes = loadNotes();
  const findNote = notes.find(note => note.title === title);

  if (findNote) {
    console.log(
      "Note added" +
        chalk.blue.inverse(findNote.title) +
        "  Note Body:" +
        chalk.blue.inverse(findNote.body)
    );
  } else {
    console.log(chalk.red.inverse("No Note found"));
  }
};

const saveNotes = notes => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();

    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

module.exports = {
  getNotes,
  addNote,
  removeNote,
  readNote
};
