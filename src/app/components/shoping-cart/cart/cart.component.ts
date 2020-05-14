import { Component, OnInit } from '@angular/core';
import {DatatransferService} from '../../../services/datatransfer.service';
import { Product } from 'src/app/models/product';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItem=[

    
  ];

  

  cartTotal=0;
  constructor(private msg:DatatransferService){}
  ngOnInit(){

    this.msg.getMsg().subscribe((product: Product) => {
      this.addProductToCart(product)
    })
  }

  addProductToCart(product: Product) {

    let productExists = false

    for (let i in this.cartItem) {
      if (this.cartItem[i].Fid === product.Fid) {
        this.cartItem[i].qty++
        productExists = true
        break;
      }
    }

    if (!productExists) {
      this.cartItem.push({
        Fid: product.Fid,
        Fname: product.Fname,
        qty: 1,
        Fprice: product.Fprice,
        Fimage:product.Fimage
      })
    }
    
    this.cartTotal = 0
    this.cartItem.forEach(item => {
      this.cartTotal += (item.qty * item.Fprice)

    })

    
  }


}
