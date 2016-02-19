
class FabricAnswers {
    constructor() {}

    sendPurchase(itemPrice, currency, success, itemName, itemType, itemId, attributes) {
        window.fabric.core.execPlugin('sendPurchase', [
            itemPrice,
            currency,
            success,
            itemName,
            itemType,
            itemId,
            attributes
        ]);
    }

    sendAddToCart(itemPrice, currency, itemName, itemType, itemId, attributes) {
        window.fabric.core.execPlugin('sendAddToCart', [
            itemPrice,
            currency,
            itemName,
            itemType,
            itemId,
            attributes
        ]);
    }

    sendStartCheckout(totalPrice, currency, itemCount, attributes) {
        window.fabric.core.execPlugin('sendStartCheckout', [
            totalPrice,
            currency,
            itemCount,
            attributes
        ]);
    }

    sendSearch(query, attributes) {
        window.fabric.core.execPlugin('sendSearch', [
            query,
            attributes
        ]);
    }

    sendShare(method, contentName, contentType, contentId, attributes) {
        window.fabric.core.execPlugin('sendShare', [
            method,
            contentName,
            contentType,
            contentId,
            attributes
        ]);
    }

    sendRatedContent(rating, contentName, contentType, contentId, attributes) {
        window.fabric.core.execPlugin('sendRatedContent', [
            rating,
            contentName,
            contentType,
            contentId,
            attributes
        ]);
    }

    sendSignUp(method, success, attributes) {
        window.fabric.core.execPlugin('sendSignUp', [
            method,
            success,
            attributes
        ]);
    }

    sendLogIn(method, success, attributes) {
        window.fabric.core.execPlugin('sendLogIn', [
            method,
            success,
            attributes
        ]);
    }

    sendInvite(method, attributes) {
        window.fabric.core.execPlugin('sendInvite', [
            method,
            attributes
        ]);
    }

    sendLevelStart(levelName, attributes) {
        window.fabric.core.execPlugin('sendLevelStart', [
            levelName,
            attributes
        ]);
    }

    sendLevelEnd(levelName, score, success, attributes) {
        window.fabric.core.execPlugin('sendLevelEnd', [
            levelName,
            score,
            success,
            attributes
        ]);
    }

    sendContentView(name, type, id, attributes) {
        window.fabric.core.execPlugin('sendContentView', [
            name,
            type,
            id,
            attributes
        ]);
    }

    sendScreenView(name, id, attributes) {
        window.fabric.core.execPlugin('sendContentView', [
            name,
            "Screen",
            id,
            attributes
        ]);
    }

    sendCustomEvent(name, attributes) {
        window.fabric.core.execPlugin('sendCustomEvent', [
            name,
            attributes
        ]);
    }
}

module.exports = new FabricAnswers();
