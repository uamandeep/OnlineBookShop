import { Component, OnDestroy, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/commun/services/category.service';
import {Subscriber, Subscription, from} from 'rxjs';
import { BookService } from '../../services/book.service';
import {mergeMap, map} from 'rxjs/operators';
import { ShoppingCartService } from 'src/app/shoppingCart/services/shopping-cart.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  categories: any[] ; 
  books: any[];
  booksShoppingCart:any[];
  sub:Subscription;


  constructor(private serviceCategory: CategoryService, private serviceBooks:BookService, private serviceShoppingCart: ShoppingCartService ) { }
  

  ngOnInit(): void {
    this.sub=this.serviceCategory.getAllCategories( )
                        .pipe(
                          mergeMap(categories=>this.serviceBooks.getAllBooks().pipe(
                            mergeMap(books=> this.serviceShoppingCart.getListItemsShoppingCart().pipe(
                            map(booksShopping=>[categories, books, booksShopping])

                            ))
                          ))).subscribe(([categories,books,booksShopping])=>{
                            this.categories=categories;
                            this.books=books;
                            this.booksShoppingCart=booksShopping;
                            console.log(books);
                            console.log(categories);
                      
                          }
                        
                        
                          )}
getBooksByCategory(key: any)
{
  return this.books.filter(book=>book.category==key);
}

AddToCart(book){
  console.log(book);
  this.serviceShoppingCart.AddToCart(book);
  
}

existBookInShoppingCart(key){
  return this.booksShoppingCart.find((book:any)=>book.key==key)
}

DeleteToCart(book){
  this.serviceShoppingCart.deleteBookShoppingCart(book.key);
}

// ScrollReveal().reveal('.cardList');
// ngOnDestroy(): void {
//   throw new Error('Method not implemented.');
// }

                          

}

