import { HTMLTemplatedElement } from "/js/root.js";

const kComponentTemplateURL = import.meta.resolve("./template.html");

class kMoorabbitNavBar extends HTMLTemplatedElement {

  constructor() {

    super(/* componentTemplatesURL */kComponentTemplateURL);

  }

};

const kDefineMoorabbitNavBar = () => {

  customElements.define("moorabbit-navbar", kMoorabbitNavBar);

};

export {

  kDefineMoorabbitNavBar

};
