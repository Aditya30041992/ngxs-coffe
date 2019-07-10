import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CupComponent } from './components/cup/cup.component';


@NgModule({
  declarations: [CupComponent],
  imports: [
    CommonModule
  ],
  exports:[
    CupComponent
  ]
})
export class SharedModule { }
