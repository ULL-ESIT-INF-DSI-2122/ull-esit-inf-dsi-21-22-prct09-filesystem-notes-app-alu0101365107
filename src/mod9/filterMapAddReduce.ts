import {TemplateMethod} from "./templateMethod";
export class InitTemplateMethod extends TemplateMethod {
  constructor(protected array: number[]) {
    super(array);
  }
  map(func: (numero: number) => number): number[] {
    const resultado: number[] = [];
    this.array.forEach((element) => {
      resultado.push(func(element));
    });
    return resultado;
  }
}

const test: InitTemplateMethod = new InitTemplateMethod([1, 2, 3, 4]);
console.log(test.map((x: number) => 2));