define(["./eos-launch.js"],function(_eosLaunch){"use strict";class EosDeploy extends _eosLaunch.PolymerElement{static get template(){return _eosLaunch.html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
      </style>

      <div class="card">
        <div class="circle">2</div>
        <h1>View Two</h1>
        <p>Ea duis bonorum nec, falli paulo aliquid ei eum.</p>
        <p>Id nam odio natum malorum, tibique copiosae expetenda mel ea.Detracto suavitate repudiandae no eum. Id adhuc minim soluta nam.Id nam odio natum malorum, tibique copiosae expetenda mel ea.</p>
      </div>
    `}}window.customElements.define("eos-deploy",EosDeploy)});