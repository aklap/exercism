(function(){
    "use strict";

    function ETL() {};

    ETL.prototype.transform = function (input) {
        var newValue = {};

        for(var value in input) {
            var letters = input[value].join('').toLowerCase().split('');
            
            letters.map(function(letter) {
                return newValue[letter] = parseInt(value);
            });
        }
        return newValue;
    }

    module.exports = ETL;
})();