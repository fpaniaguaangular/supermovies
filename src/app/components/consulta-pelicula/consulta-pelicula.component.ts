import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { OmdbService } from 'src/app/services/omdb.service';

@Component({
  selector: 'app-consulta-pelicula',
  templateUrl: './consulta-pelicula.component.html',
  styleUrls: ['./consulta-pelicula.component.css']
})
export class ConsultaPeliculaComponent implements OnInit {
  loading:boolean=false;
  formularioBusqueda: FormGroup;
  pelicula:any=undefined;
  constructor(private omdbService:OmdbService) { 
    this.formularioBusqueda = new FormGroup(
      {
        titulo: new FormControl() 
      }
    );
  }

  buscar():void{
    this.loading=true;
    console.log("ANTES DE BUSCAR LA PELÍCULA");
    this.omdbService.getPelicula(this.formularioBusqueda.controls['titulo'].value)
      .subscribe(pelicula => {
        this.pelicula = pelicula;
        console.log("YA TENGO LA PELÍCULA");
        this.loading=false;
      }
    );
    console.log("DESPUÉS DE BUSCAR LA PELÍCULA");
  }

  ngOnInit(): void { 
  }

}
