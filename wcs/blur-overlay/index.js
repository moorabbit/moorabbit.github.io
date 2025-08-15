class BlurOverlay extends HTMLElement {

  constructor() {

    super();

    this.attachShadow({ mode: "open" });

    const CSSLink = document.createElement("link");
    CSSLink.rel = "stylesheet";
    CSSLink.href = import.meta.resolve("./index.css");

    this.shadowRoot.append(CSSLink);

  }

  hide() {

    this.style.visibility = "hidden";

  }

  show() {

    this.style.visibility = "visibile";

  }

}

export const defineBlurOverlayWebComponent = () => {

  customElements.define("wc-blur-overlay", BlurOverlay);

};
