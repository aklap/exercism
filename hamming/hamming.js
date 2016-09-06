(function () {

    function Hamming () {};

    Hamming.prototype.compute = function (strand1, strand2) {
        if (strand1 === strand2) {
            return 0;
        } 
        
        if (strand1.length != strand2.length) {
            throw new Error('DNA strands must be of equal length.');
        }

        var counter = 0;

        for (var i = 0; i < strand1.length; i++) {
            if (strand1[i] !== strand2[i]) {
                counter++;
            }
        }

        return counter;       
    }

    module.exports = Hamming;
})();