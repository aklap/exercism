(function() {
    "use strict";

    var strain = {
        keep: function(arr, callback) {
            return arr === [] ? [] : findTrue(arr);
            
            function findTrue(arr) {
                var keep = [];

                for(var i = 0; i<arr.length; i++) {
                    if(callback(arr[i])){
                        keep.push(arr[i]);
                    }
                }

                return keep;
            }
        },

        discard: function(arr, callback) {
            return arr === [] ? [] : isFalse(arr);

            function isFalse (arr) {
                var discard = [];

                for(var i = 0; i<arr.length; i++) {
                    if(!callback(arr[i])){
                        discard.push(arr[i]);
                    }
                }
                
                return discard;
            }
        }
    };

    module.exports = strain;
})();