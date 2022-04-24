import chalk = require("chalk");

/** Clase para la creacion de una nota */
export class Nota {
/**
 * Clase para la creacion de una nota
 * @param titulo Titulo de la nota
 * @param body Contenido de la nota
 * @param color Color de la nota
 */
  constructor(protected titulo: string, protected body: string, protected color: string) {
  }
  /**
   * Metodo para la formateacion del titulo de una nota
   * @returns Resultado formateado
   */
  public getColorTitulo(): string {
    let string = `${this.titulo}`;
    if (this.color === "rojo") {
      string = chalk.red(string);
    } else if (this.color === "azul") {
      string = chalk.blue(string);
    } else if (this.color === "amarillo") {
      string = chalk.yellow(string);
    } else if (this.color === "verde") {
      string = chalk.green(string);
    } else {
      string = string + ("El color establecido no es posible mostrarlo");
    }
    return string;
  }
  /**
   * Metodo para la formateacion del contenido de una nota
   * @returns Resultado formateado
   */
  public getRead(): string {
    let string = `Titulo: ${this.titulo}\nBody: ${this.body}\nColor: ${this.color}`;
    if (this.color === "rojo") {
      string = chalk.red(string);
    } else if (this.color === "azul") {
      string = chalk.blue(string);
    } else if (this.color === "amarillo") {
      string = chalk.yellow(string);
    } else if (this.color === "verde") {
      string = chalk.green(string);
    } else {
      string = string + ("\nEl color establecido no es posible mostrarlo");
    }
    return string;
  }
}
