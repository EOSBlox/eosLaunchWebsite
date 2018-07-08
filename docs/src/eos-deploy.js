define(["./eos-launch.js"],function(_eosLaunch){"use strict";class EosDeploy extends _eosLaunch.PolymerElement{static get template(){return _eosLaunch.html`
      <style include="shared-styles">
        :host {
          display: block;
          padding: 0px;
        }
      </style>

      <the-header 
        class="the-header" 
        color="80BA68" 
        title="Deploy Contract" 
        sub-title="Deploy a contract to the specified account">
      </the-header>
    `}}window.customElements.define("eos-deploy",EosDeploy)});