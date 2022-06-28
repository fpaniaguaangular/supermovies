import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {

  creditos:any = {empresa:"Super Angular Developers",anyo:"2022"};
  coste:number=1500.5318;
  hoy:any;

  constructor() { 
    this.hoy = new Date();
  }

  ngOnInit(): void {
  }

}
