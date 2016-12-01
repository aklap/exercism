(function() {
    "use strict";

    function Squares(n) {
        this.range = generateRange(n);
        this.squareOfSums = this.getSquare();
        this.sumOfSquares = this.getSum();
        this.difference = this.squareOfSums - this.sumOfSquares;

        function generateRange(n) {
            var range = [];
            for(var i=1; i<=n; i++){
                range.push(i);
            }

            return range;
        }
    }

    Squares.prototype.getSquare = function() {
        var sumTotal = this.range.reduce(function(a,b) { return a+b; });

        return Math.pow(sumTotal, 2);
    };

    Squares.prototype.getSum = function() {
        return this.range.reduce(function(acc, num) { 
            return acc + Math.pow(num, 2);
        });
    };

    module.exports = Squares;
})();
