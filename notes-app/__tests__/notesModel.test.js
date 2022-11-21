const NotesModel = require('../src/notesModel');

describe('NotesModel', () => {
  it('gets notes and returns an empty array', () => {
    const model = new NotesModel();
    expect(model.getNotes()).toEqual([]);
  });

  it('can add a note', () => {
    const model = new NotesModel();
    model.addNote('Learn js classes');
    expect(model.getNotes()).toEqual(['Learn js classes']);
  });

  it('can add multiple notes', () => {
    const model = new NotesModel();
    model.addNote('Learn js classes');
    model.addNote('Re-learn js callbacks!');
    expect(model.getNotes()).toEqual([
      'Learn js classes',
      'Re-learn js callbacks!',
    ]);
  });

  it('can reset the list of notes to empty', () => {
    const model = new NotesModel();
    model.addNote('Learn js classes');
    model.addNote('Re-learn js callbacks!');
    model.reset();
    expect(model.getNotes()).toEqual([]);
  });
});
