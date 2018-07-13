import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';
import './components/the-header.js';
import 'blox-restore';
import 'blox-connect';

class EosDeploy extends PolymerElement {
  static get template() {
    return html`
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

      <div class="center">
        <div class="left">
        <div class="main-cell">
          <div class="body">

            <div class="cell">
              <div class="name">Contract WASM</div>
              <div class="input"><input type="text" name="fname" value="[[wasmfilename]]"></div>
            </div>
            <div class="cell">
              <div class="name"></div>
              <div class="input"><blox-restore binary file-name="{{wasmfilename}}" accept=".wasm" error="{{error}}" restore-data="{{wasm}}" button-text="Attach WASM File"></blox-restore></div>
            </div>
            <div class="spacer"></div>
            <div class="cell">
              <div class="name">Contract ABI</div>
              <div class="input"><input type="text" name="fname" value="[[abifilename]]"></div>
            </div>
            <div class="cell">
              <div class="name"></div>
              <div class="input"><blox-restore file-name="{{abifilename}}" accept=".abi" error="{{error}}" restore-data="{{abi}}" button-text="Attach ABI File"></blox-restore></div>
            </div>
            <div class="spacer"></div>
            <div class="cell">
              <div class="name">Select BP & Network</div>
              <div class="input"><blox-connect selector eos="{{eos}}" key-provider="[[keyProvider]]"></blox-connect></div>
            </div>
            <div class="cell">
              <div class="name">Account Name</div>
              <div class="input"><input type="text" name="fname" id="name"></div>
            </div>
            <div class="cell">
              <div class="name">Key Provider</div>
              <div class="input"><input type="text" name="fname" id="keyProvider" value="{{keyProvider::input}}"></div>
            </div>
            <div class="cell">
              <div class="name"></div>
              <div class="input"><input type="submit" class="green-button" value="Deploy Contract" on-click="_deploy"></div>
            </div>

          </div>
        </div>
        </div>
        <div class="right">

          <div class="side-cell">
            <div class="title">Security</div>
            <div class="body">This site does not send your private keys over the internet, nor does it store your keys locally, it is 100% your responsibility to look after your own keys. </div>
          </div>
          <div class="side-cell">
            <div class="title">Funding</div>
            <div class="body">A new account needs to stake a small amount of EOS in order for it to be created.</br>Please be aware that 0.5 EOS will be taken from the funding account and used to create the new account.</div>
          </div>

        </div>
      </div>

    `;
  }

  static get properties() {
    return {
      eos: {
        type: Object,
      },
      wasm: {
            type: String,
      },
      abi: {
          type: String,
      },
      keyProvider: {
        type: String,
    },
    wasmfilename: {
      type: String,
  }
    };
  }

  _deploy() {
    const name = this.shadowRoot.querySelector('#name').value 
    const abi = JSON.parse(this.abi);
    const wasm = this.wasm;
    console.log(wasm)
    this.eos.setcode(name, 0, 0, wasm) 
    this.eos.setabi(name, abi) 
  }

} window.customElements.define('eos-deploy', EosDeploy);
