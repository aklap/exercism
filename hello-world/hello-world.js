(function () {
    "use strict";

    var HelloWorld = function() {};

    HelloWorld.prototype.hello = function(input) {
        return input === '' ? "Hello, World!" : "Hello, " + input + "!";
    };

    module.exports = HelloWorld;
})();
