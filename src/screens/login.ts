import "../components/indexson";

export class Containerlogin extends HTMLElement {
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
        <my-login firsttxt="Log in" buttontext="Log in"></my-login>
        `;
    }
  }
}

customElements.define("my-logincontainer", Containerlogin);
