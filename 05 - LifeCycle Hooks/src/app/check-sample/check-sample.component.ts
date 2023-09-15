import { Component, OnInit, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-check-sample',
  templateUrl: './check-sample.component.html',
  styleUrls: ['./check-sample.component.css']
})
export class CheckSampleComponent implements OnInit, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, OnDestroy {

  quantidade:number = 0;

  constructor() { }

  ngOnDestroy(): void {
    console.log("KABOOOOOOM")
  }

  adicionar(){
    this.quantidade += 1
  }

  decrementar(){
    this.quantidade -= 1
  }

  // checked -> content -> view

  ngDoCheck(): void {
    console.log(`Executando: ngDoCheck`)
  }

  // quando o primeiro evento é iniciado
  ngAfterContentInit(): void {
    console.log(`Executando: ngAfterContentInit`)
  }

  // após alguma alteração verifica o conteudo
  ngAfterContentChecked(): void {
    console.log(`Executando: ngAfterContentChecked`)
  }

  // depois da inicialização da view
  ngAfterViewInit(): void {
    console.log(`Executando: ngAfterViewInit`)
  }

  // após alguma alteração, verifica a view
  ngAfterViewChecked(): void {
    console.log(`Executando: ngAfterViewChecked`)
  }
  

  ngOnInit(): void {
    console.log(`Executando: ngOnInit`)

  }

}
