module.exports = {
    load: function (plugin) {
        plugin.on('about:open', function () {
            plugin.openPanel('default');
        });
    },
    unload: function (plugin) {
    },
};
