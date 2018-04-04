import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PantryRoutingModule } from './pantry-routing.module';
import { PantryComponent } from './pantry.component';
import { ItemEditComponent } from './item-edit/item-edit.component';

@NgModule({
  imports: [
    CommonModule,
    PantryRoutingModule
  ],
  declarations: [PantryComponent, ItemEditComponent]
})
export class PantryModule { }
