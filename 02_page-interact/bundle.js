(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // view.js
  var require_view = __commonJS({
    "view.js"(exports, module) {
      var View2 = class {
        constructor() {
          this.mainContainerEl = document.querySelector("#main-container");
        }
        addParagraph(text) {
          const p = document.createElement("P");
          p.textContent = text;
          this.mainContainerEl.append(p);
        }
        clearParagraphs() {
          const paragraphs = document.querySelectorAll("p");
          paragraphs.forEach((p) => {
            this.mainContainerEl.removeChild(p);
          });
        }
      };
      module.exports = View2;
    }
  });

  // index.js
  var View = require_view();
  var view = new View();
})();
