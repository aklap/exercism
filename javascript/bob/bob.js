(function() {
    "use strict";

    function Bob() {}

    Bob.prototype.hey = function(input) {
        // trim removes extra whitespaces at the tend of a string
        input = input.trim();
        var yellingMatcher = /[A-Z]/,
            questionMatcher = /\b[?]/;
            
        // no input
        if(!input) {
            return 'Fine. Be that way!';
        }

        // yelling
        if(yellingMatcher.test(input) && input.toUpperCase() == input) {
            return 'Whoa, chill out!';
        }

        // question
        if(questionMatcher.test(input)) {
            return 'Sure.';
        }

        // else default
        return 'Whatever.';
    };

    module.exports = Bob;
})();
