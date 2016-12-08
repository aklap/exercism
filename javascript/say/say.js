(function() {
    "use strict";

    //require this to spawn a process to use text to speech on Mac OS/X
    var execSync = require('child_process').execSync;

    var ones = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten', 
        11: 'eleven',
        12: 'twelve',
    };

    var tens = {
        2: 'twen',
        3: 'thir',
        4: 'for',
        5: 'fif',
        6: 'six',
        7: 'seven',
        8: 'eigh',
        9: 'nine',
    };

    var endings = {
        teens: 'teen',
        tens: 'ty',
        hundreds: 'hundred',
        thousands: 'thousand',
        millions: 'million',
        billions: 'billion'
    };

    var say = {
        inEnglish: function(n) {
            n = validate(n);

            if(n === 0) {
                return ones[n];
            } else {
                n = n.toString().split('').reverse().join('');

                var chunks = groupByThree(n),
                    words = toWords(chunks),
                    result = addPlaces(words).reverse().filter(isNotZero).join(' ');

                //speak(result);
                return result;
            }


        // helper functions
            function validate(input) {
                if(input < 0 || input > 999999999999) {
                    throw new Error('Number must be between 0 and 999,999,999,999.');
                } else {
                    return input;
                }
            }

            function groupByThree(input) {
                var groups = [];
                for(var i = 0; i < n.length; i+=3) {
                    groups.push(n.slice(i, i + 3));
                }

                return groups;
            }

            //convert into endings.hundreds or less
            function toWords(chunks) {
                var words = [];

                for(var i = chunks.length-1; i >= 0; i--) {
                    var reversedString = chunks[i].split('').reverse().join('');

                    words.push(convert(Number(reversedString)));
                }

                return words.reverse();
            }

            // insert places
            function addPlaces(converted) {
                var endings = ['hundred', 'thousand', 'million', 'billion'];

                for(var i=converted.length-1; i>=0; i--) {
                    if(i !== 0) {
                        converted[i] += ' ' + endings[i];
                    }
                }

                return converted;
            }

            // text to speech
            function speak(text) {
                execSync('say ' + text);
            }

            //check each 3 digit place isnt just empty
            function isNotZero(chunk) {
                return !chunk.includes('zero');
            }
            
            // turn groups of 3 digits into hundreds string, e.g. 321 => 'three hundred twenty-one'
            function convert(chunk) {
                var remainder = chunk,
                    result = '';

                // hundreds
                if(remainder/100 > 1) {
                    result += ones[Math.floor(remainder/100)] + ' ' + endings.hundreds + ' ';
                    remainder %= 100;
                }

                if(remainder % 100 === 0) {
                    result += ones[remainder/100] + ' ' + endings.hundreds;
                    return result;
                } 

                // tens
                if(remainder % 10 > 0 && remainder/10 >=2){
                    result += tens[Math.floor(remainder/10)] + endings.tens + '-';
                    remainder %= 10;
                } 

                if(remainder % 10 === 0) {
                    result += tens[remainder/10] + endings.tens;
                }

                //teens
                if(remainder < 20 && remainder > 10) {
                    result += ones[remainder%10] + endings.teens;
                }

                //ones
                if(remainder <= 10) {
                    result += ones[remainder];
                }

                return result;
            }
        }
    }

    module.exports = say;
})();