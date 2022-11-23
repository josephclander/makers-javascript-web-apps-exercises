class NotesView {
  constructor(model, client) {
    this.model = model;
    this.client = client;

    this.mainEl = document.querySelector('#main');
    this.msgInput = document.querySelector('#message-input');
    this.submitBtn = document.querySelector('#message-submit');

    this.submitBtn.addEventListener('click', () => {
      const newNote = this.msgInput.value;
      this.addNewNote(newNote);
      this.msgInput.value = '';
    });
  }
  addNewNote(newNote) {
    this.model.addNote(newNote);
    this.displayNotes();
  }

  displayNotes() {
    const divs = document.querySelectorAll('.note');
    divs.forEach((note) => note.remove());

    const notes = this.model.getNotes();
    notes.forEach((note) => {
      const new_element = document.createElement('div');
      new_element.className = 'note';
      new_element.textContent = note;
      this.mainEl.append(new_element);
    });
  }

  displayNotesFromApi() {
    this.client.loadNotes((response) => {
      this.model.setNotes(response);
      this.displayNotes();
    });
  }
}

module.exports = NotesView;
