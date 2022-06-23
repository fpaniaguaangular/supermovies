import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  formularioRegistro: FormGroup;
  constructor() { 
    this.formularioRegistro = new FormGroup(
      {
        nombre: new FormControl("",[
          Validators.required,
          Validators.minLength(10)
        ]),
        fecha: new FormControl("",[
          Validators.required,
          validarFecha()
        ]),
        email: new FormControl("",
          Validators.email
        ) 
      }
    );  
  }

  ngOnInit(): void {
    this.recuperarInfoLS();
  }

  registrar(): void {
    this.almacenarInfoLS();
  }

  limpiar(): void {
    this.formularioRegistro.reset();
  }
  
  recuperarInfoLS():void {
    this.formularioRegistro.controls['nombre'].setValue(localStorage.getItem("nombre"));
    this.formularioRegistro.controls['fecha'].setValue(localStorage.getItem("fecha"));
    this.formularioRegistro.controls['email'].setValue(localStorage.getItem("email"));
  }

  almacenarInfoLS():void{
    localStorage.setItem("nombre",this.formularioRegistro.controls['nombre'].value);
    localStorage.setItem("fecha",this.formularioRegistro.controls['fecha'].value);
    localStorage.setItem("email",this.formularioRegistro.controls['email'].value);
  }
}

export function validarFecha():ValidatorFn {  
  const error_object = {error_message:"El año debe ser superior a 1999"}
  //Devuelve un objeto de error o null si no hay error
  return (control:AbstractControl):ValidationErrors | null => {
    let anyo=new Date(control.value).getFullYear();
    if (anyo<2000) {
      return error_object;
    } else {
      return null;
    }
  }
}