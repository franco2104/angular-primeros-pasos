import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'DBZ Main page';
  counter: number = 10;

  increaseby(value: number):void {
    this.counter += value;  
  };

  reinicia() {
    this.counter = 10;
  }

}
