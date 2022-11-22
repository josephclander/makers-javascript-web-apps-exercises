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
    expect(document.querySelectorAll('div.note')[0].textContent).toEqual(
      'test1'
    );
  });
  it('adds text from user input when submit button clicked', () => {
    const inputTest = document.querySelector('#message-input');
    inputTest.value = 'This is user input.';

    const submitBtn = document.querySelector('#message-submit');
    submitBtn.click();

    const divs = document.querySelectorAll('div.note');
    const divsLength = divs.length;

    expect(divsLength).toBe(3);
    expect(divs[divsLength - 1].textContent).toEqual('This is user input.');
  });
});
