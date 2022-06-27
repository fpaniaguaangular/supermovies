import { Component, OnInit } from '@angular/core';
import { filter, from, map, Observable } from 'rxjs';

@Component({
  selector: 'app-pruebas-observable',
  templateUrl: './pruebas-observable.component.html',
  styleUrls: ['./pruebas-observable.component.css']
})
export class PruebasObservableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let miObservable = this.crearObservableSimple();

    console.log("forEach...");

    let letras:string[]=[];
    miObservable
      .forEach(caracter=>{
        console.log("forEach:" + caracter);
      });

    console.log("subscribe...");

    miObservable
      .subscribe(caracter=>{
        console.log("subscribe:" + caracter)
      });

    console.log("pipe + filter...");

    miObservable
      .pipe(filter(caracter => caracter!='a'))
      .forEach(caracter => {
        console.log("pipe+filter:" + caracter);
      });

    console.log("pipe + map...");

    miObservable
      .pipe(map(caracter => caracter.toUpperCase()))
      .forEach(caracter => {
        console.log("pipe+map:" + caracter);
      });

    console.log("pipe + map + función a medida...");

    //Sólo va a generar @ como salidas (tantas como a en el flujo de entrada)
    miObservable
      .pipe(filter(caracter=>caracter=='a'), map(caracter => sustituirAPorArrobas(caracter)))
      .forEach(caracter => {
        console.log("pipe+filter+map:" + caracter);
      });

  
    //Observable completo
    let observableCompleto = this.crearObservableCompleto();

    let suscripcion = observableCompleto.subscribe({
      next: (retorno) => {
        console.log(retorno);
      },
      error: (err) => {
        console.error(err);
      },
      complete: () => {
        console.info('Fin del consumo del Observable');
      } 
    });

    setTimeout(()=>{
      suscripcion.unsubscribe();
    },5000);

  }

  crearObservableSimple():Observable<string> {
    return from("Me gusta programar en Angular.");      
  }

  crearObservableCompleto():Observable<string> {
    let contador:number=0;
    return new Observable(subscriber => {
      let intervalo = setInterval(()=> {
        contador++;
        if (contador%10==0){
          //subscriber.error("Ha ocurrido un error");
          console.log("Completando desde el Observable");
          subscriber.complete();
          clearInterval(intervalo);
        }
        console.log("Emitiendo desde el Observable " + contador);
        subscriber.next(`Mensaje:${contador}`);
      },1000);
    })
  }
}

function sustituirAPorArrobas(caracter:string):string {
  if (caracter.toUpperCase()=="A"){
    return "@";
  } else {
    return caracter;
  }
}