import { Timestamp } from "firebase/firestore";
import Signupcss from "./signup.css";
export enum attrssingup {
  "firsttxt" = "firsttxt",
  "buttontext" = "buttontext"
}

export class Signup extends HTMLElement {
  firsttxt?: string
  buttontext?:string

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  static get observedAttributes() {
    const attrssing: Record<attrssingup, null> = {
      firsttxt: null,
      buttontext: null
    };
    return Object.keys(attrssing);
  }

  attributeChangedCallback(
    propName: attrssingup,
    oldValue: string | undefined,
    newValue: string | undefined
  ) {
    switch (propName) {
      case attrssingup.firsttxt:
        this.firsttxt = newValue;
        break;
      case attrssingup.buttontext:
        this.buttontext = newValue

    }
    this.render();
  }

  render() {
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = `
    <style>${Signupcss}}</style>
    <img src="./FANGROUNDwhite.png" width="300em" height="30em">
    <div class="square">
    <h1>${this.firsttxt}</h1>
    <input class="inputpile" type="email" id="email" placeholder="Email">
    <input class="inputpile" type="text" id="user" placeholder="Nickname">
    <input class="inputpile" type="password" id="password" placeholder="Password">
    <input class="inputpile" type="password" id="paswordconfirm" placeholder="Confirm password">
    <section>
    <input type="checkbox" id="checkbox1" value="second_checkbox">
    <label for="checkbox1">Receive news and product emails.</label>
    </section>
    <div class="linea"></div>
    <p>By registering, you agree to provide accurate information and use our services responsibly within legal and ethical boundaries.</p>
    <button>${this.buttontext}</button>
    </div>
    `;
    }
  }
}

customElements.define("my-signup", Signup);
