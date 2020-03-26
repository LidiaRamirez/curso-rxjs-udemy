import { Observable, Observer } from 'rxjs';


const observer : Observer<any> = {
  next: valor =>  console.log('siguiente: ', valor),
  error: error => console.warn('error: ', error),
  complete: () => console.info('Completado')
};
