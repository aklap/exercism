(function() {
    "use strict";

    function Trinary(input) {
        this.triNum = input;
    }

    Trinary.prototype.toDecimal = function() {
        var triNum = this.triNum;

        return isNaN(triNum) ? 0 : getDecimalOf(triNum);

        function getDecimalOf(triNum) {
            triNum = triNum.split('').reverse();

            return triNum.reduce(function(prev, curr, index) {
                return prev + Number(curr) * (Math.pow(3, index));
            }, 0);
        }
    };

    module.exports = Trinary;
})();