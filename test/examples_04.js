var expect = require("chai").expect;
var examples = require("../app/examples_04");

describe("Examples from 04 chapter", function () {
    describe("Sum", function () {
        it("sums the array", function () {
            expect(examples.sum([])).to.equal(0);
            expect(examples.sum([0, 0])).to.equal(0);
            expect(examples.sum([1, 2, 3])).to.equal(6);
            expect(examples.sum([-1, -2, 3])).to.equal(0);
        });
    });
    describe("Range", function () {
        it("creates arr wih contents of integers within given range", function () {
            expect(examples.range(1, 1)).to.deep.equal([]);
            expect(examples.range(1, 3)).to.deep.equal([1, 2, 3]);
            expect(examples.range(1, 5, 2)).to.deep.equal([1, 3, 5]);
            expect(examples.range(1, 5, -1)).to.deep.equal([]);
            expect(function () {
                examples.range(1, 2, 0);
            }).to.throw("zero-value step is prohibited");
        });
    });
    describe("Sum - Range", function () {
        it("sums a range", function () {
            expect(examples.sum(examples.range(1, 10))).to.equal(55);
        });
    });
    describe("Reverse - in place", function () {
        it("reverses same array - in place", function () {
            var arr = [1, 2, 3];
            examples.reverseArrayInPlace(arr);
            expect(arr).to.deep.equal([3, 2, 1]);
            arr = [];
            examples.reverseArrayInPlace(arr);
            expect(arr).to.deep.equal([]);
        });
    });
    describe("Reverse - pure function", function () {
        it("reverse array - return new array", function () {
            expect(examples.reverseArray([1, 2, 3])).to.deep.equal([3, 2, 1]);
            expect(examples.reverseArray([])).to.deep.equal([]);
        });
    });
    describe("Array to list", function () {
        it("converts array into list structure", function () {
            expect(examples.arrayToList([1, 2, 3])).to.deep.equal({
                value: 1,
                rest: {
                    value: 2,
                    rest: {
                        value: 3,
                        rest: null
                    }
                }
            });
        });
    });
    describe("List to array", function () {
        it("converts list to array", function () {
            expect(examples.listToArray({
                value: 3,
                rest: {
                    value: 2,
                    rest: {
                        value: 1,
                        rest: null
                    }
                }
            })).to.deep.equal([3, 2, 1]);
        });
    });
    describe("Prepend to list", function () {
        it("inserts value into list at first position (before all other elements)", function () {
            expect(examples.prepend(1, examples.arrayToList([2, 3]))).to.deep.equal(examples.arrayToList([1, 2, 3]))
        });
    });
    describe("N-th value", function () {
        it("Returns n-th value in given list", function () {
            expect(examples.nth(examples.arrayToList([1, 2, 3]), 0)).to.equal(1);
            expect(examples.nth(examples.arrayToList([1, 2, 3]), 1)).to.equal(2);
            expect(examples.nth(examples.arrayToList([1, 2, 3]), 2)).to.equal(3);
            expect(examples.nth(examples.arrayToList([1, 2, 3]), -1)).to.equal(undefined);
        });
    });
    describe("Deep equals", function () {
        it("Compares two arguments, if they are equal by value. If they are objects, they are compared field, by field", function () {
            expect(examples.deepEquals({}, {})).to.equal(true);
            expect(examples.deepEquals(1, 2)).to.equal(false);
            expect(examples.deepEquals(null, undefined)).to.equal(false);
            expect(examples.deepEquals({test: "test"}, {test: "test"})).to.equal(true);
            expect(examples.deepEquals({test: "test"}, {test: null})).to.equal(false);
            expect(examples.deepEquals({test: {test2: [1, 2, 3]}}, {test: {test2: [1, 2, 3]}})).to.equal(true);
            expect(examples.deepEquals({test: {test2: [3, 2, 1]}}, {test: {test2: [1, 2, 3]}})).to.equal(false);
            expect(examples.deepEquals({test: {test2: null}}, {test: {test2: "test2"}})).to.equal(false);
        });
    });
});