const model = require('./notesModel');

class NotesView {
  constructor(model) {
    this.mainEl = document.querySelector('#main');
    this.model = model;
  }
  displayNotes() {
    const notes = this.model.getNotes();

    notes.forEach((note) => {
      const new_element = document.createElement('div');
      new_element.className = 'note';
      new_element.textContent = note;
      this.mainEl.append(new_element);
    });
  }
}

module.exports = NotesView;
