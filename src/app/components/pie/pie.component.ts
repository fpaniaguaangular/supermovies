import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {

  diasSemana = ['lunes','martes','miercoles','jueves','viernes','sábado','domingo'];
  messageMapping:
      {[k: string]: string} = {'=0': 'Ningún día.', '=1': 'Un día.', 'other': '# días.'};

  creditos:any = {empresa:"super angular developers",anyo:"2022"};
  coste:number=1500.5318;
  impuesto:number=23.15;
  hoy:any;

  constructor() { 
    this.hoy = new Date();
  }

  ngOnInit(): void {
  }

}
