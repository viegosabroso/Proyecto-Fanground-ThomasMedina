import postcss from "./post.css"

export enum attrspost {
  "user" = "user",
  "userimg" = "userimg",
  "comment" = "comment",
  "imgcomment" = "imgcomment",
}

export class Post extends HTMLElement {

  user?: string
  userimg?: string
  comment?: string
  imgcomment?: string | undefined

      constructor() {
        super();
        this.attachShadow({ mode: "open" });
      }
      static get observedAttributes() {
        const attrs: Record<attrspost, null> = {
          user: null,
          userimg: null,
          comment:null,
          imgcomment:null,
  
        };
        return Object.keys(attrs);
      }
    
      attributeChangedCallback(
        propName: attrspost,
        oldValue: string | undefined,
        newValue: string | undefined
      ) {
        switch (propName) {
          case attrspost.user:
          this.user = newValue;
          break;
          case attrspost.userimg:
          this.userimg = newValue;
          break;
          case attrspost.comment:
          this.comment = newValue;
          break;
          case attrspost.imgcomment:
            this.imgcomment = newValue !== undefined ? newValue : undefined;
            break;
  
        }
        this.render();
      }
      render() {
        if (this.shadowRoot) {
          this.shadowRoot.innerHTML = `
                <style>${postcss}</style>
                <img src="${this.userimg}" width="80vw" height="80vw">
                <section>
                <p class="usename">${this.user}</p>
                <p class="status">${this.comment}</p>
                </section>
          `;
        }
      }
    }
    
    

customElements.define("my-post", Post);
