import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';
import './components/the-header.js';
import 'blox-connect';

class EosCall extends PolymerElement {
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
        color="3D6D9A" 
        title="Call Contract" 
        sub-title="Interact with a contract from the browser">
      </the-header>

      <div class="center">
        <div class="left">
        <div class="main-cell">
          <div class="body">

            <div class="cell">
              <div class="name">Contract Account Name</div>
              <div class="input"><blox-connect selector verbose eos="{{eos}}" key-provider="[[keyProvider]]"></blox-connect></div>
            </div>
            <div class="cell">
              <div class="name">Key Provider</div>
              <div class="input"><input type="text" name="fname" id="keyProvider" value="{{keyProvider::input}}"></div>
            </div>
            <div class="cell">
              <div class="name">Contract Account Name</div>
              <div class="input"><input type="text" name="fname" id="accountName"></div>
            </div>
            <div class="cell">
              <div class="name"></div>
              <div class="input"><input type="submit" class="button" on-click="_play"></div>
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
      }
    };
  }

  _newGame() {
    const contract = this.shadowRoot.querySelector('#accountName').value;
    const player1Acc = this.shadowRoot.querySelector('#accountName').value;
    const player2Acc = this.shadowRoot.querySelector('#accountName').value;

    this.eos.transaction({ 
      actions: [{ 
        account: contract, name: 'newgame', 
        authorization: [{ actor: player1Acc, permission: 'active'}, { actor: player2Acc, permission: 'active'}], 
        data: {player1: player1Acc, player2: player2Acc}
      }]
    })
    .then((response) => {
      console.log(response)
    })
  }

  _play() {
    const contract = this.shadowRoot.querySelector('#accountName').value;
    const player1Acc = this.shadowRoot.querySelector('#accountName').value;
    const player2Acc = this.shadowRoot.querySelector('#accountName').value;

    this.eos.transaction({ 
      actions: [{ 
        account: contract, name: 'play', 
        authorization: [{ actor: player1Acc, permission: 'active'}, { actor: player2Acc, permission: 'active'}], 
        data: {
          player1: player1Acc,       
          player2: player2Acc,       
          row: 1,
          col: 1
        }
      }]
    })
    .then((response) => {
      console.log(response)
    })
  }


} window.customElements.define('eos-call', EosCall);
