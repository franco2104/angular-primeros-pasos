import { AddCharacterComponent } from './../add-character/add-character.component';

import { Injectable } from '@angular/core';
import {v4 as uuid} from 'uuid';


import { Character } from '../interfaces/character.interface';


@Injectable
({providedIn: 'root'
})
export class DbzService {
    
    public characters: Character[] = [
        {
          id:uuid(),
          name: 'Krillin',
          power: 1000,
        },
        {
          id:uuid(),
          name: 'Goku',
          power: 5000,
        },
        {
          id:uuid(),
          name: 'Vegeta',
          power: 3500,
        },
      ];
    
      AddCharacter(character: Character): void {
        const newCharacter: Character = {id: uuid(), ...character};
        this.characters.push(newCharacter);
      }
    
      // onDeletecharacter(index: number): void {
      //   this.characters.splice(index, 1);
      // }
    
      deletecharacterbyid (id: string){
        this.characters = this.characters.filter(character => character.id !== id);
      }
}       