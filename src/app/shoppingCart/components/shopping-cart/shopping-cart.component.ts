import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShoppingCartService } from '../../services/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  booksShopping: any[];
  displayedColumns: string[] = ['title', 'description','urlImage','price','actions'];
  


  constructor(private shoppingCart:ShoppingCartService, private router: Router) { }

  ngOnInit(): void {
    this.shoppingCart.getListItemsShoppingCartMapBooks()
                    .subscribe(books=>this.booksShopping=books);
  }

  getTotal(){
    let total: number=0;
    if(!this.booksShopping) return total;
    this.booksShopping.forEach(book=>{
      // console.log(book)
      total=total + book.price
    })
    return total;
  };
  Delete(row: { key: string; })
  {
    this.shoppingCart.deleteBookShoppingCart(row.key);
  }

  onNext(){
    this.router.navigate(['/orders']);
  }

}
