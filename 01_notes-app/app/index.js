const NotesClient = require('../server/notesClient');
const NotesModel = require('./src/notesModel');
const NotesView = require('./src/notesView');

const client = new NotesClient();
const model = new NotesModel();
const view = new NotesView(model, client);
view.displayNotesFromApi();
