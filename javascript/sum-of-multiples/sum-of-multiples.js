(function() {
    "use strict";

     // sum of all the multiples of particular numbers up to but not including that number.
    function SumOfMultiples(factors) {
        return {
            to: function(limit) {
                var multiples = [];

                if(limit < Math.min.apply(null, factors)) {
                    return 0;
                }
                
                // helper functions
                function getSum(a,b) {
                    return a + b;
                }

                function isValid(multiple) {
                    return !multiples.includes(multiple);
                }

                function gen(factor, limit) {
                    for(var j=1; j*factor < limit; j++) {
                        var multiple = j*factor;

                        if(isValid(multiple)) {
                            multiples.push(multiple);
                        }
                    }
                }

                function getMultiples() {
                    for(var i=0; i < factors[i]; i++) {
                        if(factors[i] < limit) {
                            gen(factors[i], limit);
                        } 
                    }

                    return multiples;
                }

                return getMultiples().reduce(getSum);
            }
        };  
    }

    module.exports = SumOfMultiples;
})();
