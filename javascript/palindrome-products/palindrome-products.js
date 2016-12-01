(function() {
    "use strict";

    function Palindromes(limits) {
        this.minFactor = limits.minFactor || 1;
        this.maxFactor = limits.maxFactor;
    }

    function isPalindrome(product) {
        //TODO: use a for loop and reverse in place
        return Number(product.toString().split('').reverse().join('')) === product;
    }

    Palindromes.prototype.generate = function() {
        this.palindromes = {};

        for(var i = this.minFactor; i < this.maxFactor; i++) {
            for(var j = this.minFactor; j <= this.maxFactor; j++) {
                var product = i*j;

                if(isPalindrome(product)) {
                    if(!this.palindromes[product]) {
                        this.palindromes[product] = [];
                    }
                    
                    // use match and this.palindromes as string?
                    if(!this.palindromes[product].includes(i) || !this.palindromes[product].includes(j)) {
                        this.palindromes[product].push(i,j);
                    }
                }
            }
        }
    };

    function getPairs(factors) {
        var pairs = [];
        for(var i = 0; i < factors.length; i+=2) {
            pairs.push(factors.slice(i, i+2));
        }

        return pairs;
    }

    Palindromes.prototype.largest = function () {
        var max = null;

        for(var palindrome in this.palindromes) {
            if(palindrome > max) {
                max = Number(palindrome);
            }
        }

        return { value: max, factors: getPairs(this.palindromes[max]) };
    };

    Palindromes.prototype.smallest = function () {
        var min;

        for(var palindrome in this.palindromes) {
            if(!min || Number(palindrome) < min) {
                min = Number(palindrome);
            }
        }

        return { value: min, factors: getPairs(this.palindromes[min]) };
    };

    module.exports = Palindromes;
})();
