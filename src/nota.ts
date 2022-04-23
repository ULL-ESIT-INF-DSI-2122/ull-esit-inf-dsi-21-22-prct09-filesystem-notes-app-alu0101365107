import chalk = require("chalk");

export class Nota {
  constructor(protected titulo: string, protected body: string, protected color: string) {
  }
  getColorTitulo(): string {
    let string: string = `${this.titulo}`;
    if (this.color == "rojo") {
      string = chalk.red(string);
    } else if (this.color == "azul") {
      string = chalk.blue(string);
    } else if (this.color == "amarillo") {
      string = chalk.yellow(string);
    } else if (this.color == "verde") {
      string = chalk.green(string);
    } else {
      string = string + ("El color establecido no es posible mostrarlo");
    }
    return string;
  }
  getRead(): string {
    let string: string = `Titulo: ${this.titulo}\nBody: ${this.body}\nColor: ${this.color}`;
    if (this.color == "rojo") {
      string = chalk.red(string);
    } else if (this.color == "azul") {
      string = chalk.blue(string);
    } else if (this.color == "amarillo") {
      string = chalk.yellow(string);
    } else if (this.color == "verde") {
      string = chalk.green(string);
    } else {
      string = string + ("\nEl color establecido no es posible mostrarlo");
    }
    return string;
  }
}