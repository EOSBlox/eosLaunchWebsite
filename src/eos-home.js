import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';
import './components/the-header.js';


class EosHome extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;
          background-color: #3D6D9A;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .the-header {
          position: fixed;
          top: 0;
          width: 100%; 
          height: 60px;

        }
        .image img {
          width: 800px;
        }
      </style>
      <the-header class="the-header"></the-header>
      <div class="image">
        <img src = "../images/home.svg" alt="Rocket launching from a deployed smart contract">
      </div>
    `;
  }
}

window.customElements.define('eos-home', EosHome);
