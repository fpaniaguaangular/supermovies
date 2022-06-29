import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

/**
 * 
 * Enlace desde el que obtener lass API-Keys del WS de EPIC GAMES.
 * 
 * https://rapidapi.com/thekevinconnor-lPsiMJNfyt0/api/free-epic-games/
 * 
 */

@Component({
  selector: 'app-http-test-headers',
  templateUrl: './http-test-headers.component.html',
  styleUrls: ['./http-test-headers.component.css']
})
export class HttpTestHeadersComponent implements OnInit {

  URL:string="https://free-epic-games.p.rapidapi.com/free";

  /*
  //SIN INTERCEPTOR
  httpHeaders = {
    headers: new HttpHeaders({
      'X-RapidAPI-Key':'8fe6f42975msh4569bbbdea6402bp1c2cd3jsne0025680afe6',
      'X-RapidAPI-Host':'free-epic-games.p.rapidapi.com'
    })
  };
  */

  //CON INTERCEPTOR
  httpHeaders = {
    headers: new HttpHeaders()
  };


  constructor(private clienteHTTP:HttpClient) { }

  ngOnInit(): void {
    this.clienteHTTP.get<any>(this.URL, this.httpHeaders).subscribe(datos => {
      console.log(datos);
    });
  }

}
