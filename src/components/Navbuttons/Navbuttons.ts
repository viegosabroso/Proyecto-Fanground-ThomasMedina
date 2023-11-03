import Navbuttonscss from "./Navbuttons.css"

import { addObserver, appState, dispatch } from "../../store";
import { navigate } from "../../store/Actions";
import { Screens } from "../../types/screenstypes";

export class Navbuttons extends HTMLElement {
  user?: string

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    addObserver(this)
  }

  async connectedCallback(){
    this.render()
    const button1 = this.shadowRoot?.querySelector("#concerts");
    button1?.addEventListener(('click'), () =>{
      dispatch(navigate(Screens.CONCERTS))
    })
    const button2 = this.shadowRoot?.querySelector("#home");
    button2?.addEventListener(('click'), () =>{
      dispatch(navigate(Screens.DASHBOARD))
    })
    const button3 = this.shadowRoot?.querySelector("#profile");
    button3?.addEventListener(('click'), () =>{
      dispatch(navigate(Screens.PROFILE))
    })
}


  render() {
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = `
            <style>${Navbuttonscss}</style>
            <div>
            <button id="concert">Concerts</button>
            <button id="home">Home</button>
            <button id="profile">Profile</button>
            </div>
            `;
    }
  }
}

customElements.define("my-buttons", Navbuttons);
