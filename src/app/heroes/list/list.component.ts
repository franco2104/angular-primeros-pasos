import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

public heronames: string[] = ['spiderman','ironman','hulk', 'she hulk', 'thor'];
public deletedhero?: string;

removelasthero():void {
 this.deletedhero = this.heronames.pop();
}
 removeprimhero():void {
  this.deletedhero = this.heronames.shift();
 }
 
}


