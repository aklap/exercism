var CustomSet = require('./custom-set');

describe('CustomSet', function() {

  it('can test for no members', function() {
    var actual = new CustomSet().empty();
    expect(actual).toBe(true);

    var actual2 = new CustomSet([1]).empty();
    expect(actual2).toBe(false);
  });

  it('can test for a member', function() {
    var actual = new CustomSet().contains(1);
    expect(actual).toBe(false);

    var actual2 = new CustomSet([1, 2, 3]).contains(1);
    expect(actual2).toBe(true);

    var actual3 = new CustomSet([1, 2, 3]).contains(4);
    expect(actual3).toBe(false);
  });

  it('can test for subsets', function() {
    // both empty
    var actual = new CustomSet().subset(new CustomSet());
    expect(actual).toBe(true);

    // parent not empty, sub empty => t
    var actual2 = new CustomSet([1]).subset(new CustomSet());
    expect(actual2).toBe(true);
    // parent empty, sub not empty => f
    var actual3 = new CustomSet().subset(new CustomSet([1]));
    expect(actual3).toBe(false);
    // all sub els found in parent => t
    var actual4 = new CustomSet([1, 2, 3]).subset(new CustomSet([1, 2, 3]));
    expect(actual4).toBe(true);
    // all sub els found in paretn => t
    var actual5 = new CustomSet([4, 1, 2, 3]).subset(new CustomSet([1, 2, 3]));
    expect(actual5).toBe(true);
    // NOT found el, 2, in parent => f
    var actual6 = new CustomSet([4, 1, 3]).subset(new CustomSet([1, 2, 3]));
    expect(actual6).toBe(false);
  });

  it('can test disjoint', function() {
    // is there a disjoint?

    // no elements to compare in both sets => t
    var actual = new CustomSet().disjoint(new CustomSet());
    expect(actual).toBe(true);
    // no elements in parent, elements in sub => t
    var actual2 = new CustomSet().disjoint(new CustomSet([1]));
    expect(actual2).toBe(true);
    // elements in parent, no elements in sub => t
    var actual3 = new CustomSet([1]).disjoint(new CustomSet());
    expect(actual3).toBe(true);
    // 1 el in common => f
    var actual4 = new CustomSet([1, 2]).disjoint(new CustomSet([2, 3]));
    expect(actual4).toBe(false);
    // no elements in common => t
    var actual5 = new CustomSet([1, 2]).disjoint(new CustomSet([3, 4]));
    expect(actual5).toBe(true);
  });

  it('can test for equality', function () {
    // check that each set & elements are identical

    // both empty => t
    var actual = new CustomSet().eql(new CustomSet());
    expect(actual).toBe(true);

    // empty parent, !empty sub => f
    var actual2 = new CustomSet().eql(new CustomSet([1, 2, 3]));
    expect(actual2).toBe(false);

    // !empty parent, empty sub => f
    var actual3 = new CustomSet([1, 2, 3]).eql(new CustomSet());
    expect(actual3).toBe(false);


    var actual4 = new CustomSet([1, 2]).eql(new CustomSet([2, 1]));
    expect(actual4).toBe(true);

    var actual5 = new CustomSet([1, 2, 3]).eql(new CustomSet([1, 2, 4]));
    expect(actual5).toBe(false);
  });

  it('can add a member', function() {
    var actual = new CustomSet().add(3);
    var expected = new CustomSet([3]);

    expect(actual.eql(expected)).toBe(true);

    var actual2 = new CustomSet([1, 2, 4]).add(3);
    var expected2 = new CustomSet([1, 2, 3, 4]);
    expect(actual2.eql(expected2)).toBe(true);

    var actual3 = new CustomSet([1, 2, 3]).add(3);
    var expected3 = new CustomSet([1, 2, 3]);
    expect(actual3.eql(expected3)).toBe(true);
  });

  it('can check for intersection', function() {
    // empty && empty => empty
    var actual = new CustomSet().intersection(new CustomSet());
    var expected = new CustomSet();
    expect(actual.eql(expected)).toBe(true);

    //empty && !empty => empty
    var actual2 = new CustomSet().intersection(new CustomSet([3, 2, 5]));
    var expected2 = new CustomSet();
    expect(actual2.eql(expected2)).toBe(true);

    // !empty && empty => empty
    var actual3 = new CustomSet([1, 2, 3, 4]).intersection(new CustomSet());
    var expected3 = new CustomSet();
    expect(actual3.eql(expected3)).toBe(true);

    // !empty && !empty
    var actual4 = new CustomSet([1, 2, 3]).intersection(new CustomSet([4, 5, 6]));
    var expected4 = new CustomSet();
    expect(actual4.eql(expected4)).toBe(true);

    var actual5 = new CustomSet([1, 2, 3, 4]).intersection(new CustomSet([3, 2, 5]));
    var expected5 = new CustomSet([2, 3]);
    expect(actual5.eql(expected5)).toBe(true);
  });

  it('can check for difference', function(){
    // empty && empty => empty
    var actual = new CustomSet().difference(new CustomSet());
    var expected = new CustomSet();
    expect(actual.eql(expected)).toBe(true);

    // empty && !empty => empty
    var actual2 = new CustomSet().difference(new CustomSet([3, 2, 5]));
    var expected2 = new CustomSet();
    expect(actual2.eql(expected2)).toBe(true);

    //!empty && empty => this
    var actual3 = new CustomSet([1, 2, 3, 4]).difference(new CustomSet());
    var expected3 = new CustomSet([1, 2, 3, 4]);
    expect(actual3.eql(expected3)).toBe(true);

    // !empty && !empty => return diff
    var actual4 = new CustomSet([3, 2, 1]).difference(new CustomSet([2, 4]));
    var expected4 = new CustomSet([1, 3]);
    expect(actual4.eql(expected4)).toBe(true);
  });

  it('can test for union', function() {
    // empty & empty => empty
    var actual = new CustomSet().union(new CustomSet());
    var expected = new CustomSet();
    expect(actual.eql(expected)).toBe(true);

    // empty && !empty => new set with unique els
    var actual2 = new CustomSet().union(new CustomSet([2]));
    var expected2 = new CustomSet([2]);
    expect(actual2.eql(expected2)).toBe(true);

    var actual3 = new CustomSet([1, 3]).union(new CustomSet());
    var expected3 = new CustomSet([1, 3]);
    expect(actual3.eql(expected3)).toBe(true);

    var actual4 = new CustomSet([1, 3]).union(new CustomSet([2, 3]));
    var expected4 = new CustomSet([3, 2, 1]);
    expect(actual4.eql(expected4)).toBe(true);
  });

  it('can delete elements', function(){
    var expected = new CustomSet([1, 3]);
    var actual = new CustomSet([3, 2, 1]).delete(2);
    expect(actual.eql(expected)).toBe(true);

    var expected2 = new CustomSet([1, 2, 3]);
    var actual2 = new CustomSet([3, 2, 1]).delete(4);
    expect(actual2.eql(expected2)).toBe(true);
  });

  it('can be emptied', function() {
    var actual = new CustomSet([1, 2]).clear();
    var expected = new CustomSet();
    expect(actual.eql(expected)).toBe(true);
    var actual2 = new CustomSet().clear();
    var expected2 = new CustomSet();
    expect(actual2.eql(expected2)).toBe(true);
  });

  it('knows its size', function() {
    var actual = new CustomSet().size();
    expect(actual).toBe(0);
    var actual2 = new CustomSet([1, 2, 3]).size();
    expect(actual2).toBe(3);
    var actual3 = new CustomSet([1, 2, 3, 2]).size();
    expect(actual3).toBe(3);
  });

  it('can give back a list', function() {
    var actual = new CustomSet().toList();
    var expected = [];
    expect(actual.sort()).toEqual(expected);

    var actual2 = new CustomSet([3, 1, 2]).toList();
    var expected2 = [1, 2, 3];
    expect(actual2.sort()).toEqual(expected2);
    
    var actual3 = new CustomSet([3, 1, 2, 1]).toList();
    var expected3 = [1, 2, 3];
    expect(actual3.sort()).toEqual(expected3);
  });

});
