import "../components/indexson";
import { attrshistory } from "../components/History/history";
import {dataoncerthistor} from "../components/data/dataconcerts"

export class Concerts extends HTMLElement {

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
        <my-header user="thomas"></my-header>
        <my-buttons></my-buttons>
        <style>
        p{
          position: relative;
          left: 45vw;
          color:white;
          font-family: 'Lato', sans-serif;
          font-size: 20pt;
        }
        </style>
        `
    }
    const imgtextcontainer = this.ownerDocument.createElement("my-imgtext")
    this.shadowRoot?.appendChild(imgtextcontainer)
    const texthistory = this.ownerDocument.createElement("p")
    texthistory.textContent = "Comming soon"
    this.shadowRoot?.appendChild(texthistory)
    
    dataoncerthistor.forEach((concert)=>{
      const concertss = this.ownerDocument.createElement("my-concertsrc")
      concertss.setAttribute(attrshistory.concertimg, concert.concertimg)
      concertss.setAttribute(attrshistory.concert,concert.concertname)
      concertss.setAttribute(attrshistory.band, concert.band)
      concertss.setAttribute(attrshistory.date, concert.date)
      this.shadowRoot?.appendChild(concertss)
    })
  }
}

customElements.define("my-concerts", Concerts);
