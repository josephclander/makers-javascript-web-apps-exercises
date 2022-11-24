class NotesClient {
  loadNotes(callback, errorCallback) {
    fetch('http://localhost:3000/notes')
      .then((response) => response.json())
      .then((data) => {
        callback(data);
      })
      .catch((error) => {
        const newError = new Error('server error');
        errorCallback(newError);
      });
  }
  createNote(note, callback, errorCallback) {
    fetch('http://localhost:3000/notes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ content: note }),
    })
      .then(() => callback())
      .catch((error) => {
        const newError = new Error('server error');
        errorCallback(newError);
      });
  }
  reset(callback, errorCallback) {
    fetch('http://localhost:3000/notes', {
      method: 'DELETE',
    })
      .then(() => callback())
      .catch((error) => {
        const newError = new Error('server error');
        errorCallback(newError);
      });
  }
}

module.exports = NotesClient;
