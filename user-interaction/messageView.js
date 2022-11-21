class MessageView {
  constructor() {
    this.mainEl = document.querySelector('#main-container');
    this.showButtonEl = document.querySelector('#show-message-button');
    this.hideButtonEl = document.querySelector('#hide-message-button');

    this.showButtonEl.addEventListener('click', () => {
      this.displayMessage();
    });
    this.hideButtonEl.addEventListener('click', () => {
      this.hideMessage();
    });
  }

  displayMessage() {
    const el = document.createElement('DIV');
    el.setAttribute('id', 'message');
    el.textContent = 'This message displayed by JavaScript';
    this.mainEl.append(el);
  }

  hideMessage() {
    document.querySelector('#message').remove();
  }
}

module.exports = MessageView;
