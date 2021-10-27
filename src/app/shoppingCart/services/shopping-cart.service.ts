import { Injectable } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import { take } from 'rxjs/operators';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private db:AngularFireDatabase) { 
    const bookAdd='';
    const idCart = '';
  }

  async AddToCart(book){
    let cartId=localStorage.getItem('cartId');
    if(!cartId)
    {
      let cart= await this.db.list('/shoppingCart').push({
        dateCreated:new Date().getTime()
      });
      localStorage.setItem('cartId', cart.key)
      this.AddBookCart(cart.key, book)

    }
    else
    {
      this.AddBookCart(localStorage.getItem('cartId'), book);


    }
  }
  AddBookCart(idCart, bookAdd){
    this.db.object('/shoppingCart/'+idCart+'/items/'+bookAdd.key)
              .snapshotChanges()
              .pipe(
                take(1)
              ).subscribe(
                bookCart=>{
                  console.log(bookCart);
                  if(!bookCart.key){
                    this.db.list('/shoppingCart/'+idCart+'/items/').set(bookAdd.key,{book:bookAdd})
                  }
                }
              )
              
  }

  getListItemsShoppingCart()
  {
    let cartId=localStorage.getItem('cartId');
   return this.db.list('/shoppingCart/'+cartId+'/items/')
            .snapshotChanges()
            .pipe(

              map(books =>
                      books.map(c => (
                           { 
                            
                             key: c.payload.key, ...c.payload.val() as {}
                           }
                           ))
            ))

   
  }
  deleteBookShoppingCart(id:string){
    let cartId=localStorage.getItem('cartId');
    return this.db.object('/shoppingCart/'+cartId+'/items/'+id).remove();
  }

  getListItemsShoppingCartMapBooks()
  {
    let cartId=localStorage.getItem('cartId');
   return this.db.list('/shoppingCart/'+cartId+'/items/')
            .snapshotChanges()
            .pipe(

              map(books =>
                      books.map(c => (
                           { 
                            
                             key: c.payload.key, ...(c.payload.val() as any).book
                           }
                           ))
            ))

   
  }

}
