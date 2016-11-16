(function () {
  "use strict";

  function Matrix (string) {
    this.string = string.split('\n');
    this.rows = this.getRows();
    this.columns = this.transposeRows();
  }

  Matrix.prototype.getRows = function () {
    return this.string.map(function (chunk) {
      return chunk.split(' ').map(function (str) {
        return parseInt(str);
      });
    });
  }
   
  Matrix.prototype.transposeRows = function () {
    var rows = this.rows;

     return rows[0].map(function (_, i) {
      return rows.map(function (el, j) {
        return rows[j][i]; 
      })
     });
  }

  module.exports = Matrix;
})();