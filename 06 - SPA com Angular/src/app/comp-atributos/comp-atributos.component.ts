import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-atributos',
  templateUrl: './comp-atributos.component.html',
  styleUrls: ['./comp-atributos.component.css']
})
export class CompAtributosComponent implements OnInit {

  constructor() { }
  style:string = 'disable'
  corFundo:string = 'red'
  corDaFonte:string = 'white'
  item:string = ''
  lista:string[] = []

  adicionarLista(){
    if(this.item != "") {
      this.lista.push(this.item)
      this.item = ''
    } else {
      alert('Escreva o item a ser adicionado!')
    }
  }

  ngOnInit(): void {
  }

  trocar(){
    if(this.style == "disable")
      this.style = "enable"
    else
      this.style = "disable"
  }
}
