# EOS Launch


### Setup

##### Prerequisites

Install [Polymer CLI](https://github.com/Polymer/polymer-cli) using
[npm](https://www.npmjs.com) (we assume you have pre-installed [node.js](https://nodejs.org)).

    npm install -g polymer-cli


### Start the development server

This command serves the app at `http://127.0.0.1:8081` and provides basic URL
routing for the app:

    npm start

### Build

The `npm run build` command builds your Polymer application for production, using build configuration options provided by the command line or in your project's `polymer.json` file.


### Preview the build

This command serves your app. Replace `build-folder-name` with the folder name of the build you want to serve.

    npm start build/build-folder-name/

### Run tests

This command will run [Web Component Tester](https://github.com/Polymer/web-component-tester)
against the browsers currently installed on your machine:

    npm test

If running Windows you will need to set the following environment variables:

- LAUNCHPAD_BROWSERS
- LAUNCHPAD_CHROME

