import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';


class TheHeader extends PolymerElement {
  static get template() {
    return html`
    <style>
        :host {
            display: block;
            color: #FFFFFF;
        }
        h1 {
        margin: 16px 0;
        color: #212121;
        font-size: 22px;
        }
        h1, a{
          color: #FFFFFF;
          text-decoration: none;
          margin: 0;
          font-weight: 200;
        }
        h1 span {
          font-weight: 800;
        }
        .header {
          padding: 36px;
          display: flex;
          flex-wrap: nowrap;
          justify-content: space-between;
        }
        .extended{
          padding: 36px;
        }
        ul {
          list-style-type: none;
          margin: 0;
          padding: 0;
        }
        li {
          display: inline;
          margin-left: 20px;
          font-size: 13px;
          color: #FFFFFF;
          font-weight: 800;
        }
        .title {
          font-size: 36px;
          font-weight: 600;
        }
        .sub-title {
          font-size: 16px;
        }
        .center{
          max-width: 1160px;
          margin: 0 auto;
        }

    </style>

    <div class="header" style="background-color: #{{color}}">
      <div class="logo">
        <a href="/">
          <h1>EOS <span>Launch</span></h1>
        </a>
      </div>
      <div class="links">
        <ul id="menu">              
          <li><a href="/create">Create Account</a></li>
          <li><a href="/deploy">Deploy Contract</a></li>
          <li><a href="/call">Call Contract</a></li>
        </ul>
      </div>
    </div>
    <div class="extended" style="background-color: #{{color}}">
      <div class="center">
        <div class="title">{{title}}</div>
        <div class="sub-title">{{subTitle}}</div>
        <div style="height:50px"></div>
      </div>
    </div>
    `;
  }
  static get properties() {
    return {
      color: {
        type: String,
      },
      title: {
        type: String,
      },
      subTitle: {
        type: String,
      },
    };
  }

} window.customElements.define('the-header', TheHeader);
