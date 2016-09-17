(function(){
    "use strict";

    function Crypto (plaintext) {
        this.plaintext = plaintext;
    };

    Crypto.prototype.normalizePlaintext = function () {
        return this.plaintext.replace(/\W+/ig, '').toLowerCase();
    }

    Crypto.prototype.size = function () {
        var plaintext = this.normalizePlaintext();

        return Math.ceil(Math.sqrt(plaintext.length));
    }

    Crypto.prototype.plaintextSegments = function () {
        var plaintext = this.normalizePlaintext(),
            size = this.size(),
            ciphertext = "";

        for (var i = 0; i < plaintext.length; i++) {
            (i+1) % size === 0 ? ciphertext += plaintext[i] + ' ' : ciphertext += plaintext[i];
        }
        return ciphertext.trim().split(' ');
    }

    Crypto.prototype.ciphertext = function () {
        var plaintext = this.normalizePlaintext().split('');
        var start = 0;
        var chunks = [];
        var interval = this.size();
        var ciphertext = [];
        var column = 0;

        //split into chunks of letters == size
        for(var i = interval; start < plaintext.length; i+=interval) {
            chunks.push(plaintext.slice(start, i));
            start += interval;
        }

        //get each letter that makes up a column
        while(column <= interval) {
            for (var chunk = 0; chunk < chunks.length; chunk++) {
                ciphertext.push(chunks[chunk][column]);
            }
            column++;
        }
        
        return ciphertext.join('');
    }

    module.exports = Crypto;
})();