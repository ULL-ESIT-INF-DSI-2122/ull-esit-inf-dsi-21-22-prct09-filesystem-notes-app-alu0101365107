import * as chalk from 'chalk';
import * as yargs from 'yargs';
import * as fs from 'fs';
import {Nota} from './nota';

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
      const nota = new Nota(argv.title, argv.body, argv.color);
      const notaJson = JSON.stringify(nota);
      if (!fs.existsSync(`./database/${argv.user}`)) {
        fs.mkdirSync(`./database/${argv.user}`);
        console.log(chalk.green(`Directorio creado correctamente`));
      }
      if (!fs.existsSync(`./database/${argv.user}/${argv.title}.json`)) {
        fs.writeFileSync(`./database/${argv.user}/${argv.title}.json`, notaJson, {flag: "a"});
        console.log(chalk.green(`Nota creada correctamente`));
      } else {
        console.log(chalk.red(`La nota con el titulo: ${argv.title}, ya existe`));
      }
    }
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
      if (fs.existsSync(`./database/${argv.user}`)) {
        const ficheros = fs.readdirSync(`./database/${argv.user}`);
        console.log("Tus notas: \n");
        ficheros.forEach((nombreFichero) => {
          const buffer = fs.readFileSync(`./database/${argv.user}/${nombreFichero}`, 'utf8');
          const bufferJson = JSON.parse(buffer);
          const nota = new Nota(bufferJson.titulo, bufferJson.body, bufferJson.color);
          console.log(nota.getColorTitulo());
        });
      } else {
        console.log(chalk.red(`El usuario: ${argv.user} no existe`));
      }
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
    if (typeof argv.user === "string" && typeof argv.title === "string") {
      if (fs.existsSync(`./database/${argv.user}`)) {
        if (fs.existsSync(`./database/${argv.user}/${argv.title}.json`)) {
          const buffer = fs.readFileSync(`./database/${argv.user}/${argv.title}.json`, 'utf8');
          const bufferJson = JSON.parse(buffer);
          const nota = new Nota(bufferJson.titulo, bufferJson.body, bufferJson.color);
          console.log(nota.getRead());
        } else {
          console.log(chalk.red(`La nota con el título: ${argv.title} no existe.`));
        }
      } else {
        console.log(chalk.red(`El usuario: ${argv.user} no existe.`));
      }
    }
  },
});

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
      describe: 'Título de la nota',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    if (typeof argv.user === "string" && typeof argv.title === "string") {
      if (fs.existsSync(`./database/${argv.user}`)) {
        if (fs.existsSync(`./database/${argv.user}/${argv.title}.json`)) {
          fs.rmSync(`./database/${argv.user}/${argv.title}.json`);
          if (!fs.existsSync(`./database/${argv.user}/${argv.title}.json`)) {
            console.log(chalk.green(`La nota con el título: ${argv.title}\n Fue eliminada correctamente`));
          } else {
            console.log(chalk.red(`La nota con el título: ${argv.title} no se pudo borrar.`));
          }
        } else {
          console.log(chalk.red(`La nota con el título: ${argv.title} no existe.`));
        }
      } else {
        console.log(chalk.red(`El usuario: ${argv.user} no existe.`));
      }
    }
  },
});

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
      describe: 'Título de la nota',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Nuevo contenido de la nota',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    if (typeof argv.user === "string" && typeof argv.title === "string") {
      if (fs.existsSync(`./database/${argv.user}`)) {
        if (fs.existsSync(`./database/${argv.user}/${argv.title}.json`)) {
          const buffer = fs.readFileSync(`./database/${argv.user}/${argv.title}.json`, 'utf8');
          const bufferJson = JSON.parse(buffer);
          bufferJson.body = argv.body;
          fs.writeFileSync(`./database/${argv.user}/${argv.title}.json`, JSON.stringify(bufferJson));
          console.log(chalk.green(`Nota actualizada correctamente`));
        } else {
          console.log(chalk.red(`La nota con el título: ${argv.title} no existe.`));
        }
      } else {
        console.log(chalk.red(`El usuario: ${argv.user} no existe.`));
      }
    }
  },
});

yargs.parse();
