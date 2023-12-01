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
        <my-header user="thomas"></my-header>
        <my-buttons></my-buttons>
        `
    }
    const ticketsdata = await gettickets()
    const tickets = this.ownerDocument.createElement("my-ticketscopm")
      tickets.setAttribute(attrstickets.Title, ticketsdata.Title)
      tickets.setAttribute(attrstickets.date,ticketsdata.date)
      tickets.setAttribute(attrstickets.igmscr, ticketsdata.igmscr)
      tickets.setAttribute(attrstickets.TypeOfTickets, ticketsdata.TypeOfTickets)
      tickets.setAttribute(attrstickets.Price, ticketsdata.Price)
      tickets.setAttribute(attrstickets.amount, ticketsdata.Amount)
      this.shadowRoot?.appendChild(tickets)
    
  }
}

customElements.define("my-tickets", Tickets);
