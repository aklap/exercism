(function() {

    "use strict";

    function Hexadecimal(input) {
        this.input = input;
    }

    Hexadecimal.prototype.toDecimal = function() {
        var letterKey = {
            "a": 10,
            "b": 11,
            "c": 12,
            "d": 13,
            "e": 14,
            "f": 15
        };

        function validateInput(input) {
           if(input.match(/[^a-f, 0-9]/g)) {
                return 0;
            } else {
                return input;
            }
        }

        function convert(input) {
            if(Number(input) < 10) {
                return Number(input);
            }

            if(Number(input) === 10) {
                return 16;
            }

            return input
                .split('')
                .reverse()
                .reduce(function(prev, curr, i) {
                    if (curr.match(/[a, b, c, d, e, f]{1}/)) {
                        return prev + (letterKey[curr] * Math.pow(16, i));
                    } else {
                        return prev + (curr * Math.pow(16, i));
                    }
                }, 0);    
        }

        var validated = validateInput(this.input);

        return convert(validated);
    }

    module.exports = Hexadecimal;
})();