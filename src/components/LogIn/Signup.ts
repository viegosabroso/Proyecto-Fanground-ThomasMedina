import { Timestamp } from "firebase/firestore";
import { Signupcss } from "./signup.css";
export enum attrslogin {
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
    const attrslo: Record<attrslogin, null> = {
      firsttxt: null,
      buttontext: null
    };
    return Object.keys(attrslo);
  }

  attributeChangedCallback(
    propName: attrslogin,
    oldValue: string | undefined,
    newValue: string | undefined
  ) {
    switch (propName) {
      case attrslogin.firsttxt:
        this.firsttxt = newValue;
        break;
      case attrslogin.buttontext:
        this.buttontext = newValue

    }
    this.render();
  }

  render() {
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = `
    <style>${Signupcss}}</style>
    <img src="./FANGROUND.png" width="300em" height="30em">
    <div class="square">
    <h1>${this.firsttxt}</h1>
    <input type="email" id="email">
    <input type="text" id="user">
    <input type="password" id="password">
    <input type="passworc" id="paswordconfirm">
    <section>
    <input type="checkbox" id="checkbox1" value="second_checkbox">
    <label for="checkbox1">Receive news and product emails.</label>
    </section>
    <p>By registering, you agree to provide accurate information and use our services responsibly within legal and ethical boundaries.</p>
    <button>${this.buttontext}</button>
    </div>
    `;
    }
  }
}

customElements.define("my-signup", Signup);