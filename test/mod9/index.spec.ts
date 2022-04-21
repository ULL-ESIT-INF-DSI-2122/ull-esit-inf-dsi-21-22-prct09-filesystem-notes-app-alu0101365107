import 'mocha';
import {expect} from 'chai';
import {InitTemplateMethod} from '../../src/mod9/filterMapAddReduce';

describe("Clase InitTemplateMethod", () => {
  const array: InitTemplateMethod = new InitTemplateMethod([1, 2, 3, 4, 5]);
  it("Existe la clase initTemplateMethod", () => {
    expect(InitTemplateMethod != undefined).to.be.true;
  });
  it("El método filter funiona correctamente", () => {
    expect(array.filter((x: number) => x > 3)).to.be.eql([4, 5]);
  });
  it("El método filter funiona correctamente", () => {
    expect(array.filter((x: number) => x < 3)).to.be.eql([1, 2]);
  });
});