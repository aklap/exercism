(function () {
    "use strict";

    function Binary (string) {
        this.binaryNum = string;
    };

    Binary.prototype.toDecimal = function () {
        if (this.binaryNum.search(/[a-zA-Z]|[2-9]/) === -1) {
            var binary = this.binaryNum.split(''),
                baseProduct = 1,
                products = [];

            for(var i=binary.length-1; i >=0; i--) {
                products.push(binary[i]*baseProduct);
                baseProduct *= 2;
            }

            return products.reduce(function (a, b) { 
                return a + b; 
            },0);
        } else {
            return 0;
        }
    };

    module.exports = Binary;
})();