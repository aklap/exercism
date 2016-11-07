(function () {
    "use strict";

    var Node = function (data) {
        this.value = data;
        this.previous = null;
        this.next = null;
    }

    var LinkedList = function () {
        // how many elements in the list
        this.size = 0;
        // the first element in the list
        this.head = null;
        // the last element in the list
        this.tail = null;
    }

    LinkedList.prototype.push = function(value) {
        var node = new Node(value);

        // if the list is empty
        if (!this.head) {
            this.head = node;
            this.tail = node;
        // if the list already has at least 1 element
        } else {
            node.previous = this.tail;
            this.tail.next = node;
            this.tail = node;
        }

        this.size++;
    }    

    // remove the tail node from the list
    LinkedList.prototype.pop = function () {
        var toBeDeletedNode = this.tail;
        this.tail = toBeDeletedNode.previous;
        this.size--;
        return toBeDeletedNode.value;
    }

    // remove the first node in a list
    LinkedList.prototype.shift = function() {
        var toBeShifted = this.head;
        this.head = toBeShifted.next;
        this.size--;
        var shiftedValue = toBeShifted.value;
        toBeShifted = null;
        return shiftedValue;
    }

    // add a node to the beginning of a list
    LinkedList.prototype.unshift = function(value) {
        var toBeUnshifted = new Node(value);
        if(!this.head) {
            this.head = toBeUnshifted;
            this.tail = toBeUnshifted;
        } else {
            this.head.previous = toBeUnshifted;
            toBeUnshifted.next = this.head;
            this.head = toBeUnshifted;
        }

        this.size++;
    }

    LinkedList.prototype.count = function () {
        return this.size;
    }

    LinkedList.prototype.delete = function (value) {
        var currentNode = this.head;
        // base case element.next == value
        if(currentNode.value !== value) {
            currentNode = currentNode.next;
        } 

        // if node to delete is neither head nor tail
        if(currentNode != this.head && currentNode != this.tail) {
            currentNode.previous.next = currentNode.next;
            currentNode.next.previous = currentNode.previous;
        } 

        // if node to delete is head
        if (currentNode === this.head) {
            this.head = null;
        }

        // if node to delete is tail
        if (currentNode === this.tail) {
            this.tail = null;
        }

        this.size--;
    }

    module.exports = LinkedList;

})();