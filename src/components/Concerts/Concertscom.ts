import concertscomcss from "./Concertscom.css"

import { addObserver, appState, dispatch } from "../../store";
import { navigate } from "../../store/Actions";
import { Screens } from "../../types/screenstypes";

export enum attrshistory {
    "concertimg" = "concertimg",
    "concert" = "concert",
    "band" = "band",
    "date"= "date"
  }
  
  export class Concertscom extends HTMLElement {

    concertimg?: string
    concert?: string
    band?:string
    date?:string

    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      addObserver(this)

    }
  
    connectedCallback() {
      this.render();
      const gotouser = this.shadowRoot?.querySelector("button");
        gotouser?.addEventListener(('click'), () =>{
          dispatch(navigate(Screens.TICKETS))
        })
    }
  
    static get observedAttributes() {
      const attrs: Record<attrshistory, null> = {

        concertimg: null,
        concert:null,
        band:null,
        date:null

      };
      return Object.keys(attrs);
    }
  
    attributeChangedCallback(
      propName: attrshistory,
      oldValue: string | undefined,
      newValue: string | undefined
    ) {
      switch (propName) {
        case attrshistory.concertimg:
        this.concertimg = newValue;
        break;
        case attrshistory.concert:
        this.concert = newValue;
        break;
        case attrshistory.band:
        this.band = newValue;
        break;
        case attrshistory.date:
        this.date = newValue;
        break;
      }
      this.render();
    }
  
    render() {
      if (this.shadowRoot) {
        this.shadowRoot.innerHTML = `
        <style>${concertscomcss}</style>
        <div class="tarjeta">
        <img src="${this.concertimg}">
        <section>
        <h1 class="concert">${this.concert}</h1>
        <p class="band">${this.band}</p>
        <p class="date">${this.date}</p>
        <button id="">Tickets</button>
        </section>
        </div>

        `;
      }
    }
  }
  
  customElements.define("my-concertsrc", Concertscom);
  