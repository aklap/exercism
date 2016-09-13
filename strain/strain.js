(function () {
    "use strict";

    var strain = {
        keep: function (array, callback) {
            return array === [] ? [] : findTrue(array);
            
            function findTrue (array) {
                return array.filter(function (el) {
                    if (callback(el)) {
                        return el;
                    }
                });
            }
        },

        discard: function (array, callback) {
            return array === [] ? [] : isFalse(array);

            function isFalse (array) {
                return array.filter(function (el){
                    if (!callback(el)) {
                        return el;
                    }
                })
            }
        }
    };

    module.exports = strain;
})();