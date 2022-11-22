class MessageView {
  constructor() {
    this.mainEl = document.querySelector('#main-container');
    this.showButtonEl = document.querySelector('#show-message-button');
    this.hideButtonEl = document.querySelector('#hide-message-button');
    this.input = document.querySelector('#message-input');

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
    el.textContent = this.input.value;
    this.mainEl.append(el);
  }

  hideMessage() {
    this.input.value = '';
    document.querySelector('#message').remove();
  }
}

module.exports = MessageView;
