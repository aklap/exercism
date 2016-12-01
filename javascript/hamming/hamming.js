(function() {

    function Hamming() {}

    Hamming.prototype.compute = function(strand1, strand2) {
        function getCount(a, b){
            var counter = 0;
            for(var i = 0; i < a.length; i++) {
                if (a[i] !== b[i]) {
                    counter++;
                }
            }

            return counter;       
        }

        if(strand1 === strand2) {
            return 0;
        } 
        
        if(strand1.length != strand2.length) {
            throw new Error('DNA strands must be of equal length.');
        }

        return getCount(strand1, strand2);
    };

    module.exports = Hamming;
})();