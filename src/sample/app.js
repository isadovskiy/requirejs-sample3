define(['jquery', './plugin!'], function ($, plugin) {

    return function (el) {

        $(el).text(plugin);

    };

});