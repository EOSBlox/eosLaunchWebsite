define(["./eos-launch.js"],function(_eosLaunch){"use strict";class EosCall extends _eosLaunch.PolymerElement{static get template(){return _eosLaunch.html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
      </style>

      <div class="card">
        <div class="circle">3</div>
        <h1>View Three</h1>
        <p>Modus commodo minimum eum te, vero utinam assueverit per eu.</p>
        <p>Ea duis bonorum nec, falli paulo aliquid ei eum.Has at minim mucius aliquam, est id tempor laoreet.Pro saepe pertinax ei, ad pri animal labores suscipiantur.</p>
      </div>
    `}}window.customElements.define("eos-call",EosCall)});