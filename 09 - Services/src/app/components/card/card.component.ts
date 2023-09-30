import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  name:string = 'Bulbassaur';
  attributesTypes:string[] = ['Fire', 'Dragon']
  picture:string = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png'


  constructor(private service:PokemonService) {}

  ngOnInit(): void {
    this.service.getPokemon("charmander").subscribe({
      next: (res) => console.log(res)
    })
  }

}
