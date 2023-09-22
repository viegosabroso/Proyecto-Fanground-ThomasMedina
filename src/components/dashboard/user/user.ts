import usercss from "./user.css"

export enum attrsuser {
    "user" = "user",
    "userimg" = "userimg",
    "status" = "status",
    "concert" = "concert"
  }
  
  export class User extends HTMLElement {
    user?: string
    userimg?: string
    status?: string
    concert?: string

    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
  
    connectedCallback() {
      this.render();
    }
  
    static get observedAttributes() {
      const attrs: Record<attrsuser, null> = {
        user: null,
        userimg: null,
        status:null,
        concert:null,
      };
      return Object.keys(attrs);
    }
  
    attributeChangedCallback(
      propName: attrsuser,
      oldValue: string | undefined,
      newValue: string | undefined
    ) {
      switch (propName) {
        case attrsuser.user:
        this.user = newValue;
        break;
        case attrsuser.userimg:
        this.userimg = newValue;
        break;
        case attrsuser.status:
        this.status = newValue;
        break;
        case attrsuser.concert:
        this.concert = newValue;
        break;
      }
      this.render();
    }
  
    render() {
      if (this.shadowRoot) {
        this.shadowRoot.innerHTML = `
              <style>${usercss}</style>
              <section>
              <img src="${this.userimg}" width="160vw">
              <p class="usename">${this.user}</p>
              <p class="status">${this.status}</p>

              <p class="concert">${this.concert}</p>
              </section>
        `;
      }
    }
  }
  
  customElements.define("my-user", User);
  