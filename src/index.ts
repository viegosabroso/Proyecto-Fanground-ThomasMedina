import "./screens/Dashboard"
import "./screens/signup"
import "./screens/login"
import "./screens/Profile"
export class FanGround extends HTMLElement{
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
      }
    
      connectedCallback() {
        this.render();
        
    }

    render(){

        const contenedor = document.createElement("my-dashboard");
        this.shadowRoot?.appendChild(contenedor)
    }
    
}

customElements.define("index-container", FanGround);
/*my-dashboard
  my-signupcontainer
  my-logincontainer
  my-profile
*/