(function() {
    "use strict";

    var CircularBuffer = function(size) {
        var buffer = [];

        this.read = function() {
            if(buffer.length === 0) {
                throw new BufferEmptyException();
            } else {
                return buffer.shift();
            }
        };

        this.write = function(el) {
            if (buffer.length === size) {
                throw new BufferFullException();
            } else if(el !== undefined && el !== null) {
                buffer.push(el);
            }
        };

        this.forceWrite = function(el) {
           if(buffer.length === size) {
                this.read();
                this.write(el);
           } else {
                this.write(el);
           }
        };

        this.clear = function() {
            buffer = [];
        };
    };

    // Errors
    function BufferEmptyException() {
      return new Error('Buffer Empty Exception');
    }

    function BufferFullException() {
      return new Error('Buffer Full Exception');
    }

    module.exports = {
        circularBuffer: function(size) { return new CircularBuffer(size); }, 

        bufferEmptyException: function() { return new BufferEmptyException(); },

        bufferFullException: function() { return new BufferFullException(); }
    };
})();
