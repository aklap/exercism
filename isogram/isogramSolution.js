(function () {
    "use strict";

    function Isogram (word) {
        this.word = word;
    };

    Isogram.prototype.isIsogram = function () {
        var letters = this.word.toLowerCase().replace(/[-]|\s+/g, '').split('');
        var dict = {};

        for (var i =0; i<letters.length; i++) {
            if (dict[letters[i]]) {
                return false;
            } else {
                dict[letters[i]] = 1;
            }  
        }
        return true;
    }

    module.exports = Isogram;
})();