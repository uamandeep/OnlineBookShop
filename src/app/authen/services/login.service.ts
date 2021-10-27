import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import { CanActivate, Router } from '@angular/router';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { UserService } from 'src/app/users/services/user.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService implements CanActivate{
  // getCurrentUserDb: any;

  constructor(private login:AngularFireAuth, private router:Router, private serviceUser:UserService) {
    this.login.authState
                        .subscribe(user=>{
                          this.serviceUser.saveUser(user);
                        } ,error=>{
                          console.log(error)
                       }
                       );
                      }

   loginWithGoogle()
  {
    return this.login.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

   logoutWithGoogle(){
     return this.login.signOut();
   }

   getCurrentUser(){
     return this.login.authState;
   }

   canActivate():Observable<boolean>{
     return this.login.authState
                      .pipe(
                        map(user=>{
                              if(user) return true
                              else{
                                  this.router.navigate(['/login']);
                                return false;
                              }
                             
                        })
                      )
   }

   getCurrentUserDb()
   {
     return this.login.authState
                      .pipe(
                       switchMap(user=>{
                         try
                         {
                          return   this.serviceUser.getUserByuid(user.uid)
                         }
                         catch(error)
                         {
                           console.log(error);
                           
                         }
                       }),
                       map(user=>{
                         return user;
                       })
                      )
   }

}

