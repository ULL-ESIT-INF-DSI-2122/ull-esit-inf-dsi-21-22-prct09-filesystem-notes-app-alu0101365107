import 'mocha';
import {expect} from 'chai';
import {Usuario} from '../src/usuario';
import * as chalk from 'chalk';

describe("Clase Usuario", () => {
  let usuario: Usuario;
  let usuario2: Usuario;
  beforeEach(() => {
    usuario = new Usuario("test");
    usuario2 = new Usuario("test4");
  });
  it("Inicializacion de la database", () => {
    expect(new Usuario("initializeTest").initializeTest()).to.be.true;
  });
  it("La clase Usuario no está vacía", () => {
    expect(Usuario != undefined).to.be.true;
  });
  it("El usuario tiene un atributo nombre", () => {
    expect("nombre" in usuario).to.be.true;
  });
  it("El usuario tiene un método para añadir notas", () => {
    expect("add" in usuario).to.be.true;
  });
  it("El usuario tiene un método para eliminar notas", () => {
    expect("remove" in usuario).to.be.true;
  });
  it("El usuario tiene un método para listar todas las notas", () => {
    expect("list" in usuario).to.be.true;
  });
  it("El usuario tiene un método para leer una nota en concreto", () => {
    expect("read" in usuario).to.be.true;
  });
  it("El usuario tiene un método para modificar una nota", () => {
    expect("mod" in usuario).to.be.true;
  });
  it("Se crear una nota correctamente", () => {
    const finalString: string = chalk.green("Nota creada correctamente");
    expect(usuario.add("test", "test", "rojo")).to.be.eql(finalString);
  });
  it("No se crea una nota si ya existe una con ese título", () => {
    const finalString: string = chalk.red("La nota con el titulo: test, ya existe");
    expect(usuario.add("test", "test", "rojo")).to.be.eql(finalString);
  });
  it("Se elimina una nota si el título existe", () => {
    const finalString: string = chalk.green("La nota con el título: test\n Fue eliminada correctamente");
    expect(usuario.remove("test")).to.be.eql(finalString);
  });
  it("Correcta salida del programa en caso de la nota no exista", () => {
    const finalString: string = chalk.red("La nota con el título: test no existe.");
    expect(usuario.remove("test")).to.be.eql(finalString);
  });
  it("Correcta salida del programa en caso de que el usuario no exista", () => {
    const usuario2: Usuario = new Usuario("test4");
    const finalString: string = chalk.red("El usuario: test4 no existe.");
    expect(usuario2.remove("test")).to.be.eql(finalString);
  });
  it("Se lista correctamente las notas de un usuario", () => {
    usuario.add("test", "test", "azul");
    expect(usuario.list()).to.be.string;
  });
  it("Salida correcta en caso de querer listar las notas de un usuario el cual no existe", () => {
    expect(usuario2.list()).to.be.string;
  });
  it("Se lee correctamente una nota de un usuario en específico", () => {
    expect(usuario.read("test")).to.be.string;
  });
  it("Salida correcta en caso de querer leer una nota de un usuario la cual no existe", () => {
    const finalString: string = chalk.red("La nota con el título: test321 no existe.");
    usuario2.add("test", "test", "color");
    usuario2.remove("test");
    expect(usuario2.read("test321")).to.be.eql(finalString);
  });
  it("Salida correcta en caso de querer leer una nota de un usuario el cual no existe", () => {
    const tmpUsuario: Usuario = new Usuario("tmpUsuario");
    expect(tmpUsuario.read("test")).to.be.string;
  });
  it("Se modifica correctamente el body de una nota", () => {
    const finalString: string = chalk.green(`Nota actualizada correctamente`);
    expect(usuario.mod("test", "cambiando el body")).to.be.eql(finalString);
  });
  it("Se modifica correctamente el color de una nota", () => {
    const finalString: string = chalk.green(`Nota actualizada correctamente`);
    expect(usuario.mod("test", "amarillo", true)).to.be.eql(finalString);
  });
  it("Salida correcta en caso de no pasarle ningún argumento al mod", () => {
    const finalString: string = chalk.red(`No se ha actualizado la nota con el título: test.`);
    expect(usuario.mod("test")).to.be.eql(finalString);
  });
  it("Salida correcta en caso de que no exista una nota a modificar", () => {
    const finalString: string = chalk.red(`La nota con el título: test312 no existe.`);
    expect(usuario.mod("test312")).to.be.eql(finalString);
  });
  it("Salida correcta en caso de querer modificar una nota de un usuario el cual no existe", () => {
    const tmpUsuario: Usuario = new Usuario("tmpUsuario");
    const finalString: string = chalk.red(`El usuario: tmpUsuario no existe.`);
    expect(tmpUsuario.mod("test")).to.be.eql(finalString);
  });
});