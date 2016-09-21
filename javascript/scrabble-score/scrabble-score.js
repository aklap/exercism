(function() {
    "use strict";

    function score(word) {
        var scoreKey = {};

        var points = [1, 2, 3, 4, 5, 8, 10];
        var letters = [
                'AEIOULNRST', 
                'DG', 
                'BCMP', 
                'FHVWY', 
                'K', 
                'JX', 
                'QZ'
            ];

        //create key of all possible letters and points
       for (var i = 0; i < letters.length; i++) {
            scoreKey[points[i]] = letters[i];
       }     

        if(word === '' || word === null) {
            return 0;
        }

        return word.split('')
            .map(function(letter) {
                for(var i in scoreKey) {
                    if(scoreKey[i].includes(letter.toUpperCase())) {
                        return parseInt(i);
                    }
                }
            })
            .reduce(function(a,b) {
                return a+b;
            });
    }

    module.exports = score;
})();