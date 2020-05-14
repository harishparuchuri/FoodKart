import { Component, OnInit } from '@angular/core';
import {DatatransferService} from '../../../services/datatransfer.service';
import { Product } from 'src/app/models/product';
import {CartService} from '../../../services/cart.service';
import {CartItem} from 'src/app/models/cartItem';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItem=[

     //{"Fid":1,"Fname": "Andra Dosa","Fprice":50, "Fimage":"Andra Dosa.JPG","qty":10},
    //  {"Fid":2,"Fname": "Fish Fry","Fprice":150,"Fimage":"Andra's Chepala iguru.jpg","qty":1},
    //  {"Fid":3,"Fname": "Bommidayila Pulusu","Fprice":250,"Fimage":"Bommidayila Pulusu.jpg","qty":1},
    //  {"Fid":4,"Fname": "Chicken salna","Fprice":290,"Fimage":"Chicken_salna.jpg","qty":1},
    //  {"Fid":5,"Fname": "coorg pong","Fprice":300,"Fimage":"coorg-pand_1.jpg","qty":1}
    
  ];

  

  cartTotal=0;
  constructor(private msg:DatatransferService,private CartService:CartService) { }

  ngOnInit() {
    this.handleSubscription();
    this.LoadCartItem();
    this.calCartTotal();
  }

  handleSubscription()
  {
    this.msg.getMsg().subscribe((product: Product) => {
      this.LoadCartItem()
      
    })
  }

  LoadCartItem()
  {

this.CartService.getCartItem().subscribe((items:CartItem[])=>{

  this.cartItem=items;
  this.calCartTotal();

})

  }

  
  calCartTotal(){

    this.cartTotal = 0
    this.cartItem.forEach(item => {
      this.cartTotal += (item.qty * item.Fprice)

    })
  }

}
