
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { setPassiveTouchGestures, setRootPath } from '@polymer/polymer/lib/utils/settings.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/iron-pages/iron-pages.js';


setPassiveTouchGestures(true);
setRootPath(MyAppGlobals.rootPath);

class EosLaunch extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>

      <app-location route="{{route}}" url-space-regex="^[[rootPath]]">
      </app-location>

      <app-route route="{{route}}" pattern="[[rootPath]]:page" data="{{routeData}}" tail="{{subroute}}">
      </app-route>

      <iron-pages selected="[[page]]" attr-for-selected="name" role="main">
        <eos-home name="home"></eos-home>  
        <eos-create name="create"></eos-create>
        <eos-deploy name="deploy"></eos-deploy>
        <eos-call name="call"></eos-call>
        <my-view404 name="view404"></my-view404>
      </iron-pages>
    `;
  }

  static get properties() {
    return {
      page: {
        type: String,
        reflectToAttribute: true,
        observer: '_pageChanged'
      },
      routeData: Object,
      subroute: Object
    };
  }

  static get observers() {
    return [
      '_routePageChanged(routeData.page)'
    ];
  }

  _routePageChanged(page) {
    if (!page) {
      this.page = 'home';
    } else if (['home', 'create', 'deploy', 'call'].indexOf(page) !== -1) {
      this.page = page;
    } else {
      this.page = 'view404';
    }
  }

  _pageChanged(page) {
    switch (page) {
      case 'home':
        import('./eos-home.js');
        break;
      case 'create':
        import('./eos-create.js');
        break;
      case 'deploy':
        import('./eos-deploy.js');
        break;
      case 'call':
        import('./eos-call.js');
        break;
      case 'view404':
        import('./my-view404.js');
        break;
    }
  }
}

window.customElements.define('eos-launch', EosLaunch);
