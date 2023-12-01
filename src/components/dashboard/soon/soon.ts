import sooncss from "./soon.css";

import { addObserver, appState, dispatch } from "../../../store";
import { navigate } from "../../../store/Actions";
import { Screens } from "../../../types/screenstypes";

export enum attrsSoon {
  "concertname" = "concertname",
  "concertimg" = "concertimg",
  "concertdate" = "concertdate",
}

export class Soon extends HTMLElement {
  concertimg?: string;
  concertname?: string;
  concertdate?: string;
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    addObserver(this);
  }

  async connectedCallback() {
    this.render();
    const gotouser = this.shadowRoot?.querySelector("img");
    gotouser?.addEventListener("click", () => {
      dispatch(navigate(Screens.CONCERTS));
    });
  }

  static get observedAttributes() {
    const attrsSoon: Record<attrsSoon, null> = {
      concertname: null,
      concertimg: null,
      concertdate: null,
    };
    return Object.keys(attrsSoon);
  }

  attributeChangedCallback(
    propName: attrsSoon,
    oldValue: string | undefined,
    newValue: string | undefined
  ) {
    switch (propName) {
      case attrsSoon.concertname:
        this.concertname = newValue;
        break;
      case attrsSoon.concertimg:
        this.concertimg = newValue;
        break;
      case attrsSoon.concertdate:
        this.concertdate = newValue;
        break;
    }
    this.render();
  }

  render() {
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = `
        <style>${sooncss}</style>
        <img src="${this.concertimg}" height="200vw" width="200vw" class="imgsoon">
        <section>
        <p class="concertname">${this.concertname}</p>
        <p>${this.concertdate}</p>
        </section>     
 `;
    }
  }
}

customElements.define("my-soon", Soon);
