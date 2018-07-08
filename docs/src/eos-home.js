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
        .the-header {
          position: fixed;
          top: 0;
          width: 100%; 
          height: 60px;

        }
      </style>
      <the-header class="the-header"></the-header>
      <div class="image">
        <img src = "../images/home.png" alt="Rocket launching from a deployed smart contract">
      </div>
    `}}window.customElements.define("eos-home",EosHome)});