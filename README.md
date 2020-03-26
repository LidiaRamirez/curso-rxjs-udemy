# Proyecto inicial - Curso de RXJS

* Lo primero que debemos de hacer después de descargar el código es ejecutar el comando:

```
npm install
```
Ese comando descargará todos los módulos de node necesarios para ejecutar el proyecto.


* Cuando termine de instalar los node_modules, entonces podermos ejecutar el proyecto de con el siguiente comando

```
npm start
```
Para que eso funcione, recuerden que deben de ejecutar ese comando en el mismo directorio donde se encuentra el ```package.json```

## Cambiar el puerto
Por defecto, el puerto que configuré para este proyecto es el ```8081```, pero si necesitan cambiarlo porque pueda que ese puerto lo use su computadora, pueden cambiarlo abriendo el ```package.json``` >> scripts. Ahí verán la instrucción que lanza el servidor de desarrollo

```
"start": "webpack-dev-server --mode development --open --port=8081"
```

Simplemente cambian el puerto por el que ustedes necesiten y listo. (lógicamente graban los cambios antes de ejecutar el ```npm start``` nuevamente)


## Observable 

Como estándar se define un observable con `$` al final. Ej:

~~~
const obs$
~~~

Las formas de definir observable:

~~~
const observable$ = Observable.create(); // poco común 
const observable$ = new Observable(); // lo normal
~~~


~~~

const obs$ = new Observable<tipo-dato>( subscriber => {
  subscriber.next('Hola');
  subscriber.complete();
});

// Formas para ejecutar el suscribe 1

obs$.subscribe( resp => console.log(resp) );
obs$.subscribe( console.log ); // con es6 se puede manejar así 

// Formas para ejecutar el suscribe 2

obs$.subscribe(
  valor => console.log('next: ', valor),
  error => console.warn('error', error),
  () => console.info('Completado')
);

// Formas para ejecutar el suscribe 3, observe

const observer : Observer<string> = {
  next: valor =>  console.log('siguiente [next]: ', valor),
  error: error => console.warn('error [obs]', error),
  complete: () => console.info('Completado [obs]')
};

obs$.subscribe(observer);
~~~

Tener en cuenta:
- `subscriber.next` sirve para emitir un valor 
-  `subscriber.complete`: Ninguna emisión después de complete sera notificada

### Subscription y unsubscribe

