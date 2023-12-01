import "../components/indexson";
import { attrshistory } from "../components/indexson";

import firebase,{getconcerts} from "../utils/firebase";
export class Profile extends HTMLElement {


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
        <my-profilescr user="Username" userimg="https://i.pinimg.com/1200x/3a/12/2c/3a122c6bdcb7956a296a58715191a525.jpg" status="Carpe diem..." ></my-profilescr>
        <style>
        p{
          position: relative;
          left: 35vw;
          color:white;
          font-family: 'Lato', sans-serif;
          font-size: 20pt;

        }

        </style>
        `
    }
    const texthistory = this.ownerDocument.createElement("p")
    texthistory.textContent = "Recent events"
    this.shadowRoot?.appendChild(texthistory)
    const concertdata = await getconcerts()
    concertdata.forEach((concert:any)=>{
      const History = this.ownerDocument.createElement("my-history")
      History.setAttribute(attrshistory.concertimg, concert.concertimg)
      History.setAttribute(attrshistory.concert,concert.concertname)
      History.setAttribute(attrshistory.band, concert.band)
      History.setAttribute(attrshistory.date, concert.date)
      this.shadowRoot?.appendChild(History)
    })
    
  }
}

customElements.define("my-profile", Profile);
