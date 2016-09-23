(function() {
    "use strict";

    function Raindrops() {}

    Raindrops.prototype.convert = function (n) {
        var numToString = "";

        if (n === 1) {
            numToString +='1';
        }

        if (n % 3 === 0) {
            numToString += 'Pling';
        }

        if (n % 5 === 0) {
            numToString += 'Plang';
        }

        if (n % 7 === 0) {
            numToString += 'Plong';
        }

        if (numToString === '') {
            return n.toString();
        } else {
            return numToString;
        }
    }

    module.exports = Raindrops;    
})();