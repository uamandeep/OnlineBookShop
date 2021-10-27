import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
// import { BooksComponent } from '../books/components/books/books.component';
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
    HomeComponent,
    AboutComponent,
    // BooksComponent
  ],
    imports: [BrowserModule, CommonModule /* or CommonModule */],

    
    providers: [],
    bootstrap: []
})
export class AppModuleCommun { }