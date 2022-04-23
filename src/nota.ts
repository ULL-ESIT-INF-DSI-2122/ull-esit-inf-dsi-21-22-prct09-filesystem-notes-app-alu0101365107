import chalk = require("chalk");

export class Nota {
  constructor(protected titulo: string, protected body: string, protected color: string) {
  }
  getTitulo(): string {
    return this.titulo;
  }
  getBody(): string {
    return this.body;
  }
  getColor(): string {
    return this.color;
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
    }
    return string;
  }
  getRead(): string {
    let string: string = `Titulo: ${this.titulo}\n Body: ${this.body}\n Color: ${this.color}`;
    if (this.color == "rojo") {
      string = chalk.red(string);
    } else if (this.color == "azul") {
      string = chalk.blue(string);
    } else if (this.color == "amarillo") {
      string = chalk.yellow(string);
    } else if (this.color == "verde") {
      string = chalk.green(string);
    }
    return string;
  }
}