
class FabricCrashlytics {
    constructor() {}

    addLog(message) {
        const defaults = {
            message: message
        };

        window.fabric.core.execPlugin('addLog', defaults);
    }

    sendCrash() {
        window.fabric.core.execPlugin('sendCrash');
    }

    setUserIdentifier(userIdentifier) {
        const defaults = {
            value: userIdentifier
        };

        window.fabric.core.execPlugin('setUserIdentifier', defaults);
    }

    setUserName(userName) {
        const defaults = {
            value: userName
        };

        window.fabric.core.execPlugin('setUserName', defaults);
    }

    setUserEmail(userEmail) {
        const defaults = {
            value: userEmail
        };

        window.fabric.core.execPlugin('setUserEmail', defaults);
    }

    setStringValueForKey(value, key) {
        const defaults = {
            value: value,
            key: key
        };

        window.fabric.core.execPlugin('setObjectValueForKey', defaults);
    }

    setIntValueForKey(value, key) {
        const defaults = {
            value: value,
            key: key
        };

        window.fabric.core.execPlugin('setIntValueForKey', defaults);
    }

    setBoolValueForKey(value, key) {
        const defaults = {
            value: value,
            key: key
        };

        window.fabric.core.execPlugin('setBoolValueForKey', defaults);
    }

    setFloatValueForKey(value, key) {
        const defaults = {
            value: value,
            key: key
        };

        window.fabric.core.execPlugin('setFloatValueForKey', defaults);
    }

}

module.exports = new FabricCrashlytics();
