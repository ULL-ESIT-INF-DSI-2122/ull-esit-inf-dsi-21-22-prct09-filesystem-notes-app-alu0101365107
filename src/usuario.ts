import * as chalk from 'chalk';
import * as fs from 'fs';
import {Nota} from './nota';

/** Clase para la gestion de las notas de un usuario */
export class Usuario {
/**
 * Clase para la gestion de las notas de un usuario
 * @param nombre Nombre del usuario
 */
  constructor(protected nombre: string) {
  }
  /**
   * Metodo para añadir una nueva nota
   * @param title Titulo de la nota
   * @param body Texto de la nota
   * @param color Color de la nota
   * @returns Resultado de la operacion de creacion
   */
  public add(title: string, body:string, color: string): string {
    const nota = new Nota(title, body, color);
    const notaJson = JSON.stringify(nota);
    if (!fs.existsSync(`./database/${this.nombre}`)) {
      fs.mkdirSync(`./database/${this.nombre}`);
      console.log(chalk.green(`Directorio creado correctamente`));
    }
    if (!fs.existsSync(`./database/${this.nombre}/${title}.json`)) {
      fs.writeFileSync(`./database/${this.nombre}/${title}.json`, notaJson, {flag: "a"});
      return chalk.green(`Nota creada correctamente`);
    } else {
      return chalk.red(`La nota con el titulo: ${title}, ya existe`);
    }
  }
  /**
   * Metodo para eliminar una nota
   * @param title Titulo de la nota a eliminar
   * @returns Resultado de la operacion de eliminacion
   */
  public remove(title: string): string {
    if (fs.existsSync(`./database/${this.nombre}`)) {
      if (fs.existsSync(`./database/${this.nombre}/${title}.json`)) {
        fs.rmSync(`./database/${this.nombre}/${title}.json`);
        return chalk.green(`La nota con el título: ${title}\n Fue eliminada correctamente`);
      } else {
        return chalk.red(`La nota con el título: ${title} no existe.`);
      }
    } else {
      return chalk.red(`El usuario: ${this.nombre} no existe.`);
    }
  }
  /**
   * Metodo para listar las notas de un usuario
   * @returns String con las notas formateadas
   */
  public list(): string {
    if (fs.existsSync(`./database/${this.nombre}`)) {
      const ficheros = fs.readdirSync(`./database/${this.nombre}`);
      console.log("Tus notas: \n");
      let finalList: string = "";
      ficheros.forEach((nombreFichero) => {
        const buffer = fs.readFileSync(`./database/${this.nombre}/${nombreFichero}`, 'utf8');
        const bufferJson = JSON.parse(buffer);
        const nota = new Nota(bufferJson.titulo, bufferJson.body, bufferJson.color);
        finalList = finalList + nota.getColorTitulo() + "\n";
      });
      return finalList;
    } else {
      return chalk.red(`El usuario: ${this.nombre} no existe`);
    }
  }
  /**
   * Metodo para la lectura de una nota en concreto
   * @param title Titulo de la nota
   * @returns Contenido de la nota
   */
  public read(title: string): string {
    if (fs.existsSync(`./database/${this.nombre}`)) {
      if (fs.existsSync(`./database/${this.nombre}/${title}.json`)) {
        const buffer = fs.readFileSync(`./database/${this.nombre}/${title}.json`, 'utf8');
        const bufferJson = JSON.parse(buffer);
        const nota = new Nota(bufferJson.titulo, bufferJson.body, bufferJson.color);
        return nota.getRead();
      } else {
        return chalk.red(`La nota con el título: ${title} no existe.`);
      }
    } else {
      return chalk.red(`El usuario: ${this.nombre} no existe.`);
    }
  }
  /**
   * Metodo para la modificacion de un nota
   * @param title Titulo de la nota
   * @param datoActualizar Contenido a actualizar, este puede ser el contenido o el color
   * @param isColor En caso de que sea true, el usuario estara modificando el color, de lo contrario modificara el contenido
   * @returns Resultado de la operacion de modificacion
   */
  public mod(title: string, datoActualizar?: string, isColor: boolean = false): string {
    if (fs.existsSync(`./database/${this.nombre}`)) {
      if (fs.existsSync(`./database/${this.nombre}/${title}.json`)) {
        if (datoActualizar) {
          const buffer = fs.readFileSync(`./database/${this.nombre}/${title}.json`, 'utf8');
          const bufferJson = JSON.parse(buffer);
          if (isColor) {
            bufferJson.color = datoActualizar;
          } else {
            bufferJson.body = datoActualizar;
          }
          fs.writeFileSync(`./database/${this.nombre}/${title}.json`, JSON.stringify(bufferJson));
          return chalk.green(`Nota actualizada correctamente`);
        } else {
          return chalk.red(`No se ha actualizado la nota con el título: ${title}.`);
        }
      } else {
        return chalk.red(`La nota con el título: ${title} no existe.`);
      }
    } else {
      return chalk.red(`El usuario: ${this.nombre} no existe.`);
    }
  }
  /**
   * Metodo creado para la inicializacion de los expect
   * @returns Valor de la operacion
   */
  public initializeTest(): boolean {
    if (fs.existsSync(`./database/test`)) {
      fs.rmSync(`./database/test`, {recursive: true});
    }
    if (fs.existsSync(`./database/test4`)) {
      fs.rmSync(`./database/test4`, {recursive: true});
    }
    return true;
  }
}