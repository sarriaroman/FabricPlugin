'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var FabricAnswers = (function () {
    function FabricAnswers() {
        _classCallCheck(this, FabricAnswers);
    }

    _createClass(FabricAnswers, [{
        key: 'sendPurchase',
        value: function sendPurchase(itemPrice, currency, success, itemName, itemType, itemId, attributes) {
            window.fabric.core.execPlugin('sendPurchase', {
                itemPrice: itemPrice,
                currency: currency,
                success: success,
                itemName: itemName,
                itemType: itemType,
                itemId: itemId,
                attributes: attributes
            });
        }
    }, {
        key: 'sendAddToCart',
        value: function sendAddToCart(itemPrice, currency, itemName, itemType, itemId, attributes) {
            window.fabric.core.execPlugin('sendAddToCart', {
                itemPrice: itemPrice,
                currency: currency,
                itemName: itemName,
                itemType: itemType,
                itemId: itemId,
                attributes: attributes
            });
        }
    }, {
        key: 'sendStartCheckout',
        value: function sendStartCheckout(totalPrice, currency, itemCount, attributes) {
            window.fabric.core.execPlugin('sendStartCheckout', {
                totalPrice: totalPrice,
                currency: currency,
                itemCount: itemCount,
                attributes: attributes
            });
        }
    }, {
        key: 'sendSearch',
        value: function sendSearch(query, attributes) {
            window.fabric.core.execPlugin('sendSearch', {
                query: query,
                attributes: attributes
            });
        }
    }, {
        key: 'sendShare',
        value: function sendShare(method, contentName, contentType, contentId, attributes) {
            window.fabric.core.execPlugin('sendShare', {
                method: method,
                contentName: contentName,
                contentType: contentType,
                contentId: contentId,
                attributes: attributes
            });
        }
    }, {
        key: 'sendRatedContent',
        value: function sendRatedContent(rating, contentName, contentType, contentId, attributes) {
            window.fabric.core.execPlugin('sendRatedContent', {
                rating: rating,
                contentName: contentName,
                contentType: contentType,
                contentId: contentId,
                attributes: attributes
            });
        }
    }, {
        key: 'sendSignUp',
        value: function sendSignUp(method, success, attributes) {
            window.fabric.core.execPlugin('sendSignUp', {
                method: method,
                success: success,
                attributes: attributes
            });
        }
    }, {
        key: 'sendLogIn',
        value: function sendLogIn(method, success, attributes) {
            window.fabric.core.execPlugin('sendLogIn', {
                method: method,
                success: success,
                attributes: attributes
            });
        }
    }, {
        key: 'sendInvite',
        value: function sendInvite(method, success, attributes) {
            window.fabric.core.execPlugin('sendInvite', {
                method: method,
                success: success,
                attributes: attributes
            });
        }
    }, {
        key: 'sendLevelStart',
        value: function sendLevelStart(levelName, attributes) {
            window.fabric.core.execPlugin('sendLevelStart', {
                levelName: levelName,
                attributes: attributes
            });
        }
    }, {
        key: 'sendLevelEnd',
        value: function sendLevelEnd(levelName, score, success, attributes) {
            window.fabric.core.execPlugin('sendLevelEnd', {
                levelName: levelName,
                score: score,
                success: success,
                attributes: attributes
            });
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
    }]);

    return FabricAnswers;
})();

module.exports = new FabricAnswers();