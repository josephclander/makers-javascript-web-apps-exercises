// file: ../src/notesModel.js

/**
 * class model for notes
 */
class NotesModel {
  constructor() {
    this.notes = [];
  }

  /**
   * getNotes
   * @return {array} notes
   */
  getNotes() {
    return this.notes;
  }

  /**
   * addNote to the notes list
   * @param {string} note
   */
  addNote(note) {
    this.notes.push(note);
  }

  /**
   * reset
   */
  reset() {
    this.notes = [];
  }

  /**
   * setNotes from the api
   */
  setNotes(response) {
    this.notes = response;
  }
}

module.exports = NotesModel;
