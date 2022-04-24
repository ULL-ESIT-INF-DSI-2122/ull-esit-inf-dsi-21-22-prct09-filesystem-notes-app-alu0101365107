# Práctica 9 - Aplicación de procesamiento de notas de texto
* * * 

* Nombre: Héctor Rodríguez Alonso.
* Fecha: 2022-04-24.
* Correo: alu0101365107@ull.edu.es.

* * *
# Índice  
* [Resumen](#resumen)
* [Resolución](#resolución)
* [Conlusiones](#conclusiones) 


* * *
## Resumen  
Se plantea la creación de una aplicación de procesamiento de notas, la cual permita añadir, modificar, eliminar y leer notas. Para ello, se deben de almacenar en un directorio con el nombre del usuario y dentro de este los JSON de las notas, los cuales actuarán como BBDD. Todo ello con el uso de Node.js.
## Resolución  
Mediante la creación de 2 clases, _usuario_ y _nota_, se ha logrado la resolución de dicha práctica. Cabe destacar el uso de _yargs_, línea de comandos, y _chalk_, para la modifcación del color de una string. La primera clase se ha tenido que crear, ya que para la creación de expects sobre comandos yargs, no se ha logrado una solución exitosa. En cuanto a la clase _nota_, como tal no tiene getters ni setters, ya que el programa se ejecuta una vez y se cierra, por lo que se crea el objeto y se destruye automáticamente, en caso de que el programa se mantuviera en ejecución constante, sería recomendable la creación de método setters y getters para los atributos de la clase _nota_ o la creación de una _notasCollection_.
  * __Usuario__: Clase la cual instancia un usuario, el cual posee varios métodos, para ello sólo necesitaremos el nombre de un usuario.
    * `add: ` Tendremos que pasarle el título de la nota, el contenido y el color de ella. En caso de que el directorio del usuario no exista, lo crearemos, una vez hecho, comprobaremos que el título no exista, si es así, crearemos la el fichero JSON, con el contenido pasado por parámetros. En caso de que la nota ya existiera, no se crearía nada, y saldría el programa de forma controlada.
    * `remove: ` Obtendrá como parámetros el título de la nota a borrar, en caso de que el usuario exista y el título también, borrará la nota y mandará una string de confirmación. Si el usuario no existe o el título de la nota tampoco, saldrá de forma controlada, retornando una string con el error.
    * `list: ` Método para listar todas las notas de un usuario, en caso de que no exista, saldrá de forma controlada. Para el resto de posibles casos, accederemos a los ficheros del directorio del usuario, iteraremos sobre ellos, obteniendo los títulos de las notas para su posterior lectura, en cada iteración iremos concatenando las notas a una string temporal, la cual retornaremos.
    * `read: ` Le pasaremos el título de la nota de la cual queremos leer su contenido específico, al igual que el método `list`, tendremos que tener en cuenta si el usuario existe y la nota a consultar también, en caso de que no exista, finalizaremos de forma controlada. Para el resto de casos, leeremos la nota con el título específicado y lo devolveremos como string formateada. 
    * `mod: ` Deberá de recibir el título de la nota a actualizar, además de los siguientes parámetros los cuales dependerán de los siguientes casos mostrados a continuación. Cabe destacar que siempre que se invoque a `mod`, este comprobará en primer lugar si existe el usuario y la nota a modificar, en caso que no exista, retorna una string indicando el problema al usuario.    
      * __1º:__ No pasamos ningún dato a actualizar: En caso de que `mod` no reciba ningún parámetro, este saldrá de forma controlada indicando al usuario que no ha modificado nada.
      * __2º:__ Deseamos actualizar el contenido: Accedremos a la nota y obtendremos el objeto, al cual modificaremos el atributo _body_, una vez hecho, escribiremos en la nota el contenido actualizado.
      * __3º:__ Deseamos actualizar el color: `mod` recibirá como parámetros el _color_ nuevo, además tendremos que indiciar, que _isColor = true_, ya que por default este es _false_. A continuación, al igual que en el segundo caso, leeremos al nota y obtendremos el objeto, donde modificaremos el atributo _color_, para su posterior escritura.
    * `initializeTest: ` Método el cual borrar los usuarios creados para los expetcs.
  * __Nota__: Clase para la instanciación de una nota, esta recibe el título de la nota, contenido y color. Además, posee 2 métodos para la formateación de las notas:
    * `getColorTitulo: ` Devuelve una string formateada con los títulos de las notas de un usuario, cambiando el título de color según el color establecido para esa nota.
    * `getRead: `Devuelve una string formateada con el contenido de una nota en específico, donde se muestra el título, contenido y color de la nota, cabe destacar que la string devuelta posee el color establecido por la nota
## Conclusiones  
Práctica bastante diferente a lo hecho anteriormente, donde la principal dificultad ha sido el uso de _yargs_, ya que en primera instancia, no existía la clase _usuario_ y estaba directamente el código dentro de los comandos. Idea la cual tuvo que desaparecer ya que a la hora de la realización de los tests, fue imposible realizar los expects como tal, ya que se tenía que crear un proceso hijo, complicando bastante la obtención de posibles salidas no esperadas.
