(function() {
    "use strict";

    function Anagram(word) {
        this.word = word.toLowerCase();
    }

    Anagram.prototype.matches = function(input) {
        var input = arguments,
            wordTofind = this.word,
            words = [];

        function isAnagram(wordTofind, word) {
            return word.toLowerCase().split('').sort().join('') === wordTofind.split('').sort().join('') && word.toLowerCase() !== wordTofind.toLowerCase();
        }

        for(var i in input) {
            if (input[i].constructor === Array && input.length === 1) {
                words = input[i];
            } else if (input[i].constructor === String) {
                words.push(input[i]);
            } else {
                throw new Error('Invalid input; strings or arrays only, please!');
            }
        }

        return words.filter(isAnagram.bind(this, wordTofind));
    };

    module.exports = Anagram;    
})();
