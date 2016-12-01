(function() {
    "use strict";

    function Crypto(plaintext) {
        this.plaintext = plaintext;
    }

    Crypto.prototype.normalizePlaintext = function() {
        return this.plaintext.replace(/\W+/ig, '').toLowerCase();
    };

    Crypto.prototype.size = function() {
        return Math.ceil(Math.sqrt(this.normalizePlaintext().length));
    };

    Crypto.prototype.plaintextSegments = function () {
        var plaintext = this.normalizePlaintext(),
            size = this.size(),
            ciphertext = "";

        for (var i=0; i < plaintext.length; i++) {
            (i+1) % size === 0 ? ciphertext += plaintext[i] + ' ' : ciphertext += plaintext[i];
        }

        return ciphertext.trim().split(' ');
    };

    Crypto.prototype.ciphertext = function () {
        var interval = this.size(),
            plaintext = this.normalizePlaintext().split(''),
            chunks = toChunks(interval, plaintext);

        // helper functions:
        function toChunks(len, text) {
        // split into chunks of letters == size
            var chunks = [],
                start = 0;

            for(var i = interval; start < text.length; i+=interval) {
                chunks.push(text.slice(start, i));
                start += interval;
            }

            return chunks;
        }

        // get each letter that makes up a column
        function encrypt(plaintextChunks) {
            var ciphertext = [],
                column = 0;

            while(column <= interval) {
                for(var chunk = 0; chunk < chunks.length; chunk++) {
                    ciphertext.push(chunks[chunk][column]);
                }
                column++;
            }

            return ciphertext.join('');
        }
        // end helper functions

        return encrypt(chunks);
    };

    module.exports = Crypto;
})();