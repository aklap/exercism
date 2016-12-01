(function() {
  'use strict';

  function BinarySearch (set) {
    this.array = isValidArray(set);

    function isValidArray(set) {
      // do a non-destructive sort on set
      var sorted = set.slice().sort(function(a,b) {
        return a-b;
      });
      var i = set.length;
      var value = true;

      // go over each element of both sets & compare
      while(i--) {
        if(set[i] !== sorted[i]) {
          return undefined;
        };
      }
      // otherwise return the array
      return set;
    }
  }

  BinarySearch.prototype.indexOf = function (n, remainder, midIndex) {
    // get the middle element
    var remainder = remainder || this.array.slice();
    // if array.length > 1;
    if(remainder.length > 1) {
      //get position of middle n
      var middle = Math.floor(remainder.length/2);
      //keep track of the index of the mid el in this.array
      if(n > remainder[middle]) {
        remainder = remainder.slice(middle);
        return this.indexOf(n, remainder);
      } else if(n < remainder[middle]) {
        remainder = remainder.slice(0, middle);
        return this.indexOf(n, remainder);
      // if we get lucky and the middle el is the target
      } else if (n == remainder[middle]) {
        return this.array.indexOf(n);
      }
    }

    return remainder[0] === n ? this.array.indexOf(n) : -1;
  }

  module.exports = BinarySearch;
})();