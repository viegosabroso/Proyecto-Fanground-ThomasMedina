import "../components/indexson";
import { attrshistory } from "../components/indexson";
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
        <my-profilescr user="Username" userimg="https://s3-alpha-sig.figma.com/img/fe9a/35bd/67f0d549b7edceac6dbc1af7eec140e0?Expires=1699833600&Signature=ol5rLecGq6b9Nw8d~PYux0HE43DUQuCdjPiYtSEgx8D9C3bDDVRe3fqoCUjCzGurf0kA0VQTNHOFS20glfnCX1silhqdWKWv~04gbozjZSuj5XGtLiil3xLo20dxjgnWtYLZ872qDSIkW6s7IBGicuocrmGChIN1KZhUCZsfDo2ARz1JJSAWot~ylwdvKWZ~Pxb7zF-UJqgzUYbY3emw6MOoFcQ5-CTQKFYzg3M9c-ZsuWCs737qcL~bFbIIVr8Ss-nGPASHdeK18Z9e-pS2-lEnFXKadIcAdxR44RyPHVwkTp9ctTIBXRJ5LwUj4sit1f-lPQQtv3Jd45AKASWekQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" status="Carpe diem..." ></my-profilescr>
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
