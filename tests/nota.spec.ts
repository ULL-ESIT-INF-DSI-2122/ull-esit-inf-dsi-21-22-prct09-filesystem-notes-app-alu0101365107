import 'mocha';
import {expect} from 'chai';
import * as chalk from 'chalk';
import {Nota} from '../src/nota';

describe("Clase Notas", () => {
  const notaRoja = new Nota("Titulo1", "Hola, esto es el cuerpo de la nota 1", "rojo");
  const notaAzul = new Nota("Titulo1", "Hola, esto es el cuerpo de la nota 1", "azul");
  const notaAmarilla = new Nota("Titulo1", "Hola, esto es el cuerpo de la nota 1", "amarillo");
  const notaVerde = new Nota("Titulo1", "Hola, esto es el cuerpo de la nota 1", "verde");
  const nota = new Nota("Titulo1", "Hola, esto es el cuerpo de la nota 1", "ro");
  it("La clase Nota no está vacía", () => {
    expect(Nota != undefined).to.be.true;
  });
  it("La nota tiene un atributo título", () => {
    expect("titulo" in notaRoja).to.be.true;
  });
  it("La nota tiene un atributo body", () => {
    expect("body" in notaRoja).to.be.true;
  });
  it("La nota tiene un atributo color", () => {
    expect("color" in notaRoja).to.be.true;
  });
  it("El método getColorTitulo devuelve el título correctamente formateado y con color rojo", () => {
    const resultString: string = chalk.red("Titulo1");
    expect(notaRoja.getColorTitulo()).to.be.eql(resultString);
  });
  it("El método getColorTitulo devuelve el título correctamente formateado y con color azul", () => {
    const resultString: string = chalk.blue("Titulo1");
    expect(notaAzul.getColorTitulo()).to.be.eql(resultString);
  });
  it("El método getColorTitulo devuelve el título correctamente formateado y con color amarillo", () => {
    const resultString: string = chalk.yellow("Titulo1");
    expect(notaAmarilla.getColorTitulo()).to.be.eql(resultString);
  });
  it("El método getColorTitulo devuelve el título correctamente formateado y con color verde", () => {
    const resultString: string = chalk.green("Titulo1");
    expect(notaVerde.getColorTitulo()).to.be.eql(resultString);
  });
  it("El método getColorTitulo devuelve el título pero sin color", () => {
    const resultString: string = "Titulo1El color establecido no es posible mostrarlo";
    expect(nota.getColorTitulo()).to.be.eql(resultString);
  });
  it("El método getRead devuelve la información de la nota de color rojo", () => {
    const resultString: string = chalk.red("Titulo: Titulo1\nBody: Hola, esto es el cuerpo de la nota 1\nColor: rojo");
    expect(notaRoja.getRead()).to.be.eql(resultString);
  });
  it("El método getRead devuelve la información de la nota de color azul", () => {
    const resultString: string = chalk.blue("Titulo: Titulo1\nBody: Hola, esto es el cuerpo de la nota 1\nColor: azul");
    expect(notaAzul.getRead()).to.be.eql(resultString);
  });
  it("El método getRead devuelve la información de la nota de color azul", () => {
    const resultString: string = chalk.yellow("Titulo: Titulo1\nBody: Hola, esto es el cuerpo de la nota 1\nColor: amarillo");
    expect(notaAmarilla.getRead()).to.be.eql(resultString);
  });
  it("El método getRead devuelve la información de la nota de color verde", () => {
    const resultString: string = chalk.green("Titulo: Titulo1\n\Body: Hola, esto es el cuerpo de la nota 1\n\Color: verde");
    expect(notaVerde.getRead()).to.be.eql(resultString);
  });
  it("El método getRead devuelve la información de la nota sin color", () => {
    const resultString: string = "Titulo: Titulo1\nBody: Hola, esto es el cuerpo de la nota 1\nColor: ro\nEl color establecido no es posible mostrarlo";
    expect(nota.getRead()).to.be.eql(resultString);
  });
});
