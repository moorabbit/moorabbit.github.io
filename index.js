class BlurOverlayElement extends HTMLElement {

  constructor() {

    super();

    this.addEventListener("click", () => {

      this.style.visibility = "hidden";

      document.querySelector("div.contact-section-container").style.visibility = "hidden";

    });

  }

}

window.addEventListener("DOMContentLoaded", () => {

  customElements.define("blur-overlay", BlurOverlayElement);

  const contactButton = document.querySelector("nav-container button");

  const blurOverlay = document.querySelector("blur-overlay");

  const contactPage = document.querySelector("div.contact-section-container");

  const progressBar = document.querySelector("div#feedback-progress");

  const successMsg = document.querySelector("div.success-message");
  successMsg.classList.add("show");

  progressBar.style.width = "100%";

  setTimeout(() => {
    progressBar.style.transitionDuration = "5000ms";
    progressBar.style.transform = "scaleX(0)";
  }, 50);

  setTimeout(() => {
    successMsg.style.visibility = "hidden";
  }, 5000);


  contactButton.addEventListener("click", () => {

    blurOverlay.style.visibility = "visible";

    contactPage.style.visibility = "visible";

  });

  const closeButton = document.querySelector("div.submit-close-buttons button.danger");

  closeButton.addEventListener("click", () => {

      blurOverlay.style.visibility = "hidden";

      contactPage.style.visibility = "hidden";

  });

});
