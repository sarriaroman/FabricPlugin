/// <reference path="cordova-fabric-plugin.d.ts" />

var fabricApi: FabricPlugin.FabricPluginStatic = fabric;
var answersApi: FabricPlugin.Answers = fabric.Answers;
var crashlyticsApi: FabricPlugin.Crashlytics = fabric.Crashlytics;

fabric.Crashlytics.addLog("Message");

fabric.Crashlytics.sendCrash();

fabric.Crashlytics.sendNonFatalCrash("Error");

fabric.Crashlytics.recordError("Error", -1);

fabric.Crashlytics.setUserIdentifier("123");

fabric.Crashlytics.setUserName("bob");

fabric.Crashlytics.setUserEmail("bob@email.com");

fabric.Crashlytics.setStringValueForKey("value", "key");

fabric.Crashlytics.setIntValueForKey(1, "key");

fabric.Crashlytics.setBoolValueForKey(true, "key");

fabric.Crashlytics.setFloatValueForKey(1.1, "key");

fabric.Answers.sendPurchase();
fabric.Answers.sendPurchase(24.95);
fabric.Answers.sendPurchase(24.95, "USD");
fabric.Answers.sendPurchase(24.95, "USD", true);
fabric.Answers.sendPurchase(24.95, "USD", true, "Foo Bar Shirt");
fabric.Answers.sendPurchase(24.95, "USD", true, "Foo Bar Shirt", "apparel");
fabric.Answers.sendPurchase(24.95, "USD", true, "Foo Bar Shirt", "apparel", "123");
fabric.Answers.sendPurchase(24.95, "USD", true, "Foo Bar Shirt", "apparel", "123", { "key": "value" });

fabric.Answers.sendAddToCart();
fabric.Answers.sendAddToCart(24.95);
fabric.Answers.sendAddToCart(24.95, "USD");
fabric.Answers.sendAddToCart(24.95, "USD", "Foo Bar Shirt");
fabric.Answers.sendAddToCart(24.95, "USD", "Foo Bar Shirt", "apparel");
fabric.Answers.sendAddToCart(24.95, "USD", "Foo Bar Shirt", "apparel", "123");
fabric.Answers.sendAddToCart(24.95, "USD", "Foo Bar Shirt", "apparel", "123", { "key": "value" });

fabric.Answers.sendStartCheckout();
fabric.Answers.sendStartCheckout(24.95);
fabric.Answers.sendStartCheckout(24.95, "USD", 2);
fabric.Answers.sendStartCheckout(24.95, "USD", 2, { "key": "value" });

fabric.Answers.sendSearch("query");
fabric.Answers.sendSearch("query", { "key": "value" });

fabric.Answers.sendShare();
fabric.Answers.sendShare("Facebook");
fabric.Answers.sendShare("Facebook", "Foo Bar Shirt");
fabric.Answers.sendShare("Facebook", "Foo Bar Shirt", "apparel");
fabric.Answers.sendShare("Facebook", "Foo Bar Shirt", "apparel", "123");
fabric.Answers.sendShare("Facebook", "Foo Bar Shirt", "apparel", "123", { "key": "value" });

fabric.Answers.sendRatedContent();
fabric.Answers.sendRatedContent(5);
fabric.Answers.sendRatedContent(5, "Foo Bar Shirt");
fabric.Answers.sendRatedContent(5, "Foo Bar Shirt", "apparel");
fabric.Answers.sendRatedContent(5, "Foo Bar Shirt", "apparel", "123", { "key": "value" });

fabric.Answers.sendSignUp();
fabric.Answers.sendSignUp("Facebook");
fabric.Answers.sendSignUp("Facebook", true);
fabric.Answers.sendSignUp("Facebook", true, { "key": "value" });

fabric.Answers.sendLogIn();
fabric.Answers.sendLogIn("Facebook");
fabric.Answers.sendLogIn("Facebook", true);
fabric.Answers.sendLogIn("Facebook", true, { "key": "value" });

fabric.Answers.sendInvite();
fabric.Answers.sendInvite("Facebook");
fabric.Answers.sendInvite("Facebook", { "key": "value" });

fabric.Answers.sendLevelStart();
fabric.Answers.sendLevelStart("Chemical Plant Zone - Act 1");
fabric.Answers.sendLevelStart("Chemical Plant Zone - Act 1", { "key": "value" });

fabric.Answers.sendLevelEnd();
fabric.Answers.sendLevelEnd("Brinstar");
fabric.Answers.sendLevelEnd("Brinstar", 9000);
fabric.Answers.sendLevelEnd("Brinstar", 9000, true);
fabric.Answers.sendLevelEnd("Brinstar", 9000, true, { "key": "value" });

fabric.Answers.sendContentView("Home");
fabric.Answers.sendContentView("Home", "Page");
fabric.Answers.sendContentView("Home", "Page", "123");
fabric.Answers.sendContentView("Home", "Page", "123", { "key": "value" });

fabric.Answers.sendCustomEvent("My Event");
fabric.Answers.sendCustomEvent("My Event", { "key": "value" });
