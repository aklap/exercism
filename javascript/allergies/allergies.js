(function() {

    "use strict";

    function Allergies (tally) {
        this.tally = tally;
    }

    Allergies.prototype.list = function () {
        var tally = this.tally,
            ALLERGIES = [
                'eggs',
                'peanuts',
                'shellfish',
                'strawberries',
                'tomatoes',
                'chocolate',
                'pollen',
                'cats'
            ],

            SCORES =[
                1,
                2,
                4,
                8,
                16,
                32,
                64,
                128
            ],

            remainder = this.tally;

       return SCORES
            .reverse()
            .map(function(score, index) {
                if (remainder % score < remainder) {
                    remainder = remainder % score;
                    return ALLERGIES[(SCORES.length-1) - index];
                }
            })
           .reverse()
           .filter(Boolean);
    };

    Allergies.prototype.allergicTo = function (allergyToFind) {
        var allergyList = this.list();

        return allergyList.some(function(allergy) {
            return allergy === allergyToFind;
        });
    }

    module.exports = Allergies;
})();