
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

    sendNonFatalCrash() {
        window.fabric.core.execPlugin('sendNonFatalCrash');
    }

    setUserIdentifier(userIdentifier) {
        window.fabric.core.execPlugin('setUserIdentifier', userIdentifier);
    }

    setUserName(userName) {
        window.fabric.core.execPlugin('setUserName', userName);
    }

    setUserEmail(userEmail) {
        window.fabric.core.execPlugin('setUserEmail', userEmail);
    }

    setStringValueForKey(value, key) {
        window.fabric.core.execPlugin('setStringValueForKey', value, key);
    }

    setIntValueForKey(value, key) {
        window.fabric.core.execPlugin('setIntValueForKey', value, key);
    }

    setBoolValueForKey(value, key) {
        window.fabric.core.execPlugin('setBoolValueForKey', value, key);
    }

    setFloatValueForKey(value, key) {
        window.fabric.core.execPlugin('setFloatValueForKey', value, key);
    }

}

module.exports = new FabricCrashlytics();
