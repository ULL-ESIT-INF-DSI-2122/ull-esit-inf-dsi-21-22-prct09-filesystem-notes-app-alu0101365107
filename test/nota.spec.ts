import 'mocha';
import {expect} from 'chai';
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
    const resultString: string = "\u001b[31mTitulo1\u001b[39m";
    expect(notaRoja.getColorTitulo()).to.be.eql(resultString);
  });
  it("El método getColorTitulo devuelve el título correctamente formateado y con color azul", () => {
    const resultString: string = "\u001b[34mTitulo1\u001b[39m";
    expect(notaAzul.getColorTitulo()).to.be.eql(resultString);
  });
  it("El método getColorTitulo devuelve el título correctamente formateado y con color amarillo", () => {
    const resultString: string = "\u001b[33mTitulo1\u001b[39m";
    expect(notaAmarilla.getColorTitulo()).to.be.eql(resultString);
  });
  it("El método getColorTitulo devuelve el título correctamente formateado y con color verde", () => {
    const resultString: string = "\u001b[32mTitulo1\u001b[39m";
    expect(notaVerde.getColorTitulo()).to.be.eql(resultString);
  });
  it("El método getColorTitulo devuelve el título pero sin color", () => {
    const resultString: string = "Titulo1El color establecido no es posible mostrarlo";
    expect(nota.getColorTitulo()).to.be.eql(resultString);
  });
  it("El método getRead devuelve la información de la nota de color rojo", () => {
    const resultString: string = "\u001b[31mTitulo: Titulo1\u001b[39m\n\u001b[31mBody: Hola, esto es el cuerpo de la nota 1\u001b[39m\n\u001b[31mColor: rojo\u001b[39m";
    expect(notaRoja.getRead()).to.be.eql(resultString);
  });
  it("El método getRead devuelve la información de la nota de color azul", () => {
    const resultString: string = "\u001b[34mTitulo: Titulo1\u001b[39m\n\u001b[34mBody: Hola, esto es el cuerpo de la nota 1\u001b[39m\n\u001b[34mColor: azul\u001b[39m";
    expect(notaAzul.getRead()).to.be.eql(resultString);
  });
  it("El método getRead devuelve la información de la nota de color azul", () => {
    const resultString: string = "\u001b[33mTitulo: Titulo1\u001b[39m\n\u001b[33mBody: Hola, esto es el cuerpo de la nota 1\u001b[39m\n\u001b[33mColor: amarillo\u001b[39m";
    expect(notaAmarilla.getRead()).to.be.eql(resultString);
  });
  it("El método getRead devuelve la información de la nota de color verde", () => {
    const resultString: string = "\u001b[32mTitulo: Titulo1\u001b[39m\n\u001b[32mBody: Hola, esto es el cuerpo de la nota 1\u001b[39m\n\u001b[32mColor: verde\u001b[39m";
    expect(notaVerde.getRead()).to.be.eql(resultString);
  });
  it("El método getRead devuelve la información de la nota sin color", () => {
    const resultString: string = "Titulo: Titulo1\nBody: Hola, esto es el cuerpo de la nota 1\nColor: ro\nEl color establecido no es posible mostrarlo";
    expect(nota.getRead()).to.be.eql(resultString);
  });
});
