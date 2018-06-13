
var fs = require("fs");
var path = require("path");
var utilities = require("./utilities");

module.exports = {

    fabricProperties: function () {
        const config = utilities.getPluginConfig("android");
        const targetDir = "platforms/android/app/";
        const file = "fabric.properties";
        const sep = path.sep;
        const initDir = path.isAbsolute(targetDir) ? sep : '';

        targetDir.split(sep).reduce((parentDir, childDir) => {
            const curDir = path.resolve(parentDir, childDir);
            if (!fs.existsSync(curDir)) {
                fs.mkdirSync(curDir);
            }
            return curDir;
        }, initDir);

        var stream = fs.createWriteStream(targetDir + file);

        stream.once('open', (fd) => {
            stream.write("apiSecret=" + config.apiSecret + "\n");
            stream.write("apiKey=" + config.apiKey);
            stream.end();
        });
    },

    addFabricBuildToolsGradle: function() {

        var buildGradle = utilities.readBuildGradle();

        buildGradle +=  [
            "",
            "// Fabric Cordova Plugin - Start Fabric Build Tools ",
            "buildscript {",
            "    repositories {",
            "        maven { url 'https://maven.fabric.io/public' }",
            "    }",
            "    dependencies {",
            "        classpath 'io.fabric.tools:gradle:1.+'",
            "    }",
            "}",
            "",
            "apply plugin: 'io.fabric'",
            "// Fabric Cordova Plugin - End Fabric Build Tools",
        ].join("\n");

        utilities.writeBuildGradle(buildGradle);
    },

    removeFabricBuildToolsFromGradle: function() {

        var buildGradle = utilities.readBuildGradle();

        buildGradle = buildGradle.replace(/\n\/\/ Fabric Cordova Plugin - Start Fabric Build Tools[\s\S]*\/\/ Fabric Cordova Plugin - End Fabric Build Tools/, "");

        utilities.writeBuildGradle(buildGradle);
    }
};
