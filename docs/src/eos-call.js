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

      <div class="center">
        <div class="left">
        <div class="main-cell">
          <div class="body">

            <div class="cell">
              <div class="name">Contract Address</div>
              <div class="input"><input type="text" name="fname"></div>
            </div>
            <div class="cell">
              <div class="name"></div>
              <div class="input"><input type="submit" class="button" value="Fetch Contract"></div>
            </div>
          </div>
        </div>
        </div>
        <div class="right">

          <div class="side-cell">
            <div class="title">Security</div>
            <div class="body">This site does not send your private keys over the internet, not does it store your keys locally, it is 100% your responsibility to look after your keys. </div>
          </div>
          <div class="side-cell">
            <div class="title">Funding</div>
            <div class="body">A new account needs to stake a small amount of EOS in order for it to be created.</br>Please be aware that 0.5 EOS will be taken from the funding account and used to create the new account.</div>
          </div>

        </div>
      </div>

    `}}window.customElements.define("eos-call",EosCall)});