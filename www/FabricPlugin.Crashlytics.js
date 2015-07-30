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
            var defaults = {
                message: message
            };

            window.fabric.core.execPlugin('addLog', defaults);
        }
    }, {
        key: 'sendCrash',
        value: function sendCrash() {
            window.fabric.core.execPlugin('sendCrash');
        }
    }, {
        key: 'setUserIdentifier',
        value: function setUserIdentifier(userIdentifier) {
            var defaults = {
                value: userIdentifier
            };

            window.fabric.core.execPlugin('setUserIdentifier', defaults);
        }
    }, {
        key: 'setUserName',
        value: function setUserName(userName) {
            var defaults = {
                value: userName
            };

            window.fabric.core.execPlugin('setUserName', defaults);
        }
    }, {
        key: 'setUserEmail',
        value: function setUserEmail(userEmail) {
            var defaults = {
                value: userEmail
            };

            window.fabric.core.execPlugin('setUserEmail', defaults);
        }
    }, {
        key: 'setStringValueForKey',
        value: function setStringValueForKey(value, key) {
            var defaults = {
                value: value,
                key: key
            };

            window.fabric.core.execPlugin('setObjectValueForKey', defaults);
        }
    }, {
        key: 'setIntValueForKey',
        value: function setIntValueForKey(value, key) {
            var defaults = {
                value: value,
                key: key
            };

            window.fabric.core.execPlugin('setIntValueForKey', defaults);
        }
    }, {
        key: 'setBoolValueForKey',
        value: function setBoolValueForKey(value, key) {
            var defaults = {
                value: value,
                key: key
            };

            window.fabric.core.execPlugin('setBoolValueForKey', defaults);
        }
    }, {
        key: 'setFloatValueForKey',
        value: function setFloatValueForKey(value, key) {
            var defaults = {
                value: value,
                key: key
            };

            window.fabric.core.execPlugin('setFloatValueForKey', defaults);
        }
    }]);

    return FabricCrashlytics;
})();

module.exports = new FabricCrashlytics();
