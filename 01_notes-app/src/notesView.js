class NotesView {
  constructor(model) {
    this.model = model;

    this.mainEl = document.querySelector('#main');
    this.msgInput = document.querySelector('#message-input');
    this.submitBtn = document.querySelector('#message-submit');

    this.submitBtn.addEventListener('click', () => {
      const newNote = this.msgInput.value;
      this.addNewNote(newNote);
    });
  }
  addNewNote(newNote) {
    this.model.addNote(newNote);
    this.displayNotes();
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
