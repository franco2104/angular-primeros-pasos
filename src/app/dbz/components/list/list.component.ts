import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {


@Input()
public characterlist: Character[] = [{
  name: 'trunk',
  power: 100
}]

@Output()
public onDelete: EventEmitter<string> = new EventEmitter();

onDeletecharacter(id?: string):void{
  if (!id)return;
  console.log ({id})
  
  this.onDelete.emit(id);
}
}



