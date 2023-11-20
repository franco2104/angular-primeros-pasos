import { NgModule } from '@angular/core';
import { countercomponent } from './components/counter/counter.component';





@NgModule({
declarations: [
    countercomponent
],
exports: [
    countercomponent
]
})
export class countermodule {}