# Contributing

If you wish to contribute please keep the following in mind.

## Modification of JavaScript APIs

If you want to modify the JavaScript APIs in `www` you'll need to edit the corresponding `*.es6` files. Once you've made your modiciations, execute `npm run-script transpile` which will transpile the ES6 code into ES5 JavaScript (you may need to run `npm install` first to install Babel from the developer dependencies).

Note that you only need to do this if you are making modifications to the ES6 source files. Also, please do not modify the `*.js` files directly--they should always be generated from the ES6 source files.

## Run-time/Functional Tests

The `tests` directory contains a JavaScript file of functional tests. These are different from unit tests in that they should be executed at runtime from within Cordova.

These tests call every plugin method with and without parameters to ensure all APIs work as expected.

Before running these tests you should change your application's bundle ID in `config.xml` so that the test data sent to Crashlytics/Answers does not pollute your application's data.

## TypeScript Definitions and Tests

If you are editing the JavaScript interfaces, be sure to also update the TypeScript definition files in the `typings` directory.

This directory also includes a test file which should compile with `tsc` without any errors (it is a test of the validity of the definition file and not a runnable unit test file).
