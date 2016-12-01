(function() {
    "use strict";

    function PhoneNumber(numString) {
        this.cleanedNumber = numString.replace(/\s|\D/g, '');
    }

    PhoneNumber.prototype.number = function() {
        if(this.cleanedNumber.length === 10) {
            return this.cleanedNumber;
        }

        if(this.cleanedNumber.length === 11) { 
            return this.cleanedNumber[0] === '1' ? this.cleanedNumber.slice(1) : '0000000000';
        }

        if(this.cleanedNumber.length < 10) {
            return '0000000000';
        }
    };

    PhoneNumber.prototype.areaCode = function() {
        return this.number().slice(0,3);
    };

    PhoneNumber.prototype.toString = function() {
        return '(' + this.areaCode() + ') ' + this.number().slice(3,6) + '-' + this.number().slice(6);
    };

    module.exports = PhoneNumber;
})();
