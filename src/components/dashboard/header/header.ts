import headercss from "./header.css"

import { addObserver, appState, dispatch } from "../../../store";
import { navigate } from "../../../store/Actions";
import { Screens } from "../../../types/screenstypes";

export enum attrs {
  "user" = "user"
}


export class Header extends HTMLElement {
  user?: string

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  async connectedCallback() {
    this.render();
     const gotouser = this.shadowRoot?.querySelector("#profile");
        gotouser?.addEventListener(('click'), () =>{
          dispatch(navigate(Screens.PROFILE))
        })
  }

  static get observedAttributes() {
    const attrs: Record<attrs, null> = {
      user: null,
    };
    return Object.keys(attrs);
  }

  attributeChangedCallback(
    propName: attrs,
    oldValue: string | undefined,
    newValue: string | undefined
  ) {
    switch (propName) {
      case attrs.user:
        this.user = newValue;
        break;
    }
    this.render();
  }

  render() {
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = `
            <style>${headercss}</style>
            <div class="square">
            <section>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/2048px-Hamburger_icon.svg.png" width="30em" height="30em">
            <img src="./FANGROUND.png" width="300em" height="30em">
            </section>
            <img src="https://cdn-icons-png.flaticon.com/512/60/60977.png" height="25em">
            <p class="user">${this.user}</p>
            <img src="https://cdn.icon-icons.com/icons2/1863/PNG/512/person_118819.png"  height="25em" id="profile">
            </div>
            `;
    }
  }
}

customElements.define("my-header", Header);
