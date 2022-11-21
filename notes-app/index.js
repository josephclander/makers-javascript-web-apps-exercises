const NotesModel = require('./src/notesModel');

const model = new NotesModel();
model.addNote('Learn how to connect to the DOM.');
console.log(model.getNotes());
