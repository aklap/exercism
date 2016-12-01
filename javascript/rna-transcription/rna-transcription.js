(function() {
    "use strict";

    function DnaTranscriber() {}

    DnaTranscriber.prototype.toRna = function(sequence) {
        var COMPLIMENTS = {
                G: 'C',
                C: 'G',
                T: 'A',
                A: 'U'
            },

            sequence = sequence.split('');
        
        return sequence.map(function(nucleotide) {
            return COMPLIMENTS[nucleotide];
        }).join('');
    };

    module.exports = DnaTranscriber;
})();
