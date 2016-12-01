(function() {
    "use strict";

    function Queens(coords) {
        var START = { 
                white: [0,3],
                black: [7,3] 
            },

            MARKS = { 
                white: 'W', 
                black: 'B'
            },
            
            positions = coords || START;

        function isSamePosition() {
           return positions.white.join(' ') === positions.black.join(' ');
        }

        // an array of arrays
        this.board = [];
        
        // positions can't be same
        if(isSamePosition()) {
            throw Error.message = 'Queens cannot share the same space';
        } else {
            // fill the board
            for(var i=0; i<8; i++) {
                this.board.push(new Array(8).fill('-'));
            }

            for(var color in positions) {
                // set each queen's position
                this[color] = positions[color];

                //insert into board
                this.board[this[color][0]][this[color][1]] = MARKS[color];
            }
        }

        // toEqual matcher fails this, passes with ===, and all other tests
        this.toString = function () {
            return this.board.map(function(row) {
                return row.join(' ');
            }).join('\n') + '\n';
        };

        this.canAttack = function() {
            //helper functions
            function rowIsPath(game) {
                return game.white[0] === game.black[0];
            }

            function colIsPath(game) {
                return game.white[1] === game.black[1];
            }

            function areSameDiff(game) {
                return Math.abs(game.white[0]-game.black[0]) === Math.abs(game.white[1]-game.black[1]);
            }

            // if the row/col/diag has attack path
            if(rowIsPath(this) || colIsPath(this) || areSameDiff(this)) {
                return true;
            }

            return false;
        };
    }

    module.exports = Queens;
})();
