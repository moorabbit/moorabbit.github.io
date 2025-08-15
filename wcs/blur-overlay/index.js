const shadowRootTemplate = document.createElement("template");

shadowRootTemplate.innerHTML = `
  <link rel="stylesheet" href="${import.meta.resolve('./index.css')}">
`;

class BlurOverlay extends HTMLElement {

  constructor() {

    super();

    this.attachShadow({ mode: "open" });

    this.shadowRoot.append(shadowRootTemplate.cloneNode(true).content);

  }

  hide() {

    this.style.visibility = "hidden";

  }

  show() {

    this.style.visibility = "visible";

  }

}

export const defineBlurOverlayWebComponent = () => {

  customElements.define("wc-blur-overlay", BlurOverlay);

};
