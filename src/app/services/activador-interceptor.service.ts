/*
Este servicio se podría utilizar como mecanismo para discriminar si las peticiones
HTTP deben o no 'transformarse' en el Interceptor.

Cada componente o servicio, antes de realizar la llamada HTTP debería invocar a los métodos
activar() o desactivar() según sea necesario.

El Interceptor accede a través del método isActivo() al estado del Activador
para modificar la petición o utilizar la original.
*/
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActivadorInterceptorService {
  private activado:boolean = false;
  constructor() { }
  isActivo():boolean {
    return this.activado;
  }
  activar():void {
    this.activado = true;
  }
  desactivar():void {
    this.activado = false;
  }
}
