define(['./dependency'], function (dep) {

    return {

        pluginBuilder: './plugin-builder',

        load: function (name, req, load, config) {
            load(dep.version);
        }

    };

});