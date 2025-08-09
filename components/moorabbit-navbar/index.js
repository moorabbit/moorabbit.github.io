import { HTMLTemplatedElement } from "/js/root.js";

const kComponentTemplateURL = import.meta.resolve("./template.html");

const kMoorabbitNavBar = class extends HTMLTemplatedElement {

  constructor() {

    super(/* componentTemplateURL */kComponentTemplateURL);

  }

};

const kDefineMoorabbitNavBar = () => {

  customElements.define("moorabbit-navbar", kMoorabbitNavBar);

};

export {

  kDefineMoorabbitNavBar

};
