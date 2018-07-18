define(["./eos-launch.js"],function(_eosLaunch){"use strict";class BloxRestore extends _eosLaunch.PolymerElement{static get template(){return _eosLaunch.html`
      <style>
        :host {
          display: block;
        }
        label.myLabel input[type="file"] {
          position:absolute;
          top: -1000px;
        }
        .myLabel {
          width: 100%;
          outline: none;
          height: 40px;
          background: #F0F1F3;
          border: 1px solid #C9CCD0;
          text-align: center;
          font-size: 15px;
          background-image: linear-gradient(-180deg, #FEFFFF 0%, #F3F4F5 100%);
          border: 1px solid #D2D3D5;
          border-radius: 4px;
          cursor: pointer;
          text-transform: uppercase;
          font-size: 13px;
          line-height: 40px;
          font-weight:600;
          display: inline-block;
        }
        .myLabel:hover {
          box-shadow: 0 2px 4px 0 rgba(0,0,0,0.21);
        }
        .myLabel :invalid + span {
          color: #585D6B;
        }
        .myLabel :valid + span {
          color: #585D6B;
        }
      </style>
      <label class="myLabel">
        <input on-change="_restore" id="file" type="file" class="none" accept="[[accept]]" required/>
        <span>[[buttonText]]</span>
      </label>
    `}static get properties(){return{accept:{type:String,value:".csv"},restoreData:{type:String,reflectToAttribute:!0,notify:!0},error:{type:String,reflectToAttribute:!0,notify:!0},fileName:{type:String,reflectToAttribute:!0,notify:!0},buttonText:{type:String,value:"Restore Account"},binary:{type:Boolean,value:!1}}}_restore(event){event.stopPropagation();event.preventDefault();this.fileName=event.target.files[0].name;this.fileExtension="."+this.fileName.split(".").slice(-1)[0];if(this.fileExtension!=this.accept){return!1}if(!this.binary){const file=event.target.files[0];let reader=new FileReader;reader.readAsText(file);reader.onload=()=>{this.restoreData=reader.result};reader.onerror=error=>{this.error=error}}if(this.binary){const file=event.target.files[0];let reader=new FileReader;reader.readAsBinaryString(file);reader.onload=()=>{console.log("------------WASM JUST AFTER THE FILE IS READ AS BINARY STRING");console.log(reader.result);this.restoreData=reader.result};reader.onerror=error=>{this.error=error}}}}window.customElements.define("blox-restore",BloxRestore);class EosDeploy extends _eosLaunch.PolymerElement{static get template(){return _eosLaunch.html`
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

    `}static get properties(){return{eos:{type:Object},wasm:{type:String},abi:{type:String},keyProvider:{type:String},wasmfilename:{type:String}}}_deploy(){const name=this.shadowRoot.querySelector("#name").value,abi=JSON.parse(this.abi),wasm=this.wasm;console.log("------------WASM JUST BEFORE SENDING");console.log(wasm);this.eos.setcode();Promise.all([this.eos.setcode(name,0,0,wasm),this.eos.setabi(name,abi)]).then(function(values){console.log(values[0]);console.log(values[1])})}}window.customElements.define("eos-deploy",EosDeploy)});