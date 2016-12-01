(function() {
    "use strict";

    var Flattener = function() {};

    Flattener.prototype.flatten = function(nestedArray) {
        //base case is an element that doesn't contain an array
        var flat = [];

        for(var i = 0; i < nestedArray.length; i++) {
            if(Array.isArray(nestedArray[i])) {
                flat = flat.concat(this.flatten(nestedArray[i]));
            } else if (nestedArray[i] !== null) {
                flat.push(nestedArray[i]);
            }
        }

        return flat;
    };

    module.exports = Flattener;
})();