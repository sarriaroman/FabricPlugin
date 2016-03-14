'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var FabricCrashlytics = (function () {
    function FabricCrashlytics() {
        _classCallCheck(this, FabricCrashlytics);
    }

    _createClass(FabricCrashlytics, [{
        key: 'addLog',
        value: function addLog(message) {
            window.fabric.core.execPlugin('addLog', [message]);
        }
    }, {
        key: 'sendCrash',
        value: function sendCrash() {
            window.fabric.core.execPlugin('sendCrash', []);
        }
    }, {
        key: 'sendNonFatalCrash',
        value: function sendNonFatalCrash(message) {
            window.fabric.core.execPlugin('sendNonFatalCrash', [message]);
        }
    }, {
        key: 'recordError',
        value: function recordError(message) {
            window.fabric.core.execPlugin('recordError', [message]);
        }
    }, {
        key: 'setUserIdentifier',
        value: function setUserIdentifier(userIdentifier) {
            window.fabric.core.execPlugin('setUserIdentifier', [userIdentifier]);
        }
    }, {
        key: 'setUserName',
        value: function setUserName(userName) {
            window.fabric.core.execPlugin('setUserName', [userName]);
        }
    }, {
        key: 'setUserEmail',
        value: function setUserEmail(userEmail) {
            window.fabric.core.execPlugin('setUserEmail', [userEmail]);
        }
    }, {
        key: 'setStringValueForKey',
        value: function setStringValueForKey(value, key) {
            window.fabric.core.execPlugin('setStringValueForKey', [value, key]);
        }
    }, {
        key: 'setIntValueForKey',
        value: function setIntValueForKey(value, key) {
            window.fabric.core.execPlugin('setIntValueForKey', [value, key]);
        }
    }, {
        key: 'setBoolValueForKey',
        value: function setBoolValueForKey(value, key) {
            window.fabric.core.execPlugin('setBoolValueForKey', [value, key]);
        }
    }, {
        key: 'setFloatValueForKey',
        value: function setFloatValueForKey(value, key) {
            window.fabric.core.execPlugin('setFloatValueForKey', [value, key]);
        }
    }]);

    return FabricCrashlytics;
})();

module.exports = new FabricCrashlytics();