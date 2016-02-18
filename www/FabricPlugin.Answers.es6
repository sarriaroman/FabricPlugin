
class FabricAnswers {
    constructor() {}

    sendPurchase(itemPrice, currency, success, itemName, itemType, itemId, attributes) {
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

    sendAddToCart(itemPrice, currency, itemName, itemType, itemId, attributes) {
        window.fabric.core.execPlugin('sendAddToCart', {
            itemPrice: itemPrice,
            currency: currency,
            itemName: itemName,
            itemType: itemType,
            itemId: itemId,
            attributes: attributes
        });
    }

    sendStartCheckout(totalPrice, currency, itemCount, attributes) {
        window.fabric.core.execPlugin('sendStartCheckout', {
            totalPrice: totalPrice,
            currency: currency,
            itemCount: itemCount,
            attributes: attributes
        });
    }

    sendSearch(query, attributes) {
        window.fabric.core.execPlugin('sendSearch', {
            query: query,
            attributes: attributes
        });
    }

    sendShare(method, contentName, contentType, contentId, attributes) {
        window.fabric.core.execPlugin('sendShare', {
            method: method,
            contentName: contentName,
            contentType: contentType,
            contentId: contentId,
            attributes: attributes
        });
    }

    sendRatedContent(rating, contentName, contentType, contentId, attributes) {
        window.fabric.core.execPlugin('sendRatedContent', {
            rating: rating,
            contentName: contentName,
            contentType: contentType,
            contentId: contentId,
            attributes: attributes
        });
    }

    sendSignUp(method, success, attributes) {
        window.fabric.core.execPlugin('sendSignUp', {
            method: method,
            success: success,
            attributes: attributes
        });
    }

    sendLogIn(method, success, attributes) {
        window.fabric.core.execPlugin('sendLogIn', {
            method: method,
            success: success,
            attributes: attributes
        });
    }

    sendInvite(method, attributes) {
        window.fabric.core.execPlugin('sendInvite', {
            method: method,
            attributes: attributes
        });
    }

    sendLevelStart(levelName, attributes) {
        window.fabric.core.execPlugin('sendLevelStart', {
            levelName: levelName,
            attributes: attributes
        });
    }

    sendLevelEnd(levelName, score, success, attributes) {
        window.fabric.core.execPlugin('sendLevelEnd', {
            levelName: levelName,
            score: score,
            success: success,
            attributes: attributes
        });
    }

    sendContentView(name, type, id, attributes) {
        window.fabric.core.execPlugin('sendContentView', {
            name: name,
            type: type,
            id: id,
            attributes: attributes
        });
    }

    sendScreenView(name, id, attributes) {
        window.fabric.core.execPlugin('sendContentView', {
            name: name,
            type: "Screen",
            id: id,
            attributes: attributes
        });
    }

    sendCustomEvent(name, attributes) {
        window.fabric.core.execPlugin('sendCustomEvent', {
            name: name,
            attributes: attributes
        });
    }
}

module.exports = new FabricAnswers();
