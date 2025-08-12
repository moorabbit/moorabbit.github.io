const kDOMParser = new DOMParser();

class HTMLTemplatedElement extends HTMLElement {

  constructor(componentTemplatesURL) {

    super();

    (async () => {

      await fetch(componentTemplatesURL)
      .then((res) => res.text())
      .then((html) => kDOMParser.parseFromString(html, "text/html"))
      .then((doc) => doc.querySelector("template").content)
      .then((dom) => {
        this.attachShadow({ mode: "open" });
        this.shadowRoot.append(dom);
      });

    })();

  }

};

export {

  kDOMParser,

  HTMLTemplatedElement

};
