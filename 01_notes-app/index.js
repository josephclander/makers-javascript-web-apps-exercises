const NotesView = require('./src/notesView');
const NotesModel = require('./src/notesModel');

model = new NotesModel();
view = new NotesView(model);
