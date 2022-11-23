class NotesClient {
  loadNotes(callback, errorCallback) {
    fetch('http://localhost:3000/notes')
      .then((response) => response.json())
      .then((data) => {
        callback(data);
      })
      .catch((error) => {
        console.error(error);
        errorCallback();
      });
  }
  createNote(note, errorCallback) {
    fetch('http://localhost:3000/notes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ content: note }),
    }).catch((error) => {
      console.error(error);
      errorCallback();
    });
  }
}

module.exports = NotesClient;
