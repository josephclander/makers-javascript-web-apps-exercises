class View {
  constructor() {
    this.mainContainerEl = document.querySelector('#main-container');
  }
  addParagraph(text) {
    const p = document.createElement('P');
    p.textContent = text;
    this.mainContainerEl.append(p);
  }
  clearParagraphs() {
    const paragraphs = document.querySelectorAll('p');
    paragraphs.forEach((p) => {
      this.mainContainerEl.removeChild(p);
    });
  }
}

module.exports = View;
