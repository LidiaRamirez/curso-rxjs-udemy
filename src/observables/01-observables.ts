import { Observable, Observer } from 'rxjs';


const obs$ = new Observable<string>( subs => {
  subs.next('Hola');
  subs.next('Mundo');

  // Forzar un error 

  const a = undefined;
  a.nombre = 'Fernando'


  subs.complete();
  subs.next('Javascript');
});

// Formas para ejecutar el suscribe

// 1

/* obs$.subscribe( console.log ); */

// 2

/* obs$.subscribe(
  valor => console.log('next: ', valor),
  error => console.warn('error', error),
  () => console.info('Completado')
); */

// 3

const observer : Observer<string> = {
  next: valor =>  console.log('siguiente [next]: ', valor),
  error: error => console.warn('error [obs]', error),
  complete: () => console.info('Completado [obs]')
};

obs$.subscribe(observer);
