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
        
    }
  }
}

customElements.define("my-login", Containerlogin);
