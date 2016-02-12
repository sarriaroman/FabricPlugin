
/**
 * Utilities and shared functionality for the build hooks.
 */

var path = require("path");

/**
 * Used to get the name of the application as defined in the config.xml.
 */
function getAppName(context) {
    var ConfigParser = context.requireCordovaModule("cordova-lib").configparser;
    var config = new ConfigParser("config.xml");
    return config.name();
};

module.exports = {

    /**
     * The ID of the plugin; this should match the ID in plugin.xml.
     */
    getPluginId: function () {
        return "com.sarriaroman.fabric";
    },

    /**
     * Used to get the plugin configuration for the given platform.
     * 
     * The plugin configuration object will have the API and secret keys
     * for the Crashlytics service that were specified when the plugin
     * was installed.
     * 
     * This configuration is obtained from, where "ios" is the platform name:
     *    platforms/ios/ios.json
     */
    getPluginConfig: function(platform) {

        var platformConfigPath = path.join("..", "..", "..", platform + ".json");

        var platformConfig = require(platformConfigPath);

        var pluginId = this.getPluginId();

        var apiKey = platformConfig.installed_plugins[pluginId].CRASHLYTICS_API_KEY;
        var apiSecret = platformConfig.installed_plugins[pluginId].CRASHLYTICS_API_SECRET;

        var config = {
            apiKey: apiKey,
            apiSecret: apiSecret
        };

        return config;
    },

    /**
     * Used to get the path to the XCode project's .pbxproj file.
     */
    getXcodeProjectPath: function(context) {

        var appName = getAppName(context);

        return path.join("platforms", "ios", appName + ".xcodeproj", "project.pbxproj");
    }
};
