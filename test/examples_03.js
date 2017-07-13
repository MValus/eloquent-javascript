var expect = require("chai").expect;
var examples = require("../app/examples_03");

describe("Examples from 03 chapter", function () {
    describe("Minimum", function () {
        it("finds minimum from 2 numbers", function () {
            expect(examples.min(1, 2)).to.equal(1);
            expect(examples.min(2, 1)).to.equal(1);
            expect(examples.min(-1, -2)).to.equal(-2);
            expect(examples.min(0, 0)).to.equal(0);
        });
    });
    describe("Recursion", function () {
        it("finds if number is even", function () {
            expect(examples.isEven(0)).to.equal(true);
            expect(examples.isEven(1)).to.equal(false);
            expect(examples.isEven(2)).to.equal(true);
            expect(examples.isEven(50)).to.equal(true);
            expect(examples.isEven(75)).to.equal(false);
            expect(examples.isEven(-1)).to.equal(false);
        });
    });
    describe("Counting Beans", function () {
        it("count number of 'B' in string", function () {
            expect(examples.countBs("aBc")).to.equal(1);
            expect(examples.countBs("")).to.equal(0);
            expect(examples.countBs("a B B B c")).to.equal(3);
        })
    });
    describe("Counting chars", function () {
        it("count number of specific characters occurence in string", function () {
            expect(examples.countChars("ulanbaatar", "a")).to.equal(4);
            expect(examples.countChars("abc", "x")).to.equal(0);
            expect(examples.countChars("", " ")).to.equal(0);
            expect(examples.countChars("toto je veta", " ")).to.equal(2);
        })
    })
});