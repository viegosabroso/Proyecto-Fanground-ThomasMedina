import videocss from "./video.css"

export enum attrsvideo {
    "video" = "video",
    "videoname" = "videoname",
    "likes" = "likes",
    "poster"  = "poster"
  }
  
  export class Video extends HTMLElement {
    video?: string
    videoname?: string
    likes?:number
    poster?: string
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
  
    connectedCallback() {
      this.render();
    }
  
    static get observedAttributes() {
      const attrsvideo: Record<attrsvideo, null> = {
        video: null,
        videoname:null,
        likes:null,
        poster:null
      };
      return Object.keys(attrsvideo);
    }
  
    attributeChangedCallback(
      propName: attrsvideo,
      oldValue: string | undefined,
      newValue: string | undefined
    ) {
      switch (propName) {
        case attrsvideo.video:
          this.video = newValue;
          break;
          case attrsvideo.videoname:
          this.videoname = newValue;
          break;
          case attrsvideo.likes:
          this.likes = newValue ? Number(newValue):undefined
          break;
          case attrsvideo.poster:
          this.poster = newValue
          break
      }
      this.render();
    }
  
    render() {
      if (this.shadowRoot) {
        this.shadowRoot.innerHTML = `
        <style>${videocss}</style>
        <video src="${this.video}" poster="${this.poster}" width="250vw" style="border-radius:20px;"></video>
        <section class="all">
        <p>${this.videoname}</p>
        <section class="corazones">
        <p>${this.likes}</p>
        <img src="https://clipart-library.com/img/1707325.png" height="20vw" width="20vw" class="heart">  
        </section>
        </section>
 `;
      }
    }
  }
  
  customElements.define("my-video", Video);
  