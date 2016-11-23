// Type definitions for cordova-fabric-plugin 1.0.0
// Project: https://github.com/sarriaroman/FabricPlugin
// Definitions by: Justin Unterreiner <https://github.com/Justin-Credible>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module FabricPlugin {

    interface FabricPluginStatic {

        /**
         * API for interacting with the Crashlytics kit.
         *
         * https://docs.fabric.io/ios/crashlytics/index.html
         */
        Crashlytics: Crashlytics;

        /**
         * API for interacting with the Answers kit.
         *
         * https://docs.fabric.io/ios/answers/index.html
         */
        Answers: Answers;
    }

    /**
     * API for interacting with the Crashlytics kit.
     *
     * https://docs.fabric.io/ios/crashlytics/index.html
     */
    interface Crashlytics {

        /**
         * Add logging that will be sent with your crash data. This logging will not show up
         * in the system.log and will only be visible in your Crashlytics dashboard.
         */
        addLog(message: string): void;

        /**
         * Used to simulate a native platform crash (useful for testing Crashlytics logging).
         */
        sendCrash(): void;

        /**
         * Used to log a non-fatal error message (Android only).
         */
        sendNonFatalCrash(message: string, stacktrace?: any): void;

        /**
         * Used to record a non-fatal error message (iOS only).
         */
        recordError(message: string, code: number): void;

        /**
         * Sets the user's identifier for logging to Crashlytics backend.
         */
        setUserIdentifier(userId: string): void;

        /**
         * Sets the user's name for logging to Crashlytics backend.
         */
        setUserName(userName: string): void;

        /**
         * Sets the user's email address for logging to Crashlytics backend.
         */
        setUserEmail(email: string): void;

        /**
         * Sets a custom key/value pair for logging to Crashlytics backend.
         */
        setStringValueForKey(value: string, key: string): void;

        /**
         * Sets a custom key/value pair for logging to Crashlytics backend.
         */
        setIntValueForKey(value: number, key: string): void;

        /**
         * Sets a custom key/value pair for logging to Crashlytics backend.
         */
        setBoolValueForKey(value: boolean, key: string): void;

        /**
         * Sets a custom key/value pair for logging to Crashlytics backend.
         */
        setFloatValueForKey(value: number, key: string): void;
    }

    /**
     * API for interacting with the Answers kit.
     *
     * https://docs.fabric.io/ios/answers/index.html
     */
    interface Answers {

        /**
         * Sends the Purchase tracking event.
         *
         * All parameters are optional.
         *
         * https://docs.fabric.io/android/answers/answers-events.html#purchase
         *
         * @param itemPrice The item's amount in the currency specified.
         * @param currency The ISO4217 currency code.
         * @param success Was the purchase completed succesfully?
         * @param itemName The human-readable name for the item.
         * @param itemType The category the item falls under.
         * @param itemId A unique identifier used to track the item.
         * @param attributes Any additional user-defined attributes to be logged.
         */
        sendPurchase(itemPrice?: number, currency?: string, success?: boolean, itemName?: string, itemType?: string, itemId?: string, attributes?: Attributes): void;

        /**
         * Sends the Add To Cart tracking event.
         *
         * All parameters are optional.
         *
         * https://docs.fabric.io/android/answers/answers-events.html#add-to-cart
         *
         * @param itemPrice The item's amount in the currency specified.
         * @param currency The ISO4217 currency code.
         * @param itemName The human-readable name for the item.
         * @param itemType The category the item falls under.
         * @param itemId A unique identifier used to track the item.
         * @param attributes Any additional user-defined attributes to be logged.
         */
        sendAddToCart(itemPrice?: number, currency?: string, itemName?: string, itemType?: string, itemId?: string, attributes?: Attributes): void;

        /**
         * Sends the Start Checkout tracking event.
         *
         * All parameters are optional.
         *
         * https://docs.fabric.io/android/answers/answers-events.html#start-checkout
         *
         * @param totalPrice The total price of all items in cart in the currency specified.
         * @param currency The ISO4217 currency code.
         * @param itemCount The count of items in cart.
         * @param attributes Any additional user-defined attributes to be logged.
         */
        sendStartCheckout(totalPrice?: number, currency?: string, itemCount?: number, attributes?: Attributes): void;

        /**
         * Sends the Search tracking event.
         *
         * https://docs.fabric.io/android/answers/answers-events.html#search
         *
         * @param query What the user is searching for.
         * @param attributes Any additional user-defined attributes to be logged.
         */
        sendSearch(query: string, attributes?: Attributes): void;

        /**
         * Sends the Share tracking event.
         *
         * All parameters are optional.
         *
         * https://docs.fabric.io/android/answers/answers-events.html#share
         *
         * @param method The method used to share content.
         * @param contentName The description of the content.
         * @param contentType The type or genre of content.
         * @param contentId A unique key identifying the content.
         * @param attributes Any additional user-defined attributes to be logged.
         */
        sendShare(method?: string, contentName?: string, contentType?: string, contentId?: string, attributes?: Attributes): void;

        /**
         * Sends the Rated Content tracking event.
         *
         * All parameters are optional.
         *
         * https://docs.fabric.io/android/answers/answers-events.html#rated-content
         *
         * @param rating An integer rating of the content.
         * @param contentName The human-readable name of content.
         * @param contentType The category your item falls under.
         * @param contentId A unique identifier used to track the item.
         * @param attributes Any additional user-defined attributes to be logged.
         */
        sendRatedContent(rating?: number, contentName?: string, contentType?: string, contentId?: string, attributes?: Attributes): void;

        /**
         * Sends the Sign Up tracking event.
         *
         * All parameters are optional.
         *
         * https://docs.fabric.io/android/answers/answers-events.html#sign-up
         *
         * @param method An optional description of the sign up method (Twitter, Facebook, etc.); defaults to "Direct".
         * @param success An optional flag that indicates sign up success; defaults to true.
         * @param attributes Any additional user-defined attributes to be logged.
         */
        sendSignUp(method?: string, success?: boolean, attributes?: Attributes): void;

        /**
         * Sends the Log In tracking event.
         *
         * All parameters are optional.
         *
         * https://docs.fabric.io/android/answers/answers-events.html#log-in
         *
         * @param method An optional description of the sign in method (Twitter, Facebook, etc.); defaults to "Direct".
         * @param success An optional flag that indicates sign in success; defaults to true.
         * @param attributes Any additional user-defined attributes to be logged.
         */
        sendLogIn(method?: string, success?: boolean, attributes?: Attributes): void;

        /**
         * Sends the Invite tracking event.
         *
         * All parameters are optional.
         *
         * https://docs.fabric.io/android/answers/answers-events.html#invite
         *
         * @param method An optional description of the sign in method (Twitter, Facebook, etc.); defaults to "Direct".
         * @param attributes Any additional user-defined attributes to be logged.
         */
        sendInvite(method?: string, attributes?: Attributes): void;

        /**
         * Sends the Level Start tracking event.
         *
         * All parameters are optional.
         *
         * https://docs.fabric.io/android/answers/answers-events.html#level-start
         *
         * @param levelName String key describing the level.
         * @param attributes Any additional user-defined attributes to be logged.
         */
        sendLevelStart(levelName?: string, attributes?: Attributes): void;

        /**
         * Sends the Level End tracking event.
         *
         * All parameters are optional.
         *
         * https://docs.fabric.io/android/answers/answers-events.html#level-end
         *
         * @param levelName String key describing the level.
         * @param score The score for this level.
         * @param success Completed the level or failed trying.
         * @param attributes Any additional user-defined attributes to be logged.
         */
        sendLevelEnd(levelName?: string, score?: number, success?: boolean, attributes?: Attributes): void;

        /**
         * Send the Content View tracking event.
         *
         * https://docs.fabric.io/android/answers/answers-events.html#content-view
         */
        sendContentView(name: string, type?: string, id?: string, attributes?: Attributes): void;

        /**
         * Shortcut for sendContentView(...) using type of "Screen".
         */
        sendScreenView(name: string, id: string, attributes?: Attributes): void;

        /**
         * Send a custom tracking event with the given name.
         *
         * https://docs.fabric.io/android/answers/answers-events.html#custom-event
         */
        sendCustomEvent(name: string, attributes?: Attributes): void;
    }

    /**
     * A key/value pair of strings.
     */
    interface Attributes {
        [index: string]: String;
    }
}

declare var fabric: FabricPlugin.FabricPluginStatic;
