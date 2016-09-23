(function () {
    "use strict";

    function Octal (input) {
        this.input = input;
    }

    Octal.prototype.toDecimal = function () {
        if (this.input === '1') {
            return parseInt(1);
        }

        if (isNaN(this.input) || this.input.includes('8')) {
            return 0;
        }

        return this.input.split('').reverse()
        .map(function(digit, index) {
            return parseInt(digit)* Math.pow(8, index);
        })
        .reduce(function(a,b) {
            return a+b;
        })  
    }

    module.exports = Octal;
})();