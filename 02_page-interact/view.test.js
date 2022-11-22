/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const View = require('./view');

describe('Page view', () => {
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    view = new View();
  });
  it('displays 2 paragraphs', () => {
    view.addParagraph('this is our test');
    expect(document.querySelectorAll('p').length).toBe(3);
  });
  it('clears all paragraphs', () => {
    view.addParagraph('this is our test');
    view.clearParagraphs();
    expect(document.querySelectorAll('p').length).toBe(0);
  });
});
