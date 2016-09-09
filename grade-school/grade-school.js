(function () {
    'use strict';

    function School () {
        var roster = {};

        this.roster = function () {
            return roster;
        }
        
        this.add = function (name, grade) {
            if (roster[grade]) {
                roster[grade].push(name)
                roster[grade].sort();
            } else {
                roster[grade] = [name];
            }
        }

        this.grade = function (n) {
            return roster[n] || [];
        }
    }

    module.exports = School;
})();