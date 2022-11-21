const NotesView = require('./src/notesView');
const NotesModel = require('./src/notesModel');

model = new NotesModel();
model.addNote('test1');
model.addNote('test2');
view = new NotesView(model);
view.displayNotes();
