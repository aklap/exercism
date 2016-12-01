(function() {
    "use strict";

    var pigLatin = {
        translate: function(wordString) {
            var words = wordString.split(' '),
                translated ='';

            for(var i=0; i<words.length; i++) {
                translated += pigify(words[i]) + ' ';
            }

            return translated.trim();

            function pigify(word) {
                var result = '',
                    start = word.search(/[aeio]/),
                    consonants = word.slice(0, start),
                    // all regex patterns
                    hasVowel = /\b([aeiouy])/.test(word),
                    initialIsVowel = /[aeiouy]/g.test(word[0]),
                    beginsThr = /^thr/.test(word.slice(0,3)),
                    beginsRu = /^ru/.test(word.slice(0,2)),
                    beginsSch = /^sch/g.test(word);

                if(hasVowel) {
                    result += word;
                } else if(!initialIsVowel && !beginsThr && !beginsRu) {
                    result = word.slice(start) + consonants;
                } else if(beginsThr || beginsSch) {
                    start = word.slice(3);
                    consonants = word.slice(0,3);

                    result = start + consonants;
                } else {
                    result = word.slice(1) + word[0]; 
                }

                return result + 'ay';
            }
        }
    };

    module.exports = pigLatin;
})();