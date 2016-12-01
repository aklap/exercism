(function() {
    "use strict";

    var primeFactors = {
        for: function(n) {
            var factors = [],
                factor = 2;

            if(n === 1) {
                return factors;
            }

            while(factor <= n) {
                //if a number evenly goes into the number
                if(n % factor === 0) {
                    //push in the factor
                    factors.push(factor);
                    //reassign value of n to the quotient of n/factor
                    n /= factor;    
                } else {
                    // check the next valid possible factor
                    factor++;
                }
            }
            
            return factors;
        }
    };

    module.exports = primeFactors;
})();
