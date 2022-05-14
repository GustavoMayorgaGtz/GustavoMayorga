import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  public decoracion1Height: number = 0;
  public decoracion1Width: number = 0;
  constructor() { }

  ngOnInit(): void {
    setInterval(()=>{

      this.decoracion1Height = window.innerHeight;
      this.decoracion1Width = (this.decoracion1Height * 100)/100;
    },0);
  }

}
