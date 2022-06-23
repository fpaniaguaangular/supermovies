import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { OmdbService } from 'src/app/services/omdb.service';

@Component({
  selector: 'app-consulta-pelicula',
  templateUrl: './consulta-pelicula.component.html',
  styleUrls: ['./consulta-pelicula.component.css']
})
export class ConsultaPeliculaComponent implements OnInit {

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
    this.omdbService.getPelicula(
      this.formularioBusqueda.controls['titulo'].value).subscribe(
      pelicula => {
        //console.log(pelicula);
        this.pelicula = pelicula;
      }
    );
  }

  ngOnInit(): void { 
  }

}
