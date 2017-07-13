var expect = require("chai").expect;
var examples = require("../app/examples_02");

describe("Examples from 02 chapter", function () {
    describe("Looping a triangle", function () {
        it("draws 8 row triangle", function () {
            examples.triangles(8);
        });
    });
    describe("FizzBuzz", function () {
        it("prints numbers 1 to 15 with fizzbuzz", function () {
            examples.fizzBuzz(1, 15);
        })
    });
    describe("Chessboard", function () {
        it("draws a chessboard", function () {
            examples.drawChessboard(8);
        })
    });
});
