(function() {
    "use strict";

    function Series(n) {
        this.set = n;
    }

    Series.prototype.largestProduct = function(size) {
        var max = 0;

        if (this.set.match(/[\D]/g) || size < 0) {
            throw Error('Invalid input.');
        }

        if(size === 0) {
            return 1;
        }

        if(size > this.set.length) {
            throw Error('Slice size is too big.');
        }

        for(var i = 0; i<this.set.length; i++) {
            var product = eval(this.set.substring(i, i+size).split('').join('*'));

            if(product > max && this.set.substring(i, i+size).length === size) {
                max = product;
            }
        }
        
        return max;
    };

    module.exports = Series;
})();