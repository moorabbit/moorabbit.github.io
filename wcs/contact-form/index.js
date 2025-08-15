const shadowRootTemplate = document.createElement("template");

shadowRootTemplate.innerHTML = `
  <link rel="stylesheet" href="${import.meta.resolve('./index.css')}">

  <form>

    <label>

      Your name

      <input
        type="text"
        name="name"
        placeholder="Anas Al-Charif"
        required
      >

    </label>

    <label>

      Your email

      <input
        type="email"
        name="email"
        placeholder="anas-al-charif@aljazeera.com"
        required
      >

    </label>

    <hr>

    <label>

      Your message

      <textarea
        name="message"
        placeholder="What would you like to share with me?"
        required
      ></textarea>

    </label>

    <hr>

    <section class="form-footer">

      <span> Contact me directly at <a href="mailto:moorabbit@proton.me"> moorabbit@proton.me </a> </span>

      <section class="form-control">

        <button type="submit"> Submit </buttom>

        <button> Close </buttom>

      </section>

    </section>

  </form>
`;

class ContactForm extends HTMLElement {

  constructor() {

    super();

    this.attachShadow({ mode: "open" });

    this.shadowRoot.append(shadowRootTemplate.cloneNode(true).content);

    const closeButton = this.shadowRoot.querySelector("section.form-control button:not([type='submit'])");

    const contactForm = this.shadowRoot.querySelector("form");

    const blurOverlay = document.querySelector("wc-blur-overlay");

    const feedbackMessage = document.querySelector("wc-feedback-message");

    closeButton.addEventListener("click", (e) => {

      e.preventDefault();

      blurOverlay.hide();

      this.hide();

      contactForm.reset();

    });

    contactForm.onsubmit = (e) => {

      e.preventDefault();

      // TODO: Do something with |new FormData(e.target)|

      this.freeze();

      feedbackMessage.startCountdown(() => {

        closeButton.click();

        this.unfreeze();

      });

    };

  }

  show() {

    this.style.visibility = "visible";

  }

  hide() {

    this.style.visibility = "hidden";

  }

  unfreeze() {

    const submitButton = this.shadowRoot.querySelector("section.form-control button[type='submit']");


    this.shadowRoot.querySelectorAll("label input, label textarea").forEach(el => {
      el.disabled = false;
    });

    submitButton.disabled = false;


  }

  freeze() {

    const submitButton = this.shadowRoot.querySelector("section.form-control button[type='submit']");


    this.shadowRoot.querySelectorAll("label input, label textarea").forEach(el => {
      el.disabled = true;
    });

    submitButton.disabled = true;

  }

}

export const defineContactFormWebComponent = () => {

  customElements.define("wc-contact-form", ContactForm);

};

