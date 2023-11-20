import { Character } from './../interfaces/character.interface';
import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
})
export class mainpagecomponent   {
  
  constructor (private dbzService: DbzService){}
    
    get characters(): Character[]{
      return [...this.dbzService.characters];
    }

    onDeleteCharacter(id:string):void{
      this.dbzService.deletecharacterbyid(id);

    }

    onNewCharacter(Character: Character):void{
      this.dbzService.AddCharacter(Character);
    }
  
  }




// segunda opcion

// import { Component } from '@angular/core';
// import { Character } from '../interfaces/character.interface';

// @Component({
//     selector: 'app-dbz-main-page',
//     templateUrl: './main-page.component.html'
// })

// export class mainpagecomponent  {


//     public characters: Character[] = [{
//     name: 'krillin',
//     power: 1000
//     },{
//         name: 'goku',
//         power: 5000
//     },{
//        name: 'vegeta',
//        power: 3500
//     }];

//     onNewCharacter(character: Character):void{
//     this.characters.push(character);
        
//     }

// onDeletecharacter(index:number){
//     // this.characters.slice(index, 1 );

//     for(let i in this.characters) {
//         if(index.toString() == i) {
//             console.log(this.characters[i]);
//             this.characters = this.characters.filter(e => {
//                 return e.name != this.characters[i].name && e.power != this.characters[i].power
//             });

//             console.log(this.characters);
//         }
//     }
// }

// }


// // link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice