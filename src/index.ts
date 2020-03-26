import { Observable } from 'rxjs';


const obs$ = new Observable<string>( subs => {
  subs.next('Hola');
  subs.next('Mundo');
  subs.complete();
  subs.next('Javascript');
});

obs$.subscribe( console.log );