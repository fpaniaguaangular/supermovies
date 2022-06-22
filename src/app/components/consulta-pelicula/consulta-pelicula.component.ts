import { Component, OnInit } from '@angular/core';
import { OmdbService } from 'src/app/services/omdb.service';

@Component({
  selector: 'app-consulta-pelicula',
  templateUrl: './consulta-pelicula.component.html',
  styleUrls: ['./consulta-pelicula.component.css']
})
export class ConsultaPeliculaComponent implements OnInit {

  pelicula:any=undefined;
  constructor(private omdbService:OmdbService) { }

  ngOnInit(): void {
    this.omdbService.getPelicula("Mutiny on the Bounty").subscribe(
      pelicula => {
        console.log(pelicula);
        this.pelicula = pelicula;
      }
    );
  }

}
