import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivadorInterceptorService } from 'src/app/services/activador-interceptor.service';
import { OmdbService } from 'src/app/services/omdb.service';

@Component({
  selector: 'app-consulta-pelicula',
  templateUrl: './consulta-pelicula.component.html',
  styleUrls: ['./consulta-pelicula.component.css']
})
export class ConsultaPeliculaComponent implements OnInit {
  loading: boolean = false;
  formularioBusqueda: FormGroup;
  pelicula: any = undefined;
  constructor(private omdbService: OmdbService) {
    this.formularioBusqueda = new FormGroup(
      {
        titulo: new FormControl()
      }
    );
  }

  buscar(): void {
    this.loading = true;
    setTimeout(() => {
      this.omdbService.getPelicula(this.formularioBusqueda.controls['titulo'].value)
        .subscribe(pelicula => {
          this.pelicula = pelicula;
          this.loading = false;
        }
        );
    }, 1000);
  }

  ngOnInit(): void {
  }

}
