import { Profile } from "../../screens/Profile"
import Profilecss from "./profile.css"

import { addObserver, appState, dispatch } from "../../store";
import { navigate } from "../../store/Actions";
import { Screens } from "../../types/screenstypes";

export enum attrsuser {
    "user" = "user",
    "userimg" = "userimg",
    "status" = "status",

  }
  
  export class Profilescr extends HTMLElement {
    user?: string
    userimg?: string
    status?: string


    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      addObserver(this)
    }
  
    async connectedCallback() {
      this.render();
      const button1 = this.shadowRoot?.querySelector("button");
    button1?.addEventListener(('click'), () =>{
      dispatch(navigate(Screens.LOGIN))
    })
    }
  
    static get observedAttributes() {
      const attrs: Record<attrsuser, null> = {
        user: null,
        userimg: null,
        status:null,

      };
      return Object.keys(attrs);
    }
  
    attributeChangedCallback(
      propName: attrsuser,
      oldValue: string | undefined,
      newValue: string | undefined
    ) {
      switch (propName) {
        case attrsuser.user:
        this.user = newValue;
        break;
        case attrsuser.userimg:
        this.userimg = newValue;
        break;
        case attrsuser.status:
        this.status = newValue;
        break;

      }
      this.render();
    }
  
    render() {
      if (this.shadowRoot) {
        this.shadowRoot.innerHTML = `
            <style>${Profilecss}}</style>
            <div class="container">
            <section class="section1">
            <h1 class="usename">${this.user}</h1>
            <p class="status">${this.status}</p>
            <div class="medal" >
            <p>Profesional rocker</p>
            </div>
            <button>Close session</button>
            </section>
            <section class="section2">
            <img src="${this.userimg}" class="imguser" height="150" width="150" >
            <p>Concerts: 2</p>
            </section>
            </div>

        `;
      }
    }
  }
  
  customElements.define("my-profilescr", Profilescr);
  