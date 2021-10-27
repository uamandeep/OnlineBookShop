import {NgModule} from '@angular/core';
import { MaterialModule } from '../material-ui.module';
import { BooksComponent } from './components/books/books.component';
import { CommonModule } from "@angular/common";
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    declarations: [
    BooksComponent
  ],
    imports: [
      MaterialModule,
      CommonModule,
      FlexLayoutModule
      
    ],
    providers: [],
    bootstrap: []
})
export class AppModuleBooks { }