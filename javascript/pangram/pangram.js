(function() {
    "use strict";
    
    function Pangram(string) {
        this.string = string;
    }

    Pangram.prototype.isPangram = function() {
        var letters = this.string.toLowerCase().replace(/\s+|\d|\s|\W|[_]+/g, ''),
            ALPHABET = 'abcdefghijklmnopqrstuvwxyz';

        if(this.string === '') {
            return false;
        }
        
        for(var i = 0; i<alphabet.length; i++) {
            if(letters.includes(alphabet[i]) === false) {
                return false;
            }
        }
        return true;
    };

    module.exports = Pangram;
})();