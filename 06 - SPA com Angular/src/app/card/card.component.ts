import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  produtos:string[] = []
  menuType: string = 'admin';

  constructor() { 
    this.produtos = [
      "mouse",
      "teclado",
      "cabo",
      "fonte"
    ]
  }

  adicionar(){
    this.produtos.push("falk")
  }

  remover(index:number){
    // alert(index)
    this.produtos.splice(index, 1)
  }

  ngOnInit(): void {
  }

}
