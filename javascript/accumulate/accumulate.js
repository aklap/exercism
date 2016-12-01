(function() {
    "use strict";

    function accumulate(array, callback) {
        return array.map(function(e) {
            return callback(e);
        });
    }

    module.exports = accumulate;
})();
