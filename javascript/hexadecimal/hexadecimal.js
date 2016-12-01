(function() {
    "use strict";

    function Hexadecimal(input) {
        this.input = input;
    }

    Hexadecimal.prototype.toDecimal = function() {
        var validated = validateInput(this.input);

        function validateInput(input) {
            function isValid(str) {
                return /[^a-f, 0-9]/g.test(str);
            }

           return isValid(input) ? 0 : input;
        }

        function convert(input) {
            function toDecimal(input) {
                var KEY = {
                    "a": 10,
                    "b": 11,
                    "c": 12,
                    "d": 13,
                    "e": 14,
                    "f": 15
                };

                function isHex(n) {
                    return /[a, b, c, d, e, f]+/.test(n);
                }

                function digitToDecimal(currVal, i) {
                    return currVal * Math.pow(16, i);
                }

                return input
                    .split('')
                    .reverse()
                    .reduce(function(prev, curr, i) {
                        return isHex(curr) ? prev + digitToDecimal(KEY[curr], i) : prev + digitToDecimal(curr, i);
                    }, 0); 
            }
            
            if(Number(input) < 10) {
                return Number(input);
            }

            if(Number(input) === 10) {
                return 16;
            }

            return toDecimal(input);
        }

        return convert(validated);
    };

    module.exports = Hexadecimal;
})();
