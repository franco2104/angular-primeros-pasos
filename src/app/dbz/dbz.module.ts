import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { mainpagecomponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddCharacterComponent } from './add-character/add-character.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    mainpagecomponent,
    ListComponent,
    AddCharacterComponent
  ],
  exports: [
    mainpagecomponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
