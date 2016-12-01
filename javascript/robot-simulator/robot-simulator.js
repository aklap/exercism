(function() {
    "use strict";

    var DIRECTIONS = ['north', 'east',  'south', 'west'];

    function Robot() {
        this.bearing = null;
        this.coordinates = [0, 0];
    }

    Robot.prototype.orient = function(direction) {
        if(DIRECTIONS.includes(direction)) {
            this.bearing = direction; 
        } else {
            return new Error('Invalid Robot Bearing');
        }
    };

    Robot.prototype.turnRight = function() {
        var currentDirection = DIRECTIONS.indexOf(this.bearing),
            newDirection;

        if(currentDirection + 1 >= DIRECTIONS.length) {
            newDirection = DIRECTIONS.length % (currentDirection + 1);
        } else { 
            newDirection = currentDirection + 1;
        }

        this.bearing = DIRECTIONS[newDirection];
    };

    Robot.prototype.turnLeft = function () {
        var currentDirection = DIRECTIONS.indexOf(this.bearing) - 1,
            newDirection;
            
        if(currentDirection < 0) {
            newDirection = DIRECTIONS[DIRECTIONS.length + currentDirection];
        } else {
            newDirection = DIRECTIONS[currentDirection];
        }   

        this.bearing = newDirection;
    };

    Robot.prototype.turn = function(turnCommand) {
        var currentDirection = DIRECTIONS.indexOf(this.bearing),
            newDirection;

        this.bearing = DIRECTIONS[newDirection];
    };

    Robot.prototype.at = function (x, y) {
        this.coordinates = [x, y];
    };

    Robot.prototype.advance = function () {
        switch(this.bearing) {
            case 'north':
                return this.coordinates[1]++;
            case 'east':
                return this.coordinates[0]++;
            case 'south':
                return this.coordinates[1]--;
            case 'west':
                return this.coordinates[0]--;
        }
    };

    Robot.prototype.instructions = function(str) {
        var COMMANDS = {
                'R': 'turnRight',
                'A': 'advance',
                'L': 'turnLeft'
            },
            letters = str.split('');

        return letters.map(function(letter) {
            return COMMANDS[letter];
        });
    };

    Robot.prototype.place = function(position) {
        this.coordinates[0] = position.x;
        this.coordinates[1] = position.y;
        this.bearing = position.direction;
    };

    Robot.prototype.evaluate = function(commands) {
        commands = this.instructions(commands);

        for(var i=0; i<commands.length; i++) {
            this[commands[i]]();
        }
    };

    module.exports = Robot;
})();
