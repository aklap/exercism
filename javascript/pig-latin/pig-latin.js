(function(){
    "use strict";

    var pigLatin = {
        translate: function (word) {
            return word.match(/\b([aeiou])/, 'ig') ? word + 'ay' : word.slice(1, word.length) + word[0] + 'ay';
        }
        
    };
    module.exports = pigLatin;
})();