(function () {
    "use strict";

    function Octal(input) {
        this.input = input;
    }

    Octal.prototype.toDecimal = function() {
        if(this.input === '1') {
            return parseInt(1);
        }

        if(isNaN(this.input) || this.input.includes('8')) {
            return 0;
        }

        return octalToDecimal(this.input);
        
        // helper functions
        function octalToDecimal(octal) {
            return octal
                .split('')
                .reverse()
                .map(getProducts)
                .reduce(getSum);  
        }

        function getSum(a, b) {
            return a + b;
        }

        function getProducts(d, i) {
            return parseInt(d) * Math.pow(8, i);
        }
    };

    module.exports = Octal;
})();
