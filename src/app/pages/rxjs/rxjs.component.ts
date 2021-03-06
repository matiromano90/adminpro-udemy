import { Observable, Subscription } from 'rxjs/Rx';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  constructor() {

    this.subscription = this.regresaObservable()
      .subscribe( 
        numero => console.log('Subs ', numero ),
        error => console.log('Error en el obs (dos veces)', error),
        () => console.log('El Observador termino!')
      );

   }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  regresaObservable(): Observable<any> {
    return new Observable( observer => {
      
            let contador = 0;
      
            let intervalo = setInterval( () => {
      
              contador += 1;

              let salida = {
                valor: contador
              }
      
              observer.next( salida );
      
              /* if ( contador === 3 ) {
                clearInterval( intervalo );
                observer.complete();
              } */
      
              /* if ( contador === 2 ) {
                clearInterval( intervalo );
                observer.error('Auxilio!');
              } */
      
            }, 500);
      
          }).retry(2)
            .map( (resp: any) => {    // obtiene la respuesta y la puede transformar y regresar otra cosa
              return resp.valor;
            })
            .filter( (valor, index) => {

              if ( ( valor % 2 ) === 1) {
                // impar
                return true;
              } else {
                // par
                return false;
              }
            });
  }

}
