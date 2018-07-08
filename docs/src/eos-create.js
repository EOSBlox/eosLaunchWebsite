define(["./eos-launch.js"],function(_eosLaunch){"use strict";class EosCreate extends _eosLaunch.PolymerElement{static get template(){return _eosLaunch.html`
      <style include="shared-styles">
        :host {
          display: block;
          padding: 0px;
        }
      </style>
      
      <the-header 
        class="the-header" 
        color="FAAF40" 
        title="Create Account" 
        sub-title="Create an account for yourself or for a contract">
      </the-header>

      <div class="top-color">
      </div>
    `}}window.customElements.define("eos-create",EosCreate)});