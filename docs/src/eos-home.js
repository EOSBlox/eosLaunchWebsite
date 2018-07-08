define(["./eos-launch.js"],function(_eosLaunch){"use strict";class EosHome extends _eosLaunch.PolymerElement{static get template(){return _eosLaunch.html`
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
    `}}window.customElements.define("eos-home",EosHome)});