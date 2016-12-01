(function() {
    "use strict";

    function Binary(string) {
        this.binaryN = string;
    }

    Binary.prototype.toDecimal = function() {
            var products = getProducts(this.binaryN);

        return !this.binaryN.match(/[a-zA-Z]|[2-9]/) ? getSum(products) : 0;
    };

    // helper functions
    function getProducts(binary) {
        var binary = binary.split('');
        var acc = 1,
        products = [];

        for(var i=binary.length-1; i >=0; i--) {
            products.push(binary[i]*acc);
            acc *= 2;
        }

        return products;
    }

    function getSum(arr) {
        return arr.reduce(function(a, b) { 
            return a + b; 
        });
    }

    module.exports = Binary;
})();
