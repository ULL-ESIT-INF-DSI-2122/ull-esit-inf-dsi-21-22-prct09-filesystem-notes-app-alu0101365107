import * as chalk from 'chalk';
import * as yargs from 'yargs';
import * as fs from 'fs';

// console.log(chalk.blue('This text is blue'));
// console.log(chalk.blue.inverse('This text is over a blue background'));

interface Usuarios {
  nombre: string,
  notas: Array<Notas>,
}

interface Notas {
  title: string,
  body: string,
}


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
      describe: 'Título de la nota',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Contenido de la nota',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {

  },
});

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
      fs.readFile('./database/d_note-app.json', (err, data) => {
        if (err) throw err;
        const buffer = JSON.parse(data.toString());
        [...buffer.usuarios].forEach((usuario: Usuarios) => {
          if (usuario.nombre == argv.user) {
            [...usuario.notas].forEach((notas: Notas) => {
              console.log(`Título: ${notas.title} \n Body: ${setColor(notas.title, notas.body)}`);
            });
          }
        });
      });
    }
  },
});
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
      describe: 'Título de la nota',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    if (typeof argv.user === "string") {
      fs.readFile('./database/d_note-app.json', (err, data) => {
        if (err) throw err;
        const buffer = JSON.parse(data.toString());
        [...buffer.usuarios].forEach((usuario: Usuarios) => {
          if (usuario.nombre == argv.user) {
            [...usuario.notas].forEach((notas: Notas) => {
              console.log(`Título: ${notas.title} \n "Body: ${setColor(notas.title, notas.body)}`);
            });
          }
        });
      });
    }
  },
});

function setColor(color: string, mensaje: string): string {
  if (color == "Rojo") {
    return chalk.red(mensaje);
  } else {
    return chalk.red("Colo no establecido");
  }
}

yargs.parse();
