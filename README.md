# Fabric Plugin for Cordova

This is a [Cordova](http://cordova.apache.org/) plugin for [Fabric.io](https://www.fabric.io)'s Crashlytics and Answers services.

It requires Cordova 3.x or newer (tested on 5.4.0) and has APIs for iOS and Android.

The iOS version uses Fabric SDK 1.6.5 and Crashlytics SDK 3.6.0 framework bundles which are located in `lib/ios`.

The Android version uses Gradle to get the Fabric SDK (`io.fabric.tools:gradle:1.+`) and the Crashlytics SDK (`com.crashlytics.sdk.android:crashlytics:2.5.5`) from Maven repositories when the plugin is added.

# Install

1. Make sure that you have [Node](http://nodejs.org/) and [Cordova CLI](https://github.com/apache/cordova-cli) or [PhoneGap's CLI](https://github.com/mwbrooks/phonegap-cli) installed on your machine.
1. Setup your [Fabric.io](https://fabric.io) account and get your API Key and Build Secret from your [organization page](https://www.fabric.io/settings/organizations/).
1. Add a plugin to your project using Cordova CLI, specifying the keys with the `--variable` argument:

```bash
# Install from npm registry:
cordova plugin add cordova-fabric-plugin --variable FABRIC_API_KEY=XXX --variable FABRIC_API_SECRET=xxx

# Or to install directly from github:
# (replace x.x.x with the tag of the version your want, or omit for HEAD)
cordova plugin add https://github.com/sarriaroman/FabricPlugin#x.x.x  --variable FABRIC_API_KEY=XXX --variable FABRIC_API_SECRET=xxx
```

# Usage

The plugin is available via global variable named `fabric`. It exposes APIs for both Crashlytics and Answers.

A TypeScript definition file for the JavaScript interface is available in the `typings` directory.

# API Documentation

See `typings/cordova-fabric-plugin.d.ts` for documentation of the JavaScript APIs including call signatures and parameter types.

# Examples

Below are a few examples; see the API documentation for a complete list.

## Simulate a Native Crash

```javascript
window.fabric.Crashlytics.addLog("about to send a crash for testing!");
window.fabric.Crashlytics.sendCrash();
```

## Set Information for Crash Reports
```javascript
window.fabric.Crashlytics.setUserIdentifier("123");
window.fabric.Crashlytics.setUserName("Some Guy");
window.fabric.Crashlytics.setUserEmail("some.guy@email.com");
window.fabric.Crashlytics.setStringValueForKey("bar", "foo");
```

## Send a Sign Up Event
```javascript
window.fabric.Answers.sendSignUp("Facebook", true);
```

## Send a Sign Up Event (with custom attributes)
```javascript
var attributes = {
    foo: "data",
    bar: true,
};

window.fabric.Answers.sendSignUp("Facebook", true, attributes);
```

## Send a Add To Cart Event
```javascript
window.fabric.Answers.sendAddToCart(29.95, "USD", "Foo Bar Shirt", "apparel", "123");
```

# Notes

## Automatic Configuration of Fabric SDKs

A normal installation for the Fabric SDKs involves downloading the Fabric tool and pointing it at your native code project. This tool takes care of adding references and modifying your build scripts and/or project files.

This plugin instead performs these steps via two build hooks located in the `hooks` directory: `after_plugin_install` and `before_plugin_uninstall`.

This allows you to avoid using the Fabric tool as well as omit your `platforms` directory from source control.

## Automatic Debug Symbol Upload on Build

The Fabric SDK comes with a command line tool that takes care of uploading debug symbols after a build so that they can be used when viewing crash reports.

For iOS, our build hook adds a build script phase block to execute Fabric's uploader command line tool.

For Android, our build hook modifies the `build.gradle` file to delegate to Fabric's uploader Gradle task.

# Contributing

If you wish to contribute please see `CONTRIBUTING.md`.

# Authors

- [Román A. Sarria](https://github.com/sarriaroman)
- [Justin Unterreiner](https://github.com/Justin-Credible)
- [Damian Small](https://github.com/nbdamian)
- Based on the following plugins:
 - https://github.com/francescobitmunks/cordova-plugin-crashlytics
 - https://github.com/smistry-toushay/cordova-crashlytics-plugin
