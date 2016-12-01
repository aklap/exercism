(function() {
    "use strict";
    
    var ALPH = 'abcdefghijklmnopqrstuvwxyz';

    function Cipher (str) {
        // validate key string w/regex
        if(str == '' || str !== undefined && str.match(/[A-Z|1-9]+/g) != null) {
            throw new Error('Bad key');
        } else {
            //use user input or default to the alphabet
            this.key = str|| ALPH;
        }
    }

    Cipher.prototype.encode = function (plaintext) {
        var ciphertext = '';

        for(var i = 0; i<plaintext.length; i++) {
            var plainCharIndex = ALPH.indexOf(plaintext[i]),
                keyCharIndex = ALPH.indexOf(this.key[i]),
                charSum = keyCharIndex + plainCharIndex,
                lastLetter = ALPH.length-1;

            if(charSum > lastLetter) {
                // get the remainder to wrap to beginning of alphabet, then subtract 1 to get the letter's index position since it's zero indexed
                var shift = (charSum % lastLetter)-1;
                ciphertext += ALPH[shift];
            } else {
                ciphertext += ALPH[charSum];
            }
        }

        return ciphertext;
    }

    Cipher.prototype.decode = function (ciphertext) {
        var plaintext = '';
        var ALPH = 'abcdefghijklmnopqrstuvwxyz';
        for(var i = 0; i<ciphertext.length; i++) {
            var keyIndex = ALPH.indexOf(this.key[i]);

            var cipherIndex = ALPH.indexOf(ciphertext[i]);

            var shift = cipherIndex-keyIndex;

            plaintext += this.key[shift];
        }

        return plaintext;
    }

    module.exports = Cipher;
})();