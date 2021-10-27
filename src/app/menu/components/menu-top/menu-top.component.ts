import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { map, switchMap } from 'rxjs/operators';
import { LoginService } from 'src/app/authen/services/login.service';
import { ShoppingCartService } from 'src/app/shoppingCart/services/shopping-cart.service';
import { mergeMap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-top',
  templateUrl: './menu-top.component.html',
  styleUrls: ['./menu-top.component.css']
})
export class MenuTopComponent implements OnInit {

  user:any 
  nbrShoppingBook:number=0;
  

  constructor(private login: LoginService, private shoppingCart: ShoppingCartService, private router: Router) { }

  ngOnInit(): void {
    this.login.getCurrentUser()
              .pipe(
                switchMap(user=>{
                  console.log(user);
                  if(!user) return 'e';
                    return this.login.getCurrentUserDb();
                }),
                mergeMap(userDb=>this.shoppingCart.getListItemsShoppingCart().pipe(

                  map(booksShopping=>{
                    return [userDb, booksShopping]
                  })
                ))
              )
                .subscribe(([userDb,booksShopping])=>{
                  this.nbrShoppingBook=(booksShopping as any[]).length;

                  if(userDb!='e')
                  { 
                  this.user=userDb
                  }
                  else
                  this.user=null;
                  
                },error=> console.log)
              
              // .subscribe((userDb, books)user=>this.user=user
              //   if(user!='e'){
              //     this.user=user
              //   } 
              //   else
              //   this.user=null
   
  }
  logout(){
    this.login.logoutWithGoogle();
  }

  recapShopping(){
    if(this.nbrShoppingBook<=0) return;
    this.router.navigate(['/shopping-cart'])
  }
  

  

}
