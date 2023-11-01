import "./screens/Dashboard"
import "./screens/login"
export class FanGround extends HTMLElement{
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
      }
    
      connectedCallback() {
        this.render();
        
    }

    render(){

        const contenedor = document.createElement("my-signupcontainer");
        this.shadowRoot?.appendChild(contenedor)
    }
    
}

customElements.define("index-container", FanGround);
