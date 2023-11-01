import "../components/indexson";

export class Containersignup extends HTMLElement {


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
        <my-signup firsttxt="Create your account" buttontext="Sign up"></my-signup>
        `
    }
  }
}

customElements.define("my-signupcontainer", Containersignup);
