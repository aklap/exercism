(function () {
  "use strict";

  function Series (n) {
    this.set = n;
  }

  Series.prototype.largestProduct = function (size) {

  if (this.set.match(/[\D]/g) || size < 0) {
    throw Error('Invalid input.');
  }

  if(size === 0) {
    return 1;
  }

  if(size > this.set.length) {
    throw Error('Slice size is too big.');
  }

  var max = 0;

  for(var i = 0; i<this.set.length; i++) {
    var chunk = this.set.substring(i, i+size),
      product = eval(chunk.split('').join('*'));

    if(product > max && chunk.length === size) {
        max = product;
    }
  }
  
  return max;
};

module.exports = Series;
})();