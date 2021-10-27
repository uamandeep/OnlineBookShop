import {NgModule} from '@angular/core';
import { AdminBooksComponent } from './components/admin-books/admin-books.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material-ui.module';



@NgModule({
    declarations: [
    AdminBooksComponent,
 
  ],
    imports: [
      MaterialModule,
    CommonModule

    ],
    exports: [AdminBooksComponent],
    providers: [],
    bootstrap: []
})
export class AppModuleAdmin { }