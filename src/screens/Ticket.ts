import { attrstickets } from "../components/Ticket/Ticket";
import "../components/indexson";
import firebase,{gettickets} from "../utils/firebase";

export class Tickets extends HTMLElement {


  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  async render() {
    if (this.shadowRoot) {
        this.shadowRoot.innerHTML = `
        <my-header user="Thomas"></my-header>
        <my-buttons></my-buttons>
        `
    }
    const ticketsdata = await gettickets()
    ticketsdata.forEach((ticketsinfo:any) => {
      
      const tickets = this.ownerDocument.createElement("my-ticketscomp") as Tickets
      tickets.setAttribute(attrstickets.titlee, ticketsinfo.Title )
      tickets.setAttribute(attrstickets.date,ticketsinfo.Date)
      tickets.setAttribute(attrstickets.igmscr, ticketsinfo.Imgsrc)
      tickets.setAttribute(attrstickets.typeoftickets, ticketsinfo.TypeOfTicket)
      tickets.setAttribute(attrstickets.price, ticketsinfo.Price)
      tickets.setAttribute(attrstickets.amount, ticketsinfo.Amount)
      this.shadowRoot?.appendChild(tickets)
    });
    
  }
}

customElements.define("my-tickets", Tickets);
