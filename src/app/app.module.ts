import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';


import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { PantryComponent } from './pantry/pantry.component';
import { HomeComponent } from './home/home.component';
import { PantryModule } from './pantry/pantry.module';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pantry', component: PantryComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    PantryModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
