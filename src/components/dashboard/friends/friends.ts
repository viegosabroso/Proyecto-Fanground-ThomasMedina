import friendscss from "./friends.css"
export enum attrfriends {
    "user" = "user",
    "userimg" = "userimg",
    "status" = "status",

  }
  
  export class Friends extends HTMLElement {
    user?: string
    userimg?: string
    status?: string


    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
  
    connectedCallback() {
      this.render();
    }
  
    static get observedAttributes() {
      const attrs: Record<attrfriends, null> = {
        user: null,
        userimg: null,
        status:null,

      };
      return Object.keys(attrs);
    }
  
    attributeChangedCallback(
      propName: attrfriends,
      oldValue: string | undefined,
      newValue: string | undefined
    ) {
      switch (propName) {
        case attrfriends.user:
        this.user = newValue;
        break;
        case attrfriends.userimg:
        this.userimg = newValue;
        break;
        case attrfriends.status:
        this.status = newValue;
        break;

      }
      this.render();
    }
  
    render() {
      if (this.shadowRoot) {
        this.shadowRoot.innerHTML = `
              <style>${friendscss}</style>
              <img src="${this.userimg}" width="60vw"  height="60vw" class="imgs">
              <section>
              <p class="username">${this.user}</p>
              <p class="status">${this.status}</p>
              </section>

        `;
      }
    }
  }
  
  customElements.define("my-friends", Friends);
  