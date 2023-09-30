import { Component, OnInit } from '@angular/core';
import { PokemonData } from 'src/app/models/pokemonData';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  pokemon:PokemonData = {
    id:0,
    name:'',
    sprites:{
      front_default: ''
    },
    types:[]
  }

  id:number = 0
  name:string = '';
  attributesTypes:string[] = []
  picture:string = ''


  constructor(private service:PokemonService) {}

  ngOnInit(): void {
    this.service.getPokemon("pikachu").subscribe(
    {
      next: (res) => {
        this.pokemon = {
          id: res.id,
          name: res.name,
          sprites: res.sprites,
          types: res.types,
        }
        console.log(this.pokemon)
      },
      error: (err) => console.log(err)
    })
  }

}
