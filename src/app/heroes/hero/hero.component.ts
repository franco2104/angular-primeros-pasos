import { Component } from '@angular/core';
import { elementAt } from 'rxjs';



@Component({
  // app-heroes-list
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

public name: string = 'ironman';
public age: number = 45;

get capitalizaedname():string{
  return this.name.toUpperCase();
}

getherodescription():string{
return `${this.name} - ${this.age}`;
}

changehero():void {
  this.name = 'spiderman'
}

changeage():void {
  this.age = 25;
}

resetform():void {
this.name = 'ironman';
this.age = 45;

// document.querySelectorAll('h1')!.forEach(element => {
//   element.innerHTML = '<h1>desde angular</h1>';
// });
}


}
