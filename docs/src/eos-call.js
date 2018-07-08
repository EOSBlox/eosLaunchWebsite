define(["./eos-launch.js"],function(_eosLaunch){"use strict";class EosCall extends _eosLaunch.PolymerElement{static get template(){return _eosLaunch.html`
      <style include="shared-styles">
        :host {
          display: block;
          padding: 0px;
        }
      </style>

      <the-header 
        class="the-header" 
        color="3D6D9A" 
        title="Call Contract" 
        sub-title="Interact with a contract from the browser">
      </the-header>
    `}}window.customElements.define("eos-call",EosCall)});