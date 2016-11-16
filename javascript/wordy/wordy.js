(function () {
    "use strict";

    // Argument Object
    function ArgumentError () {
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

            if(!statement.match(/plus|minus|multiplied by|divided by/)) {
                throw new ArgumentError;
            }

            // replace all letters with signs
            for(var op in OPERATORS) {

                if(statement.includes(op)){
                    var re = new RegExp(op, 'g');
                    statement = statement.replace(re, OPERATORS[op]);
                }
            }

            //recursively solve; base case is 1 element
            if (statement.split(' ').length > 1) {

                statement = eval(statement.split(' ').slice(0,3).join(' ')) + ' ' + statement.split(' ').slice(3).join(' ');
            }
            
            return eval(statement);
        }
    }

    module.exports = { 
        WordProblem: WordProblem, 
        ArgumentError: ArgumentError 
    };
})();