(function() {
    "use strict";

    function score(word) {
        var SCORES = {},
            POINTS = [1, 2, 3, 4, 5, 8, 10],
            LETTERS = [
                'AEIOULNRST', 
                'DG', 
                'BCMP', 
                'FHVWY', 
                'K', 
                'JX', 
                'QZ'
            ];

       function isInvalid(word) {
        return word === '' || word === null;
       }

       function getTotal(a, b) {
            return a + b;
       }

        function letterToPoints(key, letter, i) {
            var letterUpcase = letter.toUpperCase();

            for(i in key) {
                if(key[i].includes(letterUpcase)) {
                    return parseInt(i);
                }
            }
        }

    // validate word
        if(isInvalid(word)) {
            return 0;
        }

    // create key of all possible LETTERS and POINTS
       for (var i = 0; i < LETTERS.length; i++) {
            SCORES[POINTS[i]] = LETTERS[i];
       }     
    
        return word.split('')
            .map(letterToPoints.bind(this, SCORES))
            .reduce(getTotal);
    }

    module.exports = score;
})();
