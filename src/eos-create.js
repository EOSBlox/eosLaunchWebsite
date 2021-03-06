import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';
import './components/the-header.js';
import 'blox-keypair';
import 'blox-paper';
import 'blox-connect';
import 'blox-account';
import 'blox-clipboard';


class EosCreate extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;
          padding: 0px;
        }
      </style>

      <blox-keypair id="keypair"></blox-keypair>
      <blox-paper id="paper"></blox-paper>
      <blox-account id="account"></blox-account>
      <blox-clipboard id="clipboard" text="[[clipboard]]"></blox-clipboard>

      <the-header 
        class="the-header" 
        color="FAAF40" 
        title="Create Account" 
        sub-title="Create an account for yourself or for a contract">
      </the-header>
    
      <div class="center">
        <div class="left">
          <div class="main-cell">
            <div class="body">

              <div class="cell">
                <div class="name">New Account Name</div>
                <div class="input"><input type="text" name="name" id="newName" placeholder="[[nameHelpText]]"></div>
              </div>
              <template is="dom-if" if="[[!showKeypairs]]">
                <div class="cell">
                  <div class="name"></div>
                  <div class="input"><input type="submit" class="button" value="Generate Keys" on-click="_createKeyPairs"></div>
                </div>
                <div class="spacer"></div>
              </template>
              <template is="dom-if" if="[[showKeypairs]]">
                <div class="cell">
                  <div class="name">Active Public Key</div>
                  <div class="input"><input type="text" name="fname" id="activePublic" readonly></div>
                </div>
                <div class="cell">
                  <div class="name">Active Private Key</div>
                  <div class="input"><input type="text" name="fname" id="activePrivate" readonly></div>
                </div>
                <div class="cell">
                  <div class="name">Owner Public Key</div>
                  <div class="input"><input type="text" name="fname" id="ownerPublic" readonly></div>
                </div>
                <div class="cell">
                  <div class="name">Owner Private Key</div>
                  <div class="input"><input type="text" name="fname" id="ownerPrivate" readonly></div>
                </div>
                <div class="spacer"></div>
                <div class="cell">
                  <div class="name">Select BP & Network</div>
                  <div class="input"><blox-connect selector eos="{{eos}}" key-provider="[[keyProvider]]" selected="{{network}}"></blox-connect></div>
                </div>
                <div class="cell">
                  <div class="name">Funding Account Name</div>
                  <div class="input"><input type="text" name="fundingName" id="fundingName"></div>
                </div>
                <div class="cell">
                  <div class="name">Key Provider</div>
                  <div class="input"><input type="text" name="fname" id="keyProvider" value="{{keyProvider::input}}"></div>
                </div>

                <template is="dom-if" if="[[!complete]]">
                  <div class="cell">
                    <div class="name"></div>
                    <div class="input"><input type="submit" class="yellow-button" value="Generate Account" on-click="_createAccount"></div>
                  </div>
                </template>
                <div class="spacer"></div>
                <!-- <template is="dom-if" if="[[complete]]"> -->
                  <div class="cell">
                    <div class="name">Transaction ID</div>
                    <div class="input"><input type="text" name="fname" id="transactionId" value="[[transactionId]]"></div>
                  </div>
                  <div class="cell">
                    <div class="name"></div>
                    <div class="input"><input type="submit" class="button" value="Print Paper Wallet" on-click="_printKeyPairs"></div>
                  </div>
                  <div class="cell">
                    <div class="name"></div>
                    <div class="input"><input type="submit" class="button" value="Copy To Clipboard" on-click="_copy"></div>
                  </div>
                <!-- </template> -->
              </template>
            </div>
          </div>
        </div>

        <div class="right">

          <div class="side-cell">
            <div class="title">Account Name</div>
            <div class="body">You need to choose a 12 charector 'Account Name', you can then enter or generate Active and Owner Key Pairs. Lastly you will need enter the name and private key for the acocunt that will find the new account. </div>
          </div>
          <div class="side-cell">
            <div class="title">Keys</div>
            <div class="body">The keys generated here, are generated in the browser and are not fetched or sent out of the browser</div>
          </div>
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

  _copy() {
    const name = this.shadowRoot.querySelector('#newName').value;
    const activePublic = this.shadowRoot.querySelector('#activePublic').value;
    const activePrivate = this.shadowRoot.querySelector('#activePrivate').value;
    const ownerPublic = this.shadowRoot.querySelector('#ownerPublic').value;
    const ownerPrivate = this.shadowRoot.querySelector('#ownerPrivate').value;
    const transactionID = this.transactionId;
    const network = this.network;
    this.clipboard = `
      Account Name: ${name} 

      Active Public Key: ${activePublic} 
      Active Private Key: ${activePrivate} 

      Owner Public Key: ${ownerPublic} 
      Owner Private Key: ${ownerPrivate}

      Network: ${network}
      Transaction ID: ${transactionID}
      `
  }

  _createKeyPairs(){
    const name  = this.shadowRoot.querySelector('#newName').value
    if (name.length === 12) {
      this.nameHelpText = "";
      this.showKeypairs = true;
      this.$.keypair.generate()
      .then((keypairArray) => {
        this.shadowRoot.querySelector('#activePublic').value = keypairArray[0].publicKey;
        this.shadowRoot.querySelector('#activePrivate').value = keypairArray[0].privateKey;
        this.shadowRoot.querySelector('#ownerPublic').value = keypairArray[1].publicKey;
        this.shadowRoot.querySelector('#ownerPrivate').value = keypairArray[1].privateKey;
      })
      .catch((err) => {
        this.error = err;
        throw err;
      })
    } else {
      this.nameHelpText = "The length is not 12 charectors, please try again!";
    }
  }

  _printKeyPairs(){
    const publicKey1 = this.shadowRoot.querySelector('#activePublic').value 
    const privateKey1 = this.shadowRoot.querySelector('#activePrivate').value
    const publicKey2 = this.shadowRoot.querySelector('#ownerPublic').value
    const privateKey2 = this.shadowRoot.querySelector('#ownerPrivate').value
    this.$.paper.makeTwo(publicKey1, privateKey1, publicKey2, privateKey2)
  }

  _keyProvider(){
    const enteredKeyProvider = this.shadowRoot.querySelector('#keyProvider').value
    if (enteredKeyProvider.length === 51){
      this.keyProvider = enteredKeyProvider;
    }
  }

  _createAccount(){
    this.$.account.makeAccount(
      this.eos, 
      this.shadowRoot.querySelector('#fundingName').value, 
      this.shadowRoot.querySelector('#newName').value,
      this.shadowRoot.querySelector('#ownerPublic').value, 
      this.shadowRoot.querySelector('#activePublic').value, 
    )
    .then((response) => {
      console.log(response)
      this.complete = true;
      this.transactionId = response;
    })
    .catch((error) => {
      console.log('error....')
      console.log(error)
    })
  }

  static get properties() {
    return {
      eos: {
        type: Object,
      },
      showKeypairs: {
            type: Boolean,
            value: false,
      },
      nameHelpText: {
          type: String,
          value: 'Account names must be exactly 12 charectors long.',
      },
      transactionId: {
        type: String,
      },
      complete: {
        type: Boolean,
        value: false
      },
      clipboard: {
        type: String
      },
      network: {
        type: String
      }
    };
  }

} window.customElements.define('eos-create', EosCreate);
