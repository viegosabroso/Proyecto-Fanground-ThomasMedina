import "../components/indexson";

export class Profile extends HTMLElement {


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
        <my-header></my-header>
        <my-profilescr user="Username" userimg="https://s3-alpha-sig.figma.com/img/fe9a/35bd/67f0d549b7edceac6dbc1af7eec140e0?Expires=1699833600&Signature=ol5rLecGq6b9Nw8d~PYux0HE43DUQuCdjPiYtSEgx8D9C3bDDVRe3fqoCUjCzGurf0kA0VQTNHOFS20glfnCX1silhqdWKWv~04gbozjZSuj5XGtLiil3xLo20dxjgnWtYLZ872qDSIkW6s7IBGicuocrmGChIN1KZhUCZsfDo2ARz1JJSAWot~ylwdvKWZ~Pxb7zF-UJqgzUYbY3emw6MOoFcQ5-CTQKFYzg3M9c-ZsuWCs737qcL~bFbIIVr8Ss-nGPASHdeK18Z9e-pS2-lEnFXKadIcAdxR44RyPHVwkTp9ctTIBXRJ5LwUj4sit1f-lPQQtv3Jd45AKASWekQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" status="Carpe diem..." ></my-profilescr>
        `
    }
  }
}

customElements.define("my-profile", Profile);
