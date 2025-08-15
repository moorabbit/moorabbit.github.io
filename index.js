import { defineBlurOverlayWebComponent } from "/wcs/blur-overlay/index.js";
import { defineNavBarWebComponent } from "/wcs/nav-bar/index.js";
import { defineContactFormWebComponent } from "/wcs/contact-form/index.js";
import { defineFeedbackMessageWebComponent } from "/wcs/feedback-message/index.js";

window.addEventListener("DOMContentLoaded", () => {

  defineBlurOverlayWebComponent();
  defineNavBarWebComponent();
  defineContactFormWebComponent();
  defineFeedbackMessageWebComponent();

});

