const exec = require('cordova/exec');

class FabricPlugin {
    constructor() {}

    pluginCallName() {
        return 'FabricPlugin';
    }

    execPlugin(method, parameters) {
        exec(null, null, this.pluginCallName(), method, parameters);
    }

}

module.exports = new FabricPlugin();
