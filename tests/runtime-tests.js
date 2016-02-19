
var FabricPluginTests = (function (module) {

    var executeStatements = function (statements) {

        var index = 0;

        var interval = setInterval(function () {

            if (index >= statements.length) {
                clearInterval(interval);
                return;
            }

            var statement = statements[index];

            console.debug("Executing: " + statement);
            eval(statement);

            index++;

        }, 500);
    }

    module.testCrashWithParameters = function () {

        var statements = [
            "fabric.Crashlytics.sendNonFatalCrash('Non-fatal Crash Message 1');",
            "fabric.Crashlytics.sendNonFatalCrash('Non-fatal Crash Message 2');",
            "fabric.Crashlytics.addLog('Custom Log Message 1');",
            "fabric.Crashlytics.addLog('Custom Log Message 2');",
            "fabric.Crashlytics.addLog('Custom Log Message 3');",
            "fabric.Crashlytics.setUserIdentifier('123');",
            "fabric.Crashlytics.setUserName('bob');",
            "fabric.Crashlytics.setUserEmail('bob@email.com');",
            "fabric.Crashlytics.setStringValueForKey('value', 'string-property');",
            "fabric.Crashlytics.setIntValueForKey(1, 'integer-property');",
            "fabric.Crashlytics.setBoolValueForKey(true, 'boolean-property');",
            "fabric.Crashlytics.setFloatValueForKey(1.1, 'float-property');",
            "fabric.Crashlytics.sendCrash();"
        ];

        executeStatements(statements);
    };

    module.testCrashWithNullParameters = function () {

        var statements = [
            "fabric.Crashlytics.sendNonFatalCrash();",
            "fabric.Crashlytics.addLog();",
            "fabric.Crashlytics.setUserIdentifier();",
            "fabric.Crashlytics.setUserName();",
            "fabric.Crashlytics.setUserEmail();",
            "fabric.Crashlytics.setStringValueForKey();",
            "fabric.Crashlytics.setIntValueForKey();",
            "fabric.Crashlytics.setBoolValueForKey();",
            "fabric.Crashlytics.setFloatValueForKey();",
            "fabric.Crashlytics.sendCrash();"
        ];

        executeStatements(statements);
    };

    module.testAnswersApi = function () {

        var statements = [
            "fabric.Answers.sendPurchase();",
            "fabric.Answers.sendPurchase(24.95);",
            "fabric.Answers.sendPurchase(24.95, 'USD');",
            "fabric.Answers.sendPurchase(24.95, 'USD', true);",
            "fabric.Answers.sendPurchase(24.95, 'USD', true, 'Foo Bar Shirt');",
            "fabric.Answers.sendPurchase(24.95, 'USD', true, 'Foo Bar Shirt', 'apparel');",
            "fabric.Answers.sendPurchase(24.95, 'USD', true, 'Foo Bar Shirt', 'apparel', '123');",
            "fabric.Answers.sendPurchase(24.95, 'USD', true, 'Foo Bar Shirt', 'apparel', '123', { 'key': 'value' });",

            "fabric.Answers.sendAddToCart();",
            "fabric.Answers.sendAddToCart(24.95);",
            "fabric.Answers.sendAddToCart(24.95, 'USD');",
            "fabric.Answers.sendAddToCart(24.95, 'USD', 'Foo Bar Shirt');",
            "fabric.Answers.sendAddToCart(24.95, 'USD', 'Foo Bar Shirt', 'apparel');",
            "fabric.Answers.sendAddToCart(24.95, 'USD', 'Foo Bar Shirt', 'apparel', '123');",
            "fabric.Answers.sendAddToCart(24.95, 'USD', 'Foo Bar Shirt', 'apparel', '123', { 'key': 'value' });",

            "fabric.Answers.sendStartCheckout();",
            "fabric.Answers.sendStartCheckout(24.95);",
            "fabric.Answers.sendStartCheckout(24.95, 'USD', 2);",
            "fabric.Answers.sendStartCheckout(24.95, 'USD', 2, { 'key': 'value' });",

            "fabric.Answers.sendSearch('query');",
            "fabric.Answers.sendSearch('query', { 'key': 'value' });",

            "fabric.Answers.sendShare();",
            "fabric.Answers.sendShare('Facebook');",
            "fabric.Answers.sendShare('Facebook', 'Foo Bar Shirt');",
            "fabric.Answers.sendShare('Facebook', 'Foo Bar Shirt', 'apparel');",
            "fabric.Answers.sendShare('Facebook', 'Foo Bar Shirt', 'apparel', '123');",
            "fabric.Answers.sendShare('Facebook', 'Foo Bar Shirt', 'apparel', '123', { 'key': 'value' });",

            "fabric.Answers.sendRatedContent();",
            "fabric.Answers.sendRatedContent(5);",
            "fabric.Answers.sendRatedContent(5, 'Foo Bar Shirt');",
            "fabric.Answers.sendRatedContent(5, 'Foo Bar Shirt', 'apparel');",
            "fabric.Answers.sendRatedContent(5, 'Foo Bar Shirt', 'apparel', '123', { 'key': 'value' });",

            "fabric.Answers.sendSignUp();",
            "fabric.Answers.sendSignUp('Facebook');",
            "fabric.Answers.sendSignUp('Facebook', true);",
            "fabric.Answers.sendSignUp('Facebook', true, { 'key': 'value' });",

            "fabric.Answers.sendLogIn();",
            "fabric.Answers.sendLogIn('Facebook');",
            "fabric.Answers.sendLogIn('Facebook', true);",
            "fabric.Answers.sendLogIn('Facebook', true, { 'key': 'value' });",

            "fabric.Answers.sendInvite();",
            "fabric.Answers.sendInvite('Facebook');",
            "fabric.Answers.sendInvite('Facebook', { 'key': 'value' });",

            "fabric.Answers.sendLevelStart();",
            "fabric.Answers.sendLevelStart('Chemical Plant Zone - Act 1');",
            "fabric.Answers.sendLevelStart('Chemical Plant Zone - Act 1', { 'key': 'value' });",

            "fabric.Answers.sendLevelEnd();",
            "fabric.Answers.sendLevelEnd('Brinstar');",
            "fabric.Answers.sendLevelEnd('Brinstar', 9000);",
            "fabric.Answers.sendLevelEnd('Brinstar', 9000, true);",
            "fabric.Answers.sendLevelEnd('Brinstar', 9000, true, { 'key': 'value' });",

            "fabric.Answers.sendContentView('Home');",
            "fabric.Answers.sendContentView('Home', 'Page');",
            "fabric.Answers.sendContentView('Home', 'Page', '123');",
            "fabric.Answers.sendContentView('Home', 'Page', '123', { 'key': 'value' });",

            "fabric.Answers.sendCustomEvent('My Event');",
            "fabric.Answers.sendCustomEvent('My Event', { 'key': 'value' });",
        ];

        executeStatements(statements);
    };

    return module;

}(FabricPluginTests || {}));
