import "./screens/Dashboard"
import "./screens/signup"
import "./screens/login"
import "./screens/Profile"
import "./screens/Concerts"
import "./screens/Ticket"

import { addObserver } from "./store/index";
import { appState } from "./store/index";
import { Screens } from "./types/screenstypes";

export class FanGround extends HTMLElement{
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        addObserver(this)
      }
    
      connectedCallback() {
        this.render();
        
    }

    render() {
      if(this.shadowRoot) this.shadowRoot.innerHTML = `
      `
      switch (appState.screen) {
          case Screens.LOGIN:
              const login = this.ownerDocument.createElement("my-logincontainer");
              this.shadowRoot?.appendChild(login);
              break;
              case Screens.SIGNUP:
              const signup = this.ownerDocument.createElement("my-signupcontainer");
              this.shadowRoot?.appendChild(signup);
              break;
              case Screens.DASHBOARD:
              const dashboard = this.ownerDocument.createElement("my-dashboard");
              this.shadowRoot?.appendChild(dashboard);
              break;
              case Screens.PROFILE:
              const profile = this.ownerDocument.createElement("my-profile");
              this.shadowRoot?.appendChild(profile);
              break;
              case Screens.CONCERTS:
              const concerts = this.ownerDocument.createElement("my-concerts");
              this.shadowRoot?.appendChild(concerts);
              break;
              case Screens.TICKETS:
              const tickets = this.ownerDocument.createElement("my-tickets");
              this.shadowRoot?.appendChild(tickets);
              break;

          
    
}
}}

customElements.define("index-container", FanGround);
/*my-dashboard
  my-signupcontainer
  my-logincontainer
  my-profile
  my-concerts
  my-tickets
*/