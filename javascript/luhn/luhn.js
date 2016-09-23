(function() {
    "use strict";

    function Luhn (n) {
        this.n = n;
        this.checkDigit = checkDigit(this.n);
        this.addends = addends(this.n);
        this.checksum = checksum(this.addends);
        this.valid = valid(this.checksum);
    }

    function checkDigit(n) {
        var parsedN = n.toString().split('').reverse();
        
        return Number(parsedN[0]);
    };

    function addends(n) {
        var parsedN = n.toString().split('').reverse();

        return parsedN.map(function(digit, index) {
            var digit = Number(digit);

            if ((index + 1) % 2 === 0) {
                if((digit * 2) >= 10) {
                    return (digit * 2) - 9;
                } else {
                    return digit * 2;
                }
            }

            return digit;
        }).reverse();
    };

    function checksum(addends) {
        return addends.reduce(function(a,b) {
            return a + b;
        });
    };

    function valid(n) {
        return checkDigit(n) === 0;
    };

    Luhn.create = function(input, lastDigit) {
        var input = input;
        var digit = lastDigit || 0;
        var luhn = new Luhn(input + String(digit));

        return luhn.valid ? Number(luhn.n) : Luhn.create(input, digit+1);
    };

    module.exports = Luhn;
})();