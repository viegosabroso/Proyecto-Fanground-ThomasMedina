import imgtextcss from "./Imgtext.css";

export class Imgtext extends HTMLElement {
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
        <style>${imgtextcss}</style>
        <div></div>
        <h1>Are you ready for the show?</h1>
        `;
    }
  }
}

customElements.define("my-imgtext", Imgtext);
