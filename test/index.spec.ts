import 'mocha';
import {expect} from 'chai';
import {add} from '../src/index';

describe("Funcion Add", () => {
  const number1: number = 1;
  const number2: number = 2;
  let number3: number = 0;
  beforeEach(() => {
    number3 = number1 + number2;
  });
  it("La funcion add devuelve un número", () => {
    expect(add(number1, number2)).to.a("number");
  });
  it("1 + 2 = 3", () => {
    expect(add(number1, number2)).to.be.eql(number3);
  });
});
