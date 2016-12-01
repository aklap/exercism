(function() {
    "use strict";

    function Series(nums) {
        function toDecimal(n) {
            return Number(n);
        }

        this.digits = nums
            .split('')
            .map(toDecimal);
    }

    Series.prototype.slices = function(len) {
        var digits = this.digits;

        // helper functions
        function toChunks(len, el, i) {
            return digits.slice(i, i+len);
        }

        function areEqualSize(len, _, i) {
            return digits.slice(i, i+len).length === len;
        }
        //

        if(digits.length < len) {
            throw new Error('Slice size is too big.');
        }

        return digits
            .filter(areEqualSize.bind(this, len))
            .map(toChunks.bind(this, len));
    };

    module.exports = Series;
})();