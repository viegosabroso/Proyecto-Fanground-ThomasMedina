import headercss from "./header.css"


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
            <style>${headercss}</style>
            <div>
            <button>Concerts</button>
            <button>Home</button>
            <button>Profile</button>
            </div>
            `;
    }
  }
}

customElements.define("my-buttons", Navbuttons);
