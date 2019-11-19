const exec = require('cordova/exec');

class FabricPlugin {
    constructor() {}

    pluginCallName() {
        return 'FabricPlugin';
    }

    execPlugin(method, parameters) {
        exec(null, null, this.pluginCallName(), method, parameters);
    }

    initialize(success) {
        exec(success, null, this.pluginCallName(), "initialize", []);
    }

    isInitialized(success) {
        exec(success, null, this.pluginCallName(), "isInitialized", []);
    }

}


module.exports = new FabricPlugin();
