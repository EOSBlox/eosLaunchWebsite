/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import '@polymer/polymer/polymer-element.js';

const $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = `<dom-module id="shared-styles">
  <template>
    <style>

      .center {
        max-width: 1160px;
        margin: 0 auto;
        display: flex;
      }
      .right {
        width: 300px;
      }
      .left {
        flex:1;
      }
      .side-cell{
        background-color: white;
        border: 1px solid #DADBDF;
        box-shadow: rgba(208, 209, 213, 0.5) 0px 1px 0px 0px, rgba(220, 221, 224, 0.4) 0px 0px 0px 1px;
        border-radius: 4px;
        margin: 20px 0 0 20px;
      }
      .main-cell{
        background-color: white;
        border: 1px solid #DADBDF;
        box-shadow: rgba(208, 209, 213, 0.5) 0px 1px 0px 0px, rgba(220, 221, 224, 0.4) 0px 0px 0px 1px;
        border-radius: 4px;
        margin: 20px 0 0 0;
      }

      .title{
        padding:15px;
        border-bottom: 1px solid #DCDDE0;
        font-size: 13px;
        font-weight: 700;
        color: #3A3E45;
        text-transform: uppercase;
      }
      .body{
        color: #3A3E45;
        padding:15px;
        font-size: 13px;
        font-weight: 400;
      }
      .cell{
        display: flex;
        flex-wrap: wrap;
        padding: 7px;
      }
      .name{
        flex: 1;
        font-size: 17px;
        line-height: 40px;
      }
      .input{
        flex: 2;
      }
      input {
        width: 100%;
        outline: none;
        height: 40px;
        border-radius: 2px;
        background: #F0F1F3;
        border: 1px solid #C9CCD0;
        border-radius: 4px;
        text-indent: 15px;
        font-size: 15px;
      }
      input:focus { 
        background-color: white;
      }
      .button{
        background-image: linear-gradient(-180deg, #FEFFFF 0%, #F3F4F5 100%);
        border: 1px solid #D2D3D5;
        
        border-radius: 4px;
        cursor: pointer;
        text-transform: uppercase;
        font-size: 13px;
        color: #585D6B;
        font-weight:600;
      }
      .button:hover{
        box-shadow: 0 2px 4px 0 rgba(0,0,0,0.21);
      }
      .main-cell .body:first-child { 
        padding-top:40px;
      }
      .main-cell .body:last-child { 
        padding-bottom:100px;
      }
      .spacer {
        width: 100%;
        height: 40px;
      }
      .yellow-button {
        background-image: linear-gradient(-179deg, #FFCB7E 0%, #FAAF40 98%);
        border: 1px solid #B37D2D;
        border-radius: 4px;
        cursor: pointer;
        text-transform: uppercase;
        font-size: 15px;
        color: #FFF;
        font-weight:800;
        height:55px;
        
      }
      .yellow-button:hover {
        text-shadow: 0 1px 1px rgba(0,0,0,0.30);
        box-shadow: 0 2px 4px 0 rgba(0,0,0,0.21);
      }

      .green-button {
        background-image: linear-gradient(-180deg, #80BA68 2%, #73A55E 100%);
        border: 1px solid #4A6C3C;
        border-radius: 4px;
        cursor: pointer;
        text-transform: uppercase;
        font-size: 15px;
        color: #FFF;
        font-weight:800;
        height:55px;
        
      }
      .green-button:hover {
        text-shadow: 0 1px 1px rgba(0,0,0,0.30);
        box-shadow: 0 2px 4px 0 rgba(0,0,0,0.21);
      }
    </style>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);
