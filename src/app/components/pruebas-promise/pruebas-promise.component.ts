import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pruebas-promise',
  templateUrl: './pruebas-promise.component.html',
  styleUrls: ['./pruebas-promise.component.css']
})
export class PruebasPromiseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("PASO 1. Inicio del ngOnInit");
    //Inicio de la llamada
    this.crearPromise(2)
    .then((retorno)=>{
      console.log("Retorno:" + retorno);
    })
    .catch((retorno)=>{
      console.error("Retorno:" + retorno);
    })
    .finally(()=>{
      console.warn("La Promise ha finalizado");
    });
    //Fin de la llamada
    console.log("PASO 2. Fin del ngOnInit");
  }

  crearPromise(numero:number):Promise<any> {
    const promise = new Promise((resolve, reject)=> {
      console.log("PASO 1. Inicio del Promise");
      setTimeout(()=>{
        if (numero%2==0) {
          resolve("La Promise se ha resuelto satisfactoriamente (número par)");
        } else {
          reject("La Promise ha producido un ERROR (número impar)")
        }
      },5000);
      console.log("PASO 2. Fin del Promise");
    });
    return promise;
  }
}
