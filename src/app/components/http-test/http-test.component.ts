import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


const httpHeaders = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Component({
  selector: 'app-http-test',
  templateUrl: './http-test.component.html',
  styleUrls: ['./http-test.component.css']
})
export class HttpTestComponent implements OnInit {

  static URL: string = "https://vehiculos-historicos.herokuapp.com";
  static path = "/vehiculos";

  idVehiculoABorrar:number=0;
  
  constructor(private http: HttpClient) { }

  crearVehiculo():void {
    let coche:any = {nombre:'Coche 1', descripcion:'Descripción 1', imagen:'https://cloudfront-us-east-1.images.arcpublishing.com/infobae/RTMBTBFYWRBLLGV5QYBJKLUNYU.jpg'};
    this.addVehiculo(coche);
  }

  private addVehiculo(vehiculo: any): void {
    const body = {};
    const parametros = new HttpParams()
      .append('nombre', vehiculo.nombre)
      .append('descripcion', vehiculo.descripcion)
      .append('imagen', vehiculo.imagen);
    
      this.http.post<any>(HttpTestComponent.URL + HttpTestComponent.path, body, { params: parametros }).subscribe(
      {
        next(retorno:any) {
          //retorno es de tipo object
          console.log("Next:" + retorno.code);
          console.log("Next:" + retorno.message);
        },
        error(error:HttpErrorResponse) {
          //error es de tipo HttpErrorResponse
          console.log("Error:" + error.name);
          console.log("Error:" + error.message);
          console.log("Error:" + error.error);
          console.log("Error:" + error.ok);
        },
        complete() {
          console.log("Complete");
        }
      });
  }

  borrarVehiculo():void {
    this.deleteVehiculo(this.idVehiculoABorrar);
  }

  private deleteVehiculo(id: number): void {
    const endPath = `/?id=${id}`;
        this.http.delete<any>(HttpTestComponent.URL + HttpTestComponent.path + endPath).subscribe(
          {
            next(retorno: any) {
              //retorno es de tipo object
              console.log("Next:" + retorno.code);
              console.log("Next:" + retorno.message);
            },
            error(error: HttpErrorResponse) {
              //error es de tipo HttpErrorResponse
              console.log("Error:" + error.name);
              console.log("Error:" + error.message);
              console.log("Error:" + error.error);
              console.log("Error:" + error.ok);
            },
            complete() {
              console.log("Complete");
            }
          });
      }
    

  ngOnInit(): void {
  }

}
