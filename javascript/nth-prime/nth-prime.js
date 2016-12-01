(function() {
    "use strict";

    var prime = {
        nth: function(nth) {
            if(nth < 1) {
                throw new Error('Prime is not possible');
            }

            var primes = [],
                n = 2;
    
            function isNotFactor(nth) { 
                return n % nth !== 0; 
            };

            while(primes.length < nth) {
                if(n <= 3 || primes.every(isNotFactor)) {
                    primes.push(n);
                }
                n++;
            }

            return primes[nth-1];
        }
    };

    module.exports = prime;
})();
