import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ControlRegistroGuard implements CanActivate {
  constructor(private router:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): 
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //return localStorage.getItem("nombre")!=null;
    if (localStorage.getItem("nombre")==null){
      //**************
      //Solución simple
      //**************
      /*
      this.router.navigateByUrl("/noautorizado");
      return false;
      */
      
      //**************
      //Solución UrlTree con parseUrl
      //**************
      //return this.router.parseUrl("/noautorizado");
      
      //**************
      //Solución UrlTree con createUrlTree
      //**************
      return this.router.createUrlTree(["/noautorizado"]);
    } else {
      return true;
    }

  }
  
}
