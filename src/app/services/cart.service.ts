import { Injectable } from '@angular/core';
import { CartItem } from '../models/cartItem';
import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product} from '../models/product';
import {map} from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class CartService {

  // private Carturl:string="../../assets/Data/Cart_Item.json";
     private Carturl:string='http://localhost:3000/CartItems';
  constructor(private http: HttpClient) { }

  getCartItem():Observable<CartItem[]>{
    
    return this.http.get<CartItem[]>(this.Carturl).pipe(

      map((items:any[])=>{
       let cartItem:CartItem[]=[];

       for(let item of items)
       {  

        let productExists = false

       for (let i in cartItem) {
         if (cartItem[i].Fid === item.product.Fid) {
           cartItem[i].qty++
           productExists = true
           break;
         }
       }
   
       if (!productExists) {
        cartItem.push(new CartItem(item.id,item.product));
       }


       }
       
       return cartItem;
       
      })
    );

  }

  AddToCart(product:Product):Observable<any>{
    return this.http.post(this.Carturl,{product});
  }
}
