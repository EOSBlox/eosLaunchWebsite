import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';


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
      </style>

      <div class="image">
        <img src = "../images/home.png">
      </div>
    `;
  }
}

window.customElements.define('eos-home', EosHome);
