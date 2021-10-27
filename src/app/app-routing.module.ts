import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminBooksComponent } from './admin/components/admin-books/admin-books.component';
import { LoginComponent } from './authen/components/login/login.component';
import { RegisterComponent } from './authen/components/register/register.component';
import { SigninComponent } from './authen/components/signin/signin.component';
import { LoginService } from './authen/services/login.service';
import { BooksComponent } from './books/components/books/books.component';
import { AboutComponent } from './commun/components/about/about.component';
import { HomeComponent } from './commun/components/home/home.component';
import { OrdersComponent } from './orders/components/orders/orders.component';
import { ShoppingCartComponent } from './shoppingCart/components/shopping-cart/shopping-cart.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path:'books',
    component: BooksComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'orders',
    component: OrdersComponent,
    canActivate:[LoginService]
  },
  {
    path: 'admin-books',
    component: AdminBooksComponent,
    canActivate:[LoginService]

  },
  {
    path: 'shopping-cart',
    component: ShoppingCartComponent
  },
  {
    path: '', pathMatch: 'full', redirectTo: 'signin'
  },
  { path: 'signin', component: SigninComponent },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
