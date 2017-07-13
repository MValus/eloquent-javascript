var expect = require("chai").expect;
var examples = require("../app/examples_05");

describe("Examples from 05 chapter", function () {
    describe("Shared DNA", function () {
        it("computed shared DNA", function () {
            expect(examples.sharedDNA()).to.be.closeTo(0.00048, 0.00001);
        });
    });
    describe("flatten", function () {
        it("flattens an array of array into single array", function () {
            var arrays = [[1, 2, 3], [4, 5], [6]];
            expect(examples.flatten(arrays)).to.deep.equal([1,2,3,4,5,6]);

            arrays = [[1, [2, 3]], [[[4]]], 5, 6];
            expect(examples.flatten(arrays)).to.deep.equal([1,2,3,4,5,6]);
        });
    });
});