import Navbuttonscss from "./Navbuttons.css"


export class Navbuttons extends HTMLElement {
  user?: string

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
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
