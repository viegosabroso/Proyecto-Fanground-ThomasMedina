import { Profile } from "../../screens/Profile"


export enum attrsuser {
    "user" = "user",
    "userimg" = "userimg",
    "status" = "status",
    "concert" = "concert"
  }
  
  export class Profilescr extends HTMLElement {
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

              <section>
              <h1 class="usename">${this.user}</h1>
              <p class="status">${this.status}</p>
              <div class="medal" >
              <p>Profesional rocker</p>
              </div>
              <button>Edit profile</button>
              </section>
              <img src="${this.userimg}" width="160vw">
        `;
      }
    }
  }
  
  customElements.define("my-profilescr", Profilescr);
  