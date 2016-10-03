(function() {
    "use strict";

    function Flattener() {}

    Flattener.prototype.flatten = function (array, contents) {
            contents = contents || [];

            for(var i = 0; i < array.length; i++) {
                if (array[i] !== null && array[i].constructor === Array) {
                    this.flatten(array[i], contents);
                } else if(array[i] !== null) {
                    contents.push(array[i]);
                }
            }
            return contents;
    };

    module.exports = Flattener;
})();