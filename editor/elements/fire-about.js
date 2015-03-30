var Remote = require('remote');
var app = Remote.require('app');

Polymer({
    version: "",

    created: function () {
        this.version = app.getVersion();
    },
});
