(function () {
    "use strict";

    var strain = {
        keep: function (array, callback) {
            return array === [] ? [] : findTrue(array);
            
            function findTrue (array) {
                var keep = [];
                //Didn't read the instructions, no filter method allowed!
                for(var i = 0; i<array.length; i++) {
                    if(callback(array[i])){
                        keep.push(array[i]);
                    }
                }
                return keep;
            }
        },

        discard: function (array, callback) {
            return array === [] ? [] : isFalse(array);

            function isFalse (array) {
                var discard = [];

                for(var i = 0; i<array.length; i++) {
                    if(!callback(array[i])){
                        discard.push(array[i]);
                    }
                }
                return discard;
            }
        }
    };

    module.exports = strain;
})();