import { Timestamp } from "firebase/firestore";
export enum attrstickets {
  "Title" = "Title",
  "igmscr"="igmscr",
  "date" = "date",
  "TypeOfTickets" = "TypeOfTickets",
  "Price" = "Price",
  "amount" = "amount"
}

import { addObserver, appState, dispatch } from "../../store";
import { navigate } from "../../store/Actions";
import { Screens } from "../../types/screenstypes";

export class Ticketss extends HTMLElement {
  Title?: string
  date?:string
  igmscr?: string
  TypeOfTickets?: string
  Price?: string
  amount?: string

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    addObserver(this)
  }

  async connectedCallback() {
    this.render();
    const button3 = this.shadowRoot?.querySelector("button");
    button3?.addEventListener(('click'), () =>{
      dispatch(navigate(Screens.LOGIN))
    })
  }


  static get observedAttributes() {
    const attrssing: Record<attrstickets, null> = {
      Title: null,
      date: null,
      igmscr: null,
      TypeOfTickets: null,
      Price: null,
      amount:null
      
    };
    return Object.keys(attrssing);
  }

attributeChangedCallback(propName:attrstickets,oldValue: string | undefined,newValue: string | undefined){
    switch(propName){
        default: 
        this[propName] = newValue;
        break;
    }
    
    this.render();
}

  render() {
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = `
      <section>
      <img src="${this.igmscr}">
      <h2>${this.TypeOfTickets}</h2>
      <section>
      <button>-</button>
      <p>${this.amount}</p>
      <button>+</button>
      </section>
      <p>${this.Price}</p>
      </section> 
      <section>
      <h1>${this.title}</h1>
      <img src="https://s3-alpha-sig.figma.com/img/e327/a630/2cee7b319f2a4fb7a416a2dfb7469402?Expires=1702252800&Signature=T2J9-Ywt6wd35xA5zILZJQbU~O0Ifg4upQixhWp1VsAdBnPWAVtbp2jO3hKaGcDhWSunp8Ab94MSbfcEcmYAyys1JrYO9s0r7fdHNpXQVSQKWNcRmWPDrI41fNwf6pFzBU19UQc8ejaT8e70xJbLDyrPHqIArJdbPbd~Rt6JcvHn5rsWT~CmYrzQKDrX--1QrQIhis-dpZvVaSRZuwUzRiojlcrhkgwkpLSTITgSlFt1XhOW9zwBurD9x6DqV~9PJQS7z5qUx9b-DxBRrJqfKbyV38X4eV54mthuEux7jJWSZBhHMyf5n-cjyVl4Fp3LMxul5ASv3EOvog91sAGl4A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4">
      </section>
    `;
    }
  }
}

customElements.define("my-ticketscomp", Ticketss);
