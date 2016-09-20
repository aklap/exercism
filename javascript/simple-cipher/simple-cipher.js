(function () {
    'use strict';

    function Cipher(key) {
        if ( key !== undefined && !key.search(/[^a-z]+/, 'g')) {
            throw Error('Bad key');
        }

        if (key === '') {
            throw Error('Bad key');
        }

        this.key = key || "aaaaaaaaaa";
    }

    Cipher.prototype.encode = function (text) {
        var alphabet = "abcdefghijklmnopqrstuvwxyz";
        var text = text.toLowerCase().split('');
        var shift = this.key;

        function encoded(shift, letter, index) {
            var plaintextCharPosition = alphabet.indexOf(letter),
                keyCharPosition = alphabet.indexOf(shift[index]), 
                encodedChar = plaintextCharPosition + keyCharPosition;

            if (encodedChar > alphabet.length) {
                encodedChar = encodedChar % alphabet.length;
            }

            return alphabet[plaintextCharPosition + keyCharPosition];
        }

        return text.map(encoded.bind(this, shift)).join('');
    };

    Cipher.prototype.decode = function (ciphertext) {
        var alphabet = "abcdefghijklmnopqrstuvwxyz";
        var ciphertext = ciphertext.toLowerCase().split('');
        var shift = this.key;

        function decoded(shift, letter, index) {
            var plaintextCharPosition = alphabet.indexOf(letter),
                keyCharPosition = alphabet.indexOf(shift[index]), 
                encodedChar = plaintextCharPosition + keyCharPosition;

            if (encodedChar > alphabet.length) {
                encodedChar = encodedChar % alphabet.length;
            }

            return alphabet[plaintextCharPosition - keyCharPosition];
        }

        return ciphertext.map(decoded.bind(this, shift)).join('');
    };

    module.exports = Cipher;
})();