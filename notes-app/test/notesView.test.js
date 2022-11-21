/**
 * @jest-environment jsdom
 */
const fs = require('fs');
const NotesView = require('../src/notesView');
const NotesModel = require('../src/notesModel');

describe('NotesView', () => {
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    model = new NotesModel();
    model.addNote('test1');
    model.addNote('test2');
    view = new NotesView(model);
  });
  it('adds divs with class "note" to the page in main tag', () => {
    view.displayNotes();
    expect(document.querySelectorAll('div.note').length).toBe(2);
    expect(document.querySelectorAll('div.note')[0].textContent).toEqual('test1')
  });
});
