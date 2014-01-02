require.config({
    map: {
        '*': {
            'sample/dependency-core': 'sample/dependency-core-builder'
        }
    }
});

define(['./dependency'], function (dep) {

    var buildMap = {};

    return {

        load: function (name, req, load, config) {
            buildMap[name] = 'From optimizer: ' + dep.version;
            load();
        },

        write: function (pluginName, moduleName, write) {
            if (buildMap.hasOwnProperty(moduleName)) {
                var content = buildMap[moduleName];
                write('define("' + pluginName + '!' + moduleName + '", [], function () { return "' + content + '"; });\n');
            }
        }

    };

});
