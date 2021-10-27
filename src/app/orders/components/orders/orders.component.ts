import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/shoppingCart/services/shopping-cart.service';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
 


  constructor() {
    
   }

  ngOnInit(): void {
    

  }

  

  // async onPay()
  // {
  //   //Create the order
  //   let order={
  //     dateCreated:new Date().getTime(),
  //     userId:this.user.id,
  //     items:this.booksOrder,
  //     total:this.getTotal(),
  //     paid:true
  //   }

}
