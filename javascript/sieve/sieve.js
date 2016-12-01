(function() {
    "use strict";

    function Sieve(n) {
        this.limit = n;
        this.primes = this.getPrimes();
    }

    //find al the prime numbers upto the limit
    Sieve.prototype.getPrimes = function () {
        var primes = [];

        function isNotMultiple(prime) {
            // make sure i isn't a multiple of any previous known prime
            return i % prime !== 0;
        }

        // used https://primes.utm.edu/prove/merged.html
        for(var i = 2; i <= this.limit; i++) {
            if(i <= 3 || primes.every(isNotMultiple)) {
                primes.push(i);
            }
        }

        return primes;
    };

    module.exports = Sieve;
})();