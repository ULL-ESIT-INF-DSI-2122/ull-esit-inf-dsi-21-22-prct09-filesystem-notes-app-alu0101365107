import * as yargs from 'yargs';
import {Usuario} from './usuario';

const stringTitulo: string = "Título de la nota";

/** Comando para la creacion de una nota */
yargs.command({
  command: 'add',
  describe: 'Añadir una nota',
  builder: {
    user: {
      describe: 'Nombre del usuario',
      demandOption: true,
      type: 'string',
    },
    title: {
      describe: stringTitulo,
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Contenido de la nota',
      demandOption: true,
      type: 'string',
    },
    color: {
      describe: 'Color de la nota',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    if (typeof argv.user === "string" &&
    typeof argv.title === "string" &&
    typeof argv.body === "string" &&
    typeof argv.color === "string") {
      console.log(new Usuario(argv.user).add(argv.title, argv.body, argv.color));
    }
  },
});

/** Comando para la visualizacion de todas las notas de un usuario */
yargs.command({
  command: 'list',
  describe: 'Ver las notas',
  builder: {
    user: {
      describe: 'Usuario',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    if (typeof argv.user === "string") {
      console.log(new Usuario(argv.user).list());
    }
  },
});

/** Comando para la lectura de una nota en específico */
yargs.command({
  command: 'read',
  describe: 'Ver una nota en específico',
  builder: {
    user: {
      describe: 'Usuario',
      demandOption: true,
      type: 'string',
    },
    title: {
      describe: stringTitulo,
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    if (typeof argv.user === "string" && typeof argv.title === "string") {
      console.log(new Usuario(argv.user).read(argv.title));
    }
  },
});

/** Comando para eliminación de una nota en específico */
yargs.command({
  command: 'remove',
  describe: 'Eliminar una nota en específico',
  builder: {
    user: {
      describe: 'Usuario',
      demandOption: true,
      type: 'string',
    },
    title: {
      describe: stringTitulo,
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    if (typeof argv.user === "string" && typeof argv.title === "string") {
      console.log(new Usuario(argv.user).remove(argv.title));
    }
  },
});

/** Comando para la modificación de una nota en específico */
yargs.command({
  command: 'mod',
  describe: 'Modificar una nota en específico',
  builder: {
    user: {
      describe: 'Usuario',
      demandOption: true,
      type: 'string',
    },
    title: {
      describe: stringTitulo,
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Nuevo contenido de la nota',
      demandOption: false,
      type: 'string',
    },
    color: {
      describe: 'Nuevo color de la nota',
      demandOption: false,
      type: 'string',
    },
  },
  handler(argv) {
    if (typeof argv.user === "string" &&
    typeof argv.title === "string") {
      if (argv.body && typeof argv.body === "string") {
        console.log(new Usuario(argv.user).mod(argv.title, argv.body));
      } else if (argv.color && typeof argv.color === "string") {
        console.log(new Usuario(argv.user).mod(argv.title, argv.color, true));
      } else if (argv.color && typeof argv.color === "string" && argv.body && typeof argv.body === "string") {
        console.log(new Usuario(argv.user).mod(argv.title, argv.body));
        console.log(new Usuario(argv.user).mod(argv.title, argv.color, true));
      }
    }
  },
});

yargs.parse();
