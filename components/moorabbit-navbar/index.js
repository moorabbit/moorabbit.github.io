import { HTMLTemplatedElement } from "/js/root.js";

const kComponentTemplateURL = import.meta.resolve("./template.html");

class MoorabbitNavBar extends HTMLTemplatedElement {

  constructor() {

    super(/* componentTemplatesURL */kComponentTemplateURL);

  }

};

const defineMoorabbitNavBar = () => {

  customElements.define("moorabbit-navbar", MoorabbitNavBar);

};

export {

 defineMoorabbitNavBar

};
