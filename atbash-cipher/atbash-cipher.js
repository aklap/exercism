(function () {

    "use strict";

    var atbash = {
        encode: function (plaintext) {
            var ALPHABET = "abcdefghijklmnopqrstuvwxyz",
                reversed = ALPHABET.split('').reverse(),
                cipher = {},
                plaintext = sanitize(plaintext);

            //sanitize input    
            function sanitize(input) {
                return input.replace(/[\s|\W]+/g, '').toLowerCase().split('');
            } 

            //create hash
            cipher = ALPHABET.split('').map(function (letter, index) {
                return cipher[ALPHABET[index]] = reversed[index];
            });

            //convert plaintext into ciphertext
            function getCipherText () {
                var output = "";

                for(var i = 0; i < plaintext.length; i++) {
                    var index = ALPHABET.indexOf(plaintext[i]);

                    index === -1 ? output += plaintext[i] : output += reversed[index];
                }

                return output;
            }

            //format ciphertext by adding spaces every 5 characters
            function format(text) {
                var formatted = "";

                if (text.length > 5) {
                    for(var i = 0; i < text.length; i++) {
                        (i + 1) % 5 === 0 ? formatted += text[i] + ' ' : formatted += text[i];
                    }
                } else {
                    formatted = text;
                }
                return formatted.trim();
            }

            return format(getCipherText());
        }
    };
    
    module.exports = atbash;
})();