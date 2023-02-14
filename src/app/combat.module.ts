import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  imports: [
MatTableModule,
FormsModule
  ],
  exports: [
    MatTableModule,
    FormsModule
  ]
})
export class CombatModule { 


}