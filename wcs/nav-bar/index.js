const shadowRootTemplate = document.createElement("template");

shadowRootTemplate.innerHTML = `
  <link rel="stylesheet" href="${import.meta.resolve('./index.css')}">

  <nav>

    <a href=""> moorabbit </a>

    <button> contact </button>

  </nav>
`;

class NavBar extends HTMLElement {

  constructor() {

    super();

    this.attachShadow({ mode: "open" });

    this.shadowRoot.append(shadowRootTemplate.cloneNode(true).content);

    this.contactButton = this.shadowRoot.querySelector("button");

    this.contactButton.addEventListener("click", () => {

      const blurOverlay = document.querySelector("wc-blur-overlay");

      const contactForm = document.querySelector("wc-contact-form");

      blurOverlay.show();
      contactForm.show();

    });

  }

}

export const defineNavBarWebComponent = () => {

  customElements.define("wc-nav-bar", NavBar);

};

