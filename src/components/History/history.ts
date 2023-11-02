

export enum attrshistory {
    "concertimg" = "concertimg",
    "concert" = "concert",
    "band" = "band",
    "date"= "date"
  }
  
  export class History extends HTMLElement {

    concertimg?: string
    concert?: string
    band?:string
    date?:string

    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
  
    connectedCallback() {
      this.render();
    }
  
    static get observedAttributes() {
      const attrs: Record<attrshistory, null> = {

        concertimg: null,
        concert:null,
        band:null,
        date:null

      };
      return Object.keys(attrs);
    }
  
    attributeChangedCallback(
      propName: attrshistory,
      oldValue: string | undefined,
      newValue: string | undefined
    ) {
      switch (propName) {
        case attrshistory.concertimg:
        this.concertimg = newValue;
        break;
        case attrshistory.concert:
        this.concert = newValue;
        break;
        case attrshistory.band:
        this.band = newValue;
        break;
        case attrshistory.date:
        this.date = newValue;
        break;
      }
      this.render();
    }
  
    render() {
      if (this.shadowRoot) {
        this.shadowRoot.innerHTML = `
        <div class="tarjeta">
        <img src="${this.concertimg}">
        <section>
        <h1>${this.concert}}</h1>
        <p>${this.band}</p>
        <p>${this.date}</p>
        </section>
        </div>

        `;
      }
    }
  }
  
  customElements.define("my-history", History);
  