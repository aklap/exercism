(function() {
    "use strict";

    function Words () {};

    Words.prototype.count = function (string) {
            var dict = {};
            var words = string.toLowerCase().trim().replace(/\t|\s+/g, ' ').split(/\n|\s/);

            for (var i = 0; i < words.length; i++) {
                if (dict.hasOwnProperty(words[i])) {
                    dict[words[i]] += 1;
                } else {
                    dict[words[i]] = 1;
                }
            }
            return dict;
        };

    module.exports = Words;
})();