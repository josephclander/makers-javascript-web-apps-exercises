class NotesView {
  constructor(model, client) {
    this.model = model;
    this.client = client;

    this.mainEl = document.querySelector('#main');
    this.msgInput = document.querySelector('#message-input');
    this.submitBtn = document.querySelector('#message-submit');
    this.resetBtn = document.querySelector('#reset');
    this.infoBar = document.querySelector('#infoBar');

    this.submitBtn.addEventListener('click', () => {
      const newNote = this.msgInput.value;
      this.client.createNote(
        newNote,
        () => this.displayNotesFromApi(),
        (error) => {
          this.displayError(error);
        }
      );
    });

    this.resetBtn.addEventListener('click', () => {
      this.resetAllNotes();
    });
  }

  displayNotes() {
    // clear current notes
    this.msgInput.value = '';
    
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
    this.client.loadNotes(
      (response) => {
        this.model.setNotes(response);
        this.displayNotes();
      },
      (error) => {
        this.displayError(error);
      }
    );
  }

  resetAllNotes() {
    this.client.reset(
      () => this.displayNotesFromApi(),
      (error) => this.displayError(error)
    );
  }

  displayError(error) {
    console.error(error.message);
    this.infoBar.textContent = error.message;
  }
}

module.exports = NotesView;
