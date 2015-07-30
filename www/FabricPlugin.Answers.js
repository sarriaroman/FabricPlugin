'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var FabricAnswers = (function () {
    function FabricAnswers() {
        _classCallCheck(this, FabricAnswers);
    }

    /* Answers Events */

    _createClass(FabricAnswers, [{
        key: 'sendSignUp',
        value: function sendSignUp() {
            window.fabric.core.execPlugin('sendSignUp');
        }
    }, {
        key: 'sendLogIn',
        value: function sendLogIn() {
            window.fabric.core.execPlugin('sendLogIn');
        }
    }, {
        key: 'sendContentView',
        value: function sendContentView(name, type, id, attributes) {
            window.fabric.core.execPlugin('sendContentView', {
                name: name,
                type: type,
                id: id,
                attributes: attributes
            });
        }
    }, {
        key: 'sendScreenView',
        value: function sendScreenView(name, id, attributes) {
            window.fabric.core.execPlugin('sendContentView', {
                name: name,
                type: "Screen",
                id: id,
                attributes: attributes
            });
        }
    }, {
        key: 'sendCustomEvent',
        value: function sendCustomEvent(name, attributes) {
            window.fabric.core.execPlugin('sendCustomEvent', {
                name: name,
                attributes: attributes
            });
        }

        /* Answers Events */
    }]);

    return FabricAnswers;
})();

module.exports = new FabricAnswers();
