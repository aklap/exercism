(function() {
    "use strict";

    var Acronyms = {
        parse: function(string) {
            var acronym = "";
            var words = string.replace(/[\W]+/g, ' ').split(' ');

                for(var letter = 0; letter < word.length; letter++) {
                    // look for first letter or capitalized letter
                    if (letter === 0 || word[letter].match(/[A-Z]/)) {
                        // exclude the last letter if it is capitalized
                        if(word[letter-1] && word[letter-1].match(/[A-Z]/)){
                            return;
                        }
                        
                        acronym += word[letter];
                    }
                }
            });

            return acronym.toUpperCase();
        }
    };

    module.exports = Acronyms;
})();