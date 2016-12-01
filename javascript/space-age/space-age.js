(function() {
    "use strict";

    var EARTH_YEAR = 31557600,

        PLANETS = {
            'Earth' : 1,
            'Mercury': 0.2408467,
            'Venus': 0.61519726,
            'Mars': 1.8808158,
            'Jupiter': 11.862615,
            'Saturn': 29.447498,
            'Uranus': 84.016846,
            'Neptune': 164.79132
        };

    function calcYears(seconds, planet) {
        planet = PLANETS[planet] || 1;

        return Math.round(seconds/(planet*EARTH_YEAR)*100)/100;
    }

    function SpaceAge(seconds) {
        this.seconds = seconds;
    }

    SpaceAge.prototype.calcYears = function(planet) {
        return calcYears(this.seconds, planet);
    }

    for(var planet in PLANETS) {
        (function(planet) {
            SpaceAge.prototype['on' + planet] = function() {
                return this.calcYears(planet);
            }
        })(planet);
    }

    module.exports = SpaceAge;
})();