import "../components/indexson";

export class Profile extends HTMLElement {


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
        <my-header></my-header>
        `
    }
  }
}

customElements.define("my-profile", Profile);
