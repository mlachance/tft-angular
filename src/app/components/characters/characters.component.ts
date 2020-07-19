import {Component, OnInit} from '@angular/core';
import {Character} from "../../classes/character";

import {CharacterService} from "../../services/character.service";

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  characters: Character[];

  constructor(
    private characterService: CharacterService
  ) {
  }

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters(): void {
    this.characterService.getCharacters()
      .subscribe(response => this.characters = response.data);
  }

}
