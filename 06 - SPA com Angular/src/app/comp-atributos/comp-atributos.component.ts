import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-atributos',
  templateUrl: './comp-atributos.component.html',
  styleUrls: ['./comp-atributos.component.css']
})
export class CompAtributosComponent implements OnInit {

  constructor() { }
  style:string = 'disable'

  ngOnInit(): void {
  }

  trocar(){
    if(this.style == "disable")
      this.style = "enable"
    else
      this.style = "disable"
  }
}
