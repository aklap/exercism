(function() {
    "use strict";

    // helper functions:
    function isFound(set, el) {
        return set.contains(el);
    }

    function CustomSet(initialSet) {
        this.set = initialSet || [];
    }

    CustomSet.prototype.empty = function() {
        return this.set.length < 1;
    };

    CustomSet.prototype.contains = function(el) {
        return this.set.includes(el);
    };

    // a subset is a collection of elements that occur in the 'parent' set; returns true if all elements are found in the parent set, false if there is an element not found in it
    CustomSet.prototype.subset = function(target) {
        var parentSet = this,
            targetEls = target.set;
        
       // if input has non-empty set, check each el in parent set otherwise it's empty, return true 
       return !target.empty() ?  targetEls.every(isFound.bind(this, parentSet)) : true;
    };

    // test that there are NO elements in common
    CustomSet.prototype.disjoint = function(target) {
        var parentSet = this,
            targetEls = target.set,
            emptyIsEqual = (parentSet.empty() == target.empty());

        return emptyIsEqual ? !targetEls.some(isFound.bind(this, parentSet)) : true;
    };

    // test that there every element found in target set is found in parent set
    CustomSet.prototype.eql = function(target) {
        var targetEls = target.set,
            parentSet = this,
            areUnequallyEmpty = parentSet.empty() !== target.empty();

        return areUnequallyEmpty ? false : targetEls.every(isFound.bind(this, parentSet));
    };

    CustomSet.prototype.add = function(el) {
        this.set.push(el);

        return this;
    };

    // take two sets and return elements both have in common
    CustomSet.prototype.intersection = function(comparisonSet) {
        var inCommon = new CustomSet(),
            set = this.set,
            areEmpty = this.empty() && comparisonSet.empty();

        set.map(function(el){
            if(comparisonSet.contains(el)) {
                return inCommon.add(el);
            }
        });

        return !areEmpty ? inCommon : new CustomSet();
    };

    //compare two sets and return the els that don't appear in the arg set
    CustomSet.prototype.difference = function(target) {
        var targetEls = target,
            diff = new CustomSet(),
            set = this.set;

        set.map(function(el) {
            if(!targetEls.contains(el)) {
                diff.add(el);
            }
        });

        return diff;
    };

    CustomSet.prototype.union = function(setToUnionize) {
        var union = new CustomSet(),
            set = this.set,
            otherSet = setToUnionize.set,
            allEls = set.concat(otherSet).sort();

        allEls.map(function(el) {
            if(!union.contains(el)) {
                union.add(el);
            }
        });

        return union;
    };

    CustomSet.prototype.delete = function(toDelete) {
        this.set = this.set.filter(function(el) {
            return el !== toDelete;
        });

        return this;
    };

    CustomSet.prototype.clear = function() {
        this.set = [];

        return this;
    };

    CustomSet.prototype.size = function() {
        return this.toList().length;
    };

    CustomSet.prototype.toList = function() {
        return this.union(this).set;
    };

    module.exports = CustomSet;
})();

