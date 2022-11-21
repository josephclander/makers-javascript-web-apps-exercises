class MessageView {
  constructor() {
    this.mainEl = document.querySelector('#main-container');
    this.buttonEl = document.querySelector('#show-message-button');

    this.buttonEl.addEventListener('click', () => {
      this.displayMessage();
    });
  }

  displayMessage() {
    const el = document.createElement('DIV');
    el.setAttribute('id', 'message');
    el.textContent = 'This message displayed by JavaScript';
    this.mainEl.append(el);
  }
}

module.exports = MessageView;
