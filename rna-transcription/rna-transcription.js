(function () {
    "use strict";

    function DnaTranscriber () {};

    DnaTranscriber.prototype.toRna = function (sequence) {
        var key = {
            G: 'C',
            C: 'G',
            T: 'A',
            A: 'U'
        };

        var sequence = sequence.split('');
        
        return sequence.map(function (nucleotide) {
            return key[nucleotide];
        }).join('');
    }

    module.exports = DnaTranscriber;
})();