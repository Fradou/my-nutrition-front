import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PantryRoutingModule } from './pantry-routing.module';
import { PantryComponent } from './pantry.component';

@NgModule({
  imports: [
    CommonModule,
    PantryRoutingModule
  ],
  declarations: [PantryComponent]
})
export class PantryModule { }
