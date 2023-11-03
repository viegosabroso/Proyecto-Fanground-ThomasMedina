import { Timestamp } from "firebase/firestore";
import Logincss from "./login.css";
export enum attrslogin {
  "firsttxt" = "firsttxt",
  "buttontext" = "buttontext"
}

import { addObserver, appState, dispatch } from "../../store";
import { navigate } from "../../store/Actions";
import { Screens } from "../../types/screenstypes";

export class Login extends HTMLElement {
  firsttxt?: string
  buttontext?:string

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    addObserver(this)
  }

  async connectedCallback() {
    this.render();
    const button1 = this.shadowRoot?.querySelector("p");
    button1?.addEventListener(('click'), () =>{
      dispatch(navigate(Screens.SIGNUP))
    })
    const button2 = this.shadowRoot?.querySelector("button");
    button2?.addEventListener(('click'), () =>{
      dispatch(navigate(Screens.DASHBOARD))
    })
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
    <style>${Logincss}}</style>
    <img src="./FANGROUNDwhite.png" width="300em" height="30em">
    <div class="square">
    <h1>${this.firsttxt}</h1>
    <input class="inputpile" type="email" id="email" placeholder="Email">
    <input class="inputpile" type="password" id="password" placeholder="Password">
    <p>Forgot your password?</p>
    <div class="linea"></div>
    <button>${this.buttontext}</button>
    </div>
    `;
    }
  }
}

customElements.define("my-login", Login);
