import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivadorInterceptorService } from '../services/activador-interceptor.service';

@Injectable()
export class HttpTestHeadersInterceptor implements HttpInterceptor {

  constructor(private activadorInterceptor:ActivadorInterceptorService) {}

  /*
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log("En el interceptor VACÍO HttpTestHeadersInterceptor");
    return next.handle(request);
  }
  */

  
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log("En el interceptor HttpTestHeadersInterceptor");
    let requestModificada:any;
    if (this.activadorInterceptor.isActivo()){
      //Si el activador está activo, modifica la request.
      requestModificada = request.clone(
      {
        url:request.url,//NO MODIFICAMOS LA URL
        headers:request.headers
          .set('X-RapidAPI-Key','8fe6f42975msh4569bbbdea6402bp1c2cd3jsne0025680afe6')
          .set('X-RapidAPI-Host','free-epic-games.p.rapidapi.com'),
        params:request.params//NO MODIFICAMOS LOS PARÁMETROS
      });
    } else {
      //Si el activador está desactivado, la request devuelta es la original
      requestModificada = request;
    }
    return next.handle(requestModificada);
  }
}