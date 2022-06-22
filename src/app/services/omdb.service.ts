import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_KEY = "ee6e8770";
const URL = "http://www.omdbapi.com/?apikey=";

@Injectable({
  providedIn: 'root'
})
export class OmdbService {

  constructor(private clienteHTTP:HttpClient) { }

  getPelicula(titulo:string):Observable<any> {
    return this.clienteHTTP.get<any>(URL+API_KEY+"&t="+titulo); 
  }  

}
