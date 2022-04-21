import {TemplateMethod} from "./templateMethod";
export class InitTemplateMethod extends TemplateMethod {
  constructor(protected array: number[]) {
    super(array);
  }
  // protected map(func: (numero: number) => Function): number[] {
  //   const resultado: number[] = [];
  //   this.array.forEach((element) => {
  //     let tmpValor: number= Function(element);
  //     resultado.push(tmpValor);
  //   });
  // }
}