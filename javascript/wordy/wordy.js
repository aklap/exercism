(function () {
    "use strict";

    // Argument Object
    function ArgumentError() {
        this.name = 'ArgumentError';
    }

    ArgumentError.prototype = Error.prototype;

    // WordProblem object
    function WordProblem (question) {
        var OPERATORS = {
            'plus': '+',
            'minus': '-',
            'multiplied by': '*',
            'divided by': '/'
        },
            end = question.length-1;

        this.question = question.substring(8, end);

        this.answer = function () {
            var statement = this.question;
            
        // check validity of input
            function isValid(str) {
                return !(/plus|minus|multiplied by|divided by/).test(str);
            }

         // replace all letters with signs
            function wordsToSigns(str){
                for(var op in OPERATORS) {
                    if(str.includes(op)){
                        var re = new RegExp(op, 'g');
                        str = str.replace(re, OPERATORS[op]);
                    }
                }
                
                return str;
            }

        // handle multiple ops
            function orderOps(str) {
                var first = str.split(' ').slice(0,3).join(' ');
                var sec = str.split(' ').slice(3).join(' ');

                return eval(first) + ' ' + sec;
            }
        //

            if(isValid(statement)) {
                throw new ArgumentError;
            } else {
                var math = wordsToSigns(statement);
                return eval(orderOps(math));
            }
        }
    }

    module.exports = { 
        WordProblem: WordProblem, 
        ArgumentError: ArgumentError 
    };
})();