import {NgModule} from '@angular/core';
import { MaterialModule } from '../material-ui.module';
import { LoginComponent } from './components/login/login.component';
import { SigninComponent } from './components/signin/signin.component';
import { RegisterComponent } from './components/register/register.component';
import {RouterModule} from '@angular/router';


@NgModule({
    declarations: [
    LoginComponent,
    SigninComponent,
    RegisterComponent
  ],
    imports: [
      MaterialModule,
      RouterModule
    ],
    providers: [],
    bootstrap: []
})
export class AppModuleAuth { }