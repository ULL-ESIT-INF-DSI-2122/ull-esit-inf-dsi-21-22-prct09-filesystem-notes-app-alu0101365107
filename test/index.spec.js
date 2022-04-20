"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
const chai_1 = require("chai");
const index_1 = require("../src/index");
describe("Funcion Add", () => {
    const number1 = 1;
    const number2 = 2;
    let number3 = 0;
    beforeEach(() => {
        number3 = number1 + number2;
    });
    it("La funcion add devuelve un número", () => {
        (0, chai_1.expect)((0, index_1.add)(number1, number2)).to.a("number");
    });
    it("1 + 2 = 3", () => {
        (0, chai_1.expect)((0, index_1.add)(number1, number2)).to.be.eql(number3);
    });
});
