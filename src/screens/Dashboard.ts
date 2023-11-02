import "../components/indexson";
import {data} from "../components/data/data";
import { datafriends } from "../components/data/datafriends";
import { Friends} from "../components/indexson";
import { attrfriends } from "../components/dashboard/friends/friends";
import { Post, attrspost } from "../components/dashboard/post/post";
import { dataoncert } from "../components/data/databands";
import { Soon, attrsSoon } from "../components/dashboard/soon/soon";
import { Video, attrsvideo } from "../components/dashboard/videos/videos";
import { datavideo } from "../components/data/datavideo";


export class Appcontainer extends HTMLElement {

  friend: Friends[] = []
  posting: Post[] = []
  sooning: Soon[] = []
  video: Video[] = []
  
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    if (this.shadowRoot) {

    // las etiquetas que no necitaron foreach 
      this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="./index.css">
      <my-header user="${data.user}"></my-header>
      <my-user userimg="${data.imguser}" user="${data.user}" status="${data.status}" concert="${data.concert}"></my-user>`;

      // div que contiene los amigos
      const containerfriendsdiv = document.createElement("div")
      containerfriendsdiv.classList.add("containerfriends")
      const textoamigos = document.createElement("p")
      textoamigos.classList.add("textofriends")
      textoamigos.textContent="Friends"
      containerfriendsdiv.appendChild(textoamigos)
      
        //el foreach de los amigos
      datafriends.forEach((containerfriends)=>{
        const contaienrfr = document.createElement("my-friends") as Friends
        contaienrfr.classList.add("container")
        contaienrfr.setAttribute(attrfriends.user, containerfriends.user)
        contaienrfr.setAttribute(attrfriends.status, containerfriends.status)
        contaienrfr.setAttribute(attrfriends.userimg, containerfriends.imguser)
        this.friend.push(contaienrfr)
        this.shadowRoot?.appendChild(containerfriendsdiv)
        containerfriendsdiv.appendChild(contaienrfr)
      })
      //div que contenera el post
      const containerpostdiv = document.createElement("div")
      containerpostdiv.classList.add("postdiv")
      //le añado el nombre del usueario 
      const userimgpost = document.createElement("img")
     userimgpost.setAttribute("src",data.imguser)
     userimgpost.classList.add("imguser")
     containerpostdiv.appendChild(userimgpost)
        //y la imagen del user 
      const usercomenting = document.createElement("p")
      usercomenting.classList.add("usercommenting")
      usercomenting.textContent=`${data.user}`
      containerpostdiv.appendChild(usercomenting)
      //le añado la caja de comentario 
      const commentignbox = document.createElement("input")
      commentignbox.classList.add("textbox")
      commentignbox.setAttribute("placeholder", "what are you thinking")
      containerpostdiv.appendChild(commentignbox)

      //froeach del post
      datafriends.forEach((containerpost)=>{
        const containerposts = document.createElement("my-post") as Post
        containerposts.classList.add("containerpost")
        containerposts.setAttribute(attrspost.user, containerpost.user)
        containerposts.setAttribute(attrspost.userimg, containerpost.imguser)
        containerposts.setAttribute(attrspost.comment, containerpost.comment)
        this.posting.push(containerposts)
        containerpostdiv.appendChild(containerposts)
        this.shadowRoot?.appendChild(containerpostdiv)
      })

      //div que contiene las tarjetas y el texto
      const containersoondiv = document.createElement("div")
      containersoondiv.classList.add("soondiv")
      //contiene el texto 
      const containersoontext = document.createElement("div")
      containersoontext.classList.add("soontext")
      const soontext = document.createElement("p")
      soontext.classList.add("soontextt")
      soontext.textContent="Coming soon"
      containersoontext.appendChild(soontext)
      const containerboth = document.createElement("div")
      containerboth.classList.add("both")
      containerboth.appendChild(containersoontext)
      //for each del soon
      dataoncert.forEach((contaienerconcert)=>{
        const containersoon = document.createElement("my-soon") as Soon
        containersoon.classList.add("containersoon")
        containersoon.setAttribute(attrsSoon.concertname, contaienerconcert.concertname)
        containersoon.setAttribute(attrsSoon.concertimg, contaienerconcert.concertimg)
        containersoon.setAttribute(attrsSoon.concertdate, contaienerconcert.concertdate)
        this.sooning.push(containersoon)
        containersoondiv.appendChild(containersoon)
        this.shadowRoot?.appendChild(containersoondiv)

      })
      //uso un contenedor para contener el texto y y el foreach para evitar problemas en el css despues
      containerboth.appendChild(containersoondiv)
      this.shadowRoot?.appendChild(containerboth)
      //div del video 
      const containervideodiv = document.createElement("div")
      containervideodiv.classList.add("videodiv")
      const populartxt = document.createElement("p")
      populartxt.textContent="Popular videos"
      populartxt.classList.add("populartext")
      containervideodiv.appendChild(populartxt)
      //for each del video 
      datavideo.forEach((videocontains)=>{
      const containervideo = document.createElement("my-video") as Video
      containervideo.classList.add("containervideo")
      containervideo.setAttribute(attrsvideo.video, videocontains.videoURL)
      containervideo.setAttribute(attrsvideo.videoname, videocontains.nombreVideo)
      containervideo.setAttribute(attrsvideo.likes, videocontains.numero)
      containervideo.setAttribute(attrsvideo.poster, videocontains.videoposter)
      this.video.push(containervideo)
      containervideodiv.appendChild(containervideo)
      this.shadowRoot?.appendChild(containervideodiv)
      })
    }
  }
}

customElements.define("my-dashboard", Appcontainer);
