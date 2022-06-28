import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { OmdbService } from 'src/app/services/omdb.service';

const NUMERO_REGISTROS_POR_PAGINA=10;

@Component({
  selector: 'app-consulta-peliculas',
  templateUrl: './consulta-peliculas.component.html',
  styleUrls: ['./consulta-peliculas.component.css']
})
export class ConsultaPeliculasComponent implements OnInit {

  loading:boolean=false;
  formularioBusqueda: FormGroup;
  numeroRegistros:number=0;
  peliculas:any=undefined;
  imdbID:string="";
  numeroPaginaActual:number=0;
  numeroPaginas:number=0;
  constructor(private omdbService:OmdbService) { 
    this.formularioBusqueda = new FormGroup(
      {
        titulo: new FormControl() 
      }
    );
  }

  buscar(numeroPagina:number):void{
    if (numeroPagina<=0) return;
    if (this.numeroPaginas>0 && numeroPagina>this.numeroPaginas) return;
    
    this.loading=true;
    this.numeroPaginaActual=numeroPagina;
    this.omdbService.getPeliculas(
      this.formularioBusqueda.controls['titulo'].value, numeroPagina)
      .subscribe(peliculas => {
        console.log(peliculas);
        this.loading=false;
        //Datos proporcionados por el WebService
        this.numeroRegistros = peliculas.totalResults;
        this.peliculas = peliculas.Search;
        //Datos calculados para disponer del número de páginas
        this.numeroPaginas = 
          Math.ceil(this.numeroRegistros/NUMERO_REGISTROS_POR_PAGINA);
      }
    );
  }
  arrayGenerator(i: number) {
    return new Array(i);
  }

  
  ngOnInit(): void { 
  }

}
