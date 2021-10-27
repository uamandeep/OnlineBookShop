import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import {AngularFireDatabaseModule} from '@angular/fire/database';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material-ui.module';
import { AppModuleAdmin } from './admin/app.module';
import { AppModuleAuth } from './authen/app.module';
import { AppModuleBooks } from './books/app.module';
import { AppModuleCommun } from './commun/app.module';
import { AppModuleMenu } from './menu/app.module';
import { AppModuleUsers } from './users/app.module';
import { MatTableModule } from '@angular/material/table';
import { AppModuleShoppingCart } from './shoppingCart/app.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    
    BrowserModule,
    FormsModule, ReactiveFormsModule,
    FlexLayoutModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppModuleAdmin,
    AppModuleAuth,
    AppModuleBooks,
    AppModuleCommun,
    AppModuleMenu,
    AppModuleUsers,
    MatTableModule,
    AppModuleShoppingCart
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



