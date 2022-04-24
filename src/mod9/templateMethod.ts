/**
 * Clase abstracta de TemplateMethod
 */
export abstract class TemplateMethod {
  /**
   * Clase abstracta de TemplateMethod
   * @param array Array con los valores
   */
  constructor(protected array: number []) {
  };

  // public run() {
  //   this.filter(valorFilter);
  // }

  /**
   * Método para filtrar los valores de un array según una predicado lógico
   * @param func Función la cual se encarga de evaluar si el predicado lógico es verdadero
   * @returns Array con los valores los cuales pasan el predicado lógico
   */
  filter(func: (numero: number) => boolean): number[] {
    const resultado: number[] = [];
    this.array.forEach((element) => {
      if (func(element)) {
        resultado.push(element);
      }
    });
    return resultado;
  }
  // protected map(func: (numero: number) => number) {
  // };
}
