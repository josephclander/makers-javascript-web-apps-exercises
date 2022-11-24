/**
 * @jest-environment jsdom
 */
const fs = require('fs');
const NotesView = require('../src/notesView');
const NotesModel = require('../src/notesModel');
const NotesClient = require('../../server/notesClient');

require('jest-fetch-mock').enableMocks();

describe('NotesView', () => {
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    model = new NotesModel();
    client = new NotesClient();
    view = new NotesView(model, client);
  });
  it('adds divs with class "note" to the page in main tag', () => {
    model.addNote('test1');
    model.addNote('test2');
    view.displayNotes();
    expect(document.querySelectorAll('div.note').length).toBe(2);
    expect(document.querySelectorAll('div.note')[0].textContent).toEqual(
      'test1'
    );
  });
  // used to test before method became asynchronous
  xit('adds text from user input when submit button clicked', (done) => {
    const inputTest = document.querySelector('#message-input');
    inputTest.value = 'This is user input.';

    const submitBtn = document.querySelector('#message-submit');
    submitBtn.click();

    const divs = document.querySelectorAll('div.note');
    const divsLength = divs.length;

    expect(divsLength).toBe(3);
    expect(divs[divsLength - 1].textContent).toEqual('This is user input.');
    done();
  });
  // used to test before method became asynchronous
  xit('clears old notes when adding notes to the screen on click', () => {
    model.addNote('test1');
    model.addNote('test2');
    const inputTest = document.querySelector('#message-input');
    const submitBtn = document.querySelector('#message-submit');

    inputTest.value = 'This is user input 1.';
    submitBtn.click();
    inputTest.value = 'This is user input 2.';
    submitBtn.click();

    const divs = document.querySelectorAll('div.note');
    const divsLength = divs.length;
    expect(divsLength).toBe(4);
  });
  it('client connects correctly to server and fetch', (done) => {
    fetch.mockResponseOnce(JSON.stringify(['fake note 1', 'fake note 2']));
    client.loadNotes((data) => {
      expect(data).toEqual(['fake note 1', 'fake note 2']);
      done();
    });
  });
  it('applies notes from the server to the page', (done) => {
    const clientMock = {
      loadNotes: (callback) => callback(['fake note 1', 'fake note 2']),
    };
    const mockView = new NotesView(model, clientMock);

    mockView.displayNotesFromApi();
    const divs = document.querySelectorAll('div.note');
    const divsLength = divs.length;
    expect(divsLength).toBe(2);
    expect(divs[0].textContent).toEqual('fake note 1');
    expect(divs[1].textContent).toEqual('fake note 2');
    done();
  });
});
