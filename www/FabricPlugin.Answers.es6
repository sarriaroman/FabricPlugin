
class FabricAnswers {
    constructor() {}

    /* Answers Events */

    sendSignUp() {
        window.fabric.core.execPlugin('sendSignUp');
    }

    sendLogIn() {
        window.fabric.core.execPlugin('sendLogIn');
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

    /* Answers Events */
}

module.exports = new FabricAnswers();
