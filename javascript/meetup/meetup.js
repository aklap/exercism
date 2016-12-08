(function() {
    "use strict";

    function meetupDay(yr, mth, day, nth) {
        var WEEKDAYS = {
            0: 'Sunday',
            1: 'Monday',
            2: 'Tuesday',
            3: 'Wednesday',
            4: 'Thursday',
            5: 'Friday',
            6: 'Saturday',
        },

        picks = [];

        if(isValid(nth)) {
            return getMeetup();
        } else {
            throw MeetupDayException();
        }

        //TODO: fix?
        //error
        function MeetupDayException() {}

        MeetupDayException.prototype = new Error();

        // helper funcs
        function isValid(nth) {
            var valid = ['teenth', '1st', '2nd', '3rd', '4th', 'last'];

            return valid.includes(nth);
        }
        //TODO change to obj?
        function positions() {
                if(nth === 'teenth') {
                    return getTeenth();
                } else if (nth === '1st') { 
                    return picks[0];
                } else if(nth === '2nd') {
                    return picks[1];
                } else if(nth === '3rd') {
                    return picks[2];
                } else if(nth === '4th') {
                    return picks[3];
                } else if(nth === '5th') {
                    return picks[4];
                } else if(nth === 'last') {
                    return picks[picks.length-1];
                }
            
            function getTeenth() {
                var teens = picks.filter(isTeen);
                return teens[0];

                //helper
                function isTeen(d) {
                    var day = d.getDate();
                    return day > 10 && day < 20;
                }
            };
        };

        function getDaysInMonth(yr, mth) {
            return new Date(yr, mth+1, 0).getDate(); 
        }

        function getMeetup() {
            var mthLimit = getDaysInMonth(yr, mth);

            for(var d = 1; d <= mthLimit; d++) {
                var date = new Date(yr, mth, d);
                var numOfDay = date.getDay();

                if(WEEKDAYS[numOfDay] === day) {
                    picks.push(date);
                }
            }
            //TODO: abstract out?
            return positions();
        }

    }

    module.exports = meetupDay;
})();